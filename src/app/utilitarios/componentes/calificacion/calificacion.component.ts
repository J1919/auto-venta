import { Component, EventEmitter, Input,OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-calificacion',
  templateUrl: './calificacion.component.html',
  styleUrls: ['./calificacion.component.css']
})
export class CalificacionComponent {
  @Input() modoEditar: boolean = false;
  @Input() calificacion: number = 0;
  @Output() accionClick = new EventEmitter<number>();

  constructor() { }

  select() {
    this.accionClick.emit(this.calificacion);
  }

  get estrellas(): Array<number> {
    return new Array(this.calificacion);
  }
}
