import { Injectable } from '@angular/core';
import {MatSnackBar} from '@angular/material/snack-bar';

@Injectable({
  providedIn: 'root'
})
export class ClipboardService {

  constructor(private snackbarService:MatSnackBar) { }

  copy(text: string) {
    if (navigator.clipboard) {
      navigator.clipboard.writeText(text).then(() => {
        this.snackbarService.open('copied to clipboard', 'close');
      }).catch(error => {
        this.snackbarService.open('failed to copy', 'close');
      })
    } else {
      this.snackbarService.open('clipboard not supported', 'close');
    }
  }
}
