import { Injectable } from '@angular/core';
import { UsuarioService } from '../usuario/usuario.service';

@Injectable({
  providedIn: 'root'
})
export class SidebarService {

  menu: any[] = [];
  // menu: any = [
  //   {
  //     titulo: 'Inicio',
  //     icono: 'mdi mdi-gauge',
  //     submenu: [
  //       { titulo: 'Home', url: '/home' },
  //       { titulo: 'Progress', url: '/progress' },
  //       { titulo: 'Graficas', url: '/graficas' }
  //     ]
  //   },
  //   {
  //     titulo: 'Mantenimiento',
  //     icono: 'mdi mdi-folder-lock-open',
  //     submenu: [
  //       { titulo: 'Usuarios', url: '/usuarios' },
  //       { titulo: 'Hospitales', url: '/hospitales' },
  //       { titulo: 'Medicos', url: '/medicos' }
  //     ]
  //   }
  // ];

  constructor(
    public usuarioService: UsuarioService
  ) { }


  cargarMenu() {
    this.menu = this.usuarioService.menu;
  }
}
