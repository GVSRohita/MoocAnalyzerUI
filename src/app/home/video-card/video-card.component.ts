import {Component, OnInit, ChangeDetectionStrategy, ViewChild, ElementRef} from '@angular/core';
import { HttpClient } from '@angular/common/http';
// import {AngularFireAuth} from 'angularfire2/auth';

// RxJS v6+
import { interval, timer } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import {AngularFireAuth} from '@angular/fire/auth';
@Component({
  selector: 'app-video-card',
  templateUrl: './video-card.component.html',
  styleUrls: ['./video-card.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class VideoCardComponent implements OnInit {

  ytplayer: any;

  @ViewChild('video', {static: true})
  public video: ElementRef;

  @ViewChild('canvas', {static: true})
  public canvas: ElementRef;

  public constructor(private httpClient: HttpClient, private firebaseauth: AngularFireAuth) {
  }

  ngOnInit() {
  }

  //Youtube player
  player: YT.Player;
  public id: string = 'iF8dRePlPUo';
  public time_interval: number;
  public total_duration: number;

  savePlayer(player) {
    this.player = player;
    console.log('player instance', player);
    console.log('auth', this.firebaseauth.auth.currentUser.uid);
  }
  onStateChange(event) {
    console.log('player state', event.data);
    console.log('event', event);
    if (event.data === 1) {
      //after 5 seconds, emit value
      console.log(this.player.getDuration());
      //emit value every 1s
      const source = interval((Math.floor(this.player.getDuration()) / 10 ) * 1000);
//after 5 seconds, emit value
      const timer$ = timer(Math.floor(this.player.getDuration()) * 1000);
//when timer emits after 5s, complete source
      const example = source.pipe(takeUntil(timer$));
//output: 0,1,2,3
      const subscribe = example.subscribe(val => this.capture(Math.floor((val + 1) * Math.floor(this.player.getDuration()) / 10 )));
    }
  }

  public ngAfterViewInit() {
    if (navigator.mediaDevices && navigator.mediaDevices.getUserMedia) {
      navigator.mediaDevices.getUserMedia({video: true}).then(stream => {
        // this.video.nativeElement.src = window.URL.createObjectURL(stream);
        this.video.nativeElement.srcObject = stream;
        this.video.nativeElement.play();
      });
    }
  }

  public capture(time) {
    var context = this.canvas.nativeElement.getContext("2d").drawImage(this.video.nativeElement, 0, 0, 640, 480);
    var base64image = this.canvas.nativeElement.toDataURL();
    // console.log(base64image);
    var data = {
      image: base64image,
    };
    // this.happiness;
    // var image = "{"image": "+ base64image + "}";

    this.httpClient.post('https://mooc-analyzer-services.herokuapp.com/videos/' + this.id + '/users/' + this.firebaseauth.auth.currentUser.uid + '/emotions?time=' + time, data).toPromise().then(data => {
      console.log(data);
      // this.happiness = data[0].faceAttributes.emotion.happiness;

      console.log(data[0].faceAttributes.emotion);
      // console.log(data[0].faceAttributes.emotion.anger);
      // console.log();
      // this.charts(data);
      console.log(this.player.getDuration());
      console.log(this.player.getCurrentTime());
      console.log(this.firebaseauth.auth.currentUser.uid);
      console.log(this.player.getVideoUrl());
      console.log(this.id);
    });
  }

}
