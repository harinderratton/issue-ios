import { Component, OnInit } from '@angular/core';
 
import { Stripe } from '@ionic-native/stripe/ngx';
 
import { AlertController } from '@ionic/angular';
import { ApiService } from '../services/api/api.service';
import { NotiService } from '../services/noti/noti.service';
@Component({
  selector: 'app-payment',
  templateUrl: './payment.page.html',
  styleUrls: ['./payment.page.scss'],
})
export class PaymentPage implements OnInit {

  constructor(
  
    private stripe: Stripe,
   
    public alertController: AlertController,
    public apiservice:ApiService,
    public noti:NotiService
    ) { }

  ngOnInit() {
  }




}
