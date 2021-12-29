import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeadersComponent } from './headers.component';


@NgModule({
  declarations: [
    HeadersComponent
  ],
  exports: [
    HeadersComponent
  ],
  imports: [
    CommonModule
  ]
})
export class HeadersModule { }
