import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { YearsPage } from '../years/years';
import { Storage } from '@ionic/storage';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController, private storage: Storage) {

  }

  goToTracker() {
  	this.storage.set('second_load', true).then(() => {
  		this.navCtrl.push(YearsPage);
  	})
  }

}
