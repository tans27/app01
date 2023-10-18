
import React, { useState,useContext,useEffect } from 'react';
import { Dimensions, StyleSheet, View} from 'react-native';

import CalendarPicker from 'react-native-calendar-picker';
import Feather from 'react-native-vector-icons/Feather'
import { DetailJobContext } from './Context'
const App = () => {
  const [selectedStartDate, setSelectedStartDate] = useState(null);
  const [selectedEndDate, setSelectedEndDate] = useState(null);
  const {time,setTime} = useContext(DetailJobContext)
  useEffect(() => {
    setTime([o => []])
    setTime({
      ...time,
      from: selectedStartDate, 
      to:selectedEndDate,
  })
  },[selectedStartDate, selectedEndDate])
  const onDateChange = (date, type) => {
    //function to handle the date change
    if (type === 'END_DATE') {
      setSelectedEndDate(date);
    } else {
      setSelectedEndDate(null);
      setSelectedStartDate(date);
    }
  };

  return ( 
    <View style={styles.container}>
      <View> 
        <CalendarPicker
        width={Dimensions.get("window").width - 40} 
          startFromMonday={true}
          allowRangeSelection={true}
          minDate={new Date()}
          maxDate={new Date(2050, 6, 3)}
          weekdays={['Thứ 2', 'Thứ 3', 'Thứ 4', 'Thứ 5', 'Thứ 6', 'Thứ 7', 'CN']}
          months={[
            'Tháng 1',
            'Tháng 2',
            'Tháng 3',
            'Tháng 4',
            'Tháng 5',
            'Tháng 6',
            'Tháng 7',
            'Tháng 8',
            'Tháng 9',
            'Tháng 10',
            'Tháng 11',
            'Tháng 12',
          ]}
          previousComponent={<Feather name="chevron-left" size={25} color={"#c01e2e"}></Feather>}
          nextComponent={<Feather name="chevron-right" size={25} color={"#c01e2e"}></Feather>}
          todayBackgroundColor="#c01e2e"
          selectedDayColor="#c01e2e"
          selectedDayTextColor="#fff"
          scaleFactor={375}
          textStyle={{ 
            color: '#000000',
          }}
          onDateChange={onDateChange} 
        /></View> 
      </View> 
  );
};
export default App;

const styles = StyleSheet.create({
  container: {  
    backgroundColor: '#faf9ff', 
    borderRadius: 10,
    marginTop:20,
    padding:10, 
  }, 
});
