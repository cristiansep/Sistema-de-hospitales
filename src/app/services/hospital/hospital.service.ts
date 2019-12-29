import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Hospital } from '../../models/hospital.model';
import { URL_SERVICIOS } from '../../config/config';
import Swal from 'sweetalert2';

import { map, catchError } from 'rxjs/operators';

import { Router } from '@angular/router';
import { Observable, throwError } from 'rxjs';
import { SubirArchivoService } from '../subir-archivo/subir-archivo.service';
import { UsuarioService } from '../usuario/usuario.service';

@Injectable({
  providedIn: 'root'
})
export class HospitalService {


  totalHospitales: number = 0;

  constructor(
    public http: HttpClient,
    public usuarioService: UsuarioService
    ) { }

  cargarHospitales(desde: number = 0) {
    let url = URL_SERVICIOS + '/hospital?desde=' + desde;

    return this.http.get(url);
      // .pipe(map((resp: any) => {
      //   this.totalHospitales = resp.total;
      //   return resp.hospitales;
      // }));
  }

  cargarTodosLosHospitales() {
    let url = URL_SERVICIOS + '/hospital';

    return this.http.get(url);
  }

  obtenerHospital(id: string) {
    let url = URL_SERVICIOS + '/hospital/' + id;

    return this.http.get(url)
      .pipe(map((resp: any) => resp.hospital));
  }

  borrarHospital(id: string) {
    let url = URL_SERVICIOS + '/hospital/' + id;
    url += '?token=' + this.usuarioService.token;

    return this.http.delete(url)
                    .pipe(map(resp => {
                      console.log(resp);
                      Swal.fire(
                        'Eliminado!',
                        'Hospital eliminado correctamente.',
                        'success'
                      );
                      return true;
                    }));
  }

  crearHospital(nombre: string) {
    let url = URL_SERVICIOS + '/hospital';
    url += '?token=' + this.usuarioService.token;

    return this.http.post(url , { nombre } )
                    .pipe(map((resp: any) => {
                      // Swal.fire({
                      //   icon: 'success',
                      //   title: 'Hospital creado de forma correcta' // usuario.email
                      // });
                      return resp.hospital;
                    }));
  }

  buscarHospital(termino: string) {
    let url = URL_SERVICIOS + '/busqueda/coleccion/hospitales/' + termino;
    return this.http.get(url)
      .pipe(map((resp: any) => resp.hospitales));
  }



  actualizarHospital(hospital: Hospital) {

    let url = URL_SERVICIOS + '/hospital/' + hospital._id;
    url += '?token=' + this.usuarioService.token;


    return this.http.put(url, hospital)
      .pipe(map((resp: any) => {

        // if (hospital._id === this.hospital._id) {
        //   this.guardarStorage(resp.id, resp.token, resp.usuario);
        // }
        Swal.fire({
          icon: 'success',
          title: 'Hospital actualizado',
          text: hospital.nombre
        });
        return resp.hospital;
      }));

  }
}
