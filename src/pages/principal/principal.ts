import { Component } from '@angular/core';
import {  NavController, MenuController } from 'ionic-angular';

import { Pagina2Page } from '../pagina2/pagina2';

@Component({
  selector: 'page-principal',
  templateUrl: 'principal.html',
})
export class PrincipalPage {

  pagina2:any = Pagina2Page;

  constructor(public navCtrl: NavController,
              private menuCtrl: MenuController) {}

  navegarPagina(){

    this.navCtrl.push(Pagina2Page);

  }

  mostrarMenu(){
      this.menuCtrl.toggle(); //Esta opcion abre el menu si esta cerrado y cierra el menu si esta abierto
  }

}
