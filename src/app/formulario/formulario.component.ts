import { Libro } from './../models/libros';
import { Component, EventEmitter, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent implements OnInit {
libro:Libro[] = [];

titulo: string = "";
stock: string = "";
descripcion: string = "";
button:string="Agregar";
pos:number=0;

nombreedi:string ="";


constructor() { 
   this.libro =[
      {
        titulo:"Angular 2021",
        stock:"3",
        descripcion:"El mejor libro de angular de la vida"
      },
        {
        titulo:"Python",
        stock:"5",
        descripcion:"El mejor libro de Python de la vida"
      },
        {
        titulo:"Java",
        stock:"6",
        descripcion:"El mejor libro de Java de la vida"
      }
    ]
}


  ngOnInit(): void {
  }

  limpiar(){
    this.titulo = "";
    this.stock = "";
    this.descripcion= "";
  }

  agregar(){
    const l = new Libro(this.titulo, this.stock, this.descripcion);
    if(this.button=="Agregar"){
      console.log(l);
      this.libro.push(l);
      this.limpiar();
      console.log(this.libro);
    }else{
      
      this.libro.find(
        item=> {
          if(item.titulo==this.nombreedi) {
          item.titulo=this.titulo;
          item.stock=this.stock;
          item.descripcion=this.descripcion;
          this.nombreedi="";
          this.button="Agregar";
          this.limpiar();
        }});
      
  }
}

  deleteLibro(li:Libro){
    let pos = this.libro.findIndex((libros)=> {return libros.titulo==li.titulo});
    this.libro.splice(pos , 1);
    console.log(this.libro);
    this.button="Agregar";
    this.limpiar();
  }

  editarLibro(li:Libro){
    let posi = this.libro.findIndex((libros)=> {return libros.titulo==li.titulo});
    this.pos=posi+1;
    alert(this.pos);
    this.titulo = li.titulo;
    this.nombreedi=li.titulo;
    this.stock = li.stock;
    this.descripcion= li.descripcion;
    this.button="Editar";
  }

}

