import { Component } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
DomSanitizer
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angularIntecap';
  CSSURL:string;//para llamar la url del css
  constructor(public sanitizer:DomSanitizer){
  this.CSSURL = '/assets/estiloPrincipal.css'; //llamamos a la hoja de estilo
  }
  cambiarEstilo(){
    this.CSSURL = (this.CSSURL === '/assets/estiloPrincipal.css' ? '/assets/estiloPrivado.css' : '/assets/estiloPrincipal.css')
  }
}
