import { Component } from '@angular/core';
import { IonicPage, NavController } from 'ionic-angular';

import {PrincipalPage, AjustesPage} from '../index.paginas';

/**
 * Generated class for the MistabsPage tabs.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-mistabs',
  templateUrl: 'mistabs.html'
})
export class MistabsPage {

  aRoot:any;
  bRoot:any;
  cRoot:any;
  dRoot:any;
  eRoot:any;


  constructor(public navCtrl: NavController) {
    this.aRoot = AjustesPage;
    this.bRoot = AjustesPage;
    this.cRoot = PrincipalPage;
    this.dRoot = AjustesPage;
    this.eRoot = AjustesPage;

  }

}
