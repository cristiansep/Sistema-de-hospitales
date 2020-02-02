import { Component, OnInit } from '@angular/core';
import { environment } from '../../../environments/environment';
import * as Mapboxgl from 'mapbox-gl';
import { MedicoService } from '../../services/medico/medico.service';
import { Medico } from 'src/app/models/medico.model';
import { Lugar } from 'src/app/interfaces/interfaces';


@Component({
  selector: 'app-progress',
  templateUrl: './progress.component.html',
  styles: []
})
export class ProgressComponent implements OnInit {

  medicos: Medico[] = [];
  mapa: Mapboxgl.Map;

  lugares: Lugar[] = [{
    id: '1',
    nombre: 'Hospital Base San Jose',
    texto: 'Dr Guillermo Buhler 1765, Osorno, Los Lagos.',
    lng: -73.1305086,
    lat: -40.5875619,
    color: '#dd8fee'
  },
  {
    id: '2',
    nombre: 'Hospital Intercultural Comunitario Pumulen',
    texto: 'U-10, Mision Quilacahuin, San Pablo, Los Lagos.',
    lng: -73.263052,
    lat: -40.3680301,
    color: '#790af0'
  },
  {
    id: '3',
    nombre: 'Hospital Misión San Juan de la Costa',
    texto: 'GH5W+CM Mision San Juan de la Costa, San Juan de la Costa.',
    lng: -73.6286929,
    lat: -40.538924,
    color: '#19884b'
  },
  {
    id: '4',
    nombre: 'Hospital Base Valdivia',
    texto: 'Av. Simpson 801-899, Valdivia, Los Ríos',
    lng: -73.2421703,
    lat: -39.8323463,
    color: '#ff4141'
  }
];

  constructor(
   private medicoService: MedicoService
  ) { }

  ngOnInit() {

    this.cargarTodosLosMedicos();
    // this.crearMapa();

  }


  cargarTodosLosMedicos() {
    this.medicoService.cargarTodosLosMedicos()
      .subscribe((resp: any) => {
        this.medicos = resp.medicos;
        console.log(resp);
      });
  }

  // crearMapa() {
  //   (Mapboxgl as typeof Mapboxgl).accessToken = environment.mapBoxKey;
  //   this.mapa = new Mapboxgl.Map({
  //     container: 'mapa-mapbox',
  //     style: 'mapbox://styles/mapbox/streets-v11',
  //     center: [-73.1353, -40.5725],
  //     zoom: 12.15
  //   });


  //   for (const marcador of this.lugares) {
  //       this.agregarMarcador(marcador);
  //   }


  // }

  // agregarMarcador(marcador: Lugar) {

  //   const html  = `<h2>${marcador.nombre}</h2>
  //                  <p>${marcador.texto}</p>`;

  //   const popup = new Mapboxgl.Popup({
  //     offset: 25
  //   })
  //   .setHTML(html);

  //   const marker = new Mapboxgl.Marker({
  //     draggable: false,
  //     color: marcador.color
  //   })
  //     .setLngLat([marcador.lng, marcador.lat])
  //     .setPopup(popup)
  //     .addTo(this.mapa);

  // }



}