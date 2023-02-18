import { NgModule, Injectable } from '@angular/core';
import { RouterModule, Routes, Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';

import { AuthComponent } from './components/auth/auth.component';
import { BoxComponent } from './components/box/box.component';
import { HomeComponent } from './components/home/home.component';
import { BackendService } from './services/backend.service';

@Injectable({ providedIn: 'root' })
export class AuthGuard implements CanActivate {

  constructor(
    private backend: BackendService,
    private router: Router,
  ) {}

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    if (this.backend.auth) {
      return true;
    } else {
      this.backend.authUrl = state.url
      console.log(this.backend.authUrl)
      
      this.router.navigate(['/auth/']);
      return false;
    }
  }

}

const routes: Routes = [
  { path: 'auth', component: AuthComponent },
  { path: '', component: HomeComponent, canActivate: [AuthGuard] },
  { path: ':id', component: BoxComponent, canActivate: [AuthGuard] },
  { path: '**', redirectTo: '' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
