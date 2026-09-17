import { Routes } from '@angular/router';
import { About } from './features/about/about/about';
import { ServicesList } from './features/services-section/services-list/services-list';
import { ContactForm } from './features/contact/contact-form/contact-form';
import { JobsList } from './features/jobs/jobs-list/jobs-list';

export const routes: Routes = [
  { path: '', redirectTo: 'sobre-nosotros', pathMatch: 'full' },
  { path: 'sobre-nosotros', component: About },
  { path: 'servicios', component: ServicesList },
  { path: 'empleos', component: JobsList },
  { path: 'contacto', component: ContactForm },
];
