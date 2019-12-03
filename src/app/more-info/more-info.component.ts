import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-more-info',
  templateUrl: './more-info.component.html',
  styleUrls: ['./more-info.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class MoreInfoComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
