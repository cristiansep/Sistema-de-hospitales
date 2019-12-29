import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Hospital } from '../../models/hospital.model';
import { MedicoService } from '../../services/service.index';
import { HospitalService } from '../../services/service.index';
import { Medico } from '../../models/medico.model';
import { Router, ActivatedRoute } from '@angular/router';
import { ModalUploadService } from '../../components/modal-upload/modal-upload.service';

@Component({
  selector: 'app-medico',
  templateUrl: './medico.component.html',
  styles: []
})
export class MedicoComponent implements OnInit {

  hospitales: Hospital[] = [];
  medico: Medico = new Medico('', '', '', '', '');
  hospital: Hospital = new Hospital('');

  constructor(
    public medicoService: MedicoService,
    public hospitalService: HospitalService,
    public router: Router,
    public activatedRoute: ActivatedRoute,
    public modalUploadService: ModalUploadService
  ) {
    activatedRoute.params.subscribe(params => {
            let id = params[`id`];

            if (id !== 'nuevo') {
              this.obtenerMedico(id);
            }
    });
   }

  ngOnInit() {
    this.hospitalService.cargarTodosLosHospitales()
                        .subscribe((resp: any) => this.hospitales = resp.hospitales);

    this.modalUploadService.notificacion.subscribe(resp => {
      this.medico.img = resp.medico.img;
    });
  }

  guardarMedico(f: NgForm) {
    if (f.invalid) {
      return;
    }
    this.medicoService.guardarMedico(this.medico)
      .subscribe(medico => {
        this.medico._id = medico._id;
        this.router.navigate(['/medico', medico._id]);
      });
  }

  cambioHospital( id: string ) {
    this.hospitalService.obtenerHospital(id)
          .subscribe(hospital => this.hospital = hospital);
  }

  obtenerMedico(id: string) {
        this.medicoService.obtenerMedico(id)
                          .subscribe(medico => {
                            this.medico = medico;
                            this.medico.hospital = medico.hospital._id;
                            this.cambioHospital(this.medico.hospital);
                          });
  }


  cambiarFoto() {
      this.modalUploadService.mostrarModal('medicos', this.medico._id);
  }

}
