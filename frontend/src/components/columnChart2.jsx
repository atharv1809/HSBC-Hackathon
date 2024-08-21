import React from 'react';
import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';

const ColumnChart2 = () => {
    const options ={
        chart: {
            type: 'column'
        },
        title: {
            text: 'Fraud vs Non-Fraud Transactions'
        },
        xAxis: {
            categories: ['Non-Fraud', 'Fraud']
        },
        yAxis: {
            min: 0,
            title: {
                text: 'Number of Transactions'
            }
        },
        series: [{
            name: 'Transactions',
            data: [95, 5]  // Sample data
        }]
    };
  return (
      <div style={{ marginBottom: '50px' }}>
                <HighchartsReact highcharts={Highcharts} options={options} />
            </div>
  )
}

export default ColumnChart2
