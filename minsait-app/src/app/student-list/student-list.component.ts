import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-student-list',
  templateUrl: './student-list.component.html',
  styleUrls: ['./student-list.component.scss']
})
export class StudentListComponent implements OnInit {
  title: string;

  constructor() {
    this.title = 'Listado de Alumnos';
    console.log(this.title);
    console.log('constructor finalizado');
   }

  ngOnInit(): void {
    console.log(this.title);
  }

}
