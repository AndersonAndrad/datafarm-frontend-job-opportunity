import { Component, OnInit } from "@angular/core";

import { FieldService } from "src/app/services/field.service";
import { IChartLineData } from "../../charts/chart-line/chart-line.component";
import { MatDialogRef } from "@angular/material/dialog";

@Component({
  selector: "app-dialog-field",
  templateUrl: "./dialog-field.component.html",
  styleUrls: ["./dialog-field.component.scss"],
})
export class DialogFieldComponent implements OnInit {
  private _evolution!: IChartLineData;

  constructor(
    private dialogRef: MatDialogRef<DialogFieldComponent>,
    private fieldService: FieldService
  ) {}

  ngOnInit(): void {
    this.fieldService
      .getField("2f306266-4e00-4334-a631-de489cea48d2")
      .subscribe(({ data }) => {
        this._evolution = {
          label: "Evolution",
          fill: true,
          data: [...data.evolution.data],
        };
      });
  }

  close() {
    this.dialogRef.close();
  }

  get evolution() {
    return this._evolution;
  }
}
