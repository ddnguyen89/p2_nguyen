import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { MyComponent } from '../../components/foo';

@Component({
  selector: 'page-order',
  templateUrl: 'order.html'
})
export class OrderPage {

  constructor(public navCtrl: NavController) {

  }
}
