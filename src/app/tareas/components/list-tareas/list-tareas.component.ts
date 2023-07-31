import { Component } from '@angular/core';
import { Tarea } from '../../interfaces/tarea.interface';

@Component({
  selector: 'app-list-tareas',
  templateUrl: './list-tareas.component.html',
  styleUrls: ['./list-tareas.component.css']
})
export class ListTareasComponent {

  public listaT:Tarea[]=[
    {
      nombre:'Una tarea',
      descripcion: 'Tarea'
    },
    {
      nombre:'Una tarea',
      descripcion: 'Tarea'
    },
    {
      nombre:'Una tarea',
      descripcion: 'Tarea'
    },
    {
      nombre:'Una tarea',
      descripcion: 'Tarea'
    }
  ];

  eliminarTarea(index:number){
    this.listaT.splice(index,1)
  }

}
