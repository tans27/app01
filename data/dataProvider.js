import React, { useState, useEffect, createContext } from "react";
const DataContext = createContext();
import axios from 'axios';
function DataProvider({ children }) {
  const [dataNotify, setDataNotify] = useState([]);
  const [data, setData] = useState([
    // {
    //   title: "E-Learning Website",
    //   description: "Tạo cảnh báo khi xóa nội dung bài học",
    //   status: "pendding",
    //   member: ["Admin"],
    //   dateStart: "",
    //   dateEnd: "",
    //   deadLine: "10/04/2022",
    //   listJob: [
    //     {
    //       title: "Sửa form không để tiếng anh",
    //       member: ["Luki"],
    //       dateStart: "08/04/2022",
    //       dateEnd: "09/04/2022",
    //       deadLine: "10/04/2022",
    //       status: "done",
    //       tabs: "",
    //     },
    //     {
    //       title: "Sửa form không để tiếng anh",
    //       member: ["Luki"],
    //       dateStart: "08/04/2022",
    //       dateEnd: "09/04/2022",
    //       deadLine: "10/04/2022",
    //       status: "done",
    //       tabs: "",
    //     },
    //     {
    //       title: "Sửa form không để tiếng anh",
    //       member: ["Luki"],
    //       dateStart: "08/04/2022",
    //       dateEnd: "09/04/2022",
    //       deadLine: "10/04/2022",
    //       status: "new",
    //       tabs: "",
    //     },
    //   ],
    // },
  ]);
  const [user, setUser] = useState({
    inforPerson: {
      id: "NHH23",
      avatar:
        "https://firebasestorage.googleapis.com/v0/b/citrineblog-d5f21.appspot.com/o/avatar%2FavatarDefault.jpg?alt=media&token=2a462988-a7cf-4632-962b-fac71f961c8e",
      fullName: "Nguyễn Huy Hoàng",
      gender: "male",
      dob: "23/06/2002",
      born: "Hải Hậu, Nam Định",
      address: "Chung cư 789",
      province: "Hà Nội",
      district: "Mỹ Đình",
      town: "Nam Từ Liêm",
      phone: "0963395763",
      email: "nguyenhuyhoangdevelop@gmail.com",
    },
    inforWork: {
      department: "Phòng Công Nghệ",
      title: "Project Manager",
      personnelLevel: "1",
      dateJoin: "22/03/2022",
      manage: "Trần Nhiệm",
    },
    inforAccount: {
      numberAccount: "90898989899",
      bank: "MB",
      branch: "Yên Định",
    },
    identification: {
      number: "036202010849",
      dateProvide: "25/09/2019",
      addressProvide: "Cục Cảnh sát",
    },
    workPermit: {
      number: "",
      fromDate: "",
      toDate: "",
      addressProvide: "",
    },
    curriculumVitae: {
      numberTax: "",
      email: "nguyenhuyhoangdevelop@gmail.com",
      nationality: "Việt Nam",
      nation: "Kinh",
      religion: "none",
      commonNames: "",
      domicile: "",
      status: "Độc thân",
      addressContact: "",
      peopleContact: "",
      phoneFix: "",
      phoneCompany: "",
      addressWork: "",
      address: "Chung cư 789",
      province: "Hà Nội",
      district: "Mỹ Đình",
      town: "Nam Từ Liêm",
    },
    inforStudy: {
      school: "",
      levelWork: "",
      levelCulture: "",
      levelStudy: "",
      language: "",
      certificate: "",
      rank: "",
    },
    health: {
      height: "170",
      weight: "55",
      blood: "O",
      eyeSight: "",
      heart: "",
    },
  });
  const [salary, setSalary] = useState([
    {
      name: "Nguyễn Huy Hoàng",
      job: "Project Manager",
      month: "01/2022",
      numberBank: "90898989899",
      address: "Chung cư 789, Mỹ Đình, Nam Từ Liêm, Hà Nội",
      email: "nguyenhuyhoangdevelop@gmail.com",
      bank: "MB",
      inforDetail: [
        {
          from: "01/01/2022",
          to: "30/01/2022",
          reference: "SPL/23",
          basicSalary: "",
          kpiSalary: "",
          carSalary: "",
          phoneSalary: "",
          BHXH: "",
          BHYT: "",
          BHTN: "",
        },
      ],
    },
  ]);
  const [statusJob, setStatusJob] = useState("delivered");
  const getProject = async()=> {
    try {
      const response = await axios.get('http://hrm.diligo.vn/api/v1/project');
      setData(response.data.data); 
    } catch (error) {
      console.error(error);
    }
  }
  useEffect(() => {
    getProject()
  },[])  
  const value = {
    dataNotify,
    setDataNotify,
    data,
    setData,
    user,
    setUser,
    salary,
    setSalary,
    statusJob,
    setStatusJob,
  };
  return <DataContext.Provider value={value}>{children}</DataContext.Provider>;
}
export { DataProvider, DataContext };
