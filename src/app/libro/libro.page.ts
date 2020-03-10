import { Component, OnInit } from '@angular/core';
import { FCM } from '@ionic-native/fcm/ngx';
import { InAppBrowser } from '@ionic-native/in-app-browser/ngx';
@Component({
  selector: 'app-libro',
  templateUrl: './libro.page.html',
  styleUrls: ['./libro.page.scss'],
})
export class LibroPage implements OnInit {

  constructor( 
    private fcm: FCM,
    private iab: InAppBrowser) {

   }

   ionViewDidEnter(){
    this.fcm.getToken().then(token => {
      console.log(token);
      });
   }

  ngOnInit() {
  }
  libro(){
    const browser = this.iab.create('https://www.monicajaquez.com/es/libros');
  }

}
