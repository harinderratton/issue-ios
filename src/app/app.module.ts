import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';
import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ReactiveFormsModule } from '@angular/forms';
import { FCM } from '@ionic-native/fcm/ngx';
import { SocketIoModule, SocketIoConfig } from 'ng-socket-io';
import { socket_config } from 'config';
const config: SocketIoConfig = { url: socket_config.SOCKET_URL, options: {} };
import { UniqueDeviceID } from '@ionic-native/unique-device-id/ngx';
import { AES256 } from '@ionic-native/aes-256/ngx';
import { InAppBrowser } from '@ionic-native/in-app-browser/ngx';
@NgModule({
  declarations: [AppComponent],
  entryComponents: [],
  imports: [BrowserModule, IonicModule.forRoot(), AppRoutingModule, HttpClientModule, ReactiveFormsModule,SocketIoModule.forRoot(config)],
  providers: [
    FCM,
    StatusBar,
    HttpClient,
    SplashScreen,
    UniqueDeviceID,
    AES256,
    InAppBrowser,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
