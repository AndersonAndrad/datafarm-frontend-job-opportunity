import { Component, Inject, OnInit } from "@angular/core";
import { FormBuilder, FormControl, FormGroup } from "@angular/forms";

import { MatDialogRef, MAT_DIALOG_DATA } from "@angular/material/dialog";
import { IRain } from "src/app/services/field.interface";
import { FieldService } from "src/app/services/field.service";
import { IChartBarData } from "../../charts/chart-bar/chart-bar.component";
import { IChartLineData } from "../../charts/chart-line/chart-line.component";
import { IChartPieData } from "../../charts/chart-pie/chart-pie.component";

@Component({
  selector: "app-dialog-field",
  templateUrl: "./dialog-field.component.html",
  styleUrls: ["./dialog-field.component.scss"],
})
export class DialogFieldComponent implements OnInit {
  formFields: FormGroup;

  /* Evolution data chart */
  private _evolution!: IChartLineData[];

  /* Rain data chart */
  private _rain!: IChartBarData;

  /* Efficiency data */
  private _efficiency!: IChartPieData[];

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: { fieldId: string },
    private dialogRef: MatDialogRef<DialogFieldComponent>,
    private fieldService: FieldService,
    private formBuilder: FormBuilder
  ) {
    this.formFields = this.formBuilder.group({
      grower: new FormControl(""),
      farm: new FormControl(""),
      field: new FormControl(""),
    });
  }

  ngOnInit(): void {
    this.fieldService
      .getFieldDashboard(this.data.fieldId)
      .subscribe(({ data }) => {
        this._evolution = [
          {
            label: "Evolution",
            fill: true,
            data: [...data.evolution.data],
          },
        ];

        this.makeRainChar(data.rain);

        this._efficiency = [
          {
            label: "Efficiency",
            data: [data.efficiency.data, data.efficiency.data - 100],
          },
        ];
      });

    this.fieldService.getField(this.data.fieldId).subscribe(({ data }) => {
      this.formFields.patchValue(data);
    });
  }

  close() {
    this.dialogRef.close();
  }

  /* HELPERS */
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

  /* ACTIONS */
  onSubmit() {
    const data = this.formFields.value;

    this.fieldService
      .updateField({ fieldId: this.data.fieldId, ...data })
      .subscribe(({ data }) => {
        this.formFields.patchValue(data);
      });
  }

  get evolution() {
    return this._evolution;
  }

  get rain() {
    return this._rain;
  }

  get efficiency() {
    return this._efficiency;
  }
}
