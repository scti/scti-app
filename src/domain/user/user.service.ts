import { Injectable} from '@angular/core';
import { Http } from '@angular/http';
import { User } from "./user";
//import { HomePage } from '../../pages/home/home';
import { AlertController } from 'ionic-angular';
import {Observable} from 'rxjs/Rx';


@Injectable()
export class UserService {

    public user : any;    

    constructor(private _http: Http,
    private _alertCtrl: AlertController) {}

    login(userEmail: string, userPassword: string) {
        let api = `http://scti.herokuapp.com/api/signin`;
        
        return this._http
        .post(api,
            {
                email: userEmail,
                password: userPassword
            })
        .map(res => { 
            //AQUI EU VERIFICO DE ACORDO COM O RESPONSE CODE SE OS DADOS SÃO VÁLIDOS
            console.log("entrou");
            if(res.status < 200 || res.status >= 300) {

                this._alertCtrl.create({
                    title: 'Problema no login',
                    subTitle: 'Email ou senha inválidos. Verifique os dados e tente novamente.',
                    buttons: [{ text: 'Ok'}]
                    }).present();
            }else{
                console.log("SUCESSO");
            }
        })
        .toPromise()
        .then()
        .catch();
    }

    signUp(username: string, userEmail: string, userPassword: string) {
        let api = `http://scti.herokuapp.com/api/signup`;

        return this._http
        .post(api,
            {
                name: username,
                email: userEmail, 
                password: userPassword
            })
        .map(res => { 
            //AQUI EU FAÇO A REQUISIÇÃO
            console.log("entrou");
            if(res.status < 200 || res.status >= 300) {
                console.log('This request has failed ' + res.status);
            
                this._alertCtrl.create({
                    title: 'Problema no login',
                    subTitle: 'Email ou senha inválidos. Verifique',
                    buttons: [{ text: 'Ok'}]
                    }).present();
            }else{

                console.log("SUCESSO");
            }
        })
        .toPromise()
        .then()
        .catch();

    }

}