import { Component } from '@angular/core';
import { ActionSheetController } from '@ionic/angular';
import { AlertController } from '@ionic/angular';
//import { WheelSelector } from '@ionic-native/wheel-selector';
import { HttpClient } from '@angular/common/http';
import { ToastController } from '@ionic/angular';


@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {
    constructor(
//    public navCtrl: NavController, 
//        private selector: WheelSelector, 
        public actionSheetController: ActionSheetController,
        public alertController: AlertController,
        private toastCtrl: ToastController, private http: HttpClient) {
		}

}
