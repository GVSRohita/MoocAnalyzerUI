import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { ElementRef, ViewChild} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Router } from '@angular/router';
import {User} from '../../../Models/user';
import {AngularFireAuth} from 'angularfire2/auth';
@Component({
  selector: 'app-sign-up-form3',
  templateUrl: './sign-up-form3.component.html',
  styleUrls: ['./sign-up-form3.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SignUpForm3Component {

  @ViewChild('foodItem', {static: false}) foodItem: ElementRef;
  user = {} as User;
  constructor(private _http: HttpClient, private router: Router, private firebaseauth: AngularFireAuth) {
  }
  login(user: User) {
    try {
      this.firebaseauth.auth.signInWithEmailAndPassword(user.email, user.password).then(() => {
        console.log(this.firebaseauth.auth.currentUser.uid);
        this.router.navigate(['/Home']);

        // this.navCtrl.push(HomePage);
      }).catch(() => {
        alert('Try again. Invalid Credentials');
      });
    }
    catch(e) {
      console.error(e);
    }
  }

  register(user: User) {
    this.router.navigate(['/register']);

  }

}
