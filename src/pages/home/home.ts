import { Component, OnInit } from '@angular/core';
import { NavController, LoadingController, AlertController } from 'ionic-angular';
import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { CoursesPage } from '../courses/courses';
import { LecturesPage } from '../lectures/lectures';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})

@Injectable()
export class HomePage implements OnInit{

  lecturesRoot = LecturesPage
  coursesRoot = CoursesPage

  public events: Object[];

  constructor(
    public navCtrl: NavController,
    private _http: Http,
    private _loadingCtrl: LoadingController,
    private _alertCtrl: AlertController){}

    
  ngOnInit() {
 /*
    let  loader = this._loadingCtrl.create({
        content: 'Carregando...'
      });
 
      loader.present();
 
      this._http
        .get('http://scti.herokuapp.com/api/workshops')
        .map(res => res.json())
        .toPromise()
        .then(events => {
        this.events = events
        loader.dismiss();
      })
      .catch(
       err => {
        console.log(err);
        loader.dismiss();
 
        this._alertCtrl.create({title: "Falha de Conexão!",
        buttons: [{text: "Estou ciente"}],
        subTitle: "Não foi possível obter os dados requisitados. Tente novamente mais tarde!"}).present()
      });*/
  }
}