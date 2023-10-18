import moment from 'moment'
export const  checkDate = (date) => {
    if( moment(new Date()).diff(moment(date,"YYYY-MM-DD"), 'days') > (-3)) {
        if( moment(new Date()).diff(moment(date,"YYYY-MM-DD"), 'days') > (0) ) {
            return 'isLate'
        }
        else {
            return 'isAlert'
        }
    }
    else {
        return 'isNormal'
    }
    
  }