import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'technologies', pathMatch: 'full' },
  { path: 'technologies', loadChildren: () => import('./pages/technologies/technologies.module').then( m => m.TechnologiesPageModule)},
  {
    path: 'links',
    loadChildren: () => import('./pages/links/links.module').then( m => m.LinksPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
  
})
export class AppRoutingModule { }
