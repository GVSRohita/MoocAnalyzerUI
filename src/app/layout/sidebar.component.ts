import { Component } from '@angular/core';
import { NbMenuItem } from '@nebular/theme';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
})
export class SidebarComponent {

  menuItems: NbMenuItem[] = [
    {
      title: 'Register',
      link: '/Register',
      children: null
    },
    {
      title: 'Login',
      link: '/Login',
      children: null
    },
    {
      title: 'MoreInfo',
      link: '/MoreInfo',
      children: null
    },
    {
      title: 'AboutUs',
      link: '/AboutUs',
      children: null
    },
    {
      title: 'Home',
      link: '/Home',
      children: null
    },
    {
      title: 'AnalysisReport',
      link: '/AnalysisReport',
      children: null
    }
  ];

}
