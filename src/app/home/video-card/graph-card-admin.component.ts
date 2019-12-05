import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {AngularFireAuth} from '@angular/fire/auth';

@Component({
  selector: 'app-graph-card-admin',
  templateUrl: './graph-card-admin.component.html',
  styleUrls: ['./graph-card.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class GraphCardAdminComponent implements OnInit {
  result: any;
  public constructor(private httpClient: HttpClient, private firebaseauth: AngularFireAuth) {
    this.isLoading = true;
    this.x_axis_keys = [];
    this.options = {};
    this.capture();
  }
  isLoading = true;
  x_axis_keys = [];
  y_axis_values = [];
  options = {};
  initOptions = {};
  public capture() {
    this.httpClient.get('https://mooc-analyzer-services.herokuapp.com/videos/iF8dRePlPUo' + '/users' + '/emotions').toPromise().then(data => {
//Contempt', 'Disgust', 'Fear', 'Happiness', 'Neutral', 'Sadness', 'Surprise
      var sum_anger = 0;
      var sum_contempt = 0;
      var sum_disgust = 0;
      var sum_fear = 0;
      var sum_happiness = 0;
      var sum_neutral = 0;
      var sum_sadness = 0;
      var sum_surprise = 0;
      Object.values(data).forEach(function(value) {
        Object.keys(value).forEach(function(emotion) {
          sum_anger += value[emotion]['anger'];
          sum_contempt += value[emotion]['contempt'];
          sum_disgust += value[emotion]['disgust'];
          sum_fear += value[emotion]['fear'];
          sum_happiness += value[emotion]['happiness'];
          sum_neutral += value[emotion]['neutral'];
          sum_sadness += value[emotion]['sadness'];
          sum_surprise += value[emotion]['surprise'];
        });
      });
      console.log(sum_anger, sum_contempt, sum_disgust, sum_fear, sum_happiness, sum_neutral, sum_sadness, sum_surprise);
      this.result = data;
      var values = {};
      values['avg_anger'] = sum_anger / 18;
      values['avg_contempt'] = sum_contempt / 18;
      values['avg_disgust'] = sum_disgust / 18;
      values['avg_fear'] = sum_fear / 18;
      values['avg_happiness'] = sum_happiness / 18;
      values['avg_neutral'] = sum_neutral / 18;
      values['avg_sadness'] = sum_sadness / 18;
      values['avg_surprise'] = sum_surprise / 18;
      console.log(values);
      this.charts(data, values);
    });
  }
  ngOnInit() {
    this.isLoading = true;
    this.capture();
  }
  charts(data, values) {
    this.x_axis_keys = Object.keys(data);
    this.y_axis_values = values;
    this.isLoading = true;
    this.options = {
      color: ['#3398DB'],
      tooltip: {
        trigger: 'axis',
        axisPointer: {
          type: 'shadow'
        }
      },
      grid: {
        left: '3%',
        right: '4%',
        bottom: '3%',
        containLabel: true
      },
      xAxis: [
        {
          type: 'category',
          data: ['Anger', 'Contempt', 'Disgust', 'Fear', 'Happiness', 'Neutral', 'Sadness', 'Surprise'],
          axisTick: {
            alignWithLabel: true
          }
        }
      ],
      yAxis: [{
        type: 'value'
      }],
      series: [{
        name: 'Counters',
        type: 'bar',
        barWidth: '60%',
        data: [values['avg_anger'], values['avg_contempt'] , values['avg_disgust'] , values['avg_fear'] , values['avg_happiness']
          , values['avg_neutral'] , values['avg_sadness'] , values['avg_surprise']]
      }]
    };
    this.initOptions = {
        renderer: 'svg',
        width: 300,
        height: 300
      };

  }
}
