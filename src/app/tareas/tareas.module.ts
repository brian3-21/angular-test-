import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddListComponent } from './components/add-list/add-list.component';
import { MainPageComponent } from './pages/pages.component';



@NgModule({
  declarations: [
    AddListComponent,
    MainPageComponent,
  ],
  imports: [
    CommonModule,
  ],
  exports:[
    AddListComponent,
    MainPageComponent
  ]
})
export class TareasModule { }
