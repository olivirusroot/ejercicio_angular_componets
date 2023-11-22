import { Component, Input} from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-linio',
  standalone: true,
  imports: [CommonModule,RouterModule],
  templateUrl: './linio.component.html',
  styleUrl: './linio.component.css'
})
export class LinioComponent {
  @Input() link_prod: String = "NA";
  @Input() img : String = "Imagen generica";
  @Input() title : String = "Titulo generico";
  @Input() or_price: String = "NA";
  @Input() avg: String = "NA";
  @Input() price: String = "NA";
  @Input() price_dis: String = "NA";

}
