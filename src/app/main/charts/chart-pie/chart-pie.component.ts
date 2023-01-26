import { Chart, ChartDataset, registerables } from "chart.js";
import { Component, ElementRef, Input, ViewChild } from "@angular/core";

@Component({
  selector: "chart-Pie",
  templateUrl: "./chart-pie.component.html",
})
export class ChartPieComponent {
  @Input() informations!: IChartPieData;

  @ViewChild("mychart") mychart!: ElementRef;

  private canvas: any;
  private ctx: any;

  ngAfterViewInit() {
    Chart.register(...registerables);
    this.canvas = this.mychart.nativeElement;
    this.ctx = this.canvas;

    const datasets: ChartDataset = {
      ...this.informations,
      backgroundColor: [randomRGB().rgba, "rgb(255, 255, 255)"],
    };

    new Chart(this.ctx, {
      type: "pie",
      data: {
        datasets: [datasets],
      },
      options: {
        responsive: true,
      },
    });
  }
}

export interface IChartPieData {
  label: string;
  data: number[];
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
