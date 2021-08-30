import { Component, OnInit } from '@angular/core';
import { SneakerTradesService  } from 'src/app/modules/core/services/sneaker-trades.service'; //Todo: Move this to sneaker detail component later
import { Stockx } from 'src/app/modules/models/stockx.model';

@Component({
  selector: 'app-line-chart',
  templateUrl: './line-chart.component.html',
  styleUrls: ['./line-chart.component.css'],
})
export class LineChartComponent implements OnInit {
  basicData: any;
  basicOptions: any;
  stockxTradeData: any[] = [];
  ebayTradeData: any[] = []
  constructor(private sneakerTradesService: SneakerTradesService) {}

  ngOnInit() {
    for(let i=1;i<31;i++){
      if(i==3) {
        this.stockxTradeData.push(
          {
            x: new Date(2021, 7, i).toISOString().substring(5,10),
            y: null,
          }
        )
      } else {
        this.stockxTradeData.push(
          {
            x: new Date(2021, 7, i).toISOString().substring(5,10),
            y: Math.floor(Math.random() * (575 - 344 + 1)) + 344,
          }
        )
      }

      this.ebayTradeData.push(
        {
          x: new Date(2021, 7, i).toISOString().substring(5,10),
          y: Math.floor(Math.random() * (575 - 344 + 1)) + 344,
        }
      )

    }


    this.basicData = {
      datasets: [
          {
              label: 'StockX',
              data: this.stockxTradeData,
              fill: false,
              borderColor: '#42A5F5',
              backgroundColor: '#42A5F5',
              tension: 0.1,
              borderWidth: 1.5
          },
          {
              label: 'Ebay',
              data: this.ebayTradeData,
              fill: false,
              borderColor: '#FFA726',
              backgroundColor: '#FFA726',
              tension: 0.1,
              borderWidth: 1.5
          }
      ]
    };


    this.basicOptions = {
      elements: {
        line: {
          fill: false,
        },
        point: {
          radius:1,
          hoverRadius: 10,
        }
      },
      interaction: {
        mode: 'index',
        intersect: false
      },
      plugins: {
          legend: {
              labels: {
                  fill:true,
                  color: '#495057',
                  font: {
                    size:14,
                    weight: "bold"
                  }
              }
          },
          tooltip: {
            position: 'nearest',
          },
      },
      scales: {
          x: {
              ticks: {
                  color: '#495057'
              },
              grid: {
                  color: '#ebedef'
              },
              title: {
                display: true,
                text: "Date",
                font: {
                  size:14,
                  weight: "bold"
                }
              }
          },
          y: {
              min:0,
              ticks: {
                  color: '#495057',
              },
              grid: {
                  color: '#ebedef'
              },
              title: {
                display: true,
                text: "Average Price (Daily)",
                font: {
                  size:14,
                  weight: "bold"
                }
              }
          }
      },
    };
  }
}

