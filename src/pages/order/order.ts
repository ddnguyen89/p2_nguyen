import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-order',
  templateUrl: 'order.html'
})
export class OrderPage {

  username: string;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.username = navParams.get("data");
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad OrderPage');
  }
}
