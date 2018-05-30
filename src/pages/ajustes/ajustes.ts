import { Component } from '@angular/core';
import { NavController, NavParams, ModalController } from 'ionic-angular';

import {ModalPage} from '../index.paginas';


@Component({
  selector: 'page-ajustes',
  templateUrl: 'ajustes.html',
})
export class AjustesPage {

  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              private modalCtrl: ModalController) {}

  //Activamos un tab desde otra pagina. NavCtrl siempre para la navegacion
  activarPrincipal(){
      this.navCtrl.parent.select(2); //2 hace referencia a la posicion en que se muestran los tabs
  }

  mostrar_modal(){
    // .present - Esta opción abre una ventana modal (opción no recomendada si debemos usar algun parametro)
    //  this.modalCtrl.create(ModalPage).present(); Es RECOMENDABLE crear una variable modal en lugar de hacerlo todo en un linea
    let modal = this.modalCtrl.create(ModalPage,{nombre:"fernando",edad:30});
    modal.present();

    //Como mandamos parametros??
    //añadiendo un objeto despues de la pagina modal (ModalPage,{nombre:"fernando"})

    //Como obtenemos parametros?? En este caso estos parametros provienen de la ventana modal cerrada
    modal.onDidDismiss( parametros =>{

      //Controlamos si tenemos parametros o no
        if(parametros){
          console.log("Data del modal: ");
          console.log(parametros);
        }else{
          console.log("Se cerró sin parametros ");

        }
    })
  }

}
