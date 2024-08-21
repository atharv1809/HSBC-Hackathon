import React from 'react';
import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';

const pieChart = () => {
    const options ={
        chart: {
            type: 'pie'
        },
        title: {
            text: 'Distribution of Transaction Amounts by Gender'
        },
        series: [{
            name: 'Amount',
            colorByPoint: true,
            data: [
                { name: 'Male', y: 3500 },
                { name: 'Female', y: 2800 }
            ]
        }]
    };
  return (
      <div style={{ marginBottom: '50px' }}>
                <HighchartsReact highcharts={Highcharts} options={options} />
            </div>
  )
}

export default pieChart
