import React from 'react';
import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';

const columnChart = () => {
    const options = {
        chart: {
            type: 'column'
        },
        title: {
            text: 'Total Transactions by Category'
        },
        xAxis: {
            categories: ['es_transportation', 'es_health', 'es_otherservices', 'es_food', 'es_hotelservices']
        },
        yAxis: {
            min: 0,
            title: {
                text: 'Number of Transactions'
            }
        },
        series: [{
            name: 'Transactions',
            data: [80, 5, 2, 1, 1]
        }]
    };
    return <>
        <div style={{ marginBottom: '50px' }}>
                <HighchartsReact highcharts={Highcharts} options={options} />
            </div>
    </>
};

export default columnChart;
