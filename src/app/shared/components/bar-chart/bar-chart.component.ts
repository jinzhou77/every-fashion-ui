import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-bar-chart',
  templateUrl: './bar-chart.component.html',
  styleUrls: ['./bar-chart.component.css']
})
export class BarChartComponent implements OnInit {

  basicData: any;

  horizontalOptions: any;

  constructor() { }

  ngOnInit(): void {
    this.basicData = {
      labels: ['StockX', 'Ebay'],
      datasets: [
          {
              label: 'Average Sale Price (Last 72 hrs)',
              backgroundColor: '#42A5F5',
              data: [65.0, 90.5]
          },
          {
              label: 'Average Sale Price (Last 30 days)',
              backgroundColor: '#FFA726',
              data: [70, 90]
          }
      ]
    };

    this.horizontalOptions = {
      indexAxis: 'y',
      plugins: {
          legend: {
              labels: {
                  color: '#495057'
              }
          }
      },
      scales: {
          x: {
              ticks: {
                  color: '#495057'
              },
              grid: {
                  color: '#ebedef'
              }
          },
          y: {
              ticks: {
                  color: '#495057'
              },
              grid: {
                  color: '#ebedef'
              }
          }
      }
    };

  }

}
