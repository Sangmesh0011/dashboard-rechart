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
import TeleRisk from "./components/TeleRisk";
function App() {
  const data = useCSVData();

  return (
    <div className="w-full h-[100vh] flex flex-col justify-center items-center bg-[#628fdc]">
      {/* <div className="w-1/6 h-[100vh] mt-[-900px] text-white flex flex-col p-2 gap-1 pt-12">
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
      </div> */}
        <Navbar />
      <div className="w-full h-[90vh] bg-[#0c122075] p-2 flex justify-center items-center text-white">

        <section className="w-4/12 h-full border-x-2 border-y-2">
          <div className="zone w-full h-3/6 px-16 bg-slate-800 flex justify-center items-center">
            <h1>Zone wise distribution</h1>
            <ZonePieChart data={data}/>
          </div>
          <div className="zone w-full h-3/6 px-16 bg-slate-800 flex justify-center items-center">
            {/* <h1>Prepaid and Postpaid data distribution</h1> */}
            <PrePost data={data}/>
          </div>
        </section>


        <section className="w-4/12 h-full border-x-2 border-y-2">
        <div className="comp w-full h-3/6 px-16 bg-slate-800 flex justify-center items-center">
            {/* <h1>Zone wise distribution</h1> */}
            <CompanyWise/>
            
          </div>
          <div className="px-4 py-2 flex flex-col justify-center items-center h-28 bg-[#1e293e50]">
             <div className="text-lg">Total number of users</div>
              <div>
                <strong className="text-4xl">{data.length}</strong>
              </div>
             </div>

           <div className="w-full h-fit">
            <TeleRisk />
            </div>  
        </section>


        <section className="w-4/12 h-full border-x-2 border-y-2">
        <div className="zone w-full h-3/6 bg-slate-800 flex flex-col pt-12 gap-5 justify-center items-center">
            <h1>Social sites distribution</h1>
            <AccUsers data={data}/>
          </div>
          <div className="user w-full h-3/6 px-16 pt-6 bg-slate-800 flex justify-center items-center">
            <UserTable/>
          </div>
        </section>
      </div>
    </div>
  );
}

export default App;
