import { Component } from '@angular/core';
import {MatIcon} from '@angular/material/icon';
import {MatIconButton} from '@angular/material/button';
import {CutomerStatusManagerComponent} from './inner/cutomer-status-manager/cutomer-status-manager.component';

@Component({
  selector: 'app-customers',
  imports: [
    MatIcon,
    MatIconButton,
    CutomerStatusManagerComponent
  ],
  templateUrl: './customers.component.html',
  styleUrl: './customers.component.scss'
})
export class CustomersComponent {

}
