import React from 'react';

import { useEffect, useState } from 'react';
import { CartesianGrid, Legend, Line, LineChart, PolarAngleAxis, PolarGrid, PolarRadiusAxis, Radar, RadarChart, Tooltip, XAxis, YAxis } from 'recharts';

const Dashboard = () => {
    const [chatData, setChatData] = useState([]);

    useEffect(() => {
        fetch("data.json")
            .then(res => res.json())
            .then(data => setChatData(data))
    }, [])
    console.log(chatData)

    return (
        <div className='px-4 pt-20 pb-24 mx-auto max-w-7xl'>
            <LineChart className='mb-4 mx-auto' width={600} height={400} data={chatData}>
                <Line type="monotone" dataKey={'sell'} stroke="#8884d8" />
                <Line type="monotone" dataKey={'investment'} stroke="#8884d8" />
                <Line type="monotone" dataKey={'revenue'} stroke="#8884d8" />
                <CartesianGrid stroke="#ccc" />
                <XAxis dataKey={'month'} />
                <YAxis />
                <Tooltip />
            </LineChart>

            <RadarChart className='my-8 mx-auto' outerRadius={90} width={730} height={250} data={chatData}>
                <PolarGrid />
                <PolarAngleAxis dataKey={'month'} />
                <PolarRadiusAxis angle={30} domain={[0, 150]} />
                <Radar name='Sell' dataKey={'sell'} stroke="#8884d8" fill="#8884d8" fillOpacity={0.6} />
                <Radar name='Investment' dataKey={'investment'} stroke="#82ca9d" fill="#82ca9d" fillOpacity={0.6} />
                <Radar name='Revenue' dataKey={'revenue'} stroke="#c482ca" fill="#c482ca" fillOpacity={0.6} />
                <Legend />
            </RadarChart>
        </div >
    );
};

export default Dashboard;