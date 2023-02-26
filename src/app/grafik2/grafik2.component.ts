import { Component, OnInit, ViewChild  } from '@angular/core';
import { ChartConfiguration, ChartData, ChartEvent,  ChartType } from 'chart.js'; //ChartOptions,
import { BaseChartDirective } from 'ng2-charts';

import DataLabelsPlugin from 'chartjs-plugin-datalabels';

@Component({
  selector: 'app-grafik2',
  templateUrl: './grafik2.component.html',
  styleUrls: ['./grafik2.component.css']
})
export class Grafik2Component implements OnInit {
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }

  @ViewChild(BaseChartDirective) chart: BaseChartDirective | undefined;

  public barChartOptions: ChartConfiguration['options'] = {
    responsive: true,
    // We use these empty structures as placeholders for dynamic theming.
    scales: {
      x: {},
      y: {
        min: 10
      }
    },
    plugins: {
      legend: {
        display: true,
      },
      datalabels: {
        anchor: 'end',
        align: 'end'
      }
    }
  };
  public barChartType: ChartType = 'bar';
  public barChartPlugins = [
    DataLabelsPlugin
  ];

  public barChartData: ChartData<'bar'> = {
    labels: [ 'Carrefour Aventure', 'Tours privés de vignobles', 'Jardin Cérès', 'Domaine des 3 vents', 'Les Moulins de l Isle-aux-Coudre' ],
    datasets: [
      { data: [ 60, 150, 90, 240, 105,  ], label: 'Durée en minutes' },
      //{ data: [ 28, 48, 40, 19, 86,  ], label: 'Series B' }
    ]
  };

  // events
  public chartClicked({ event, active }: { event?: ChartEvent, active?: {}[] }): void {
    console.log(event, active);
  }

  public chartHovered({ event, active }: { event?: ChartEvent, active?: {}[] }): void {
    console.log(event, active);
  }

  public randomize(): void {
    // Only Change 3 values
    this.barChartData.datasets[0].data = [
      Math.round(Math.random() * 100),
      59,
      80,
      Math.round(Math.random() * 100),
      56,
      Math.round(Math.random() * 100),
      40 ];

    this.chart?.update();
  }
}
//   @ViewChild(BaseChartDirective) chart: BaseChartDirective | undefined;

//   public barChartOptions: ChartConfiguration['options'] = {
//     elements: {
//       line: {
//         tension: 0.4
//       }
//     },
//     // We use these empty structures as placeholders for dynamic theming.
//     scales: {
//       x: {},
//       y: {
//         min: 10
//       }
//     },
//     plugins: {
//       legend: { display: true },
//     }
//   };
//   public barChartLabels: string[] = [ '2006', '2007', '2008', '2009', '2010', '2011', '2012' ];
//   public barChartType: ChartType = 'bar';

//   public barChartData: ChartData<'bar'> = {
//     labels: this.barChartLabels,
//     datasets: [
//       { data: [ 65, 59, 80, 81, 56, 55, 40 ], label: 'Series A' },
//       { data: [ 28, 48, 40, 19, 86, 27, 90 ], label: 'Series B' }
//     ]
//   };

//   // events
//   public chartClicked({ event, active }: { event?: ChartEvent, active?: {}[] }): void {
//     console.log(event, active);
//   }

//   public chartHovered({ event, active }: { event?: ChartEvent, active?: {}[] }): void {
//     console.log(event, active);
//   }

//   public randomize(): void {
//     this.barChartType = this.barChartType === 'bar' ? 'line' : 'bar';
//   }
// }

//   constructor() { }


//   ngOnInit(): void {
//   }

// }
