import {
  StyleSheet,
  Text,
  View,
  Modal,
  Dimensions, 
  Alert,
  TouchableWithoutFeedback,
} from "react-native";
import React, { useState, useEffect } from "react";
import styleGlobal from "../../assets/css/globalStyles";
import Feather from "react-native-vector-icons/Feather";
import AntDesign from "react-native-vector-icons/AntDesign";
import FontAwesome from "react-native-vector-icons/FontAwesome";
const ModalBottom = ({ status,press,registerLate,registerAbsent,registerPermission }) => {
  const [modalLogout, setShowModalLogout] = useState(status);
  useEffect(() => {
    setShowModalLogout(status);
  }, [status]);
  return (
    <Modal
      animationType="fade"
      transparent={true}
      visible={modalLogout}
      onRequestClose={() => {
        // this.closeButtonFunction()
        //   press
      }}
    >
      <TouchableWithoutFeedback onPress={press}>
        <View
          style={{
            height: "100%",
            marginTop: "auto",
            backgroundColor: "#06060682",
          }}
        > 
            <View style={styles.mainModal}>
              {/* <Text style={[styles.headerModal]}>{"Bộ lọc nâng cao"}</Text>
              <View>
                <View
                  style={[
                    styleGlobal.flexStart,
                    { marginTop: 20,paddingBottom:50},
                  ]}
                >
                  <TouchableWithoutFeedback
                    onPress={() => Alert.alert("Tính năng đang được cập nhật!")}
                  >
                    <View
                      style={[
                        styleGlobal.flexBetween,
                        { flexDirection: "column",width:Dimensions.get("window").width / 3 },
                      ]}
                    >
                      <View
                        style={[
                          styleGlobal.flexBetween,
                          styles.boxIcon,
                          {
                            alignItems: "center",
                            justifyContent: "center",
                            borderColor: "#c01e2e",
                            borderWidth: 2,
                          },
                        ]}
                      >
                        <AntDesign
                          name="clockcircle"
                          size={30}
                          color="#c01e2e"
                        />
                      </View>
                      <Text style={[styles.descript]}>Đi muộn</Text>
                    </View>
                  </TouchableWithoutFeedback>

                  <TouchableWithoutFeedback
                    onPress={() => Alert.alert("Tính năng đang được cập nhật!")}
                  >
                    <View
                      style={[
                        styleGlobal.flexBetween,
                        { flexDirection: "column",width:Dimensions.get("window").width / 3  },
                      ]}
                    >
                      <View
                        style={[
                          styleGlobal.flexBetween,
                          styles.boxIcon,
                          {
                            alignItems: "center",
                            justifyContent: "center",
                            borderColor: "#c01e2e",
                            borderWidth: 2,
                          },
                        ]}
                      >
                        <FontAwesome
                          name="power-off"
                          size={30}
                          color="#c01e2e"
                        />
                      </View>
                      <Text style={[styles.descript]}>Vắng mặt</Text>
                    </View>
                  </TouchableWithoutFeedback> 
                </View>
              </View> */}
              <Text style={[styles.headerModal]}>{"Tiện ích"}</Text>
              <View>
                <View
                  style={[
                    styleGlobal.flexCenter,
                    { marginTop: 20, paddingBottom: 20 },
                  ]}
                >
                  <TouchableWithoutFeedback
                    onPress={registerLate}
                  >
                    <View
                      style={[
                        styleGlobal.flexBetween,
                        { flexDirection: "column",width:Dimensions.get("window").width / 3 },
                      ]}
                    >
                      <View
                        style={[
                          styleGlobal.flexBetween,
                          styles.boxIcon,
                          {
                            alignItems: "center",
                            justifyContent: "center",
                            borderColor: "#c01e2e",
                            borderWidth: 2,
                          },
                        ]}
                      >
                        <AntDesign
                          name="clockcircle"
                          size={30}
                          color="#c01e2e"
                        />
                      </View>
                      <Text style={[styles.descript]}>{`Thông Báo\nĐi muộn`}</Text>
                    </View>
                  </TouchableWithoutFeedback>
                  <TouchableWithoutFeedback
                    onPress={registerPermission}
                  >
                    <View
                      style={[
                        styleGlobal.flexBetween,
                        { flexDirection: "column",width:Dimensions.get("window").width / 3 },
                      ]}
                    >
                      <View
                        style={[
                          styleGlobal.flexBetween,
                          styles.boxIcon,
                          {
                            alignItems: "center",
                            justifyContent: "center",
                            borderColor: "#c01e2e",
                            borderWidth: 2,
                          },
                        ]}
                      >
                        <Feather
                          name="paperclip"
                          size={30}
                          color="#c01e2e"
                        />
                      </View>
                      <Text style={[styles.descript]}>{`Thông báo\nNghỉ phép`}</Text>
                    </View>
                  </TouchableWithoutFeedback>

                  <TouchableWithoutFeedback
                    onPress={registerAbsent}
                  >
                    <View
                      style={[
                        styleGlobal.flexBetween,
                        { flexDirection: "column",width:Dimensions.get("window").width / 3  },
                      ]}
                    >
                      <View
                        style={[
                          styleGlobal.flexBetween,
                          styles.boxIcon,
                          {
                            alignItems: "center",
                            justifyContent: "center",
                            borderColor: "#c01e2e",
                            borderWidth: 2,
                          },
                        ]}
                      >
                        <FontAwesome
                          name="power-off"
                          size={30}
                          color="#c01e2e"
                        />
                      </View>
                      <Text style={[styles.descript]}>{`Thông Báo\nVắng mặt`}</Text>
                    </View>
                  </TouchableWithoutFeedback>
                </View>
              </View>
            </View> 
        </View>
      </TouchableWithoutFeedback>
    </Modal>
  );
};

export default ModalBottom;

const styles = StyleSheet.create({
  mainModal: {
    backgroundColor: "#fff",
    bottom: 0,
    position: "absolute",
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    paddingTop: 30,
    paddingBottom: 20, 
    width: Dimensions.get("window").width,
  },
  headerModal: {
    fontSize: 20,
    textAlign: "center",
    fontWeight: "600",
  },
  descript: {
    fontSize: 15,
    marginTop: 5,
    textAlign: "center",
    fontWeight: "600",
  },
  boxIcon: {
    width: 60,
    height: 60,
    borderRadius: 40,
    borderWidth: 0.6,
  },
});
