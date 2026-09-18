import { Routes } from '@angular/router';
import { About } from './features/about/about/about';
import { ServicesList } from './features/services-section/services-list/services-list';
import { ContactForm } from './features/contact/contact-form/contact-form';
import { JobsList } from './features/jobs/jobs-list/jobs-list';
import { authGuard } from './core/guards/auth-guard';
import { Login } from './features/admin/login/login';
import { Home } from './features/home/home/home';
export const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: Home },
  { path: 'sobre-nosotros', component: About },
  { path: 'servicios', component: ServicesList },
  { path: 'empleos', component: JobsList },
  { path: 'contacto', component: ContactForm },
  { path: 'admin/login', component: Login },

  // rutas con guardia de autenticación para el panel de administración
  {
    path: 'admin',
    canActivate: [authGuard],
    loadComponent: () => import('./features/admin/dashboard/dashboard').then((m) => m.Dashboard),
  },
];
