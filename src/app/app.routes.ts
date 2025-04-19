import { Routes } from '@angular/router';
import { AuthGuard } from '../guard/auth.guard';
import { VerifyGuard } from '../guard/verify.guard';

export const routes: Routes = [
  {
    path: 'login',
    loadComponent: () => import('./auth/registro/registro.component').then((m) => m.RegistroComponent),
  },
  {
    path: 'verify',
    loadComponent: () => import('./auth/code-verify/code-verify.component').then((m) => m.CodeVerifyComponent),
    canActivate: [VerifyGuard]
  },
  {
    path: 'administrador',
    loadComponent: () => import('./admin/admin-home/admin-home.component').then((m) => m.AdminHomeComponent),
  },
  {
    path: 'player',
    loadChildren: () => import('./player/player/player-routing.module').then((m) => m.PlayerRoutingModule),
    canActivate: [AuthGuard]
  },
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full',
  },
];
