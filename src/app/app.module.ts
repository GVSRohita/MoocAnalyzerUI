import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NbEvaIconsModule } from '@nebular/eva-icons';
import {
  NbThemeModule,
  NbLayoutModule,
  NbSidebarModule,
  NbMenuModule,
  NbIconModule,
  NbButtonModule
} from '@nebular/theme';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { HeaderComponent } from './layout/header.component';
import { SidebarToggleComponent } from './layout/sidebar-toggle.component';
import { SidebarComponent } from './layout/sidebar.component';
import { SharedModule } from './shared/shared.module';
import { LIGHT_THEME } from './theme';
import { AngularFireAuth } from 'angularfire2/auth';
import { AngularFireModule } from '@angular/fire';
import {NgxYoutubePlayerModule} from 'ngx-youtube-player';

const firebaseConfig = {
  apiKey: "AIzaSyBCSIy12DpqoJX1JBZsz08g2QgNV30FoQU",
  authDomain: "my-first-project-ase-lab-5.firebaseapp.com",
  databaseURL: "https://my-first-project-ase-lab-5.firebaseio.com",
  projectId: "my-first-project-ase-lab-5",
  storageBucket: "",
  messagingSenderId: "642327932662",
  appId: "1:642327932662:web:b68d0c87c5be8d539786d7"
};


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SidebarComponent,
    SidebarToggleComponent,
  ],
  imports: [
    NgxYoutubePlayerModule,
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    CommonModule,
    NbThemeModule.forRoot({ name: 'light' }, [LIGHT_THEME]),
    NbLayoutModule,
    NbSidebarModule.forRoot(),
    NbMenuModule.forRoot(),
    NbEvaIconsModule,
    NbIconModule,
    SharedModule,
    AppRoutingModule,
    NbButtonModule,
    AngularFireModule.initializeApp(firebaseConfig)
  ],
  providers: [AngularFireAuth],
  bootstrap: [AppComponent]
})
export class AppModule { }
