
import { NgModule } from '@angular/core';
import { PAGES_ROUTES } from './pages.routes';

import { SharedModule } from '../shared/shared.module';

import { FormsModule } from '@angular/forms';





import { PagesComponent } from './pages.component';
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
import { ModalUploadComponent } from '../components/modal-upload/modal-upload.component';



@NgModule({
    declarations: [
        PagesComponent,
        HomeComponent,
        ProgressComponent,
        GraficasComponent,
        RxjsComponent,
        ProfileComponent,
        UsuariosComponent,
        ModalUploadComponent
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
        PipesModule
    ]
})
export class PagesModule { }