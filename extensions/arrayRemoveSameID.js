export const arrayRemove =(arr,val) => {  
    return arr.filter(function(ele){ 
        return ele != val; 
    });
}