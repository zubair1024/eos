import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';


@IonicPage()
@Component({
  selector: 'page-users',
  templateUrl: 'users.html',
})
export class UsersPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  loadUser(name: string){
    
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad UsersPage');
  }

  ionViewCanEnter(){
    return true;
  }

}
