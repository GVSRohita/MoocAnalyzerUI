import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { ElementRef, ViewChild} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Router } from '@angular/router';
import {User} from '../../../Models/user';
import {AngularFireAuth} from 'angularfire2/auth';
@Component({
  selector: 'app-sign-up-form2',
  templateUrl: './sign-up-form2.component.html',
  styleUrls: ['./sign-up-form2.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SignUpForm2Component {


  @ViewChild('foodItem', {static: false}) foodItem: ElementRef;
  user = {} as User;
  constructor(private _http: HttpClient, private router: Router, private firebaseauth: AngularFireAuth) {
  }

  register(user: User) {
    var route = this.router;
    try {
      this.firebaseauth.auth.createUserWithEmailAndPassword(user.email, user.password).then(function () {
        route.navigate(['/Login']);
        user.email = '';
        user.password = '';
      }).catch((e) => {
          alert(e);
      });
    } catch (e) {
      console.error(e);
    }
  }

}
