import React from "react";
import { BarChart, Bar, Rectangle, XAxis, YAxis, CartesianGrid, Tooltip, Legend,} from 'recharts';


const AccUsers = ({data}) => {
  const accountCounts = data.reduce(
    (acc, user) => {
      if (user["Phone Social Premium.whatsapp"] === "Account Found") {
        acc.whatsapp++;
      }
      if (user["Phone Social Premium.amazon"] === "Account Found") {
        acc.amazon++;
      }
      if (user["Phone Social Premium.swiggy"] === "Account Found") {
        acc.swiggy++;
      }
      if (user["Phone Social Premium.flipkart"] === "Account Found") {
        acc.flipkart++;
      }
      if (user["Phone Social Premium.instagram"] === "Account Found") {
        acc.instagram++;
      }
      return acc;
    },
    { whatsapp: 0, amazon: 0, swiggy: 0,flipkart:0,instagram:0 }
  );
  const arrayOfObjects = Object.entries(accountCounts).map(([key, value]) => ({
    name: key,
    count: value,
  }));

  return (
    <div className="w-full h-full">
        <BarChart
          width={500}
          height={300}
          data={arrayOfObjects}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Bar dataKey="count" fill="#8884d8" activeBar={<Rectangle fill="#2284d0" stroke="white" />} />
        </BarChart>

    </div>
  );
};

export default AccUsers;
