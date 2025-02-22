import { FormControl, Validators } from "@angular/forms";

import { AuthService } from "src/app/auth/auth.service";
import { Component } from "@angular/core";
import { MatDialogRef } from "@angular/material/dialog";

@Component({
  selector: "app-dialog-auth",
  templateUrl: "./dialog-auth.component.html",
  styleUrls: ["./dialog-auth.component.scss"],
})
export class DialogAuthComponent {
  formControl = new FormControl("", [Validators.required]);

  constructor(
    public dialogRef: MatDialogRef<DialogAuthComponent>,
    private authService: AuthService
  ) {}

  onSubmit() {
    if (!this.formControl.hasError("required")) {
      this.authService.setCode(this.formControl.value);
      this.dialogRef.close();
    }
  }
}
