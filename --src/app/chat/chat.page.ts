import { Component, OnInit, ViewChild } from '@angular/core';
import { Socket } from 'ng-socket-io';  
import { Observable } from 'rxjs';
import { UniqueDeviceID } from '@ionic-native/unique-device-id/ngx';
import { NotiService } from '../services/noti/noti.service';
import { ApiService } from '../services/api/api.service';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.page.html',
  styleUrls: ['./chat.page.scss'],
})
export class ChatPage implements OnInit {
  @ViewChild('content',{static:true}) content: any;
  uuid:any;
  msgs:any=[];
  errors:any=['',null,undefined];
  response:any;
  items:any=[];
  new_message:any;
  get_message:any;
  inherit_message:any;


  constructor(
    private socket: Socket,
    private uniqueDeviceID: UniqueDeviceID,
    public notifi:NotiService,
    public apiservice:ApiService

  ) {

    this.uuid= localStorage.getItem('uuid');    
    this.getUpdates().subscribe(new_message => {
    this.get_message= new_message;
    this.items.push( { 
      sender_id:1,  
      msg: this.get_message.message
     });
     this.scrollToBottom();
});            
this.getchat(); 

   }

  ngOnInit() {
  }
getUpdates() {
    var self = this;
    let observable = new Observable(observer => {
      self.socket.on('user_get', (data) => {
        observer.next(data);
        // console.log(data); 
      });
    })
    return observable;
  }

  send(){
    this.inherit_message=this.new_message;
    this.new_message='';
    if(this.errors.indexOf(this.inherit_message)==-1){
      if  (this.errors.indexOf(this.items)>=0){
        this.items=[];
      }      
      this.items.push( { 
        sender_id:this.uuid,  
        msg: this.inherit_message
       });
    }  
      this.socket.emit('send_message', {message : this.inherit_message,id:this.uuid }); this.scrollToBottom();
      this.apiservice.postdata('savechat',{token:this.uuid,msg:this.inherit_message},'').subscribe(data =>{    
      this.response= data;          
      if(this.response.status == 1){      
      
      }
      else if( this.response.status == 0){
       this.notifi.presentToast('Server error, message not sent','danger');   
      }
  
      }, (err) => {
      this.notifi.stopLoading(); 
      console.log(err)
      }); 

  }

  scrollToBottom() {
    var self = this;
    setTimeout(function(){
    self.content.scrollToBottom(300);
    },100);
   }

  getchat(){   
    this.notifi.presentLoading();     
    this.apiservice.postdata('getchat',{token:this.uuid},'').subscribe(data =>{    
    this.response= data;          
    console.log(data);
    if(this.response.status == 1){  
      this.notifi.stopLoading(); 
      this.items= this.response.data;
    
    }else if( this.response.status == 0){
      this.notifi.stopLoading(); 
 
    }

    }, (err) => {
    this.notifi.stopLoading(); 
    console.log(err)
    });

   }
}
