import { Component } from '@angular/core';
import { NavParams, NavController } from 'ionic-angular'; //NavParams és el objeto necesario para recibir parametros

@Component({
  selector: 'page-pagina3',
  templateUrl: 'pagina3.html',
})
export class Pagina3Page {

mutante:any={};

//El constructor debe recibir los parametros
  constructor(private navParams:NavParams,
              private navCtrl:NavController){

    console.log(navParams);
    this.mutante = this.navParams.get("mutante");

  }

  irAtras(){
    this.navCtrl.pop(); //Nos devuelve hacia atras //el pop destruye la vista de la pagina
  }

  irRoot(){
    this.navCtrl.popToRoot(); //Nos devuelve hacia la pagina definida como Root en el archivo appComponent.ts
  }

}
