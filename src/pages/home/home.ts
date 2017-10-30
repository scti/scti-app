import { Component, OnInit } from '@angular/core';
import { NavController, LoadingController, AlertController } from 'ionic-angular';
import { Injectable } from '@angular/core';
import { UserService } from '../../domain/user/user.service'
import { CoursesPage } from '../courses/courses';
import { LecturesPage } from '../lectures/lectures';
import { Storage } from '@ionic/storage';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})

@Injectable()
export class HomePage implements OnInit{

  lecturesRoot = LecturesPage
  coursesRoot = CoursesPage

  public workshops;

  constructor(
    public navCtrl: NavController,
    private _service: UserService,
    private _loadingCtrl: LoadingController,
    private _alertCtrl: AlertController,
    private _storage: Storage){}

    
  ngOnInit() {
 
    let  loader = this._loadingCtrl.create({
        content: 'Carregando...'
      });
 
      loader.present();
 
      this._storage.get('token').then((val) => {
        this._service.listWorkshops(val)
        .then(() =>{
          this.workshops = this._service.getWorkshops()
        }).then(() => {
          loader.dismiss();
        });
      })

  }
}