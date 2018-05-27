import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { TabsComponent } from '../components/tabs/tabs';
import { TabContentComponent } from '../components/tab-content/tab-content';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    TabsComponent,
    TabContentComponent
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
   
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    TabsComponent,
    TabContentComponent
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
