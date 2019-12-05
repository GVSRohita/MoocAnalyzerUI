import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {AngularFireAuth} from '@angular/fire/auth';

@Component({
  selector: 'app-graph-card',
  templateUrl: './graph-card.component.html',
  styleUrls: ['./graph-card.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class GraphCardComponent implements OnInit {
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
  public capture() {
    this.httpClient.get('http://localhost:3001/videos/iF8dRePlPUo' + '/users/' + this.firebaseauth.auth.currentUser.uid + '/emotions').toPromise().then(data => {
    this.result = data;
    this.charts(data);
    });
  }
  ngOnInit() {
    this.isLoading = true;
    this.capture();
  }
  charts(data) {
    this.x_axis_keys = Object.keys(data);
    this.y_axis_values = Object.values(data);
    this.isLoading = true;
    this.options = {tooltip: {
        trigger: 'axis',
        axisPointer: {
          type: 'cross',
          label: {
            backgroundColor: '#6a7985'
          }
        }
      },
      legend: {
        data: ['Anger', 'Contempt', 'Disgust', 'Fear', 'Happiness', 'Neutral', 'Sadness', 'Surprise']
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
          boundaryGap: false,
          data: [this.x_axis_keys[0], this.x_axis_keys[1], this.x_axis_keys[2], this.x_axis_keys[3], this.x_axis_keys[4],
            this.x_axis_keys[5], this.x_axis_keys[6], this.x_axis_keys[7], this.x_axis_keys[8]]
        }
      ],
      yAxis: [
        {
          type: 'value',
          boundaryGap: false,
          data: [0, 0.2, 0.4, 0.6, 0.8, 1]
        }
      ],
      series: [
        {
          name: 'Anger',
          type: 'line',
          stack: 'counts',
          areaStyle: { normal: {} },
          data: [this.y_axis_values[0]['anger'], this.y_axis_values[1]['anger'], this.y_axis_values[2]['anger'], this.y_axis_values[3]['anger'], this.y_axis_values[4]['anger'],
            this.y_axis_values[5]['anger'], this.y_axis_values[6]['anger'], this.y_axis_values[7]['anger'], this.y_axis_values[8]['anger']]
        },
        {
          name: 'Contempt',
          type: 'line',
          stack: 'counts',
          areaStyle: { normal: {} },
          data: [this.y_axis_values[0]['contempt'], this.y_axis_values[1]['contempt'], this.y_axis_values[2]['contempt'], this.y_axis_values[3]['contempt'], this.y_axis_values[4]['contempt'],
            this.y_axis_values[5]['contempt'], this.y_axis_values[6]['contempt'], this.y_axis_values[7]['contempt'], this.y_axis_values[8]['contempt']]
        },
        {
          name: 'Disgust',
          type: 'line',
          stack: 'counts',
          areaStyle: { normal: {} },
          data: [
            this.y_axis_values[0]['disgust'], this.y_axis_values[1]['disgust'], this.y_axis_values[2]['disgust'], this.y_axis_values[3]['disgust'], this.y_axis_values[4]['disgust'],
            this.y_axis_values[5]['disgust'], this.y_axis_values[6]['disgust'], this.y_axis_values[7]['disgust'], this.y_axis_values[8]['disgust']
          ]
        },
        {
          name: 'Fear',
          type: 'line',
          stack: 'counts',
          areaStyle: { normal: {} },
          data: [this.y_axis_values[0]['fear'], this.y_axis_values[1]['fear'], this.y_axis_values[2]['fear'], this.y_axis_values[3]['fear'], this.y_axis_values[4]['fear'],
            this.y_axis_values[5]['fear'], this.y_axis_values[6]['fear'], this.y_axis_values[7]['fear'], this.y_axis_values[8]['fear']]
        },
        {
          name: 'Happiness',
          type: 'line',
          stack: 'counts',
          areaStyle: { normal: {} },
          data: [this.y_axis_values[0]['happiness'], this.y_axis_values[1]['happiness'], this.y_axis_values[2]['happiness'], this.y_axis_values[3]['happiness'], this.y_axis_values[4]['happiness'],
            this.y_axis_values[5]['happiness'], this.y_axis_values[6]['happiness'], this.y_axis_values[7]['happiness'], this.y_axis_values[8]['happiness']]
        },
        {
          name: 'Neutral',
          type: 'line',
          stack: 'counts',
          areaStyle: { normal: {} },
          data: [this.y_axis_values[0]['neutral'], this.y_axis_values[1]['neutral'], this.y_axis_values[2]['neutral'], this.y_axis_values[3]['neutral'], this.y_axis_values[4]['neutral'],
            this.y_axis_values[5]['neutral'], this.y_axis_values[6]['neutral'], this.y_axis_values[7]['neutral'], this.y_axis_values[8]['neutral']]
        },
        {
          name: 'Sadness',
          type: 'line',
          stack: 'counts',
          areaStyle: { normal: {} },
          data: [this.y_axis_values[0]['sadness'], this.y_axis_values[1]['sadness'], this.y_axis_values[2]['sadness'], this.y_axis_values[3]['sadness'], this.y_axis_values[4]['sadness'],
            this.y_axis_values[5]['sadness'], this.y_axis_values[6]['sadness'], this.y_axis_values[7]['sadness'], this.y_axis_values[8]['sadness']]
        },
        {
          name: 'Surprise',
          type: 'line',
          stack: 'counts',
          areaStyle: { normal: {} },
          data: [this.y_axis_values[0]['surprise'], this.y_axis_values[1]['surprise'], this.y_axis_values[2]['surprise'], this.y_axis_values[3]['surprise'], this.y_axis_values[4]['surprise'],
            this.y_axis_values[5]['surprise'], this.y_axis_values[6]['surprise'], this.y_axis_values[7]['surprise'], this.y_axis_values[8]['surprise']]
        }
      ]};

  }
}
