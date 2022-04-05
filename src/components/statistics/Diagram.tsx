/*export default function Diagram() {
    return <h2>Hi!</h2>;
}*/

import React from 'react';
import { AreaChart, Area, YAxis, XAxis, CartesianGrid } from 'recharts';

class Diagram extends React.Component {
    //Endre data når vi får data fra Mikael
    data = [
        {
            time: '06.00',
            'Energibruk på skolen i løpet av dagen': 3432,
        },
        {
            time: '07.00',
            'Energibruk på skolen i løpet av dagen': 2342,
        },
        {
            time: '08.00',
            'Energibruk på skolen i løpet av dagen': 4565,
        },
        {
            time: '09.00',
            'Energibruk på skolen i løpet av dagen': 4654,
        },
        {
            time: '10.00',
            'Energibruk på skolen i løpet av dagen': 5765,
        },
        {
            time: '11.00',
            'Energibruk på skolen i løpet av dagen': 6765,
        },
        {
            time: '12.00',
            'Energibruk på skolen i løpet av dagen': 7765,
        },
        {
            time: '13.00',
            'Energibruk på skolen i løpet av dagen': 8765,
        },
        {
            time: '14.00',
            'Energibruk på skolen i løpet av dagen': 6765,
        },
        {
            time: '15.00',
            'Energibruk på skolen i løpet av dagen': 5765,
        },
        {
            time: '16.00',
            'Energibruk på skolen i løpet av dagen': 4665,
        },
    ];

    render() {
        return (
            <AreaChart
                width={1200}
                height={400}
                data={this.data}
                margin={{ top: 10, right: 30, left: 100, bottom: 0 }}>
                <defs>
                    <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
                        <stop
                            offset="20%"
                            stopColor="#8884d8"
                            stopOpacity={0.8}
                        />
                        <stop
                            offset="95%"
                            stopColor="#8884d8"
                            stopOpacity={0.05}
                        />
                    </linearGradient>
                </defs>
                <XAxis dataKey="time" />
                <YAxis
                    label={{
                        /*value: 'kWh',*/
                        position: 'insideLeft',
                        angle: -90,
                        dy: -10,
                    }}
                />
                <Area
                    type="monotone"
                    dataKey="Energibruk på skolen i løpet av dagen"
                    stroke="#8884d8"
                    fillOpacity={1}
                    fill="url(#colorUv)"
                />
            </AreaChart>
        );
    }
}

export default Diagram;

//<CartesianGrid strokeDasharray="3 3" />
