import { Component, EventEmitter, Output } from '@angular/core';
import { Tarea } from '../../interfaces/tarea.interface';

@Component({
  selector: 'app-add-list',
  templateUrl: './add-list.component.html',
  styleUrls: ['./add-list.component.css']
})
export class AddListComponent {

  public newTarea:Tarea={
    nombre:'',
    descripcion:'',
  };

  @Output()
  public tareaEnviada:EventEmitter<Tarea> = new EventEmitter();

  resetTarea():void{
    this.newTarea.nombre='';
    this.newTarea.descripcion='';
  }

  enviarTarea(tarea:Tarea){
    if( this.newTarea.nombre ===''){
      return
    };
    this.tareaEnviada.emit(tarea);

    this.newTarea = {nombre:'', descripcion: ''}; /* esta linea es la que arreglar el codigo */

  }
  
  

}
