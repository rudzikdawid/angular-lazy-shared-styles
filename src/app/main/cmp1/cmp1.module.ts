import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { Cmp1Component } from './cmp1.component';
import { HeadersModule } from '../../shared/headers/headers.module';

const cmp1Routes: Routes = [
  {
    path: '',
    component: Cmp1Component
  }
];

@NgModule({
  declarations: [
    Cmp1Component
  ],
  imports: [
    CommonModule,
    HeadersModule,
    RouterModule.forChild(cmp1Routes)
  ]
})
export class Cmp1Module { }
