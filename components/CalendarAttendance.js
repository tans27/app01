import { StyleSheet, Text, View, Dimensions } from "react-native";
import React, { useState, useEffect } from "react";
import moment from "moment";
import styleGlobal from "../assets/css/globalStyles";
const CalendarBox = ({ month, year, data }) => {
  const Box = ({ timeIn, timeOut, date }) => {
    return (
      <View style={[styleGlobal.flexCenter, styles.boxCorner]}>
        <View
          style={[
            styleGlobal.flexRow,
            styles.boxChildren,
            { alignItems: "flex-start", justifyContent: "center" },
          ]}
        >
          <View
            style={[
              styleGlobal.flexRow,
              {
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
              },
            ]}
          >
            <Text style={[styles.date]}>{date}</Text>
            {timeIn && (
              <Text
                style={[
                  timeIn.substring(0, timeOut.length - 3) > 8 &&
                  timeIn.substring(0, 2) > 1
                    ? styles.timeFalse
                    : styles.timeTrue,
                ]}
              >
                {timeIn}
              </Text>
            )}
            {timeOut && (
              <Text
                style={[
                  timeOut.substring(0, timeOut.length - 3) < 17
                    ? styles.timeFalse
                    : styles.timeTrue,
                ]}
              >
                {timeOut}
              </Text>
            )}
          </View>
        </View>
      </View>
    );
  };
  const DateName = ({ date }) => {
    return (
      <View style={[styleGlobal.flexCenter, styles.boxCorner, { height: 50 }]}>
        <Text style={{ fontWeight: "600" }}>
          {date !== 8 ? "Thứ " + date : "CN"}
        </Text>
      </View>
    );
  };
  const [numberDateLastMonth, setNumberDateLastMonth] = useState(
    Number(
      moment(
        `${month > 1 ? month - 1 : 1}/${moment(
          `${year}-${month > 1 ? month - 1 : 1}`,
          "YYYY-MM"
        ).daysInMonth()}/${year}`
      ).format("d")
    )
  );
  useEffect(() => {
    setNumberDateLastMonth(
      Number(
        moment(
          `${month > 1 ? month - 1 : month}/${moment(
            `${year}-${month > 1 ? month - 1 : month}`,
            "YYYY-MM"
          ).daysInMonth()}/${year}`
        ).format("d")
      )
    );
  }, [month]);
  // console.log(month + "-" + numberDateLastMonth);
  return (
    <View
      style={{
        backgroundColor: "#faf9ff",
        marginHorizontal: 20,
        paddingVertical: 10,
        borderRadius: 10,
      }}
    >
      <View style={[styleGlobal.flexRow, { flexWrap: "wrap" }]}>
        {new Array(7).fill("").map((ele, index) => {
          return <DateName date={index + 2} key={index} />;
        })}
         {new Array(numberDateLastMonth).fill("").map((ele, index) => {
          return (
            <Box
              date={moment(
                `${month > 1 ? month - 1 : month}/${
                  moment(
                    `${year}-${month > 1 ? month - 1 : month}`,
                    "YYYY-MM"
                  ).daysInMonth() +
                  1 +
                  index -
                  numberDateLastMonth
                }/${year}`
              ).format("DD/MM")}
              key={index}
            />
          );
        })} 
        {new Array(moment(`${year}-${month > 1 ? month - 1 : month}`, "YYYY-MM").daysInMonth())
          .fill("")
          .map((ele, index) => {
            return (
              <Box
                date={moment(`${month}/${index + 1}/${year}`).format("DD/MM")}
                timeOut={data[index] && data[index].timeOut}
                timeIn={data[index] && data[index].timeIn}
                key={index}
              />
            );
          })}
            {new Array(42 - moment(`${year}-${month-1}`, "YYYY-MM").daysInMonth() - numberDateLastMonth)
                .fill("")
                .map((ele, index) => {
                  return (
                    <Box
                      date={ moment(`${month+1}/${1+index}/${year}`).format("DD/MM") }
                      key={index}
                    />
                  );
                })
              }    
      </View>
      <View
        style={[
          styleGlobal.flexStart,
          {
            flexDirection: "column",
            alignItems: "baseline", 
            marginLeft: 10,
          },
        ]}
      >
        <View style={[styleGlobal.flexCenter, { marginVertical: 10 }]}>
          <View
            style={{
              backgroundColor: "#00a86b",
              width: 15,
              height: 15,
              borderRadius: 20,
              marginRight: 5,
            }}
          ></View>
          <Text>Đúng quy định</Text>
        </View>
        <View style={[styleGlobal.flexCenter]}>
          <View
            style={{
              backgroundColor: "#fd3c4a",
              width: 15,
              height: 15,
              borderRadius: 20,
              marginRight: 5,
            }}
          ></View>
          <Text>Muộn giờ / Về sớm</Text>
        </View>
      </View>
    </View>
  );
};

export default CalendarBox;

const styles = StyleSheet.create({
  boxCorner: {
    height: 80,
    width: (Dimensions.get("window").width - 40) / 7,
    padding: 2,
  },
  boxChildren: {
    borderRadius: 5,
    backgroundColor: "#fff",
    borderColor: "rgba(0,0,0,0.3)",
    borderWidth: 0.3,
    width: "100%",
    height: "100%",
  },
  date: {
    fontSize: 12,
    color: "rgba(0,0,0,0.3)",
    marginBottom: 10,
    marginTop: 5,
  },
  timeTrue: {
    fontSize: 12,
    color: "#00a86b",
    fontWeight: "600",
  },
  timeFalse: {
    fontSize: 12,
    color: "#fd3c4a",
    fontWeight: "600",
  },
});
