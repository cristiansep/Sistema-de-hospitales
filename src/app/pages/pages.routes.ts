import { RouterModule , Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ProgressComponent } from './progress/progress.component';
import { PagesComponent } from './pages.component';
import { RxjsComponent } from './rxjs/rxjs.component';
import { GraficasComponent } from './graficas/graficas.component';
import { LoginGuardGuard } from '../services/service.index';
import { ProfileComponent } from './profile/profile.component';
import { UsuariosComponent } from './usuarios/usuarios.component';
import { HospitalesComponent } from './hospitales/hospitales.component';
import { MedicosComponent } from './medicos/medicos.component';
import { MedicoComponent } from './medicos/medico.component';
import { BusquedaComponent } from './busqueda/busqueda.component';
import { AdminGuard } from '../services/service.index';
import { VerificaTokenGuard } from '../services/guards/verifica-token.guard';
import { PerfilMedicoComponent} from './perfil-medico/perfil-medico.component'

const pagesRoutes: Routes = [
            { path: 'home', component: HomeComponent, canActivate: [VerificaTokenGuard], data: {titulo: 'Home'} },
            { path: 'progress', component: ProgressComponent, data: {titulo: 'Informaciónes'}  },
            { path: 'perfilmedico/:id', component: PerfilMedicoComponent, data: {titulo: 'Perfil médico'}  },
            { path: 'graficas', component: GraficasComponent, data: {titulo: 'Graficas'}  },
            { path: 'rxjs', component: RxjsComponent, data: {titulo: 'Rxjs'}  },
            { path: 'perfil', component: ProfileComponent, data: {titulo: 'Perfil de usuario'}},
            { path: 'busqueda/:termino', component: BusquedaComponent, data: {titulo: 'Buscador'}},
            // Mantenimientos
            {
                path: 'usuarios',
                component: UsuariosComponent,
                canActivate: [ AdminGuard ],
                data: { titulo: 'Mantenimiento de usuarios' }
            },
            { path: 'hospitales', component: HospitalesComponent, data: {titulo: 'Mantenimiento de hospitales'}},
            { path: 'medicos', component: MedicosComponent, data: {titulo: 'Mantenimiento de medicos'}},
            { path: 'medico/:id', component: MedicoComponent, data: {titulo: 'Actualizar Medico'}},
            { path: '', redirectTo: '/home', pathMatch: 'full' }
] ;

export const PAGES_ROUTES = RouterModule.forChild( pagesRoutes ) ;