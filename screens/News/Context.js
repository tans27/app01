import React, { useState, createContext,useEffect } from "react";
import axios from "axios";
const NewsContext = createContext();
function NewsProvider({ children }) {
  const [dataNews,setDataNews] = useState([])
    const getNews = async()=> {
    try {
      const response = await axios.get('http://test.diligo.vn:15000/api/v1/blog');
      setDataNews(response.data.data); 
    } catch (error) {
      console.error(error);
    }
  }
  useEffect(() => {
    getNews()
  },[])
// console.log(dataNews)
  const value = {
    dataNews,
  };
  return <NewsContext.Provider value={value}>{children}</NewsContext.Provider>;
}
export { NewsProvider, NewsContext };
