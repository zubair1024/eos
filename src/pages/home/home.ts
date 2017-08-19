import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { UsersPage } from '../users/users';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) {

  }

  goToUsers(){
    console.log('came here');
    this.navCtrl.push(UsersPage);
  }

}
