import { Component, NgModule } from '@angular/core';
import { RouterModule } from '@angular/router'; 
import { ListComponent } from "./list/list.component";
import { AddComponent } from "./add/add.component";

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
})
export class AppComponent {
  title = 'apihttp';
}

@NgModule({
  declarations: [
    ListComponent, 
    
  ],
  imports: [
    RouterModule, AddComponent
  ],
  providers: [
    
  ],
  exports: [
    ListComponent,
    
  ],
})
export class AppModule {} 