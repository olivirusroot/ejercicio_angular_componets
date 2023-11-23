import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';


@Component({
  selector: 'app-carrito',
  standalone: true,
  imports: [CommonModule,RouterModule],
  templateUrl: './carrito.component.html',
  styleUrl: './carrito.component.css'
})
export class CarritoComponent {
  // nombreSuperHeroeDui = "Loki"
  // nombreSuperHeroeJacob= "Spider Man"
  // estasBien= true
  // personajes=[
  //   {
  //     name: "Iron Man",
  //     poderes: "Es rico y un traje",
  //     grupo: "Los Vengadores",
  //     estado: "Muerto",
  //     Imagen: "https://i.pinimg.com/736x/15/ed/bb/15edbb5e4d34a7fd0399ae686dc451aa.jpg"
  //   },
  //   {
  //     name: "Batman",
  //     poderes: "Es rico y un traje",
  //     grupo: "La liga de la justicia",
  //     estado: "Despedido",
  //     Imagen: "https://www.quever.news/u/fotografias/m/2023/2/8/f848x477-46659_104462_6436.jpg"
  //   },
  //   {
  //     name: "Loki",
  //     poderes: "Mago",
  //     grupo: "AVT",
  //     estado: "Dios del Tiempo",
  //     Imagen: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTtbKcGOIGQs0XwSYyhF7unDIx6hve2hXJrPA&usqp=CAU"

  //   }
  // ]

}
