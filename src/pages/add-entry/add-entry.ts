import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Storage } from '@ionic/storage';

@IonicPage()
@Component({
  selector: 'page-add-entry',
  templateUrl: 'add-entry.html',
})
export class AddEntryPage {
  film = {'film':'', 'source':'', 'date':'', 'date_readable':''};
  no_title = false;
  no_date = false;
  no_source = false;
  year;
  years;

  constructor(public navCtrl: NavController, public navParams: NavParams, public storage: Storage) {
  	this.year = navParams.get('year');
  	this.years = navParams.get('years');
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AddEntryPage');
  }

  selectMedia(source) {
  	this.film['source'] = source;
  }

  save() {
  	var safe = true;

  	if (this.film.film == "") {
  		safe = false;
  		this.no_title = true;
  	}

  	if (this.film.date == "") {
  		safe = false;
  		this.no_date = true;
  	}

  	if (this.film.source == "") {
  		safe = false;
  		this.no_source = true;
  	}  	

  	if (safe) {
  		this.film.date_readable = this.getReadable(this.film.date);
  		this.year[this.film.source]++;
  		this.year.watched++;
  		this.year.movies.push(this.film);

  		for (let y of this.years) {
  			if (y['year'] == this.year.year) {
  				y = this.year;
		  		this.storage.set('years', this.years).then(() => {
			  		this.navCtrl.pop();
		  		});
  			}
  		}
  	}
  }

  getReadable(date) {
  	var dateObject = new Date(Date.parse(date));
	return dateObject.toLocaleDateString();  	
  }

}
