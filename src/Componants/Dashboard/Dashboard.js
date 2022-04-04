import React from 'react';

import { useEffect, useState } from 'react';
import { CartesianGrid, Line, LineChart, Tooltip, XAxis, YAxis } from 'recharts';

import Rechat from '../Rechat/Rechat';


const Dashboard = () => {
    const [chatData, setChatData] = useState([]);

    useEffect(() => {
        fetch("data.json")
            .then(res => res.json())
            .then(data => setChatData(data))
    }, [])
    // console.log(chatData)

    return (
        <div>
            <LineChart width={800} height={400} data={chatData}>
                <Line type="monotone" dataKey={'sell'} stroke="#8884d8" />
                <Line type="monotone" dataKey={'investment'} stroke="#8884d8" />
                <Line type="monotone" dataKey={'revenue'} stroke="#8884d8" />
                <CartesianGrid stroke="#ccc" />
                <XAxis dataKey={'month'} />
                <YAxis />
                <Tooltip />
            </LineChart>

        </div >
    );
};

export default Dashboard;