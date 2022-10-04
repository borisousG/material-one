import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HexButtonComponent } from './hex-button/hex-button.component';

@NgModule({
  declarations: [
    HexButtonComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    CommonModule,
    HexButtonComponent
  ]
})
export class SharedModule { }
