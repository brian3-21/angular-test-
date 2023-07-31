import { Component, Input } from '@angular/core';
import { Tarea } from '../interfaces/tarea.interface';

@Component({
  templateUrl: './pages.component.html',
  styleUrls: ['./pages.component.css'],
  selector:'main-page-component',
})
export class MainPageComponent {

  @Input()
  public tareaRecivida :Tarea={
    nombre:'',
    descripcion:'',
  };

}
