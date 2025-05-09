import {Component, OnInit} from '@angular/core';
import {MatIcon} from '@angular/material/icon';
import {MatDialog} from '@angular/material/dialog';
import {NewProductComponent} from './inner-pages/new-product/new-product.component';
import {UpdateProductComponent} from './inner-pages/update-product/update-product.component';
import {MatIconButton} from '@angular/material/button';
import {MatTooltip} from '@angular/material/tooltip';
import {ManageProductImageComponent} from './inner-pages/manage-product-image/manage-product-image.component';
import {FormControl, FormGroup, ReactiveFormsModule} from '@angular/forms';
import {debounce, debounceTime} from 'rxjs';
import {ProductService} from '../../services/product/product.service';
import {CurrencyPipe, NgForOf} from '@angular/common';
import {MatPaginator, PageEvent} from '@angular/material/paginator';
import {ClipboardService} from '../../services/clipboard.service';
import {ForexService} from '../../services/forex/forex.service';

@Component({
  selector: 'app-product',
  imports: [
    MatIcon,
    MatIconButton,
    MatTooltip,
    ReactiveFormsModule,
    CurrencyPipe,
    NgForOf,
    MatPaginator
  ],
  templateUrl: './product.component.html',
  styleUrl: './product.component.scss'
})
export class ProductComponent implements OnInit{

  searchText: string = '';
  page: any = 0;
  size: any = 10;
  count: any = 0;
  dataList: any[] = [];
  rate: any = 0;

  searchForm: FormGroup = new FormGroup({
    text:new FormControl('')
  });

  constructor(private matDialog: MatDialog,
              private productService: ProductService,
              private clipboardService: ClipboardService,
              private forexService: ForexService,
  ) {

  }

  ngOnInit(): void {
    this.forexService.exchangeRate('USD', 'LKR').subscribe(data => {
      this.rate = data?.data?.rate;
      this.loadAllProducts();
    });

    this.searchForm.valueChanges.pipe(debounceTime(1000))
      .subscribe(data => {
      this.searchText = data.text;
      this.loadAllProducts();
    });
  }

  openNewProductDialog() {
    let matDialogRef = this.matDialog.open(NewProductComponent, {
      width: '600px',
      height: '400px',
      data: {
        title: 'New Product'
      },
      disableClose: true
    });

    matDialogRef.afterClosed().subscribe((response) => {
      if (response) {
        this.loadAllProducts();
      }
    });
  }

  openUpdateProductDialog(product: any) {
    let matDialogRef = this.matDialog.open(UpdateProductComponent, {
      width: '600px',
      height: '400px',
      data: {product:product},
      disableClose: true

    });

    matDialogRef.afterClosed().subscribe((response) => {
      if (response) {
        this.loadAllProducts();
      }
    });
  }

  openProductImageForm(product: any) {
    let matDialogRef = this.matDialog.open(ManageProductImageComponent, {
      width: '600px',
      height: '400px',
      data: {
        title: 'Manage Product Image'
      },
      disableClose: true
    });

    matDialogRef.afterClosed().subscribe((response) => {
      if (response) {
        this.loadAllProducts();
      }
    });
  }


  private loadAllProducts() {
    this.productService.search(this.page,this.size,this.searchText).subscribe((response) => {
      console.log(response);
      this.dataList = response.data?.dataList;
      this.count = response.data.count;

    });
  }

  deleteConfirm(item: any) {
    if(confirm('are you sure to delete this product?')) {
      this.productService.delete(item?.propertyId).subscribe(response => {
        this.loadAllProducts();
      }, error => {
        console.log(error?.error?.message);
      });
    }
  }

  getServerData(data: PageEvent) {
    this.page = data?.pageIndex;
    this.size = data?.pageSize;
    this.loadAllProducts();
  }

  copyText(propertyId: any) {
    this.clipboardService.copy(propertyId);
  }
}
