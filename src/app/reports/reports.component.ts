import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-reports',
  templateUrl: './reports.component.html',
  styleUrls: ['./reports.component.css']
})
export class ReportsComponent implements OnInit {

  chartConfig1 = {
    // options
    showXAxis: true,
    showYAxis: true,
    gradient: false,
    showLegend: false,
    showXAxisLabel: true,
    xAxisLabel: 'Service',
    showYAxisLabel: true,
    yAxisLabel: 'Count',
    colorScheme: {
      domain: ['#5AA454', '#A10A28', '#C7B42C', '#AAAAAA']
    },
    view: [500, 300]
  };

  chartConfig2 = {
    // options
    showXAxis: true,
    showYAxis: true,
    gradient: false,
    showLegend: false,
    showXAxisLabel: true,
    xAxisLabel: 'Service',
    showYAxisLabel: true,
    yAxisLabel: 'Count',
    colorScheme: {
      domain: ['#5AA454', '#A10A28', '#C7B42C', '#AAAAAA']
    },
    view: [500, 300],
    autoScale: true
  };

  chartConfig3 = {
    gradient: false,
    colorScheme: {
      domain: ['#5AA454', '#A10A28', '#C7B42C', '#AAAAAA']
    },
    view: [600, 300]
  };

  


  chartData1 = [
      {
        "name": "Wash - Medium",
        "value": 8940000
      },
      {
        "name": "Wash - Small",
        "value": 5000000
      },
      {
        "name": "Detailing",
        "value": 7200000
      }
  ];

  chartData2 = [
      {
        "name": "Total Sales",
        "series": [
          {
            "name": "Jan",
            "value": 730
          },
          {
            "name": "Feb",
            "value": 694
          },
          {
            "name": "Mar",
            "value": 794
          },
          {
            "name": "Apr",
            "value": 804
          },
          {
            "name": "May",
            "value": 894
          }
        ]
      },

      {
        "name": "Wash",
        "series": [
          {
            "name": "Jan",
            "value": 300
          },
          {
            "name": "Feb",
            "value": 400
          },
          {
            "name": "Mar",
            "value": 450
          },
          {
            "name": "Apr",
            "value": 500
          },
          {
            "name": "May",
            "value": 700
          }
        ]
      },

      {
        "name": "France",
        "series": [
          {
            "name": "Jan",
            "value": 600
          },
          {
            "name": "Feb",
            "value": 500
          },
          {
            "name": "Mar",
            "value": 670
          },
          {
            "name": "Apr",
            "value": 700
          },
          {
            "name": "May",
            "value": 610
          }
        ]
      }
    ];

    chartData3 = [
      {
        "name": "Ritz",
        "value": 200
      },
      {
        "name": "WagonR",
        "value": 160
      },
      {
        "name": "i20",
        "value": 98
      },
      {
        "name": "Swift Dzire",
        "value": 29
      },
      {
        "name": "Alto",
        "value": 85
      }
    ];



  constructor() { }

  ngOnInit() {
  }
  onSelect(event) {
    console.log(event);
  }
}
