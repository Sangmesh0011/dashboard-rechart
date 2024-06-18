import { useEffect, useState } from "react";
import axios from "axios";
import Papa from "papaparse";

const useCSVData = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get("/data.csv");
        const result = Papa.parse(res.data, { header: true }).data;
        setData(result);
      } catch (error) {
        console.error("error", error);
      }
    };
    fetchData();
  }, []);
  return data;
};

export default useCSVData;
