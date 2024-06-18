import React from "react";
import useCSVData from "../utils/useCSVData";

const UserTable = () => {
  const data = useCSVData();
  const newData=data.slice(0,7);  
  return (
    <div className="text-white w-full h-full flex justify-center items-center p-8">
      <table className="w-full">
        <tbody>
          {newData.map((val, i) => (
            <tr  className="h-14 p-2 odd:bg-slate-700 even:bg-slate-800" key={i}>
              <td className="pl-10">{val['name']}</td>
              <td>{val['Phone Number']}</td>
              <td>{val['Phone Network.currentNetworkName']}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default UserTable;
