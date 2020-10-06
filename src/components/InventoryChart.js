import React, { Component } from 'react'
import Chart from "chart.js";

export default class InventoryChart extends Component {
    chartRef = React.createRef();
    
    componentDidMount() {
        const myChartRef = this.chartRef.current.getContext("2d");
        
        new Chart(myChartRef, {
            type: "line",
            data: {
                //Bring in data
                labels: ["Jan", "Feb", "Mar", "Apr", "May", "June", "Jul", "Aug", "Sept", "Oct", "Nov", "Dec"],
                datasets: [
                    {
                        label: "Earnings",
                        data: [
                            10.024,
                            11.05,
                            15,
                            12,
                            7,
                            9,
                            14,
                            18,
                            15,
                            14,
                            20,
                            18
                        ],
                    }
                ]
            },
            options: {
                //Customize chart options
            }
        });
    }
    render() {
        return (
            <div>
                <canvas
                    id="myChart"
                    ref={this.chartRef}
                />
            </div>
        )
    }
}