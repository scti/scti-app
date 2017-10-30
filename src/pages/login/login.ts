import { Component  } from '@angular/core'; 
import { UserService } from '../../domain/user/user.service';
import { Storage } from '@ionic/storage';
import { NavController, NavParams, AlertController } from 'ionic-angular';
import { HomePage } from '../home/home';

@Component({
  selector: 'page-login',
  templateUrl: 'login.html'
})
export class LoginPage {

  public email: string = '';  
  public password: string = '';

  constructor(  public navCtrl: NavController,
    public navParams: NavParams,
    private _service: UserService, 
    private _alertCtrl: AlertController,
    private _storage: Storage
  ) {}

  login() { 
    this._service.login(this.email, this.password)
    .then(() => {
      if (this._service.getCurrentUser().length > 0) {
        this._storage.set('token', this._service.getCurrentUser())
        .then(() => {
          this.navCtrl.push(HomePage);          
        })
      }else{
        this._alertCtrl.create({
          title: 'Problema no login',
          subTitle: 'Verifique suas credenciais e tente novamente!',
          buttons: [{ text: 'Ok' }]
        }).present();  
      }            
    }).catch(() => {
      this._alertCtrl.create({
        title: 'Problema no login',
        subTitle: 'Verifique suas credenciais e tente novamente!',
        buttons: [{ text: 'Ok' }]
      }).present();
    });
  }
}