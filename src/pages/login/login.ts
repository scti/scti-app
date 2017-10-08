import { Component } from '@angular/core';
import { UserService } from '../../domain/user/user.service';

@Component({
  selector: 'page-login',
  templateUrl: 'login.html'
})
export class LoginPage {

  public name: string = '';
  public email: string = '';  
  public password: string = '';

  constructor(
    private _service: UserService) {}

  login() { 
//    this._service.signUp(this.name, this.email, this.password);
    this._service.login(this.email, this.password);
  }
}