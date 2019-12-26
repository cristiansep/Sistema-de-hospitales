import { RouterModule , Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ProgressComponent } from './progress/progress.component';
import { PagesComponent } from './pages.component';
import { RxjsComponent } from './rxjs/rxjs.component';
import { GraficasComponent } from './graficas/graficas.component';
import { LoginGuardGuard } from '../services/guards/login-guard.guard';
import { ProfileComponent } from './profile/profile.component';
import { UsuariosComponent } from './usuarios/usuarios.component';
import { HospitalesComponent } from './hospitales/hospitales.component';

const pagesRoutes: Routes = [
    {
        path: '',
        component: PagesComponent,
        canActivate: [ LoginGuardGuard ],
        children: [
            { path: 'home', component: HomeComponent, data: {titulo: 'Home'} },
            { path: 'progress', component: ProgressComponent, data: {titulo: 'Progress'}  },
            { path: 'graficas', component: GraficasComponent, data: {titulo: 'Graficas'}  },
            { path: 'rxjs', component: RxjsComponent, data: {titulo: 'Rxjs'}  },
            { path: 'perfil', component: ProfileComponent, data: {titulo: 'Perfil de usuario'}},
            // Mantenimientos
            { path: 'usuarios', component: UsuariosComponent, data: {titulo: 'Mantenimiento de usuarios'}},
            { path: 'hospitales', component: HospitalesComponent, data: {titulo: 'Mantenimiento de hospitales'}},
            { path: '', redirectTo: '/home', pathMatch: 'full' }
        ]
    }
] ;

export const PAGES_ROUTES = RouterModule.forChild( pagesRoutes ) ;