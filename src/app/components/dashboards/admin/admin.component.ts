import { AfterViewInit, ChangeDetectorRef, Component, ElementRef, OnInit, Renderer2 } from '@angular/core';
import { RouterModule } from '@angular/router';
import ApexCharts from 'apexcharts';
import { NgApexchartsModule } from 'ng-apexcharts';
import { SharedModule } from '../../../shared/shared.module';
import { NgSelectModule } from '@ng-select/ng-select';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SimplebarAngularModule } from 'simplebar-angular';

@Component({
  selector: 'app-admin',
  standalone: true,
  imports:[RouterModule,SharedModule,NgApexchartsModule,SimplebarAngularModule],
  templateUrl: './admin.component.html',
  styleUrl: './admin.component.scss'
})
export class AdminComponent implements AfterViewInit {
  optionsCircle1: any;
  chartOptions:any
  constructor(private el: ElementRef, private renderer: Renderer2,private cdr: ChangeDetectorRef) {
    this.optionsCircle1 = {
      series: [1754, 1234],
    

          labels: ["Completed Jobs", "Pending Jobs"],
          chart: {
              
              height: 298,
              type: 'donut'
          },
          dataLabels: {
              enabled: false,
          },

          legend: {
              show: false,
          },
          stroke: {
              show: true,
              curve: 'smooth',
              lineCap: 'round',
              colors: ["#fff"],
              width: 0,
              dashArray: 0,
          },
          plotOptions: {

              pie: {
                  expandOnClick: false,
                  donut: {
                      size: '80%',
                      background: 'transparent',
                      labels: {
                          show: true,
                          name: {
                              show: true,
                              fontSize: '20px',
                              color: '#495057',
                              offsetY: -4
                          },
                          value: {
                              show: true,
                              fontSize: '18px',
                              offsetY: 8,
                              formatter: function (val: string) {
                                  return val + "%";
                              }
                          },
                          total: {
                              show: true,
                              showAlways: true,
                              label: 'Total',
                              fontSize: '22px',
                              fontWeight: 600,
                              color: '#495057',
                          }

                      }
                  }
              }
          },
          colors: ["rgb(132, 90, 223)", "#23b7e5"],
  
    };

    this.chartOptions = {
        series: [{
            name: "Number of Jobs",
            data: [2,8,6,8,3,10,19,3,10,2,4,3]
        },
        {
            name: "Canceled Jobs",
            data: [1,5,3,5,7,0,3,2,9,1,3,3]
        },
        ],
       

            chart: {
               
                toolbar: {
                    show: false
                },
                height: 310,
                type: 'line',
                zoom: {
                    enabled: false
                },
                dropShadow: {
                    enabled: true,
                    enabledOnSeries: undefined,
                    top: 5,
                    left: 0,
                    blur: 3,
                    color: '#000',
                    opacity: 0.15
                },
            },
            grid: {
                borderColor: '#f1f1f1',
            },
            dataLabels: {
                enabled: false
            },
            stroke: {
                width: [2, 2],
                curve: ['smooth', 'smooth'],
                lineCap: 'butt',
                dashArray: [0, 0]
            },
          
            legend: {
                show: true,
                position: 'top',
                horizontalAlign: 'center',
                fontWeight: 600,
                fontSize: '11px',
                tooltipHoverFormatter: function (val: string, opts: { w: { globals: { series: { [x: string]: { [x: string]: string; }; }; }; }; seriesIndex: string | number; dataPointIndex: string | number; }) {
                    return val + ' - ' + opts.w.globals.series[opts.seriesIndex][opts.dataPointIndex] ;
                },
                labels: {
                    colors: '#74767c',
                },
                markers: {
                    width: 7,
                    height: 7,
                    strokeWidth: 0,
                    radius: 12,
                    offsetX: 0,
                    offsetY: 0
                },
            },
            markers: {
                discrete: [{
                    seriesIndex: 0,
                    dataPointIndex: 4,
                    fillColor: '#305cfc',
                    strokeColor: '#fff',
                    size: 4,
                    shape: "circle"
                },
                {
                    seriesIndex: 0,
                    dataPointIndex: 11,
                    fillColor: '#305cfc',
                    strokeColor: '#fff',
                    size: 4,
                    shape: "circle"
                },
                {
                    seriesIndex: 1,
                    dataPointIndex: 10,
                    fillColor: '#23b7e5',
                    strokeColor: '#fff',
                    size: 4,
                    shape: "circle"
                }, {
                    seriesIndex: 1,
                    dataPointIndex: 4,
                    fillColor: '#23b7e5',
                    strokeColor: '#fff',
                    size: 4,
                    shape: "circle"
                }],
                hover: {
                    sizeOffset: 6
                }
            },
            yaxis: {
                title: {
                    style: {
                        color: '#adb5be',
                        fontSize: '14px',
                        fontFamily: 'poppins, sans-serif',
                        fontWeight: 600,
                        cssClass: 'apexcharts-yaxis-label',
                    },
                },
                labels: {
                    formatter: function (y: number) {
                        return y.toFixed(0) ;
                    },
                    show: true,
                    style: {
                        colors: "#8c9097",
                        fontSize: '11px',
                        fontWeight: 600,
                        cssClass: 'apexcharts-xaxis-label',
                    },
                }
            },
            xaxis: {
                categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep',
                    'Oct', 'Nov', 'Dec'
                ],
                axisBorder: {
                    show: true,
                    color: 'rgba(119, 119, 142, 0.05)',
                    offsetX: 0,
                    offsetY: 0,
                },
                axisTicks: {
                    show: true,
                    borderType: 'solid',
                    color: 'rgba(119, 119, 142, 0.05)',
                    offsetX: 0,
                    offsetY: 0
                },
                labels: {
                    rotate: -90,
                    style: {
                        colors: "#8c9097",
                        fontSize: '11px',
                        fontWeight: 600,
                        cssClass: 'apexcharts-xaxis-label',
                    },
                }
            },
            tooltip: {
                y: [
                    {
                        title: {
                            formatter: function (val: any) {
                                return val;
                            }
                        }
                    },
                    {
                        title: {
                            formatter: function (val: any) {
                                return val;
                            }
                        }
                    },
                    {
                        title: {
                            formatter: function (val: any) {
                                return val;
                            }
                        }
                    }
                ]
            },
            colors: ["rgb(132, 90, 223)", "#23b7e5"],
        
      };
  }
  ngAfterViewInit(): void {
      this.setChartWidth();
    this.cdr.detectChanges();
  }
  
  private setChartWidth(): void {
    const chartContainer = this.el.nativeElement.querySelector('.chart-container');
    const chartContainer1 = this.el.nativeElement.querySelector('.chart-container1');
    const chart = new ApexCharts(chartContainer, this.chartOptions);
  
    chart.render();
    // const chart1 = new ApexCharts(chartContainer1, this.optionsCircle1);
  
    // chart1.render();
  }
}
