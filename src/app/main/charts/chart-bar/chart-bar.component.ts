import { Chart, registerables } from "chart.js";
import { Component, ElementRef, Input, ViewChild } from "@angular/core";

@Component({
  selector: "chart-bar",
  templateUrl: "./chart.bar.component.html",
})
export class CharBarComponent {
  @Input() informations!: IChartBarData;

  @ViewChild("mychart") mychart!: ElementRef;

  private canvas: any;
  private ctx: any;

  ngAfterViewInit() {
    Chart.register(...registerables);
    this.canvas = this.mychart.nativeElement;
    this.ctx = this.canvas;

    const datasets = {
      ...this.informations,
      ...(this.informations.datasets[0] = {
        ...this.informations.datasets[0],
        backgroundColor: [randomRGB().rgba],
      }),
    };

    new Chart(this.ctx, {
      type: "bar",
      data: datasets,
    });
  }
}

export interface IChartBarData {
  labels: string[];
  datasets: {
    label: string;
    data: Number[];
    backgroundColor?: string[];
    borderColor?: string[];
    borderWidth?: 1;
  }[];
}

const randomColor = (): number => {
  return Math.floor(Math.random() * 256);
};

const randomRGB = (): { rgba: string; rgb: string } => {
  const red = randomColor();
  const green = randomColor();
  const blue = randomColor();

  return {
    rgba: `rgba(${red}, ${green},${blue},0.3)`,
    rgb: `rgb(${red}, ${green},${blue})`,
  };
};
