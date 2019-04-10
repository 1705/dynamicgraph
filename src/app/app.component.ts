import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  constructor(private httpService: HttpClient) { }

  chartOptions = {
    responsive: true
  }

  labels = ['JAN', 'FEB', 'MAR', 'APR', 'MAY', 'JUN', 'JUL', 'AUG', 'SEP', 'OCT', 'NOV', 'DEC'];

  // OBJECT FOR datasets WITH EMPTY data.
  chartData: any = [
    {
      label: '1st Year',
      data: [],
    },
    {
      label: '2nd Year',
      data: []
    }
  ];

  // CHART COLOR.
  colors = [
    { // 1st Year.
      backgroundColor: 'rgba(77,83,96,0.2)'
    },
    { // 2nd Year.
      backgroundColor: 'rgba(30, 169, 224, 0.8)'
    }
  ]

  ngOnInit() {
    this.httpService.get('./assets/convertcsv.json', { responseType: 'json' }).subscribe(
      data => {
        this.chartData = data as any[];	 // FILL THE CHART ARRAY WITH DATA.
      },
      (err: HttpErrorResponse) => {
        console.log(err.message);
      }
    );
  }

  onChartClick(event) {
    console.log(event);
  }
}
