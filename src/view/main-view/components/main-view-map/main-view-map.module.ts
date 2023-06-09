import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainViewMapComponent } from './main-view-map.component';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MarkerInfoModalModule } from '@shared';
import { MatDialogModule } from '@angular/material/dialog';



@NgModule({
  declarations: [
    MainViewMapComponent
  ],
  imports: [
    CommonModule,
    MatIconModule,
    MatButtonModule,
    MarkerInfoModalModule,
    MatDialogModule,
  ],
  exports: [
    MainViewMapComponent,
  ]
})
export class MainViewMapModule { }
