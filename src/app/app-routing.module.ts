import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AuthGuard } from './auth.guard';
import { AuthComponent } from './auth/auth.component';
import { BoxComponent } from './box/box.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  { path: 'auth', component: AuthComponent },
  { path: '', component: HomeComponent, canActivate: [AuthGuard] },
  { path: ':id', component: BoxComponent, canActivate: [AuthGuard] },
  { path: '**', redirectTo: '' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
