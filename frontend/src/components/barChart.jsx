import React from 'react';
import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';

const BarChart = () => {
    const options= {
        chart: {
            type: 'bar'
        },
        title: {
            text: 'Average Transaction Amount by Age Group'
        },
        xAxis: {
            categories: ['Under 18', '18-24', '25-34', '35-44', '45-54', '55-64', '65+']
        },
        yAxis: {
            min: 0,
            title: {
                text: 'Average Amount ($)'
            }
        },
        series: [{
            name: 'Amount',
            data: [15, 25, 35, 30, 40, 45, 50]  // Sample data
        }]
    };
  return (
    <div style={{ marginBottom: '50px' }}>
                <HighchartsReact highcharts={Highcharts} options={options} />
            </div>
  )
}

export default BarChart
