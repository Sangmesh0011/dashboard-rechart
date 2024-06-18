import React from "react";

import {
  Radar,
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  PolarRadiusAxis,
} from "recharts";

const PrePost = ({ data }) => {
  const newData = data.reduce(
    (acc, curr) => {
      if (curr["Phone Network.numberBillingType"] === "prepaid") {
        acc.prepaid++;
      } else if (curr["Phone Network.numberBillingType"] === "postpaid") {
        acc.postpaid++;
      } else {
        acc.unknown++;
      }
      return acc;
    },
    { prepaid: 0, postpaid: 0, unknown: 0 }
  );
  const arrayOfObjects = [
    { name: "postpaid", A: newData.postpaid, fullMark: data.length },
    { name: "prepaid", A: newData.prepaid, fullMark: data.length },
    { name: "unknown", A: newData.unknown, fullMark: data.length },
  ];


  return (
    <div className="w-3/4 h-auto flex flex-col justify-center items-center ">
      <div className="w-full mb-4">
        <RadarChart
          cx={220}
          cy={180}
          outerRadius={150}
          width={500}
          height={300}
          data={arrayOfObjects}
        >
          <PolarGrid />
          <PolarAngleAxis dataKey="name" />
          <PolarRadiusAxis />
          <Radar
            name="Network Type"
            dataKey="A"
            stroke="#8884d8"
            fill="#8884d8"
            fillOpacity={0.6}
          />
        </RadarChart>
      </div>
      <div className="px-4 flex justify-center items-center gap-52 h-24 bg-[#04030528] rounded-2xl">
        <div className="text-lg">Total Prepaid users</div>
        <div>
          <strong className="text-2xl">{newData.prepaid}</strong>
        </div>
      </div>
      <div className="px-4 flex justify-center items-center gap-52 h-24 mt-4 bg-[#04030528] rounded-2xl">
        <div className="text-lg">Total Postpaid users</div>
        <div>
          <strong className="text-2xl">{newData.postpaid}</strong>
        </div>
      </div>
      <div className="px-4 flex justify-center items-center gap-52 h-24 mt-4 bg-[#04030528] rounded-2xl">
        <div className="text-lg">Total Unknown users</div>
        <div>
          <strong className="text-2xl">{newData.unknown}</strong>
        </div>
      </div>
    </div>
  );
};

export default PrePost;
