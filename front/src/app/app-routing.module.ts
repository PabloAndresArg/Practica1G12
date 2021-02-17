import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {MenuCrudComponent} from './components/menu-crud/menu-crud.component';
import {CreateComponent} from './components/create/create.component';
const routes: Routes = [
  {path: '', component: MenuCrudComponent},
  {path:'create' , component: CreateComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
