import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const Progress = ({x,y,color}) => {
  return (
    <View style={styles.boxProgress}>
        <View
          style={[
            styles.progress,
            {
              width: `${
                y - x > 0 ? (x / y) * 100 : 100
              }%`,
              backgroundColor: color,
            },
          ]}
        ></View>
      </View>
  )
}

export default Progress

const styles = StyleSheet.create({
    
  boxProgress: {
    height: 10,
    borderRadius: 8,
    backgroundColor: "#F1F1FA",
  },
  progress: {
    height: 10,
    borderRadius: 8,
    backgroundColor: "#FCAC12",
  }
})