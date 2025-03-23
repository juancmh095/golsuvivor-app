import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'login',
    loadComponent: () => import('./auth/registro/registro.component').then((m) => m.RegistroComponent),
  },
  {
    path: 'verify',
    loadComponent: () => import('./auth/code-verify/code-verify.component').then((m) => m.CodeVerifyComponent),
  },
  {
    path: 'administrador',
    loadComponent: () => import('./admin/admin-home/admin-home.component').then((m) => m.AdminHomeComponent),
  },
  {
    path: 'player',
    loadChildren: () => import('./player/player/player-routing.module').then((m) => m.PlayerRoutingModule),
  },
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full',
  },
];
