import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NotiService } from '../services/noti/noti.service';
import { Stripe } from '@ionic-native/stripe/ngx';
import { ApiService } from '../services/api/api.service';
import {ActivatedRoute} from '@angular/router';
import { Router } from '@angular/router';
import { PayPal, PayPalPayment, PayPalConfiguration } from '@ionic-native/paypal/ngx';
import { AlertController } from '@ionic/angular';
@Component({
  selector: 'app-paypal',
  templateUrl: './paypal.page.html',
  styleUrls: ['./paypal.page.scss'],
})
export class PaypalPage implements OnInit {
  is_submit:boolean=false;
  public myform: FormGroup;
  status:any;
  constructor(
    public formBuilder: FormBuilder,
    public noti:NotiService,
    private stripe: Stripe,
    public api:ApiService,
    public route: ActivatedRoute,
    public router:Router,
    private payPal: PayPal,
    public alertController: AlertController,
    ) {
      this.makeform();
    
      
    
    
    }

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

  stripepay(){

    this.is_submit=true;
    if(this.myform.valid){
  
      this.payPal.init({
        PayPalEnvironmentProduction: 'AboIRodhvCddri8kFpcvuiySLnjFJ2BUn5zHXzw-lPy2IoOoFW4HB_U0l-0RjuizAUIyzY35kaCQB-kk',
        PayPalEnvironmentSandbox: 'AajEdX8q_OVTgVxDjycYzR3NJ8c-sGcVud0kWXq1TsypeZh9s0LAXVEeH-Q0fTv_h5JNdvC5Nm9LYDSa'
      }).then(() => {

        this.payPal.prepareToRender('PayPalEnvironmentProduction', new PayPalConfiguration({
     
        })).then(() => {
          let payment = new PayPalPayment(String(this.myform.value.amount), 'USD', 'Description', 'sale');
          this.payPal.renderSinglePaymentUI(payment).then(() => {
             
            var reqData= {    
              fname: this.myform.value.fname,
              address: this.myform.value.address,
              city: this.myform.value.city,
              state: this.myform.value.state,
              zcode: this.myform.value.zcode,
              amount: this.myform.value.amount,
      
            }
            this.api.postdata('paypal', {data:reqData},'').subscribe(data =>{ 
          }, (err) => {
            console.log(err)
          });
         
        this.presentAlert();
        this.router.navigate(['payment']);

          }, () => {
            // Error or render dialog closed without being successful
          });
        }, () => {
          // Error in configuration
        });
      }, () => {
        // Error in initialization, maybe PayPal isn't supported or something else
      });
  


    }
   


}

async presentAlert() {
  const alert = await this.alertController.create({
    header: 'Donacione done!!',
    subHeader: 'Thanks',
    message: 'Gracias! Su donación ah sido enviada con éxito',
    buttons: ['Close']
  });

  await alert.present();
}

}
