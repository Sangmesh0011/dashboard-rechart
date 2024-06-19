import React from 'react'
import { PieChart, Pie, Sector, Cell, ResponsiveContainer } from 'recharts';
import useCSVData from '../utils/useCSVData';

const data = [
    { name: 'Group A', value: 400 },
    { name: 'Group B', value: 300 },
    { name: 'Group C', value: 300 },
    { name: 'Group D', value: 200 },
  ];
  
  const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042'];
  
  const RADIAN = Math.PI / 180;
  const renderCustomizedLabel = ({ cx, cy, midAngle, innerRadius, outerRadius, percent, index }) => {
    const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
    const x = cx + radius * Math.cos(-midAngle * RADIAN);
    const y = cy + radius * Math.sin(-midAngle * RADIAN);
  
    return (
      <text x={x} y={y} fill="white" textAnchor={x > cx ? 'start' : 'end'} dominantBaseline="central">
        {`${(percent * 100).toFixed(0)}%`}
      </text>
    );
  };

const TeleRisk = () => {
    const data = useCSVData();
  const newData = data.reduce(
    (acc, curr) => {
      if (curr["Risk Model.telecomRisk"] === "Low") {
        acc.low++;
      } else if (curr["Risk Model.telecomRisk"] === "High") {
        acc.high++;
      } else if (curr["Risk Model.telecomRisk"] === "Medium") {
        acc.medium++;
      } else {
        acc.unknown++;
      }
      return acc;
    },
    { low: 0, high: 0, medium: 0, unknown: 0 }
  );
  console.log("Accu",newData);
  const arrayOfObjects = [
    { name: "Low", value: newData.low },
    { name: "High", value: newData.high },
    { name: "Medium", value: newData.medium },
    { name: "Unknown", value: newData.unknown },
  ];
  console.log(arrayOfObjects)
  return (
    <div className='flex justify-center items-center gap-6'>
        <h1>Telecom risk score</h1>
        <div className="">
        
        <PieChart width={200} height={200}>
          <Pie
            data={arrayOfObjects}
            cx="50%"
            cy="50%"
            labelLine={false}
            label={renderCustomizedLabel}
            outerRadius={80}
            fill="#8884d8"
            dataKey="value"
          >
            {data.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
            ))}
          </Pie>
        </PieChart>
        </div>
        <div className="flex flex-col justify-center items-center gap-3">
            <span className='flex justify-center items-center gap-3'><div className="h-3 w-3 bg-red-600"></div>High</span>
            <span className='flex justify-center items-center gap-3'><div className="h-3 w-3 bg-yellow-500"></div>Medium</span>

            <span className='flex justify-center items-center gap-3'><div className="h-3 w-3 bg-green-600"></div>Low</span>

        </div>
        
    </div>
  )
}

export default TeleRisk
