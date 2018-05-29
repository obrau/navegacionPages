import { Component } from '@angular/core';
import { NavController} from 'ionic-angular';

import { Pagina3Page } from '../index.paginas';

@Component({
  selector: 'page-pagina2',
  templateUrl: 'pagina2.html',
})
export class Pagina2Page {

pagina3:any = Pagina3Page;

  mutantes:any[] = [
    {
      nombre: "Magneto",
      poder: "Controlar metales"
    },{
      nombre: "Wolverine",
      poder: "Regeneración acelerada"
    },{
      nombre: "Profesor X",
      poder: "Poderes psíquicos"
    },{
      nombre: "Gambeto",
      poder: "Cargar objetos inanimados"
    }
  ];
//Constructor
  constructor(public navCtrl: NavController) {
  }

//Metodo que passa variables a otra pagina
//this.navCtrl.push(Pagina3Page, {'keyword':object});

  irpagina3(mutante:any){
    console.log(mutante);

    this.navCtrl.push(Pagina3Page, { 'mutante' : mutante } );
  }


}
