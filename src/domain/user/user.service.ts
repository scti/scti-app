import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

@Injectable()
export class UserService {
    
    private _token;
    private _workshops;


    constructor(private _http: Http) { }

    login(userEmail: string, userPassword: string) {

            let api = `http://scti.herokuapp.com/api/signin`;
            
            return this._http
            .post(api,
            {
                email: userEmail,
                password: userPassword
            })
            .map(res => res.json())
            .toPromise()
            .then(dado => {
                console.log(dado);
                this._token = dado.token;
            })
    }

    listWorkshops(userToken: string){
        let api = `http://scti.herokuapp.com/api/authenticate`
        
        return this._http
        .post(api,
        {
            token: userToken
        })
        .map(res => res.json())
        .toPromise()
        .then(dado => {
            console.log(api);
            console.log(dado.workshops);
            this._workshops = dado.workshops;
        })
    }

    getCurrentUser() {
        return this._token;
    }
    
    getWorkshops(){
        return this._workshops;
    }
}