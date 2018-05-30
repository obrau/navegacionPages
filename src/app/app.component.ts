import { Component } from '@angular/core';
import { Platform, MenuController } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';


import { MistabsPage } from '../pages/mistabs/mistabs';

import { Ajustes2Page } from '../pages/index.paginas';


@Component({
  templateUrl: 'app.html'
})
export class MyApp {

  tabs = MistabsPage;
  ajustes2 = Ajustes2Page;

  rootPage:any = MistabsPage;

  constructor(platform: Platform,
              statusBar: StatusBar,
              splashScreen: SplashScreen,
              private menuCtrl: MenuController) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();
    });
  }

  abrirPagina( pagina: any){
    //Esta instruccion cambia la pagina de root
    this.rootPage = pagina;

    //Y como se cierra el menu automaticamente tras la selección? Debemos usar el menuController
      this.menuCtrl.close();
    //Como añadimos un boton de menu?
    //Lo tendremos q hacer en la ventana principal!
  }

}
