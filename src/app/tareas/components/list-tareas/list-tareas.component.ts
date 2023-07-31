import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Tarea } from '../../interfaces/tarea.interface';

@Component({
  selector: 'app-list-tareas',
  templateUrl: './list-tareas.component.html',
  styleUrls: ['./list-tareas.component.css']
})
export class ListTareasComponent {

  @Input()
  public tareasList:Tarea[] = [];

  @Output()
  public enviarid:EventEmitter<number> = new EventEmitter();

  idEnviado(numero:number){
    this.enviarid.emit(numero);
  }



}
