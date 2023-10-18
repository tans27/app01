import React, { useState, createContext, useEffect } from "react";
import axios from "axios";
const ApproveContext = createContext();
function ApproveProvider({ children }) {
  const [activeTab, setActiveTab] = useState("all");
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState([]);
  const [listProductAdd, setListProductAdd] = useState([]);
  const [productAdd, setProductAdd] = useState(0);
  const [time, setTime] = useState({
    from: "",
    to: "",
  });
  const [questionFilter,setQuestionFilter] = useState([]);
  console.log(questionFilter)
  const getData = async () => {
    setLoading(true);
    try {
      const response = await axios.get(
        "http://hrm.diligo.vn/api/v1/approvals",
        {}
      );
      setData(response.data.data);
      setLoading(false);
    } catch (error) {
      console.error(error);
    }
  };
  useEffect(() => {
    getData();
  }, []); 
  const value = {
    loading,
    time,
    setTime,
    data,
    setData,
    listProductAdd,
    setListProductAdd,
    productAdd,
    setProductAdd,
    activeTab,
    setActiveTab,
    questionFilter,setQuestionFilter
  };
  return (
    <ApproveContext.Provider value={value}>{children}</ApproveContext.Provider>
  );
}
export { ApproveProvider, ApproveContext };
