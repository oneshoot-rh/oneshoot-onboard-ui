import { Component, OnInit } from '@angular/core';
import Chart from 'chart.js/auto';

@Component({
  selector: 'app-employee-stats',
  standalone: true,
  imports: [],
  templateUrl: './employee-stats.component.html',
  styleUrl: './employee-stats.component.css'
})
export class EmployeeStatsComponent implements OnInit{
  public chart_1: any;
  public chart_2: any;
  public chart_3: any;

  constructor() { }

  ngOnInit(): void {
    this.createCharts();
  }

  createCharts(){
  
    this.chart_1 = new Chart("chart_1", {
      type: 'bar', //this denotes tha type of chart

      data: {// values on X-Axis
        labels: ['2023-05', '2023-06', '2023-07','2023-08',
								 '2023-09', '2023-10', '2023-11','2023-12', ], 
	       datasets: [
          {
            label: "Onboaded",
            data: ['10','8', '3', '12', '3',
								 '22', '4', '8'],
            backgroundColor: '#7a14ff'
          },
          {
            label: "Offboarded",
            data: ['2', '0', '3', '1', '2',
									 '0', '1', '0'],
            backgroundColor: '#ff8d70'
          }  
        ]
      },
      options: {
        aspectRatio:2.5
      }
      
    });

    this.chart_2 = new Chart("chart_2", {
      type: 'line', //this denotes tha type of chart

      data: {// values on X-Axis
        labels: ['2023-05', '2023-06', '2023-07','2023-08',
								 '2023-09', '2023-10', '2023-11','2023-12', ], 
         datasets: [
          {
            label: "Interviews",
            data: ['42','15', '54', '18', '60',
                 '26', '45', '19'],
            borderColor: '#7a14ff'
          },
          {
            label: "Resumes Recomended",
            data: ['55','20', '79', '40', '99',
                 '44', '49', '25'],
            borderColor: '#ff8d70'
          }  
        ]
      },
      options: {
        aspectRatio:2.5
      }
      
    });
  }

}
