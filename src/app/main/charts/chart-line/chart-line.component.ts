import { Chart, ChartDataset, registerables } from "chart.js";
import { Component, ElementRef, Input, ViewChild } from "@angular/core";

@Component({
  selector: "chart-line",
  templateUrl: "./chart-line.component.html",
})
export class ChartLineComponent {
  @Input() informations!: IChartLineData;

  @ViewChild("mychart") mychart!: ElementRef;

  private canvas: any;
  private ctx: any;

  ngAfterViewInit() {
    Chart.register(...registerables);
    this.canvas = this.mychart.nativeElement;
    this.ctx = this.canvas;

    const datasets: ChartDataset = {
      ...this.informations,
      backgroundColor: randomRGB().rgba,
      borderColor: randomRGB().rgb,
    };

    new Chart(this.ctx, {
      type: "line",
      data: {
        datasets: [datasets],
      },
      options: {
        responsive: true,
        scales: {
          xAxes: {
            type: "linear",
          },
          yAxes: {
            type: "linear",
          },
        },
      },
    });
  }
}

export interface IChartLineData {
  label: string;
  fill: boolean;
  data: {
    x: number;
    y: number;
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
