import {Component, inject} from '@angular/core';
import {
  MAT_DIALOG_DATA,
  MatDialogActions,
  MatDialogClose,
  MatDialogContent,
  MatDialogTitle
} from '@angular/material/dialog';
import {MatButton} from '@angular/material/button';
import {FormControl, FormGroup, ReactiveFormsModule, Validators} from '@angular/forms';
import {ProductService} from '../../../../services/product/product.service';
import {response} from 'express';

@Component({
  selector: 'app-manage-product-image',
  imports: [
    MatDialogActions,
    MatDialogContent,
    MatDialogTitle,
    MatDialogClose,
    MatButton,
    ReactiveFormsModule
  ],
  templateUrl: './manage-product-image.component.html',
  styleUrl: './manage-product-image.component.scss'
})
export class ManageProductImageComponent {

  readonly data = inject<any>(MAT_DIALOG_DATA);

  readonly service = inject(ProductService);

  form = new FormGroup({
    image: new FormControl(null, Validators.required)
  });
  loading: boolean = false;

  image: any;

  onFileSelected(event: Event) {
    const fileInput = event.target as HTMLInputElement;
    this.image = fileInput.files?.[0];
    if (this.image) {
      if (this.isFileSizeValid(this.image)) {
        const allowExtensions = ['jpg', 'jpeg', 'png', 'webp','pdf'];
        const fileExtension = this.image.name.split('.').pop()?.toLowerCase();

        if (fileExtension && allowExtensions.includes(fileExtension)) {
          this.handleFile(this.image);
        } else {
          this.image = null;
          fileInput.value = '';
          return;
        }
      }
    }
  }

  isFileSizeValid(file: File): boolean {
    const maxSizeInBytes = 5 * 1024 * 1024; // 2 MB
    return file.size <= maxSizeInBytes;
  }

  handleFile(file: File) {
    const reader = new FileReader();
    reader.onload = (e) => {
      this.image = reader.result;
    };
    reader.readAsDataURL(file);
  }

  uploadFile() {
    this.loading = true;
    const formData = new FormData();
    formData.append('productImage', this.image);
    this.loading = true;
    this.service.productImageUpload(formData,this.data?.propertyId).subscribe(response => {
      console.log(response);
      this.loading = false;
    })
  }
}
