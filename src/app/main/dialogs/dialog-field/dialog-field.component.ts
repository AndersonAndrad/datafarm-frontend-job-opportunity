import { Component, OnInit } from "@angular/core";
import { FieldService, IRain } from "src/app/services/field.service";

import { IChartBarData } from "../../charts/chart-bar/chart-bar.component";
import { IChartLineData } from "../../charts/chart-line/chart-line.component";
import { MatDialogRef } from "@angular/material/dialog";

@Component({
  selector: "app-dialog-field",
  templateUrl: "./dialog-field.component.html",
  styleUrls: ["./dialog-field.component.scss"],
})
export class DialogFieldComponent implements OnInit {
  /* Evolution data chart */
  private _evolution!: IChartLineData;

  /* Rain data chart */
  private _rain!: IChartBarData;

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

        this.makeRainChar(data.rain);
      });
  }

  close() {
    this.dialogRef.close();
  }

  private makeRainChar(rain: IRain) {
    const labels: string[] = [];
    const data: number[] = [];

    rain.data.map(({ x, y }) => {
      labels.push(x);
      data.push(y);
    });

    this._rain = {
      labels,
      datasets: [
        {
          data,
          label: "Rain",
        },
      ],
    };
  }

  get evolution() {
    return this._evolution;
  }

  get rain() {
    return this._rain;
  }
}
