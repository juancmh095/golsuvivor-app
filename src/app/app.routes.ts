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
    loadComponent: () => import('./player/player-home/player-home.component').then((m) => m.PlayerHomeComponent),
  },
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full',
  },
];
