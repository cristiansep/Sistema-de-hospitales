import { Component, OnInit } from '@angular/core';
import { UsuarioService } from '../../services/service.index';
import { Usuario } from '../../models/usuario.model';
import { Router } from '@angular/router';
import { MedicoService } from '../../services/medico/medico.service';
import { Medico } from 'src/app/models/medico.model';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styles: []
})
export class HeaderComponent implements OnInit {

  usuario: Usuario;
  medicos: Medico[] = [];

  constructor(
    public usuarioService: UsuarioService,
    public medicoService: MedicoService,
    public router: Router
    ) { }

  ngOnInit() {
    this.usuario = this.usuarioService.usuario;
    this.cargarMedicos();
  }

  cargarMedicos() {
    this.medicoService.cargarMedicos()
      .subscribe((resp: any) => {
        this.medicos = resp.medicos;
        console.log(resp);
      });
  }

  buscar(termino: string ) {
    this.router.navigate(['/busqueda', termino]);
  }

}
