import { Component } from '@angular/core';
import { InAppBrowser } from '@ionic-native/in-app-browser/ngx';
import { NavController } from '@ionic/angular';


@Component({
  selector: 'app-eventos',
  templateUrl: './eventos.page.html',
  styleUrls: ['./eventos.page.scss'],
})
export class EventosPage   {

  constructor(private iab: InAppBrowser, public navCtrl: NavController) { }

  navegar(ruta: string) {
    this.iab.create(ruta, '_system');
  }

}
