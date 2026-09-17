import { Routes } from '@angular/router';
import { About } from './features/about/about/about';
import { ServicesList } from './features/services-section/services-list/services-list';
import { ContactForm } from './features/contact/contact-form/contact-form';

export const routes: Routes = [
  { path: '', redirectTo: 'sobre-nosotros', pathMatch: 'full' },
  { path: 'sobre-nosotros', component: About },
  { path: 'servicios', component: ServicesList },
  { path: 'contacto', component: ContactForm },
  // { path: 'empleos', component: JobsList },
];
