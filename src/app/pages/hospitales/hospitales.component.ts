import { Component, OnInit } from '@angular/core';
import { Hospital } from '../../models/hospital.model';
import { HospitalService } from '../../services/service.index';
import Swal from 'sweetalert2';
import { async } from '@angular/core/testing';
import { ModalUploadService } from '../../components/modal-upload/modal-upload.service';

@Component({
  selector: 'app-hospitales',
  templateUrl: './hospitales.component.html',
  styles: []
})
export class HospitalesComponent implements OnInit {

  hospitales: Hospital[] = [];

  desde: number = 0;
  totalRegistros: number = 0;
  cargando: boolean = true;

  constructor(
    public hospitalService: HospitalService,
    public modalUploadService: ModalUploadService
  ) { }

  ngOnInit() {
    this.cargarHospitales();

    this.modalUploadService.notificacion
        .subscribe(resp => this.cargarHospitales());
  }

  cargarHospitales() {

    this.cargando = true;
    this.hospitalService.cargarHospitales(this.desde)
      .subscribe((resp: any) => {
        this.totalRegistros = resp.total;
        this.hospitales = resp.hospitales;
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
    this.cargarHospitales();

  }

  buscarHospital(termino: string) {

    if (termino.length <= 0) {
        this.cargarHospitales();
        return;
    }
    this.hospitalService.buscarHospital(termino)
                        .subscribe(hospitales => this.hospitales = hospitales);
  }

  guardarHospital( hospital: Hospital ) {
    this.hospitalService.actualizarHospital(hospital)
                        .subscribe();
  }

  borrarHospital( hospital: Hospital ) {
      this.hospitalService.borrarHospital(hospital._id)
                          .subscribe(() => this.cargarHospitales());
  }

  crearHospital() {
    Swal
      .fire({
        icon: 'info',
        title: 'Crear hospital',
        text: 'Ingrese el nombre del hospital',
        input: 'text',
        showCancelButton: true,
        confirmButtonText: 'Guardar',
        cancelButtonText: 'Cancelar',
        inputValidator: nombre => {
          // Si el valor es válido, se regresa undefined. Si no, una cadena
          if (!nombre) {
            return 'Por favor ingrese un nombre de un hospital';
          } else {
            return;
          }
        }
      })
      .then(resultado => {
        if (resultado.value) {
          const nombre = resultado.value;
          Swal.fire({
            icon: 'success',
            title: 'Hospital creado',
            text: nombre
          });
          this.hospitalService.crearHospital(nombre)
          .subscribe(() => this.cargarHospitales());
        }
      });
  }

  actualizarImagen(id: string) {
    this.modalUploadService.mostrarModal('hospitales', id);
  }

}