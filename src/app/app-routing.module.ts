import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginGuard } from './login.guard';
import { LoginformComponent } from './loginform/loginform.component';
import { RegformComponent } from './regform/regform.component';
import { ReglistComponent } from './reglist/reglist.component';

const routes: Routes = [
  { path: '', redirectTo: 'loginform', pathMatch: 'full' },
  { path: 'loginform', component: LoginformComponent },
  { path: 'reglist', component: ReglistComponent },
  { path: 'regform', component: RegformComponent, canActivate: [LoginGuard] },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
