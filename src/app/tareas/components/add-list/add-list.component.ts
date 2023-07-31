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
    this.newTarea.terminada= undefined;
  }

  enviarTarea(tarea:Tarea){
    if( this.newTarea.nombre !=''){
      console.log(tarea)
      this.tareaEnviada.emit(tarea);
      this.resetTarea();
    };
  }
  
  

}
