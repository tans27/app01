import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import styleGlobal from '../assets/css/globalStyles'
const ChipDeadline = ({status,deadLine}) => {
  return (
    <View>
      {status === "success" ? (
          <View
            style={[styles.chip, styles.completeChip, styleGlobal.flexCenter]}
          >
            <Text style={[styles.chipText, styles.completeText]}>
              Hoàn thành
            </Text>
          </View>
        ) :  
          deadLine === '' ? (
            <View
              style={[styles.chip, styles.deadlineChip, styleGlobal.flexCenter]}
            >
              <Text style={[styles.chipText, styles.deadlineText]}>
                Đang cập nhật
              </Text>
            </View>
          ) :
          <View
              style={[styles.chip, styles.dayChip, styleGlobal.flexCenter]}
            >
              <Text style={[styles.chipText, styles.dayText]}>
                {deadLine}
              </Text>
            </View>
        }
    </View>
  )
}

export default ChipDeadline

const styles = StyleSheet.create({
  chip: {
    borderRadius: 8,
    width: 120,
    paddingVertical: 5,
    paddingHorizontal: 5,
    borderWidth: 1.5, 
  },
  chipText: {
    fontWeight: "600",
  },
  completeChip: {
    backgroundColor: "#CFFAEA",
    borderColor: "#00A86B",
  },
  completeText: {
    color: "#00A86B",
  },

  deadlineChip: {
    backgroundColor: "#FEEED0",
    borderColor: "#FCAC12",
  },
  deadlineText: {
    color: "#FCAC12",
  },
  dayChip: {
    backgroundColor: "rgba(252,198,75,0.4)",
    borderColor: "#fcc64b",
  },
  dayText: {
    color: "#fcc64b",
  },
})