import React, { useState, useEffect, createContext } from "react";
import axios from "axios";
import { Alert } from "react-native";
const TimekeepingContext = createContext();
function TimekeepingProvider({ children }) {
  const [registerAbsent, setRegisterAbsent] = useState({
    from: "",
    to: "",
    reason: "",
  });
  const [month, setMonth] = useState(new Date().getMonth() + 1);
  const [year, setYear] = useState(new Date().getFullYear());
  const [data, setData] = useState([]);
  const tough = require('tough-cookie'); 
  const getAttendance = async () => {
    axios.get('http://test.diligo.vn:15000/api/v1/attendance', {
      Headers: {
        "access_token": 'access_token_80cecece2190852aa76be08667d022258b4b6718', 
      }
  })
  .then(res => {     
      console.log(res)
  })
  .catch(err => console.log(err))  
  };
  useEffect(() => {
    getAttendance();
  }, []);
  // console.log("Attendance "+data)
  const value = {
    registerAbsent,
    setRegisterAbsent,
    month,
    setMonth,
    year,
    setYear,
    data,
    setData,
  };
  return (
    <TimekeepingContext.Provider value={value}>
      {children}
    </TimekeepingContext.Provider>
  );
}
export { TimekeepingProvider, TimekeepingContext };
