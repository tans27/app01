import { ScrollView, View } from "react-native";
import React, { useContext, useLayoutEffect } from "react";
import SelectMonth from "../../components/SelectMonth";
import { TimekeepingContext } from "./Context";
import CalendarAttendance from "../../components/CalendarAttendance";

const Timekeeping = () => {
  // const {data} = useContext(TimekeepingContext)
  // console.log(data)
  const datas = [
    {
      date: "05/04/2022",
      timeIn: "08:00",
      timeOut: "17:00",
      times: 2,
    },
    {
      date: "05/04/2022",
      timeIn: "09:00",
      timeOut: "17:00",
      times: 2,
    },
    {
      date: "05/04/2022",
      timeIn: "08:00",
      timeOut: "16:00",
      times: 2,
    },
    {
      date: "05/04/2022",
      timeIn: "08:00",
      timeOut: "17:00",
      times: 1,
    },
    {
      date: "05/04/2022",
      timeIn: "08:00",
      timeOut: "17:00",
      times: 2,
    },
    {
      date: "05/04/2022",
      timeIn: "08:00",
      timeOut: "17:00",
      times: 2,
    },
    {
      date: "05/04/2022",
      timeIn: "08:00",
      timeOut: "17:00",
      times: 2,
    },
    {
      date: "05/04/2022",
      timeIn: "08:00",
      timeOut: "17:00",
      times: 2,
    },
    {
      date: "05/04/2022",
      timeIn: "08:00",
      timeOut: "17:00",
      times: 2,
    },
    {
      date: "05/04/2022",
      timeIn: "08:00",
      timeOut: "17:00",
      times: 2,
    },
    {
      date: "05/04/2022",
      timeIn: "08:00",
      timeOut: "17:00",
      times: 2,
    },
    {
      date: "05/04/2022",
      timeIn: "09:00",
      timeOut: "17:00",
      times: 2,
    },
    {
      date: "05/04/2022",
      timeIn: "08:00",
      timeOut: "17:00",
      times: 2,
    },
    {
      date: "05/04/2022",
      timeIn: "08:00",
      timeOut: "17:00",
      times: 2,
    },
    {
      date: "05/04/2022",
      timeIn: "08:00",
      timeOut: "16:00",
      times: 2,
    },
    {
      date: "05/04/2022",
      timeIn: "08:00",
      timeOut: "17:00",
      times: 1,
    },
    {
      date: "05/04/2022",
      timeIn: "08:00",
      timeOut: "17:00",
      times: 2,
    },
    {
      date: "05/04/2022",
      timeIn: "08:00",
      timeOut: "17:00",
      times: 2,
    },
    {
      date: "05/04/2022",
      timeIn: "08:00",
      timeOut: "17:00",
      times: 2,
    },
    {
      date: "05/04/2022",
      timeIn: "08:00",
      timeOut: "17:00",
      times: 2,
    },
    {
      date: "05/04/2022",
      timeIn: "08:00",
      timeOut: "17:00",
      times: 2,
    },
    {
      date: "05/04/2022",
      timeIn: "08:00",
      timeOut: "17:00",
      times: 2,
    },
    {
      date: "05/04/2022",
      timeIn: "08:00",
      timeOut: "17:00",
      times: 2,
    },
    {
      date: "05/04/2022",
      timeIn: "09:00",
      timeOut: "17:00",
      times: 2,
    },
    {
      date: "05/04/2022",
      timeIn: "08:00",
      timeOut: "17:00",
      times: 2,
    },
    {
      date: "05/04/2022",
      timeIn: "08:00",
      timeOut: "17:00",
      times: 2,
    },
    {
      date: "05/04/2022",
      timeIn: "08:00",
      timeOut: "17:00",
      times: 2,
    },
    {
      date: "05/04/2022",
      timeIn: "08:00",
      timeOut: "17:00",
      times: 2,
    },
    {
      date: "05/04/2022",
      timeIn: "08:00",
      timeOut: "17:00",
      times: 2,
    },
    {
      date: "05/04/2022",
      timeIn: "08:00",
      timeOut: "17:00",
      times: 2,
    },
  ];
  const { month, setMonth, year, setYear } = useContext(TimekeepingContext);
  useLayoutEffect(() => {
    if (month > 12) {
      setYear(year + 1);
      setMonth(1);
    }
    if (month < 1) {
      setYear(year - 1);
      setMonth(12);
    }
  }, [month, setMonth, year, setYear]);
  return (
    <View style={{ flex: 1 }}>
      <View style={{ paddingVertical: 10, backgroundColor: "#fff" }}>
        <SelectMonth
          prevPress={() => setMonth(month - 1)}
          nextPress={() => {
            setMonth(month + 1);
          }}
          title={`${month}/${year}`}
        />
      </View>
      <ScrollView style={{ backgroundColor: "#fff" }}>
        <View>
          {/* {data.map((ele,index) => {
            return  <LineInfor key={index} date={ele.date} times={ele.times} detailTime={ele.detailTime}/>
        })} */}
          <CalendarAttendance
            month={month <= 0 && month >= 12 ? 12 : month}
            year={year}
            data={datas}
          />
        </View>
      </ScrollView>
    </View>
  );
};

export default Timekeeping;
