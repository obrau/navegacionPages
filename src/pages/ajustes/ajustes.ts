import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';


@Component({
  selector: 'page-ajustes',
  templateUrl: 'ajustes.html',
})
export class AjustesPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  //Activamos un tab desde otra pagina. NavCtrl siempre para la navegacion
  activarPrincipal(){

    this.navCtrl.parent.select(2); //2 hace referencia a la posicion en que se muestran los tabs

  }

}
