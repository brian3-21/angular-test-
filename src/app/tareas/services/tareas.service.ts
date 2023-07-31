import { Injectable } from '@angular/core';
import { Tarea } from '../interfaces/tarea.interface';

@Injectable({
  providedIn: 'root'
})
export class TareasService {



  public listaT:Tarea[]=[
    {
      nombre:'Una tarea',
      descripcion: 'Tarea'
    },
  ];

  agregarTarea(tarea:Tarea){
    this.listaT.push(tarea);
  }

  eliminarTarea(index:number){
    this.listaT.splice(index,1)
  }

}
