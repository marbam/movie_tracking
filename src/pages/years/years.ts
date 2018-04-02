import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Storage } from '@ionic/storage';
import { AddEntryPage } from '../add-entry/add-entry';

/**
 * Generated class for the YearsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-years',
  templateUrl: 'years.html',
})
export class YearsPage {
  year = {'year':2018, 'watched': '', 'cinema': '', 'netflix': '', 'other':'', 'movies':[]};
  first = 2018;
  last = 2022;
  years;

  constructor(public navCtrl: NavController, public navParams: NavParams, public storage: Storage) {
  	this.setup();
  }

  ionViewDidEnter() {
    this.setup();
  }
  
  setup() {
  	this.storage.get('years').then((years) => {
  		this.years = years;
  		var d = new Date();
  		var this_year = d.getFullYear();
  		var found = false;
  		for (let y of this.years) {
  			if(y['years'] == this_year) {
  				this.year = y;
  				found = true;
  				break;
  			}
  		}
  		if(!found) {
  			this.year = this.years[0];
  		}
  	})

  }

  getNext(){
  	var index = this.years.indexOf(this.year);
  	this.year = this.years[index+1];
  }

  getPrev(){
  	var index = this.years.indexOf(this.year);
  	this.year = this.years[index-1];
  }

  addMovie(){
    this.navCtrl.push(AddEntryPage, {'year':this.year, 'years':this.years});
  }

}
