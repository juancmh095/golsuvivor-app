import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    loadComponent: () => import('../player-home/player-home.component').then(m => m.PlayerHomeComponent)
  },
  {
    path: 'categorias',
    loadComponent: () => import('../categorias/detalle-categorias/detalle-categorias.component').then(m => m.DetalleCategoriasComponent)
  },
  {
    path: 'grupo/detalle',
    loadComponent: () => import('../grupos/detalle-grupo/detalle-grupo.component').then(m => m.DetalleGrupoComponent)
  },
  {
    path: 'grupo/crear',
    loadComponent: () => import('../grupos/crear-grupo/crear-grupo.component').then(m => m.CrearGrupoComponent)
  },
  {
    path: 'grupo/ganador',
    loadComponent: () => import('../grupos/winner-grupo/winner-grupo.component').then(m => m.WinnerGrupoComponent)
  },
  {
    path: 'grupo/pago',
    loadComponent: () => import('../grupos/pago-grupo/pago-grupo.component').then(m => m.PagoGrupoComponent)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PlayerRoutingModule {}
