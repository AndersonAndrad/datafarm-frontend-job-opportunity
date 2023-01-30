import { DialogFieldComponent } from "../dialog-field.component";
import { Injectable } from "@angular/core";
import { MatDialog } from "@angular/material/dialog";

@Injectable({
  providedIn: "root",
})
export class DialogFieldService {
  constructor(private matDialog: MatDialog) {}

  open(fieldId: string) {
    this.matDialog.open(DialogFieldComponent, {
      width: "1200px",
      data: { fieldId },
    });
  }
}
