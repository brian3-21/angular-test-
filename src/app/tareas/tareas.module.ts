import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddListComponent } from './components/add-list/add-list.component';
import { MainPageComponent } from './pages/pages.component';
import { ListTareasComponent } from './components/list-tareas/list-tareas.component';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    AddListComponent,
    MainPageComponent,
    ListTareasComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
  ],
  exports:[
    AddListComponent,
    MainPageComponent
  ]
})
export class TareasModule { }
