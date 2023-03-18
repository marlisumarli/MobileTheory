import {Component} from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor(
    private router: Router

  ) {}

  form = {
    email: '',
    password: ''
  }

  doLogin = () => {
    localStorage.setItem('email', this.form.email);
    localStorage.setItem('password', this.form.password);

    this.router.navigateByUrl('/welcome').then(r => console.log(r));
  }

}
