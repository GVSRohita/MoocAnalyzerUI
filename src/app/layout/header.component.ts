import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-header',
  styleUrls: ['./header.component.scss'],
  templateUrl: './header.component.html',
})
export class HeaderComponent {
  isloggedIn: boolean;

  constructor(public router: Router) { }
  logout() {
    this.isloggedIn = true;
  }
  ngOnInit() {
  }

}
