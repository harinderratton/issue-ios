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
      icon: 'person'
    },
    {
      title: 'Libro - INSIDE APP',
      url: '/',
      icon: 'paper-plane'
    },
    {
      title: 'Fragmentos',
      url: '/',
      icon: 'play'
    },
    {
      title: 'Palabras de vida',
      url: '/',
      icon: 'play'
    },
    {
      title: 'Eventos INSIDE APP',
      url: '/',
      icon: 'calendar'
    },
    {
      title: 'Biografía INSIDE APP',
      url: '/',
      icon: 'calendar'
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
      url: '/',
      icon: 'chatbox'
    },
    {
      title: 'Contáctenos INSIDE APP',
      url: '/',
      icon: 'location'
    },
    {
      title: 'Facebook',
      url: '/',
      icon: 'heart'
    },
    {
      title: 'Instagram',
      url: '/',
      icon: 'heart'
    },
    {
      title: 'Twitter',
      url: '/',
      icon: 'heart'
    },
    {
      title: 'Youtube',
      url: '/',
      icon: 'heart'
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
