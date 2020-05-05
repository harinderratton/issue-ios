import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NotiService } from '../services/noti/noti.service';
import { Stripe } from '@ionic-native/stripe/ngx';
import { ApiService } from '../services/api/api.service';
import {ActivatedRoute} from '@angular/router';
import { Router } from '@angular/router';
import * as tf from '@tensorflow/tfjs';
import { AlertController } from '@ionic/angular';
@Component({
  selector: 'app-subscribe',
  templateUrl: './subscribe.page.html',
  styleUrls: ['./subscribe.page.scss'],
})
export class SubscribePage implements OnInit {
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
    public alertController: AlertController,
    ) {
      this.makeform();
      this.status= this.route.snapshot.paramMap.get('status');
      const model = tf.sequential();
          model.add(tf.layers.dense({units: 1, inputShape: [1]}));
          
          // Prepare the model for training: Specify the loss and the optimizer.
          model.compile({loss: 'meanSquaredError', optimizer: 'sgd'});
          
          // Generate some synthetic data for training.
          const xs = tf.tensor2d([1, 2, 3, 4], [4, 1]);
          const ys = tf.tensor2d([1, 3, 5, 7], [4, 1]);
          
          // Train the model using the data.
          model.fit(xs, ys).then(() => {
            // Use the model to do inference on a data point the model hasn't seen before:
            // model.predict(tf.tensor2d([5], [1, 1])).print();
          });
      
    
    
    }

  ngOnInit() {
  }

  makeform(){
    this.myform = this.formBuilder.group({
      cardno: ['', Validators.compose([Validators.required,Validators.minLength(10),Validators.maxLength(16)])],      
      expdate: ['', Validators.compose([Validators.required])],
      cvv: [null, Validators.compose([Validators.required,Validators.maxLength(3),Validators.minLength(3)])],
      fname:  ['', Validators.compose([Validators.required])],
      address: ['', Validators.compose([Validators.required])],
      city: ['', Validators.compose([Validators.required])],
      state: ['', Validators.compose([Validators.required])],
      zcode: ['', Validators.compose([Validators.required])],
      amount: ['', Validators.compose([Validators.required])],
      email: ['', Validators.compose([Validators.required, Validators.email])],
      mode: [null, Validators.compose([Validators.required])],
  });
  }

  stripepay(){

    this.is_submit=true;

    if(this.myform.valid){
      this.noti.presentLoading();
      var date= new Date(this.myform.value.expdate);
      var month= date.getMonth()
      this.stripe.setPublishableKey('qwertyhjhytrewqwertyhytrewzR3NJ8c-sGcVud0kWXq1TsypeZh9s0LAXVEeH-Q0fTv_h5JNdvC5Nm');
      let card = {
      number:  this.myform.value.cardno,
      expMonth: month++,
      expYear: date.getFullYear(),
      cvc: this.myform.value.cvv,
      }
  
      this.stripe.createCardToken(card)
        .then(token =>{

          if(this.status==1){
            var interval= 'week'
          }else{
            var interval= 'month'
          }
  
         
          var reqData= {    
            fname:  this.myform.value.fname,
            address:  this.myform.value.address,
            city:  this.myform.value.city,
            state:  this.myform.value.state,
            zcode:  this.myform.value.zcode,
            stripeToken: token.id,
            status: this.status,
            amount:  this.myform.value.amount,
            interval: interval,
            plan_name: interval,
            email: this.myform.value.email,

          }
  
          this.api.postdata('stripeSubscribe', reqData,'').subscribe(data =>{ 
            this.noti.stopLoading();
            var res;
            res =data;
            console.log(res)
            if(res.status==1){
              this.presentAlert()
              this.router.navigate(['/stripe']);
           
            }
            
            
     
      
      }, (err) => {
        this.noti.stopLoading();
        this.noti.nativeToast('Something went wrong, try again later');
      });
  
  
        })
        .catch(error => {
          this.noti.stopLoading();
          this.noti.nativeToast(error);
          
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

