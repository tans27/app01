import { StyleSheet, Text, View,Button } from 'react-native'
import React,{useState} from 'react'
import DateTimePicker from '@react-native-community/datetimepicker';

const TimePicker = () => {
  const [date, setDate] = useState(new Date()); 
  const onChange = (event, selectedDate) => {
    const currentDate = selectedDate; 
    setDate(currentDate);
  }; 
  return (
    <View>  
    {/* <Text>selected: {date.toLocaleString()}</Text> */} 
      <DateTimePicker
        testID="dateTimePicker"
        value={date}
        mode={'time'}
        is24Hour={true}
        onChange={onChange} 
      /> 
  </View>
  )
}

export default TimePicker

const styles = StyleSheet.create({})