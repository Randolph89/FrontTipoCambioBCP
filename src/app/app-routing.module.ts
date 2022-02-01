import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { TipoCambioComponent } from './components/tipo-cambio/tipo-cambio.component';

const routes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'tipoCambio', component: TipoCambioComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
