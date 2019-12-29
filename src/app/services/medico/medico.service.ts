import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { UsuarioService } from '../usuario/usuario.service';
import { HospitalService } from '../hospital/hospital.service';
import { URL_SERVICIOS } from '../../config/config';
import { map, catchError } from 'rxjs/operators';
import Swal from 'sweetalert2';
import { Medico } from '../../models/medico.model';

@Injectable({
  providedIn: 'root'
})
export class MedicoService {


  constructor(
    public http: HttpClient,
    public usuarioService: UsuarioService,
    public hospitalService: HospitalService
  ) { }

  cargarMedicos(desde: number = 0) {
    let url = URL_SERVICIOS + '/medico?desde=' + desde;

    return this.http.get(url);
  }

  buscarMedicos( termino: string ) {
    let url = URL_SERVICIOS + '/busqueda/coleccion/medicos/' + termino;
    return this.http.get(url)
                    .pipe(map((resp: any) => resp.medicos));
}

borrarMedico(id: string) {
  let url = URL_SERVICIOS + '/medico/' + id;
  url += '?token=' + this.usuarioService.token;

  return this.http.delete(url)
                  .pipe(map(resp => {
                    Swal.fire(
                      'Eliminado!',
                      'Medico eliminado correctamente.',
                      'success'
                    );
                    return true;
                  }));
}


guardarMedico(medico: Medico) {
  let url = URL_SERVICIOS + '/medico';

  if (medico._id) {
    // Actualizando
    url += '/' + medico._id;
    url += '?token=' + this.usuarioService.token;

    return this.http.put(url, medico)
               .pipe(map((resp: any) => {
                Swal.fire({
                  icon: 'success',
                  title: 'Medico Actualizado',
                  text: medico.nombre
                });
                return resp.medico;
               }));
  } else {
    // Creando
    url += '?token=' + this.usuarioService.token;
    return this.http.post(url, medico)
      .pipe(map((resp: any) => {
        Swal.fire({
          icon: 'success',
          title: 'Medico Creado',
          text: medico.nombre
        });
        return resp.medico;
      }));
  }

  
}


obtenerMedico(id: string) {
  let url = URL_SERVICIOS + '/medico/' + id;

  return this.http.get(url)
             .pipe(map((resp: any) => resp.medico));
}
}
