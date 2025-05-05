import { Component } from '@angular/core';
import {MatIconButton} from "@angular/material/button";
import {MatIcon} from '@angular/material/icon';
import {MatTooltip} from '@angular/material/tooltip';

@Component({
  selector: 'app-orders',
  imports: [
    MatIcon,
    MatIconButton,
    MatTooltip,
    MatIcon,
  ],
  templateUrl: './orders.component.html',
  styleUrl: './orders.component.scss'
})
export class OrdersComponent {

}
