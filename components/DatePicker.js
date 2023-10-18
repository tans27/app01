import React, {useState} from 'react';
// import DateTimePicker from '@react-native-community/datetimepicker';

const Calendar = ({value}) => {

const [date, setDate] = useState(value);

const onChange = (event, selectedDate) => {
 const currentDate = selectedDate || date;
 setDate(currentDate);
}; 
 return(
//   <DateTimePicker  
//   value={date}
//                     mode={'date'}
//                     dateFormat={'dd/mm/yy'}
//                     display="default"
//                     onChange={onChange}
// />
<></>
 )
}
export default Calendar