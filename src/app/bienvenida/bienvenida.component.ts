import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-bienvenida',
  templateUrl: './bienvenida.component.html',
  styleUrls: ['./bienvenida.component.css']
})
export class BienvenidaComponent implements OnInit {
  bienvenida:string = "Lenguajes de programación:";
  lenguajes:string[] = ['Java','Kotlin','Nim','Groovy','Rust','Ballerina','Typescript','Javascript','C#','Swift']
  lenguaje:string = "";
  isActivo:boolean = false;
  edad:number=0;
  resultado:string='';
 
  constructor() {
   }

  ngOnInit(): void {
  }

  getPulsaciones(edad:number):void{
    let resultado = (220-(this.edad*0.7))
    this.resultado =`Edad: ${this.edad}, Pulsaciones: ${resultado}`;
  }

  lenguajeSeleccionado(lenguaje:string):void{
    this.lenguaje = lenguaje;
    console.log(`El lenguaje seleccionado es: ${this.lenguaje}`);
  }
  
  mensaje():void{
    alert("El número de lenguajes para aprender es: "+this.lenguajes.length);
    console.log(`Hola, mundo desde un botón Typescript!`);
  }

  limpiar():void{
    console.clear()
  }

}
