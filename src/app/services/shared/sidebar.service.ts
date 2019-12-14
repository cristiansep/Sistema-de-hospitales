import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SidebarService {

  menu: any = [
    {
      titulo: 'Inicio',
      icono: 'mdi mdi-gauge',
      submenu: [
        { titulo: 'Home', url: '/home' },
        { titulo: 'Progress', url: '/progress' },
        { titulo: 'Graficas', url: '/graficas' }
      ]
    }
  ];

  constructor() { }
}
