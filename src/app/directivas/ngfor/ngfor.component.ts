import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ngfor',
  templateUrl: './ngfor.component.html',
  styleUrls: ['./ngfor.component.css']
})
export class NgforComponent implements OnInit{
constructor(){}
ngOnInit(): void {
}

cursos:string[] = ["HTML", "CSS", "ANGULAR", "JAVASCRIPT"]
//creamos el arreglo con los equipos
lista:string[] = ["Municipal","Comunicaciones","Antigua GFC","Deportivo Xelajú","Xelajú Mario Camposeco",
"Deportivo Guastatoya","Coban Imperial","Deportivo Achuapa","Deportivo Malacateco","Deportivo Marquense"]
}
