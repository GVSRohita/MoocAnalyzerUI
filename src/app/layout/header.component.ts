import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {AngularFireAuth} from '@angular/fire/auth';

@Component({
  selector: 'app-header',
  styleUrls: ['./header.component.scss'],
  templateUrl: './header.component.html',
})
export class HeaderComponent {
  isloggedIn: boolean;

  constructor(public router: Router, private firebaseauth: AngularFireAuth) { }
  logout() {
    this.firebaseauth.auth.signOut();
    this.router.navigate(['/Login']);
  }
  ngOnInit() {
  }

}
