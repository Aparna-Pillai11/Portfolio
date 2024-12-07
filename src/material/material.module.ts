import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatToolbar } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,MatToolbar
  
  ],
  exports:[ MatToolbar,
    MatButtonModule,
    MatIconModule]
})
export class MaterialModule { }
