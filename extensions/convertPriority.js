export const convertPriority = (status) => {
    switch (true) {
      case status === "0":
        return  "Rất Thấp" 
        case status === "1":
          return  "Thấp" 
      case status === "2":
        return  "Bình thường"
      case status === "3":
        return  "Cao"
      case status === "4":
        return  "Rất cao"
      case status === "5":
        return  "Thương lượng" 
      default:
        return  "Đang cập nhật"
    }
}
  
  