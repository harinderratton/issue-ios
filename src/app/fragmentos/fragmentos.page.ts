import { Component, OnInit, ViewChild } from '@angular/core';
import { IonSlides } from '@ionic/angular';
import { Router } from '@angular/router';
import { NotiService } from '../services/noti/noti.service';
import { ApiService } from '../services/api/api.service';
import { DomSanitizer, SafeResourceUrl} from '@angular/platform-browser';
import { InAppBrowser , InAppBrowserOptions} from '@ionic-native/in-app-browser/ngx';
@Component({
  selector: 'app-fragmentos',
  templateUrl: './fragmentos.page.html',
  styleUrls: ['./fragmentos.page.scss'],
})
export class FragmentosPage implements OnInit {
  @ViewChild('slides', {static: false}) slides: IonSlides;
  response:any;
  items:any;
  novideos:boolean=false;
  errors=['',null,undefined];
  slideOpts = {
    slidesPerView:1.15,
    spaceBetween:20,
    speed: 400,
    zoom: false
  };
  
  constructor(
    private router:Router,
    public notifi:NotiService,
    public apiservice:ApiService,
    private sanitizer: DomSanitizer,
    private iab: InAppBrowser

  ) { 
    

  }

  ionViewDidEnter(){
    this.novideos=false;
    this.vip_training();

  }
ngOnInit() {
  }

  logout(){
    localStorage.clear();
    this.router.navigate(['/options']);
  }
  vip_training(){
    this.notifi.presentLoading();     
    this.apiservice.postdata('getshort','','').subscribe(data =>{
    
    this.response=data;          
    console.log(data);
if(this.response.status == 1){  
  this.notifi.stopLoading(); 
  this.items= this.response.data;
  console.log(this.items);
 
}else{
  this.novideos=true;
  this.items=[];
  this.notifi.stopLoading(); 
 this.notifi.presentToast(this.response.msg,'danger');
}

}, (err) => {
this.notifi.stopLoading(); 
console.log(err)
});
  }

  photoURL(src) {
    return this.sanitizer.bypassSecurityTrustResourceUrl(src);
  }

  link(l){
    console.log(l.split('/').pop(-1));
    var lin=l.split('/').pop(-1);
    const iosoption: InAppBrowserOptions = {
      zoom: 'no',
      location:'yes',
      toolbar:'yes',
      clearcache: 'yes',
      clearsessioncache: 'yes',
      disallowoverscroll: 'yes',
      enableViewportScale: 'yes'
    }

    const browser = this.iab.create('https://www.youtube.com/watch?v='+lin,'_blank', iosoption);
 
}

}

