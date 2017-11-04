import { Component, OnInit } from '@angular/core';
import { NavController, LoadingController, AlertController } from 'ionic-angular';
import { Injectable } from '@angular/core';
import { UserService } from '../../domain/user/user.service'
import { Storage } from '@ionic/storage';
import { LoginPage } from "../login/login";
import { CourseDetailPage } from "../course-detail/course-detail";

@Component({
  selector: 'page-courses',
  templateUrl: 'courses.html',
})
export class CoursesPage {

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
          }).catch(()=>{
            loader.dismiss();
            this._alertCtrl.create({
              title: 'Erro com conexão',
              subTitle: 'Verifique sua conexão e tente novamente!',
              buttons: [{ text: 'Ok' }]
            }).present()
            .then(() =>{
              this.navCtrl.push(LoginPage);          
            });
            
          });
        })
      }
    
  itemSelected(workshop: any){
    this.navCtrl.push(CourseDetailPage, {workshopSelected : workshop});
  }
    
  }
