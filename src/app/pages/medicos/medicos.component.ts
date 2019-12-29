import { Component, OnInit } from '@angular/core';
import { Medico } from '../../models/medico.model';
import { MedicoService } from '../../services/medico/medico.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-medicos',
  templateUrl: './medicos.component.html',
  styles: []
})
export class MedicosComponent implements OnInit {

  medicos: Medico[] = [];

  desde: number = 0;
  totalRegistros: number = 0;
  cargando: boolean = true;

  constructor(
    public medicoService: MedicoService
  ) { }

  ngOnInit() {
    this.cargarMedicos();
  }

  cargarMedicos() {

    this.cargando = true;
    this.medicoService.cargarMedicos(this.desde)
      .subscribe((resp: any) => {
        this.totalRegistros = resp.total;
        this.medicos = resp.medicos;
        this.cargando = false;
      });
  }

  cambiarDesde(valor: number) {
    let desde = this.desde + valor;

    if (desde >= this.totalRegistros) {
      return;
    }
    if (desde < 0) {
      return;
    }

    this.desde += valor;
    this.cargarMedicos();

  }

  buscarMedico(termino: string) {
    if (termino.length <= 0) {
      this.cargarMedicos();
      return;
    }
    this.cargando = true;
    this.medicoService.buscarMedicos(termino)
                       .subscribe((medicos: Medico[]) => {
                          this.medicos = medicos;
                          this.cargando = false;
                       });
  }

  borrarMedico(medico: Medico) {
    Swal.fire({
      title: '¿Esta seguro?',
      text: 'Esta a punto de borrar a ' + medico.nombre,
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Si, borrar medico!'
    }).then((borrar) => {
      if (borrar.value) {
        this.medicoService.borrarMedico(medico._id)
          .subscribe(() => {
            this.cargarMedicos();
          });

      }
    });

  }

}
