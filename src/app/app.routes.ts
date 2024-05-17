import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full' // para que a próxima rota seja redirecionada para a primeira
  },
  {
    path: 'home',
    loadComponent: () =>
      import('home').then((m) => m.HomeComponent) // -> Lazy loading
  },
  {
    path: 'users',
    loadComponent: () =>
      import('users').then((m) => m.UsersComponent) // -> Lazy loading
  },
];
