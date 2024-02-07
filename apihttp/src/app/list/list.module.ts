import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ListComponent } from './list.component';



@NgModule({
  declarations: [ListComponent ],
  imports: [
    CommonModule, FormsModule, 
  ]
})
export class ListModule { }
