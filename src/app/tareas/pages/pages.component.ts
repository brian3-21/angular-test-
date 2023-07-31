import { Component, Input } from '@angular/core';
import { Tarea } from '../interfaces/tarea.interface';
import { TareasService } from '../services/tareas.service';

@Component({
  templateUrl: './pages.component.html',
  styleUrls: ['./pages.component.css'],
  selector:'main-page-component',
})
export class MainPageComponent {

  constructor( public tareasService:TareasService) {}

  
}
