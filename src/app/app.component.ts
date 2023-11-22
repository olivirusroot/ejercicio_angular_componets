import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { RouterModule } from '@angular/router';
import {TarjetaComponent} from  './tarjeta/tarjeta.component';
import {AlertaComponent} from './alerta/alerta.component';
import { CardComponent } from './card/card.component';
import { LinioComponent } from './linio/linio.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet,TarjetaComponent, AlertaComponent, CardComponent, LinioComponent,RouterModule],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public title : String = 'Hola mundo de angular';
  public contador : number = 10;
  public textoPersonalizado  : String = "soy un texto personalizado";

  Incrementar(value: number): void {
    this.contador += value;
    this.contador = Math.max(this.contador, 10);    
}

  // Incrementar(): void{
  //   this.contador++;
    
  // }

  Decrementar(): void{
    if (this.contador ==10){
      alert("no puedo decrementar")
    }else{
      this.contador--;
    }
    
  }

  Reset(): void{
    this.contador=10;
  }


}
