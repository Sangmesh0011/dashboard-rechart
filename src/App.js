import { AiFillDashboard } from "react-icons/ai"; 
import react from "react";
import "./App.css";
import ZonePieChart from "./components/ZonePieChart";
import useCSVData from "./utils/useCSVData";
import UserTable from "./components/UserTable";
import AccUsers from "./components/AccUsers";
import PrePost from "./components/PrePost";
import Navbar from "./components/Navbar";
import CompanyWise from "./components/CompanyWise";
function App() {
  const data = useCSVData();

  return (
    <div className="w-full h-full flex flex-row justify-center items-center bg-[#121b2b]">
      <div className="w-1/6 h-[100vh] mt-[-900px] text-white flex flex-col p-2 gap-1 pt-12">
        <div className="h-3/12 flex flex-col">
        <a
            href=""
            className="w-full mt-[-87px] mb-14 h-16 p-2 bg-slate-900 hover:bg-slate-800 flex justify-center items-center rounded-lg"
          >
           ECHARGEUP
          </a>
          <a
            href=""
            className="w-full h-16 p-2 hover:bg-slate-900 flex justify-center items-center rounded-lg"
          >
           Dashboard
          </a>
          <a
            href=""
            className="w-full h-16 p-2 hover:bg-slate-900 flex justify-center items-center rounded-lg"
          >
            Messages
          </a>
          <a
            href=""
            className="w-full h-16 p-2 hover:bg-slate-900 flex justify-center items-center rounded-lg"
          >
            Transactions
          </a>
          <a
            href=""
            className="w-full h-16 p-2 hover:bg-slate-900 flex justify-center items-center rounded-lg"
          >
            Calendar
          </a>
          <a
            href=""
            className="w-full h-16 p-2 hover:bg-slate-900 flex justify-center items-center rounded-lg"
          >
            Maps
          </a>
          <a
            href=""
            className="w-full h-16 p-2 hover:bg-slate-900 flex justify-center items-center rounded-lg"
          >
            Settings
          </a>
        </div>
        <div className="h-9/12"></div>
      </div>
      <div className="w-5/6 min-h-full bg-[#0c122075] p-6 flex flex-col text-white">
        <Navbar />
        <div className="h-16 ml-8 mt-8">
          <h2 className="text-4xl font-bold">Welcome to the dashboard</h2>
        </div>

        <div className="flex justify-center items-center p-6 gap-3">
          {/* //Accounts users */}
          <div className="w-7/12 h-96 flex flex-col justify-evenly items-center bg-[#141f2fd3] rounded-2xl">
            <div className="mb-4">
              <h3 className="font-semibold">Social Account holders</h3>
            </div>
            <div>
              <AccUsers data={data} />
            </div>
          </div>
          {/* //Zone chart */}
          <div className="w-5/12 h-96 flex justify-evenly items-center bg-[#141f2fd3] rounded-2xl">
            <h3 className="font-semibold ml-8">Zone wise distribution</h3>
            <ZonePieChart data={data} />
          </div>

        </div>

        {/* Line2 */}
        <div className="flex justify-center items-center p-6 gap-3 h-auto mt-[-35px]">
          <div className="w-6/12 h-auto py-12 flex flex-col justify-evenly items-center bg-[#141f2fd3] rounded-2xl">
            <PrePost data={data} />
          </div>

          {/* Users */}
          <div className="w-6/12 h-auto flex mt-[-260px] flex-col justify-evenly items-center bg-[#141f2fd3] rounded-2xl">
            <UserTable />
          </div>
        </div>

        {/* {total} */}
        <div className="flex justify-center items-center p-6 gap-3 h-auto mt-[-304px] mb-80">
          <div className="w-6/12 h-auto bottom-0"></div>

          <div className="w-6/12 h-auto bottom-0">
            <div className="px-4 py-2 flex flex-col justify-center items-center h-64 bg-[#1e293e50] rounded-2xl">
              <div className="text-lg">Total number of users</div>
              <div>
                <strong className="text-4xl">{data.length}</strong>
              </div>
            </div>
          </div>
        </div>

        {/* Company wise */}
        <div className="w-[96%] ml-6 rounded-2xl h-auto bg-[#1e39525c] mt-[-328px]">
          <CompanyWise/>
        </div>
      </div>
    </div>
  );
}

export default App;
