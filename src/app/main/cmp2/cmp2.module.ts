import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Cmp2Component } from './cmp2.component';
import { RouterModule, Routes } from '@angular/router';
import { HeadersModule } from '../../shared/headers/headers.module';

const cmp2Routes: Routes = [
  {
    path: '',
    component: Cmp2Component
  }
];

@NgModule({
  declarations: [
    Cmp2Component
  ],
  imports: [
    CommonModule,
    HeadersModule,
    RouterModule.forChild(cmp2Routes)
  ]
})
export class Cmp2Module { }
