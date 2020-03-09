import { Component, OnInit } from '@angular/core';
import { FCM } from '@ionic-native/fcm/ngx';
@Component({
  selector: 'app-libro',
  templateUrl: './libro.page.html',
  styleUrls: ['./libro.page.scss'],
})
export class LibroPage implements OnInit {

  constructor( private fcm: FCM,) {
    this.fcm.getToken().then(token => {
    console.log(token);
    });
   }

  ngOnInit() {
  }

}
