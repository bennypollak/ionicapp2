import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { NavController } from '@ionic/angular';
//import { NewpagePage } from '/newpage';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {
   constructor(private router: Router, public navCtrl: NavController) {} 
   
     goNewPage() {
    this.router.navigateByUrl('/newpage');
  }
     pushNewPage() {
//    this.navCtrl.push('/newpage');
  }
}
