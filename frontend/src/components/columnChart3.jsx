import React from 'react';
import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';

const ColumnChart3 = () => {
    const options= {
        chart: {
            type: 'column'
        },
        title: {
            text: 'Total Transactions by Zip Code'
        },
        xAxis: {
            categories: ['28007', '28205', '28210', '28211', '28212']
        },
        yAxis: {
            min: 0,
            title: {
                text: 'Number of Transactions'
            }
        },
        series: [{
            name: 'Transactions',
            data: [60, 20, 10, 5, 5]  // Sample data
        }]
    };
  return (
    <div style={{ marginBottom: '50px' }}>
                <HighchartsReact highcharts={Highcharts} options={options} />
            </div>
  )
}

export default ColumnChart3
