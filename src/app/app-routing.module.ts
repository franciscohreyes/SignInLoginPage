import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'signIn',
    loadChildren: () => import('./sign-in/sign-in.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'signIn',
    pathMatch: 'full'
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
