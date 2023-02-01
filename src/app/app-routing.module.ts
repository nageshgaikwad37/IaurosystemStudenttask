import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashbordComponent } from './shared/components/dashbord/dashbord.component';
import { LoginComponent } from './shared/components/login/login.component';
import { PageNotFoundComponent } from './shared/components/page-not-found/page-not-found.component';
import { StudentformComponent } from './shared/components/studentform/studentform.component';
import { AuthgaurdService } from './shared/service/authgaurd.service';

const routes: Routes = [
  {path: '', redirectTo:'login', pathMatch:'full'},
  {path:'login', component:LoginComponent},
  {path:'dashboard', component:DashbordComponent,canActivate:[AuthgaurdService]},
  {path:'studentAdd', component:StudentformComponent,canActivate:[AuthgaurdService]},
  {path:'studentAdd/:id', component:StudentformComponent,canActivate:[AuthgaurdService]},
  {path:'page-not-found', component: PageNotFoundComponent, data:{msg: 'This page is not available'}},
  {path:'**', redirectTo: 'page-not-found'} 
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
