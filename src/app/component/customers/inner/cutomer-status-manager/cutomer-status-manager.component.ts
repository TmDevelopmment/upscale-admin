import {Component, Input} from '@angular/core';
import {MatSlideToggle} from '@angular/material/slide-toggle';

@Component({
  selector: 'app-cutomer-status-manager',
  imports: [
    MatSlideToggle
  ],
  templateUrl: './cutomer-status-manager.component.html',
  styleUrl: './cutomer-status-manager.component.scss'
})
export class CutomerStatusManagerComponent {
@Input() customerStatus: any;
}
