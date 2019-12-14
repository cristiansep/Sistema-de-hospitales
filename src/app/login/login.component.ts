import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';
import { UsuarioService } from '../services/service.index';
import { Usuario } from '../models/usuario.model';
import Swal from 'sweetalert2';




declare function init_plugins();


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  email: string;
  recordar: boolean;

  constructor( public router: Router, public usuarioService: UsuarioService) { }

  ngOnInit() {
    init_plugins();

    this.email = localStorage.getItem('email') || '';
    if (this.email.length > 1) {
      this.recordar = true;
    }
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
