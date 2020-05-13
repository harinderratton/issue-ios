import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NotiService } from '../services/noti/noti.service';
import { Stripe } from '@ionic-native/stripe/ngx';
import { ApiService } from '../services/api/api.service';
// import { ApplePay } from '@ionic-native/apple-pay/ngx';
import { AlertController } from '@ionic/angular';
import { Router } from '@angular/router';
@Component({
  selector: 'app-applepay',
  templateUrl: './applepay.page.html',
  styleUrls: ['./applepay.page.scss'],
})
export class ApplepayPage implements OnInit {
  is_submit:boolean=false;
  public myform: FormGroup;
  constructor(
    public formBuilder: FormBuilder,
    public noti:NotiService,
    private stripe: Stripe,
    public api:ApiService,
    // private applePay: ApplePay,
    public alertController: AlertController,
    public router:Router
    ) 
  {this.makeform(); }

  ngOnInit() {
  }

  makeform(){
    this.myform = this.formBuilder.group({
    
      amount: ['', Validators.compose([Validators.required])],
      fname:  ['', Validators.compose([Validators.required])],
      address: ['', Validators.compose([Validators.required])],
      city: ['', Validators.compose([Validators.required])],
      state: ['', Validators.compose([Validators.required])],
      zcode: ['', Validators.compose([Validators.required])],
      mode: [null, Validators.compose([Validators.required])],
  });
  }

  async payWithApplePay() {
    this.is_submit=true;
    if(this.myform.valid){


    try {
      let order: any = {
        items: [
          {
              label: 'Donaciones',
              amount: this.myform.value.amount
          }
      ],
      shippingMethods: [
          {
              identifier: 'Donaciones',
              label: 'Thanks',
              detail: 'Thanks for your support.',
              amount: this.myform.value.amount
          }
      ],
      supportedNetworks: ['visa', 'masterCard', 'discover'],
      merchantCapabilities: ['3ds', 'debit', 'credit'],          
      merchantIdentifier: 'merchant.com.example',
      currencyCode: 'USD',
      countryCode: 'US',
      billingAddressRequirement: 'none',
      shippingAddressRequirement: 'none',
      shippingType: 'shipping'
      }

      // this.applePay.makePaymentRequest(order).then(message => {
      //   console.log(message);
      //   this.applePay.completeLastTransaction('success');

      //   console.log(message);
      //   this.applePay.completeLastTransaction('success');
      //   this.presentAlert('Gracias! Su donación ah sido enviada con éxito', 'Thanks');
      //   this.router.navigate(['/payment']);
      //   var reqData= {

      //     amount: this.myform.value.amount,
      //     fname:  this.myform.value.fname,
      //     address: this.myform.value.address,
      //     city: this.myform.value.city,
      //     state: this.myform.value.state,
      //     zcode: this.myform.value.zcode,
      //     mode: this.myform.value.mode,
      //   }

      //   this.api.postdata('apple', {data:reqData},'').subscribe(data =>{ 
      //   }, (err) => {
      //     console.log(err)
      //   });


      // }).catch((error) => {
      //   console.log(error);
      //   this.applePay.completeLastTransaction('failure');
      //   this.presentAlert(error, 'Try again');
      // });


        
        } catch {
        // handle payment request error
        }




   

  }


  }

  async presentAlert(msg, title, ) {
    const alert = await this.alertController.create({
      header: 'Donaciones!!',
      subHeader: title,
      message: msg,
      buttons: ['Close']
    });

    await alert.present();
  }

}
