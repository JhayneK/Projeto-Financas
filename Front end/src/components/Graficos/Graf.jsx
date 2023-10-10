import React, { useEffect } from 'react';
import ApexCharts from 'react-apexcharts';
// import 'apexcharts/dist/apexcharts.css';

export default function Graf() {

    var sparklineData = [47, 45, 54, 38, 56, 24, 65, 31, 37, 39, 62, 51, 35, 41, 35, 27, 93, 53, 61, 27, 54, 43, 19, 46];

    var colorPalette = ['#00D8B6','#008FFB',  '#FEB019', '#FF4560', '#775DD0']

    const entradaSeries = [{
      name: 'Entrada',
      data: sparklineData
    }]

    const entradaOptions = {
      chart: {
        id: 'entrada',
        background: '#ffffff',
        group: 'sparklines',
        type: 'area',
        height: 160,
        sparkline: {
          enabled: true
        },
      },
      stroke: {
        curve: 'straight'
      },
      fill: {
        opacity: 1,
      },
      labels: [...Array(24).keys()].map(n => `2022-07-0${n+1}`),
      yaxis: {
        min: 0
      },
      xaxis: {
        type: 'datetime',
      },
      
      colors: ['#008FFB'],
      title: {
        text: 'R$424,65',
        offsetX: 30,
        style: {
          fontSize: '24px',
          cssClass: 'apexcharts-yaxis-title'
        }
      },
      subtitle: {
        text: 'Entrada',
        offsetX: 30,
        style: {
          fontSize: '14px',
          cssClass: 'apexcharts-yaxis-title'
        }
      }
    }

    const saidaSeries = [{
      name: 'Saida',
      data: sparklineData
    }] 

    const saidaOptions = {
      chart: {
        id: 'saida',
        group: 'sparklines',
        background: '#ffffff',
        type: 'area',
        height: 160,
        sparkline: {
          enabled: true
        },
      },
      stroke: {
        curve: 'straight'
      },
      fill: {
        opacity: 1,
      },
      series: [{
        name: 'Saida',
        data: sparklineData
      }],
      labels: [...Array(24).keys()].map(n => `2018-09-0${n+1}`),
      yaxis: {
        min: 0
      },
      xaxis: {
        type: 'datetime',
      },
      colors: ['#008FFB'],
      title: {
        text: 'R$455,31',
        offsetX: 30,
        style: {
          fontSize: '24px',
          cssClass: 'apexcharts-yaxis-title'
        }
      },
      subtitle: {
        text: 'Saida',
        offsetX: 30,
        style: {
          fontSize: '14px',
          cssClass: 'apexcharts-yaxis-title'
        }
      }
    }

    const totalSeries = [{
      name: 'Total',
      data: sparklineData
    }]

    const totalOptions = {
      chart: {
        id: 'total',
        background: '#ffffff',
        group: 'sparklines',
        type: 'area',
        height: 160,
        sparkline: {
          enabled: true
        },
      },
      stroke: {
        curve: 'straight'
      },
      fill: {
        opacity: 1,
      },
      labels: [...Array(24).keys()].map(n => `2022-07-0${n+1}`),
      yaxis: {
        min: 0
      },
      xaxis: {
        type: 'datetime',
      },
      
      colors: ['#008FFB'],
      title: {
        text: 'R$4424,65',
        offsetX: 30,
        style: {
          fontSize: '24px',
          cssClass: 'apexcharts-yaxis-title'
        }
      },
      subtitle: {
        text: 'Total',
        offsetX: 30,
        style: {
          fontSize: '14px',
          cssClass: 'apexcharts-yaxis-title'
        }
      }
    }

    const seriesLine = [
        {
          name: "Desktops",
          data: [10, 41, 100, 51, 77, 54, 69, 91, 138]
        }
      ];

    const optionsLine = {
        chart: {
          height: 250,
          type: 'line',
          zoom: {
            enabled: false
          }
        },
        dataLabels: {
          enabled: false
        },
        stroke: {
          curve: 'straight'
        },
        title: {
          text: 'Teste',
          align: 'left'
        },
        grid: {
          row: {
            colors: ['#f3f3f3', 'transparent'],
            opacity: 0.5
          },
        },
        xaxis: {
          categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep'],
        }
      };

    const seriesDonut = [21, 23, 19, 14, 6];

    const optionsDonut = {
      chart: {
        type: 'donut',
        width: '100%',
        height: 400,
      },
      dataLabels: {
        enabled: false,
      },
      plotOptions: {
        pie: {
          customScale: 1,
          donut: {
            size: '75%',
          },
          offsetY: 10,
        },
        stroke: {
          colors: undefined
        }
      },
      colors: colorPalette,
      title: {
        text: 'Gastos do Mês',
        style: {
          fontSize: '18px'
        }
      },
      labels: ['Gasolina', 'Energia', 'Comida', 'Assinatura', 'Remédio'],
      legend: {
        position: 'left',
        offsetY: 90
      }
    };

    return (
        <div className='graf-container'>
          <div className='charts-container'>
            <div className='top-charts'>
              <div id='entrada' className='fluxo-box'>
                <ApexCharts 
                  width={400}
                  height={250}
                  series={entradaSeries}
                  options={entradaOptions}
                  type="area" />
              </div>

              <div id='saida' className='fluxo-box'>
                <ApexCharts 
                  width={400}
                  height={250}
                  series={saidaSeries}
                  options={saidaOptions}
                  type="area" />
              </div>

              <div id='total' className='fluxo-box'>
                <ApexCharts 
                  width={400}
                  height={250}
                  series={totalSeries}
                  options={totalOptions}
                  type="area" />
              </div>

            </div>
            <div className='bottom-charts'>
              <div id='line' className='line-box'>
                  <ApexCharts 
                  width={500}
                  height={500}
                  series={seriesLine}
                  options={optionsLine}
                  type="line" />
              </div>

              <div id='donut' className='donut-box'>
                <ApexCharts 
                  width={500}
                  height={500}
                  series={seriesDonut}
                  options={optionsDonut}
                  type="donut" />
              </div>

            </div>
          </div>
        </div>
    );

};