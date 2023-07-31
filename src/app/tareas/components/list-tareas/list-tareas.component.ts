import { Component, Input } from '@angular/core';
import { Tarea } from '../../interfaces/tarea.interface';

@Component({
  selector: 'app-list-tareas',
  templateUrl: './list-tareas.component.html',
  styleUrls: ['./list-tareas.component.css']
})
export class ListTareasComponent {

  @Input()
  public tareaRecivida :Tarea={
    nombre:'',
    descripcion:'',
  };
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

  agregarTarea(tarea:Tarea){
    this.listaT.push(tarea)
  }

  eliminarTarea(index:number){
    this.listaT.splice(index,1)
  }

}
