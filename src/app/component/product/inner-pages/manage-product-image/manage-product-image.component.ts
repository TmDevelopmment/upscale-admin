import { Component } from '@angular/core';
import {MatDialogActions, MatDialogClose, MatDialogContent, MatDialogTitle} from '@angular/material/dialog';
import {MatButton} from '@angular/material/button';

@Component({
  selector: 'app-manage-product-image',
  imports: [
    MatDialogActions,
    MatDialogContent,
    MatDialogTitle,
    MatDialogClose,
    MatButton
  ],
  templateUrl: './manage-product-image.component.html',
  styleUrl: './manage-product-image.component.scss'
})
export class ManageProductImageComponent {

}
