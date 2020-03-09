import { Component, OnInit, ViewChild } from '@angular/core';
import { IonSlides } from '@ionic/angular';
import { Router } from '@angular/router';
import { NotiService } from '../services/noti/noti.service';
import { ApiService } from '../services/api/api.service';
import { config} from 'config';
@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {
  response:any;
  items:any;
  errors=['',null,undefined];
  url:any=config.IMAGES_URL;
  constructor(
    private router:Router,
    public notifi:NotiService,
    public apiservice:ApiService,

  ) {
    this.getpic();
   }

  ngOnInit() {
  }

  getpic(){
    this.notifi.presentLoading();     
    this.apiservice.postdata('getpictures','','').subscribe(data =>{
    
    this.response=data;          
    console.log(data);
if(this.response.status == 1){  
  this.notifi.stopLoading(); 
  this.items= this.response.data;
  console.log(this.items);
 
}else if( this.response.status == 0){
  this.notifi.stopLoading(); 
 this.notifi.presentToast(this.response.msg,'danger');
}

}, (err) => {
this.notifi.stopLoading(); 
console.log(err)
});
  }

}
