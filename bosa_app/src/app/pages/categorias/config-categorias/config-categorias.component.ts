import { Component, OnInit } from '@angular/core';
export interface CategoriaElement {
  id: number;
  categoria: string;
}
const ELEMENT_DATA: CategoriaElement[] = [
  {id: 1, categoria: 'Categoria 1'},
  {id: 2, categoria: 'Categoria 2'},
  {id: 3, categoria: 'Categoria 3'},
  {id: 4, categoria: 'Categoria 4'},
  {id: 5, categoria: 'Categoria 5'}   
];

@Component({
  selector: 'app-config-categorias',
  templateUrl: './config-categorias.component.html',
  styleUrls: ['./config-categorias.component.css']
})
export class ConfigCategoriasComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  displayedColumns: string[] = ['id', 'categoria', 'acciones','activar'];
  dataSource = ELEMENT_DATA;

};
