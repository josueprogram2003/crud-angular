import { Libro } from './../models/libros';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-tabla',
  templateUrl: './tabla.component.html',
  styleUrls: ['./tabla.component.css']
})
export class TablaComponent implements OnInit {
  @Input() recibir :  Libro[] = [];
  @Output() eliminar: EventEmitter<Libro> = new EventEmitter();
  @Output() editar: EventEmitter<Libro> = new EventEmitter();



  constructor() { 
  
  }
  ngOnInit(): void {
  }


  delete(r:Libro){
    this.eliminar.emit(r);
  }

  update(r: Libro){
    this.editar.emit(r);
  }
}
