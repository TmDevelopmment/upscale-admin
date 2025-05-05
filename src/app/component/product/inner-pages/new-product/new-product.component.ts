import {Component, inject} from '@angular/core';
import {
  MatDialogActions,
  MatDialogClose,
  MatDialogContent,
  MatDialogRef,
  MatDialogTitle
} from '@angular/material/dialog';
import {MatButton} from '@angular/material/button';
import {FormControl, FormGroup, ReactiveFormsModule, Validators} from '@angular/forms';
import {ProductService} from '../../../../services/product/product.service';
import {response} from 'express';
import {FooterRowOutlet} from '@angular/cdk/table';

@Component({
  selector: 'app-new-product',
  imports: [
    MatDialogTitle,
    MatDialogContent,
    MatDialogActions,
    MatButton,
    MatDialogClose,
    ReactiveFormsModule
  ],
  templateUrl: './new-product.component.html',
  styleUrl: './new-product.component.scss'
})
export class NewProductComponent {

  readonly dialogRef = inject(MatDialogRef<NewProductComponent>);

  readonly productService = inject(ProductService);

  form = new FormGroup({
    qty: new FormControl('',[Validators.required]),
    unitPrice: new FormControl('',[Validators.required]),
    description: new FormControl('',[Validators.required]),
  })

  create() {
    const obj = {
      qty: this.form.value.qty,
      unitPrice: this.form.value.unitPrice,
      description: this.form.value.description,
    }
    this.productService.create(obj).subscribe(response => {
      this.dialogRef.close(true)
    }, error => {
      console.log(error?.error?.message);
    })
  }

  close() {
    this.dialogRef.close(false);
  }
}
