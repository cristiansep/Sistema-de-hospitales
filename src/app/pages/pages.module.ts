
import { NgModule } from '@angular/core';
import { PAGES_ROUTES } from './pages.routes';

import { SharedModule } from '../shared/shared.module';

import { FormsModule } from '@angular/forms';


// ng2-charts
import { ChartsModule } from 'ng2-charts';


import { GraficasComponent } from './graficas/graficas.component';
import { HomeComponent } from './home/home.component';
import { ProgressComponent } from './progress/progress.component';



// temporal
import { RxjsComponent } from './rxjs/rxjs.component';

// Pipe Module
import { PipesModule } from '../pipes/pipes.module';
import { ProfileComponent } from './profile/profile.component';
import { CommonModule } from '@angular/common';
import { UsuariosComponent } from './usuarios/usuarios.component';
import { HospitalesComponent } from './hospitales/hospitales.component';
import { MedicosComponent } from './medicos/medicos.component';
import { MedicoComponent } from './medicos/medico.component';
import { BusquedaComponent } from './busqueda/busqueda.component';
import { GraficoDonaComponent } from '../components/grafico-dona/grafico-dona.component';
import { GraficoLineaComponent } from '../components/grafico-linea/grafico-linea.component';



@NgModule({
    declarations: [
        HomeComponent,
        ProgressComponent,
        GraficasComponent,
        RxjsComponent,
        ProfileComponent,
        UsuariosComponent,
        HospitalesComponent,
        MedicosComponent,
        MedicoComponent,
        BusquedaComponent,
        GraficoDonaComponent,
        GraficoLineaComponent
    ],
    exports: [
        HomeComponent,
        ProgressComponent,
        GraficasComponent
    ],
    imports: [
        CommonModule,
        SharedModule,
        PAGES_ROUTES,
        FormsModule,
        PipesModule,
        ChartsModule
    ]
})
export class PagesModule { }