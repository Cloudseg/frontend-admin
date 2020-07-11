import { Injectable } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ConfirmDialogComponent } from 'src/app/dialogs/confirm-dialog/confirm-dialog.component';
import { AlertDialogComponent } from 'src/app/dialogs/alert-dialog/alert-dialog.component';

@Injectable({
  providedIn: 'root'
})
export class DialogService {

  constructor(private _dialog: MatDialog) { }

  confirm(text: string): Promise<boolean> {
    return new Promise((resolve, reject) => {
      const dialog = this._dialog.open(ConfirmDialogComponent, { data: text });

      dialog.beforeClosed()
        .subscribe({ next: ((data) => resolve(data)) });
    });
  }

  alert(text: string): Promise<void> {
    return new Promise((resolve, reject) => {
      const dialog = this._dialog.open(AlertDialogComponent, { data: text });

      dialog.beforeClosed()
        .subscribe({ next: () => resolve() });
    });
  }
}
