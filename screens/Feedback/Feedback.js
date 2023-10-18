import {
  StyleSheet,
  View, 
  ScrollView, 
  SafeAreaView,
} from "react-native";
import React, { useContext } from "react";
import { FeedbackContext } from "./Context";
import Chart from "./Chart";
import SelectYear from "../../components/SelectYear"; 
import Row from './RowAccordition' 
const Feedback = () => {
  const { year, setYear, data } = useContext(FeedbackContext); 
  return (
    <SafeAreaView
      style={{
        flex: 1,
        alignItems: "center",
        backgroundColor: "#fff",
        paddingTop: 10,
      }}
    >
      <SelectYear
        prevPress={() => setYear(year - 1)}
        nextPress={() => {
          if (year < new Date().getFullYear()) {
            setYear(year + 1);
          }
        }}
        title={year}
      />
      <View style={styles.boxChart}> 
        <Chart />
      </View>
      {data.find((x) => x.year === year) && (
        <ScrollView>
          {data
            .find((x) => x.year === year)
            .data.map((ele, index) => {
              return <Row title={index} key={index} index={index} number={ele} />;
            })}
        </ScrollView>
      )}
    </SafeAreaView>
  );
};

export default Feedback;

const styles = StyleSheet.create({
  boxChart: {
    backgroundColor: "#fff",
    marginTop: 15,
    paddingVertical: 10,
    borderRadius: 15,
  }, 
});
