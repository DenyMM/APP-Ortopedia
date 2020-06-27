import { Component } from '@angular/core';

import { InAppBrowser } from '@ionic-native/in-app-browser/ngx';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-biblio',
  templateUrl: './biblio.page.html',
  styleUrls: ['./biblio.page.scss'],
})
export class BiblioPage   {

  constructor(private iab: InAppBrowser, public navCtrl: NavController) {}
  navegar(ruta: string) {
    this.iab.create(ruta, '_system');
  }
  }
