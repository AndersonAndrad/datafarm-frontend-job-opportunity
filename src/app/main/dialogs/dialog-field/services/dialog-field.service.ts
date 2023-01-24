import { DialogFieldComponent } from "../dialog-field.component";
import { Injectable } from "@angular/core";
import { MatDialog } from "@angular/material/dialog";

@Injectable({
  providedIn: "root",
})
export class DialogFieldService {
  constructor(private matDialog: MatDialog) {}

  open() {
    this.matDialog.open(DialogFieldComponent, {
      width: "1000px",
      height: "450px",
    });
  }
}
