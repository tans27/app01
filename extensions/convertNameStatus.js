export const convertNameStatus = (status) => {
  switch (true) {
    case status === "doing":
      return { name: "Đang thực hiện", background: "#ffce55", layout: "#e5b94c" };
    case status === "done":
      return { name: "Hoàn thành", background: "#30c953", layout: "#27a544" };
    case status === "new":
      return { name: "Yêu cầu mới", background: "#fce83a", layout: "#dcca31" };
    case status === "cancel":
      return { name: "Huỷ", background: "#d9334b", layout: "#c22f42" };
    case status === "closed":
      return { name: "Đóng", background: "#9ea7ad", layout: "#858d92" };
    default:
      return { name: "Đang cập nhật", background: "#fce83a", layout: "#dcca31"  };
  }
};
