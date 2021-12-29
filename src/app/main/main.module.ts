import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainComponent } from './main.component';
import { RouterModule, Routes } from '@angular/router';

const mainRoutes: Routes = [
  {
    path: '',
    component: MainComponent,
    children: [
      {
        path: 'cmp1',
        loadChildren: () => import('./cmp1/cmp1.module').then(m => m.Cmp1Module)
      },
      {
        path: 'cmp2',
        loadChildren: () => import('./cmp2/cmp2.module').then(m => m.Cmp2Module)
      }
    ]
  }
];

@NgModule({
  declarations: [
    MainComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(mainRoutes)
  ]
})
export class MainModule { }
