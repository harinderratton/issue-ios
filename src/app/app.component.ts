import { Component, OnInit } from '@angular/core';

import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent implements OnInit {
  public selectedIndex = 0;
  public appPages = [
    {
      title: 'Ministerio Jesucristo Vive',
      url: '/',
      icon: 'person-sharp'
    },
    {
      title: 'Libro - INSIDE APP',
      url: '/libro',
      icon: 'book'
    },
    {
      title: 'Fragmentos',
      url: '/fragmentos',
      icon: 'play-circle-outline'
    },
    {
      title: 'Palabras de vida',
      url: '/',
      icon: 'play-circle-outline'
    },
    {
      title: 'Eventos INSIDE APP',
      url: '/event',
      icon: 'calendar'
    },
    {
      title: 'Biografía INSIDE APP',
      url: '/bio',
      icon: 'leaf'
    },
    {
      title: 'Fundación',
      url: '/',
      icon: 'heart'
    },
    {
      title: 'Acerca de Nosotros',
      url: '/',
      icon: 'leaf'
    },
    {
      title: 'Chat',
      url: '/chat',
      icon: 'chatbox-ellipses-sharp'
    },
    {
      title: 'Contáctenos INSIDE APP',
      url: '/contact',
      icon: 'location-sharp'
    },
    {
      title: 'Facebook',
      url: '/',
      icon: 'logo-facebook'
    },
    {
      title: 'Instagram',
      url: '/',
      icon: 'logo-instagram'
    },
    {
      title: 'Twitter',
      url: '/',
      icon: 'logo-twitter'
    },
    {
      title: 'Youtube',
      url: '/',
      icon: 'logo-youtube'
    },
    {
      title: 'Donaciones',
      url: '/',
      icon: 'heart'
    },
  ];
  public labels = ['Family', 'Friends', 'Notes', 'Work', 'Travel', 'Reminders'];

  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar
  ) {
    this.initializeApp();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

  ngOnInit() {
    
  }
}
