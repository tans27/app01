import React, { useState, createContext } from "react";
const FeedbackContext = createContext();
function FeedbackProvider({ children }) {
  const [year,setYear] = useState(new Date().getFullYear())
  const [data] = useState([
      {
          year:2022,
          data:  [20, 45, 28, 80, 100, 43,45, 95, 28, 80, 99, 43]
      },

  ])
  const value = {
    setYear,year,
    data
  };
  return <FeedbackContext.Provider value={value}>{children}</FeedbackContext.Provider>;
}
export { FeedbackProvider, FeedbackContext };
