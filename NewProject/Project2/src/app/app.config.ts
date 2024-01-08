import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { routes } from './app.component'; 

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}

export const appConfig = {
 
};