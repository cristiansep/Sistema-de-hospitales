import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-graficas',
  templateUrl: './graficas.component.html',
  styles: []
})
export class GraficasComponent implements OnInit {


  graficos: any = {
    'grafico1': {
      'labels': ['Hospital Base', 'Hospital Quilacahuin', 'Hospital San juan de la costa'],
      'data': [24, 30, 46],
      'type': 'doughnut',
      'leyenda': '¿Que establecimiento hospitalario presta la mejor asistencia?'
    },
    'grafico2': {
      'labels': ['Hombres', 'Mujeres'],
      'data': [4500, 6000],
      'type': 'doughnut',
      'leyenda': 'Entrevistados'
    },
    'grafico3': {
      'labels': ['Si', 'No'],
      'data': [95, 5],
      'type': 'doughnut',
      'leyenda': '¿Le molesta mucho la espera en los hospitales?'
    },
    'grafico4': {
      'labels': ['No', 'Si'],
      'data': [85, 15],
      'type': 'doughnut',
      'leyenda': '¿Le importa la nacionanlidad del profesional que lo atiende?'
    },
  };

  constructor() { }

  ngOnInit() {
  }

}
