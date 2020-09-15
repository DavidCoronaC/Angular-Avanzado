import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// Modulos
import { PagesRoutingModule } from './pages/pages.routing';
import { AuthRoutingModule } from './auth/auth.routing';

import { NotpagesfoundComponent } from './notpagesfound/notpagesfound.component';




const routes: Routes = [

  // path: '/dashboard', PagesRouting,
  // path: '/auth', AuthRouting
  { path: '', pathMatch: 'full', redirectTo: '/dashboard' },
  { path: '**', component: NotpagesfoundComponent },
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {useHash: true}),
            PagesRoutingModule,
            AuthRoutingModule],

  exports: [RouterModule]
})
export class AppRoutingModule { }
