import { Component, OnInit } from '@angular/core';
import { GifsService } from 'src/app/services/gifs.service';

@Component({
  selector: 'app-busqueda',
  templateUrl: './busqueda.component.html',
  styleUrls: ['./busqueda.component.css']
})
export class BusquedaComponent implements OnInit{

  constructor(private gifsSvc : GifsService) { }

  ngOnInit(): void {
  }

  buscar(termino: string){

    this.gifsSvc.buscarGifs(termino);
    console.log(termino);
  }
}
