import { Component, OnInit } from '@angular/core';
import { PayPal, PayPalPayment, PayPalConfiguration } from '@ionic-native/paypal/ngx';
import { Stripe } from '@ionic-native/stripe/ngx';
import { ApplePay } from '@ionic-native/apple-pay/ngx';
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
    private payPal: PayPal,
    private stripe: Stripe,
    private applePay: ApplePay,
    public alertController: AlertController,
    public apiservice:ApiService,
    public noti:NotiService
    ) { }

  ngOnInit() {
  }

  paypal(amnt){

    this.payPal.init({
      PayPalEnvironmentProduction: 'AboIRodhvCddri8kFpcvuiySLnjFJ2BUn5zHXzw-lPy2IoOoFW4HB_U0l-0RjuizAUIyzY35kaCQB-kk',
      PayPalEnvironmentSandbox: 'AajEdX8q_OVTgVxDjycYzR3NJ8c-sGcVud0kWXq1TsypeZh9s0LAXVEeH-Q0fTv_h5JNdvC5Nm9LYDSa'
    }).then(() => {
      // Environments: PayPalEnvironmentNoNetwork, PayPalEnvironmentSandbox, PayPalEnvironmentProduction
      this.payPal.prepareToRender('PayPalEnvironmentSandbox', new PayPalConfiguration({
        // Only needed if you get an "Internal Service Error" after PayPal login!
        //payPalShippingAddressOption: 2 // PayPalShippingAddressOptionPayPal
      })).then(() => {
        let payment = new PayPalPayment(amnt, 'USD', 'Description', 'sale');
        this.payPal.renderSinglePaymentUI(payment).then(() => {
       
         this.noti.nativeToast('Payment successfull, Thanks for your support');



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

  stripepay(){
      
        this.stripe.setPublishableKey('pk_test_TxqjC0O4By0cTLloXQN6J7HN00UAaRyPCP');
        let card = {
        number: '4111111111111111',
        expMonth: 12,
        expYear: 2020,
        cvc: '220'
        }

        this.stripe.createCardToken(card)
          .then(token =>{


            this.apiservice.postdata('stripepay', {stripeToken:token.id},'').subscribe(data =>{ 
           
            console.log(data);
       
        
        }, (err) => {
          console.log(err)
        });


          })
          .catch(error => console.error(error));



  }

 
 


  
    async payWithApplePay() {

      this.applePay.makePaymentRequest(
        {
              items: [
                  {
                      label: '3 x Basket Items',
                      amount: 49.99
                  },
                  {
                      label: 'Next Day Delivery',
                      amount: 3.99
                  },
                          {
                      label: 'My Fashion Company',
                      amount: 53.98
                  }
              ],
              shippingMethods: [
                  {
                      identifier: 'NextDay',
                      label: 'NextDay',
                      detail: 'Arrives tomorrow by 5pm.',
                      amount: 3.99
                  },
                  {
                      identifier: 'Standard',
                      label: 'Standard',
                      detail: 'Arrive by Friday.',
                      amount: 4.99
                  },
                  {
                      identifier: 'SaturdayDelivery',
                      label: 'Saturday',
                      detail: 'Arrive by 5pm this Saturday.',
                      amount: 6.99
                  }
              ],
              supportedNetworks: ['visa', 'masterCard', 'discover'],
              merchantCapabilities: ['3ds', 'debit', 'credit'],          
              merchantIdentifier: 'merchant.apple.test',
              currencyCode: 'GBP',
              countryCode: 'GB',
              billingAddressRequirement: 'none',
              shippingAddressRequirement: 'none',
              shippingType: 'shipping'
        })
        .then((paymentResponse) => {
            // The user has authorized the payment.
    
            // Handle the token, asynchronously, i.e. pass to your merchant bank to
            // action the payment, then once finished, depending on the outcome:
    
            // Here is an example implementation:
    
            // MyPaymentProvider.authorizeApplePayToken(token.paymentData)
            //    .then((captureStatus) => {
            //        // Displays the 'done' green tick and closes the sheet.
            //        ApplePay.completeLastTransaction('success');
            //    })
            //    .catch((err) => {
            //        // Displays the 'failed' red cross.
            //        ApplePay.completeLastTransaction('failure');
            //    });
    
    
        })
        .catch((e) => {
            // Failed to open the Apple Pay sheet, or the user cancelled the payment.
        })
    }



  
    async presentAlert() {
      const alert = await this.alertController.create({
        header: 'Amount to donate',
        inputs: [
       
          {
            name: 'amount',
            type: 'number',
            placeholder: 'Amount in $'
          },
        
        ],
        buttons: [
          {
            text: 'Cancel',
            role: 'cancel',
            cssClass: 'secondary',
            handler: () => {
              console.log('Confirm Cancel');
            }
          }, {
            text: 'Ok',
            handler: (res) => {
             
              this.paypal(res.amount);
          
            }
          }
        ]
      });
  
      await alert.present();
    }
  
  
  


}
