import React from 'react'
import { Line, Bar, Pie } from 'react-chartjs-2'
import Card from './cards';

const chartColor = "#b91617"
var data = {
    labels: [ 'Jan', 'Fab', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nev', 'Dec' ],
    datasets : [
        {
            label: 'Estimate Quantity',
            data: [2, 1, 3, 1, 2, 3, 2, 1, 2, 3, 2, 4],
            backgroundColor: chartColor,
            borderWidth: 4
        }
    ]
}
function Reports() {
    return (
        <div>
            <Card />
            <Line data={data} />
            <Bar data={data} />
            <Pie data={data} />
        </div>
    )
}

export default Reports
