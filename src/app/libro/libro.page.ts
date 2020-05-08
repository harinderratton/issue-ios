import { Component, OnInit } from '@angular/core';
import { FCM } from '@ionic-native/fcm/ngx';
import { InAppBrowser ,InAppBrowserOptions} from '@ionic-native/in-app-browser/ngx';
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
    const iosoption: InAppBrowserOptions = {
      zoom: 'no',
      location:'yes',
      toolbar:'yes',
      clearcache: 'yes',
      clearsessioncache: 'yes',
      disallowoverscroll: 'yes',
      enableViewportScale: 'yes'
    }

    const browser = this.iab.create('https://www.monicajaquez.com/es/libros','_blank', iosoption);
  }



}
