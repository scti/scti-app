import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { CoursesPage } from '../courses/courses';
import { LecturesPage } from '../lectures/lectures';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})

export class HomePage{

  lecturesRoot = LecturesPage
  coursesRoot = CoursesPage

  public workshops;

  constructor(
    public navCtrl: NavController){}

}