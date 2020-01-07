import { Component, OnInit } from '@angular/core';
import { Usuario } from 'src/app/models/usuario.model';
import { Medico } from 'src/app/models/medico.model';
import { Hospital } from 'src/app/models/hospital.model';
import { MedicoService } from '../../services/medico/medico.service';
import { UsuarioService } from '../../services/usuario/usuario.service';
import { HospitalService } from '../../services/hospital/hospital.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styles: []
})
export class HomeComponent implements OnInit {

  usuarios: Usuario[] = [];
  medicos: Medico[] = [];
  hospitales: Hospital[] = [];



  visitas: any = {
    'usuarios': {
      'labels': ['Movil', 'Tablet', 'Laptop', 'otros'],
      'data': [24, 30, 46, 15],
      'type': 'doughnut',
      'leyenda': 'Visitas'
    },
    'grafico2': {
      'labels': ['Mujeres', 'Hombres'],
      'data': [65, 35],
      'type': 'doughnut',
      'leyenda': 'Atenciones'
    }
  };

  desde: number = 0;

  totalRegistros: number = 0;

  constructor(
    public medicoService: MedicoService,
    public usuarioService: UsuarioService,
    public hospitalService: HospitalService
  ) { }

  ngOnInit() {
    this.cargarMedicos();
    this.cargarUsuarios();
    this.cargarHospitales();
  }


  cargarMedicos() {
    this.medicoService.cargarMedicos()
      .subscribe((resp: any) => {
        this.medicos = resp.medicos;
        console.log(resp);
      });
  }

  cargarUsuarios() {


    this.usuarioService.cargarUsuarios(this.desde)
      .subscribe((resp: any) => {
        this.totalRegistros = resp.total;
        this.usuarios = resp.usuarios;
      });
  }

  cargarHospitales() {

    this.hospitalService.cargarHospitales()
      .subscribe((resp: any) => {
        this.hospitales = resp.hospitales;
      });
  }

}
