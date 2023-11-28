import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RickComponent } from '../../component/rick/rick.component';
import { RickandmortyService } from '../../servicios/rickandmorty/rickandmorty.service';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-rickandmorty',
  standalone: true,
  imports: [CommonModule, RickComponent, RouterModule],
  templateUrl: './rickandmorty.component.html',
  styleUrl: './rickandmorty.component.css'
})
export class RickandmortyComponent {
  constructor(private rickService: RickandmortyService) { }
  personajes: any = {};
  // traerPersonajes() {
  //   this.personajes= this.rickService.obtenerPersonajes()
  //   console.log(this.personajes)
  // }
  traerPersonajes() {
    this.rickService.obtenerPersonajes().subscribe({

      next: (data) => {
        console.log(data)
        this.personajes = data.results
      }

    })
  }


}



