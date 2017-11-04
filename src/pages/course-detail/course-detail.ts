import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

@Component({
  selector: 'page-course-detail',
  templateUrl: 'course-detail.html',
})
export class CourseDetailPage {

  public workshopSelected: any;
  
  constructor(public navCtrl: NavController,
     public navParams: NavParams) {
      this.workshopSelected = navParams.get("workshopSelected");
      console.log(this.workshopSelected.name);
    }
}
