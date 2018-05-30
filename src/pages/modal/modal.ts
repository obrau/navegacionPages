import { Component } from '@angular/core';
import { IonicPage, NavParams, ViewController } from 'ionic-angular';


@IonicPage()
@Component({
  selector: 'page-modal',
  templateUrl: 'modal.html',
})
export class ModalPage {

  nombre:string="";
  edad:number=0;

  constructor(public viewCtrl: ViewController,
              public navParams: NavParams){

    this.nombre = this.navParams.get("nombre");
    this.edad = this.navParams.get("edad");

    console.log(this.nombre + this.edad);
  }

    //MÉTODOS PARA CERRAR LA VENTANA
    //Debemos usar el ViewController
    cerrar_con_parametros(){

        let objeto = {
          nombre: "Juan Carlos",
          edad: 18,
          coords:{
            lat: 10,
            lng: -10
          }
        };

        this.viewCtrl.dismiss( objeto ); //esta instruccion cierra el modal con el objeto por parametros
    }

    cerrar_sin_parametros(){
        this.viewCtrl.dismiss();
    }



}
