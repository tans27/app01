import { StyleSheet, TextInput, View, TouchableOpacity } from "react-native";
import Icon from "react-native-vector-icons/Feather";
import React, { useState } from "react";
import { useController } from "react-hook-form";
import styleGlobal from '../assets/css/globalStyles'
const InputCustom = ({
  name,
  control,
  placeholder,
  keyboardType,
  secureTextEntry,
  multiline,
  numberOfLines

}) => {
  const { field } = useController({
    control,
    defaultValue: "",
    name,
  });
  const [showSecureTextEntry, setShowSecureTextEntry] = useState(false);
  return (
    <>
      <View style={styles.inputBox}>
        {!secureTextEntry && (
          <>
            <TextInput
              style={!multiline ? styles.input:styleGlobal.textArea }
              keyboardType={keyboardType}
              value={field.value}
              onChangeText={field.onChange}
              placeholder={placeholder}
              placeholderTextColor="#91919f"
              multiline={multiline}
            numberOfLines={numberOfLines}  
            />
          </>
        )}
        {secureTextEntry && (
          <>
            <TextInput
              style={styles.input}
              secureTextEntry={!showSecureTextEntry}
              keyboardType={keyboardType}
              value={field.value}
              onChangeText={field.onChange}
              placeholder={placeholder}
              placeholderTextColor="#91919f"
            />
            {showSecureTextEntry ? (
              <TouchableOpacity
                onPress={() => setShowSecureTextEntry(false)}
                style={styles.icon}
              >
                <Icon name="eye" size={20} color="#91919f" />
              </TouchableOpacity>
            ) : (
              <TouchableOpacity
                onPress={() => setShowSecureTextEntry(true)}
                style={styles.icon}
              >
                <Icon name="eye-off" size={20} color="#91919f" />
              </TouchableOpacity>
            )}
          </>
        )}
      </View>
    </>
  );
};

export default InputCustom;

const styles = StyleSheet.create({
  inputBox: {
    position: "relative",
  },
  input: {
    height: 50,
    borderRadius: 15,
    marginBottom: 20,
    borderColor: "#e6e6ef",
    borderWidth: 1,
    paddingHorizontal: 15,
  },
  icon: {
    position: "absolute",
    right: 15,
    top: 15,
  },
});
