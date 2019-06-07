import { Component } from '@angular/core';

import { productos } from '../app/productos';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  name = 'Desarrollo de aplicaciones web';
  productos = productos;

  compartir(){
    window.alert("Producto compartido");
  }

}




