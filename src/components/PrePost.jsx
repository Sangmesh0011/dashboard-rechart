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
    <div className="w-full h-full flex flex-row justify-center items-center ">
      <div className="w-full mb-4">
        <RadarChart
          cx={120}
          cy={180}
          outerRadius={110}
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
      <div className="">
        <h2 className="w-52 absolute bottom-10 left-20 font-bold">Newtork service type</h2>
      <div className="p-2 w-48 mt-[-40px] flex justify-center items-center gap-6 h-12 ml-[-100px] bg-[#04030528]">
        <div className="text-sm">Prepaid users</div>
        <div>
          <strong className="text-xl">{newData.prepaid}</strong>
        </div>
      </div>
      <div className="p-2 w-48 flex justify-center items-center gap-6 h-12 ml-[-100px] bg-[#04030528]">
        <div className="text-sm">Postpaid users</div>
        <div>
          <strong className="text-xl">{newData.postpaid}</strong>
        </div>
      </div>
      <div className="p-2 w-48 flex justify-center items-center gap-6 h-12 ml-[-100px] bg-[#04030528]">
        <div className="text-sm">Unknown users</div>
        <div>
          <strong className="text-xl">{newData.unknown}</strong>
        </div>
      </div>
      </div>
      
    </div>
  );
};

export default PrePost;
