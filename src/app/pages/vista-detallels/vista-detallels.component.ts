import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardComponent } from '../../card/card.component';
import {RouterModule} from '@angular/router'

@Component({
  selector: 'app-vista-detallels',
  standalone: true,
  imports: [CommonModule, CardComponent, RouterModule],
  templateUrl: './vista-detallels.component.html',
  styleUrl: './vista-detallels.component.css'
})
export class VistaDetallelsComponent {

}
