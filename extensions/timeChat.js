import moment from "moment";
export const timeChat = (time) => {
    const timeHandle = moment(new Date()).diff(moment(time), 'minutes') 
    switch(true) { 
        case (timeHandle < 60):
            return  moment(new Date()).diff(moment(time), 'minutes') +" phút"
        case( 60 <= timeHandle &&  timeHandle < 1440):
            return  (moment(new Date())).diff(moment(time), 'hours') +" giờ"   
        case (1440 <= timeHandle && timeHandle < 10080 ): 
            return  (moment(new Date())).diff(moment(time), 'days') +" ngày"  
        case( timeHandle >= 10080): 
            return  (moment(new Date())).diff(moment(time), 'weeks') +" tuần"   
        default:
          return 'Đang cập nhật';  
    }
    
}