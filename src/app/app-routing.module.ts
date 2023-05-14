import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: "heroe", loadChildren: () => import('./heroes/heroes.module').then(m => m.HeroesModule) },
  { path: "contador", loadChildren: () => import('./contadores/contadores.module').then(m => m.ContadoresModule) },
  { path: "dbz", loadChildren: () => import('./dbz/dbz.module').then(m => m.DbzModule) },
  {
    path: '',
    redirectTo: '',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
