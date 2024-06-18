import React from "react";
import { PieChart, Pie, Tooltip, ResponsiveContainer } from "recharts";

const ZonePieChart = ({data}) => {

  const zoneDataFinal = data.reduce((accu, curr) => {
    if (accu[curr.Zone]) {
      accu[curr.Zone]++;
    } else {
      accu[curr.Zone] = 1;
    }
    return accu;
  },{});

  const pieChartData = Object.keys(zoneDataFinal).map((Zone) => ({
    Zone,
    count: zoneDataFinal[Zone],
  }));
  console.log(pieChartData)
  

  return (
    <div className="w-full h-full">
      <ResponsiveContainer width="100%" height={400}>
        <PieChart>
          <Pie
            data={pieChartData}
            dataKey="count"
            nameKey="Zone"
            cx="50%"
            cy="50%"
            outerRadius={120}
            fill="#8884d8"
          />
          <Tooltip />
          {/* <Legend /> */}
        </PieChart>
      </ResponsiveContainer>
    </div>
  );
};

export default ZonePieChart;
