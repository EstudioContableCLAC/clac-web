import { Routes } from '@angular/router';

export const routes: Routes = [
    {
      path: '',
      loadComponent: () => import('./pages/home-clac/home-clac.component').then(m => m.HomeClacComponent)
    },
    {
      path: 'services',
      loadComponent: () => import('./pages/services.component/services.component').then(m => m.ServicesComponent)
    },
    { path: 'services/contabilidad', loadComponent: () => import('./pages/services.component/contabilidad.component/contabilidad.component').then(m => m.ContabilidadComponent) },
    { path: 'services/tributacion',     loadComponent: () => import('./pages/services.component/tributaria.component/tributaria.component').then(m => m.TributariaComponent) },
    { path: 'services/laboral',     loadComponent: () => import('./pages/services.component/laboral.component/laboral.component').then(m => m.LaboralComponent) },
    { path: 'services/software',     loadComponent: () => import('./pages/services.component/software.component/software.component').then(m => m.SoftwareComponent) },
    { path: 'services/ingenieria',   loadComponent: () => import('./pages/services.component/ingenieria.component/ingenieria.component').then(m => m.IngenieriaComponent) },
    
    {
      path: 'pricing',
      loadComponent: () => import('./pages/princing.component/princing.component').then(m => m.PrincingComponent)
    },
    {
      path: 'about',
      loadComponent: () => import('./pages/about.component/about.component').then(m => m.AboutComponent)
    },
    {
      path: 'contact',
      loadComponent: () => import('./pages/contact.component/contact.component').then(m => m.ContactComponent)
    },
    {
      path: '**',
      redirectTo: ''
    }
  ];
