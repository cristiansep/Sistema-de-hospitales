import { Component, OnInit } from '@angular/core';
import { environment } from '../../../environments/environment';
import * as Mapboxgl from 'mapbox-gl';
import { MedicoService } from '../../services/medico/medico.service';
import { Medico } from 'src/app/models/medico.model';

@Component({
  selector: 'app-progress',
  templateUrl: './progress.component.html',
  styles: []
})
export class ProgressComponent implements OnInit {

  lat: number = -40.5725;
  lng: number = -73.1353;

  medicos: Medico[] = [];
  mapa: Mapboxgl.Map;

  constructor(
   private medicoService: MedicoService
  ) { }

  ngOnInit() {

    this.cargarTodosLosMedicos();

    (Mapboxgl as typeof Mapboxgl).accessToken = environment.mapBoxKey;
    this.mapa = new Mapboxgl.Map({
      container: 'mapa-mapbox',
      style: 'mapbox://styles/mapbox/streets-v11',
      center: [-73.1353, -40.5725],
      zoom: 12.15
    });

    this.pruebaMarcador(-73.1305086, -40.5875619 );
    this.pruebaMarcador2(-73.263052, -40.3680301);
    this.pruebaMarcador3(-73.6286929, -40.538924);
    this.pruebaMarcador4(-73.2421703, -39.8323463);

  }


  cargarTodosLosMedicos() {
    this.medicoService.cargarTodosLosMedicos()
      .subscribe((resp: any) => {
        this.medicos = resp.medicos;
        console.log(resp);
      });
  }

  pruebaMarcador(lng: number, lat: number) {

    const popup = new Mapboxgl.Popup({ offset: 25 }).setText(
      'Dr Guillermo Buhler 1765, Osorno, Los Lagos.'
    );


    const marker = new Mapboxgl.Marker({
      draggable: false,
    })
      .setLngLat([lng, lat])
      .setPopup(popup)
      .addTo(this.mapa);
  }

  pruebaMarcador2(lng: number, lat: number) {

    const popup = new Mapboxgl.Popup({ offset: 25 }).setText(
      'U-10, Mision Quilacahuin, San Pablo, Los Lagos.'
    );


    const marker = new Mapboxgl.Marker({
      draggable: false
    })
      .setLngLat([lng, lat])
      .setPopup(popup)
      .addTo(this.mapa);


  }

  pruebaMarcador3(lng: number, lat: number) {

    const popup = new Mapboxgl.Popup({ offset: 25 }).setText(
      'GH5W+CM Mision San Juan de la Costa, San Juan de la Costa.'
    );


    const marker = new Mapboxgl.Marker({
      draggable: false
    })
      .setLngLat([lng, lat])
      .setPopup(popup)
      .addTo(this.mapa);


  }

  pruebaMarcador4(lng: number, lat: number) {

    const popup = new Mapboxgl.Popup({ offset: 25 }).setText(
      'Av. Simpson 801-899, Valdivia, Los Ríos'
    );


    const marker = new Mapboxgl.Marker({
      draggable: false
    })
      .setLngLat([lng, lat])
      .setPopup(popup)
      .addTo(this.mapa);


  }
}