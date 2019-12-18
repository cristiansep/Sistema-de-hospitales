import { Component, OnInit, NgZone } from '@angular/core';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';
import { UsuarioService } from '../services/service.index';
import { Usuario } from '../models/usuario.model';
import Swal from 'sweetalert2';
import { element } from 'protractor';




declare function init_plugins();
declare const gapi: any;


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  email: string;
  recordar: boolean;

  auth2: any;

  constructor(
    public router: Router,
    public usuarioService: UsuarioService,
    public ngZone: NgZone) { }

  ngOnInit() {
    init_plugins();
    this.googleInit();

    this.email = localStorage.getItem('email') || '';
    if (this.email.length > 1) {
      this.recordar = true;
    }
  }

  googleInit() {
    gapi.load('auth2', () => {
      this.auth2 = gapi.auth2.init({
        client_id: '582561889772-7igcfl6hk3blfb6a72hfi83giv0rl4fb.apps.googleusercontent.com',
        cookiepolicy: 'single_host_origin',
        scope: 'profile email'
      });

      this.attachSignin(document.getElementById('btnGoogle'));
    });
  }

  attachSignin( element ) {
    this.auth2.attachClickHandler( element, {}, (googleUser) => {

      // const profile = googleUser.getBasicProfile();
      const token = googleUser.getAuthResponse().id_token;

      this.usuarioService.loginGoogle(token)
                          .subscribe(() => this.ngZone.run(() => this.router.navigate(['/home'])));
    });
  }

  ingresar(forma: NgForm) {

    if (forma.invalid) {
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Something went wrong!',
        footer: '<a href>Why do I have this issue?</a>'
      });
      return;
    }


    const usuario = new Usuario(null, forma.value.email, forma.value.pass);
    this.usuarioService.login(usuario, forma.value.recordar)
                        .subscribe(ok => this.router.navigate(['/home']));
  }

}
