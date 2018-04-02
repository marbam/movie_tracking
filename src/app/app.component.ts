import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { Storage } from '@ionic/storage';
import { years } from "../providers/config";

import { HomePage } from '../pages/home/home';
import { YearsPage } from '../pages/years/years';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  rootPage:any = HomePage;

  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen, public storage: Storage) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();

      var years_array = [];
      storage.get('years').then((data) => {
        if (data == null) {
          for(var i = 0; i< 5; i++) {
            years_array.push({'year':years[i], 'watched':0, 'cinema':0, 'netflix':0, 'other':0, 'movies':[] });
          }
          storage.set('years', years_array).then(() => {
            this.setRootPage();
          });
        } else {
          this.setRootPage();  
        }
      })
    });
  }

  setRootPage() {
    this.storage.get('second_load').then((data) => {
      if(data) {
        this.rootPage = YearsPage;
      } else {
        this.rootPage = HomePage;
      }
    });    
  }

}

