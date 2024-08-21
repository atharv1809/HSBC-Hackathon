import React from 'react';
import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';

const LineChart = () => {
    const options= {
            chart: {
                type: 'line'
            },
            title: {
                text: 'Transaction Amounts Over Time'
            },
            xAxis: {
                categories: ['Step 0', 'Step 1', 'Step 2', 'Step 3', 'Step 4']
            },
            yAxis: {
                title: {
                    text: 'Amount ($)'
                }
            },
            series: [{
                name: 'Transaction Amount',
                data: [200, 250, 300, 350, 400]
            }]
        };
  return (
    <div style={{ marginBottom: '50px' }}>
                <HighchartsReact highcharts={Highcharts} options={options} />
            </div>
  )
}

export default LineChart