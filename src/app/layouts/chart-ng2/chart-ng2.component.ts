import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-chart-ng2",
  templateUrl: "./chart-ng2.component.html",
  styleUrls: ["./chart-ng2.component.scss"]
})
export class ChartNg2Component implements OnInit {
  e_connect = 44;
  w_connect = 44;
  e_available = 70;
  w_available = 90;
  e_disable = 30;
  w_disable = 10;

  public barChartOptions = {
    scales: {
      xAxes: [
        {
          stacked: false
        }
      ],
      yAxes: [
        {
          stacked: true,
          // ticks: {
          //   beginAtZero: true
          // }
        }
      ]
    },
    pieceLabel: {
      render: "label"
    },
    scaleShowVerticalLines: false,
    responsive: true,
    legend: {
      display: true
    },
    tooltips: {
      enabled: true
    },
    scaleShowValues: true,
    scaleValuePaddingX: 10,
    scaleValuePaddingY: 10,
    animation: {
      onComplete: function() {
        const chartInstance = this.chart,
        ctx = chartInstance.ctx;
        ctx.textAlign = "center";
        ctx.textBaseline = "top";
        this.data.datasets.forEach(function(dataset, i) {
          const meta = chartInstance.controller.getDatasetMeta(i);
          meta.data.forEach(function(bar, index) {
            const data = dataset.data[index];
            ctx.fillText(data, bar._model.x, bar._model.y - 0);
          });
        });
      }
    }
  };
  public barChartLabels = ["East", "West"];
  public barChartType = "bar";
  public barChartLegend = true;
  public barChartData = [
    { data: [], label: "Connect" },
    { data: [], label: "Available" },
    { data: [], label: "Disable" }
  ];

  public barChartColors: any[] = [
    // { backgroundColor: ["red", "red"] },
    // { backgroundColor: ["#63FF24", "#63FF24"] },
    // { backgroundColor: ["grey", "grey"] }
  ];

  constructor() {}

  ngOnInit() {
    this.getData();
  }

  getData() {
    const data = JSON.parse(JSON.stringify(this.barChartData));
    data[0].data = [this.e_connect, this.w_connect];
    data[1].data = [this.e_available, this.w_available];
    data[2].data = [this.e_disable, this.w_disable];
    this.barChartData = data;
  }
}
