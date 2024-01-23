import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component'; 
import { NgModule } from '@angular/core';
import { TableComponent } from './table/table.component';

export const routes: Routes = [
  { path: '', component: AppComponent }, 
  { path: '', component: TableComponent }, 

  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {  

}