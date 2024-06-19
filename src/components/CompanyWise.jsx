import React, { useCallback, useState } from "react";
import { PieChart, Pie, Sector } from "recharts";
import useCSVData from "../utils/useCSVData";

const renderActiveShape = (props) => {
  const RADIAN = Math.PI / 180;
  const {
    cx,
    cy,
    midAngle,
    innerRadius,
    outerRadius,
    startAngle,
    endAngle,
    fill,
    payload,
    percent,
    value,
  } = props;
  const sin = Math.sin(-RADIAN * midAngle);
  const cos = Math.cos(-RADIAN * midAngle);
  const sx = cx + (outerRadius + 10) * cos;
  const sy = cy + (outerRadius + 10) * sin;
  const mx = cx + (outerRadius + 30) * cos;
  const my = cy + (outerRadius + 30) * sin;
  const ex = mx + (cos >= 0 ? 1 : -1) * 22;
  const ey = my;
  const textAnchor = cos >= 0 ? "start" : "end";

  return (
    <g>
      <text x={cx} y={cy} dy={8} textAnchor="middle" fill={fill}>
        {payload.name}
      </text>
      <Sector
        cx={cx}
        cy={cy}
        innerRadius={innerRadius}
        outerRadius={outerRadius}
        startAngle={startAngle}
        endAngle={endAngle}
        fill={fill}
      />
      <Sector
        cx={cx}
        cy={cy}
        startAngle={startAngle}
        endAngle={endAngle}
        innerRadius={outerRadius + 6}
        outerRadius={outerRadius + 10}
        fill={fill}
      />
      <path
        d={`M${sx},${sy}L${mx},${my}L${ex},${ey}`}
        stroke={fill}
        fill="none"
      />
      <circle cx={ex} cy={ey} r={2} fill={fill} stroke="none" />
      <text
        x={ex + (cos >= 0 ? 1 : -1) * 12}
        y={ey}
        textAnchor={textAnchor}
        fill="#333"
      >{`PV ${value}`}</text>
      <text
        x={ex + (cos >= 0 ? 1 : -1) * 12}
        y={ey}
        dy={18}
        textAnchor={textAnchor}
        fill="#999"
      >
        {`(Rate ${(percent * 100).toFixed(2)}%)`}
      </text>
    </g>
  );
};

const CompanyWise = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const data = useCSVData();
  const newData = data.reduce(
    (acc, curr) => {
      if (curr["Phone Network.currentNetworkName"] === "Airtel") {
        acc.airtel++;
      } else if (curr["Phone Network.currentNetworkName"] === "Reliance Jio") {
        acc.jio++;
      } else if (curr["Phone Network.currentNetworkName"] === "Vodafone") {
        acc.vodafone++;
      } else {
        acc.unknown++;
      }
      return acc;
    },
    { airtel: 0, jio: 0, vodafone: 0, unknown: 0 }
  );

  const arrayOfObjects = [
    { name: "Reliance Jio", value: newData.jio },
    { name: "Vodafone", value: newData.vodafone },
    { name: "Airtel", value: newData.airtel },
    { name: "Others", value: newData.unknown },
  ];

  const onPieEnter = useCallback(
    (_, index) => {
      setActiveIndex(index);
    },
    [setActiveIndex]
  );
  return (
    <div className="flex w-full h-full p-0">
        <div className="w-[550px]">
        <PieChart width={350} height={350}>
        <Pie
          activeIndex={activeIndex}
          activeShape={renderActiveShape}
          data={arrayOfObjects}
          cx={100}
          cy={150}
          innerRadius={60}
          outerRadius={90}
          fill="#8884d8"
          dataKey="value"
          onMouseEnter={onPieEnter}
          
        />
      </PieChart>
        </div>
        <div className="flex flex-col justify-center items-center">
        <div className="px-4 w-[150px] ml-[-90px] flex justify-center items-center gap-3 h-16 bg-[#04030528]">
        <div className="text-sm">Airtel users</div>
        <div className="">
          <strong className="text-2xl">{newData.airtel}</strong>
        </div>
      </div>
      <div className="px-4 w-[150px] ml-[-90px] flex justify-center items-center gap-3 h-16 bg-[#04030528]">
        <div className="text-sm w-3/5">Reliance Jio users</div>
        <div className="w-2/5">
          <strong className="text-2xl">{newData.jio}</strong>
        </div>
      </div>
      <div className="px-4 w-[150px] ml-[-90px] flex justify-center items-center gap-3 h-16 bg-[#04030528]">
        <div className="text-sm w-3/5">Vodafone users</div>
        <div className="w-2/5">
          <strong className="text-2xl">{newData.vodafone}</strong>
        </div>
      </div>
      <div className="px-4 w-[150px] ml-[-90px] flex justify-center items-center gap-3 h-16 bg-[#04030528]">
        <div className="text-sm w-3/5">Other users</div>
        <div className="w-2/5">
          <strong className="text-2xl">{newData.unknown}</strong>
        </div>
      </div>
        </div>
     
    </div>
  );
};

export default CompanyWise;
