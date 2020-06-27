import { Component } from '@angular/core';
import { InAppBrowser } from '@ionic-native/in-app-browser/ngx';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-publicaciones',
  templateUrl: './publicaciones.page.html',
  styleUrls: ['./publicaciones.page.scss'],
})
export class PublicacionesPage implements OnInit {

  constructor(private iab: InAppBrowser, public navCtrl: NavController) { }

  navegar(ruta: string) {
    this.iab.create(ruta, '_system');
  }

}
