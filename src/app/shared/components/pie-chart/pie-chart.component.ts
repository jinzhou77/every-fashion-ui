import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pie-chart',
  templateUrl: './pie-chart.component.html',
  styleUrls: ['./pie-chart.component.css']
})
export class PieChartComponent implements OnInit {

  data: any;
  chartOptions: any;

  constructor() { }

  ngOnInit(): void {
    this.data = {
      labels: ['StockX','Ebay'],
      datasets: [
          {
              data: [300, 50],
              backgroundColor: [
                  "#42A5F5",
                  "#FFA726"
              ],
              hoverBackgroundColor: [
                  "#64B5F6",
                  "#FFB74D"
              ]
          }
      ]
    };

    this.chartOptions = {
      plugins: {
          legend: {
              labels: {
                  color: '#495057'
              }
          }
      }
    }
  }

}
