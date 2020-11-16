import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Chilaquil-System';
  descripcion = 'Aprendiendo Angular Cli';

  mensaje():void{
    console.log(`Título de la página: ${this.title}, Descripción: ${this.descripcion}`);
  }

  limpiar():void{
    console.clear()
  }

}
