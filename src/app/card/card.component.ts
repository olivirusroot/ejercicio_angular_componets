import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './card.component.html',
  styleUrl: './card.component.css'
})
export class CardComponent {
  @Input() title : String = "Titulo generico";
  @Input() img : String = "Imagen generica";
  @Input() description : String = "descripcion generica";
  @Input() link : String = "link generico";
  @Input() style_button: String = "btn btn-primary";

}
