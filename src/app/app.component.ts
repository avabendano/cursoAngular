import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Hola Mundo';
  toogle = true;

  listEstudiantes: any[] = [
    { nombre:'Victoria Abendaño', estado: 'No Aprobado'},
    { nombre:'Maximiliano Abendaño', estado: 'Promocionado'},
    { nombre:'Emilia Abendaño', estado: 'No Aprobado'},
    { nombre:'Magna Godoy', estado: 'Aprobado'},
    { nombre:'Celia Macas', estado: 'No Aprobado'},
  

  ];

  btnToogle(): void {
    this.toogle = !this.toogle;
  }

    
}

