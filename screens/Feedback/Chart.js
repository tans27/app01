import React from 'react';
import {View, Text,Dimensions} from 'react-native';
import {BarChart} from 'react-native-gifted-charts';

const GroupedBars = () => {
    const barData = [
        {
          value: 40,
          label: 'T1',
          spacing: 2,
          labelWidth: 30,
          labelTextStyle: {color: 'gray'},
          frontColor: '#2ca35e',
        },
        {value: 20, frontColor: '#c01e2e'},
        {
          value: 50,
          label: 'T2',
          spacing: 2,
          labelWidth: 30,
          labelTextStyle: {color: 'gray'},
          frontColor: '#2ca35e',
        },
        {value: 40, frontColor: '#c01e2e'},
        {
          value: 75,
          label: 'T3',
          spacing: 2,
          labelWidth: 30,
          labelTextStyle: {color: 'gray'},
          frontColor: '#2ca35e',
        },
        {value: 25, frontColor: '#c01e2e'},
        {
          value: 30,
          label: 'T4',
          spacing: 2,
          labelWidth: 30,
          labelTextStyle: {color: 'gray'},
          frontColor: '#2ca35e',
        },
        {value: 20, frontColor: '#c01e2e'},
        {
          value: 60,
          label: 'T5',
          spacing: 2,
          labelWidth: 30,
          labelTextStyle: {color: 'gray'},
          frontColor: '#2ca35e',
        },
        {value: 40, frontColor: '#c01e2e'},
        {
          value: 65,
          label: 'T6',
          spacing: 2,
          labelWidth: 30,
          labelTextStyle: {color: 'gray'},
          frontColor: '#2ca35e',
        },
        {value: 30, frontColor: '#c01e2e'},
        {
          value: 65,
          label: 'T7',
          spacing: 2,
          labelWidth: 30,
          labelTextStyle: {color: 'gray'},
          frontColor: '#2ca35e',
        },
        {value: 30, frontColor: '#c01e2e'},
        {
          value: 40,
          label: 'T8',
          spacing: 2,
          labelWidth: 30,
          labelTextStyle: {color: 'gray'},
          frontColor: '#2ca35e',
        },
        {value: 20, frontColor: '#c01e2e'},
        {
          value: 50,
          label: 'T9',
          spacing: 2,
          labelWidth: 30,
          labelTextStyle: {color: 'gray'},
          frontColor: '#2ca35e',
        },
        {value: 40, frontColor: '#c01e2e'},
        {
          value: 75,
          label: 'T10',
          spacing: 2,
          labelWidth: 30,
          labelTextStyle: {color: 'gray'},
          frontColor: '#2ca35e',
        },
        {value: 25, frontColor: '#c01e2e'},
        {
          value: 30,
          label: 'T11',
          spacing: 2,
          labelWidth: 30,
          labelTextStyle: {color: 'gray'},
          frontColor: '#2ca35e',
        },
        {value: 20, frontColor: '#c01e2e'},
        {
          value: 60,
          label: 'T12',
          spacing: 2,
          labelWidth: 30,
          labelTextStyle: {color: 'gray'},
          frontColor: '#2ca35e',
        },
        {value: 40, frontColor: '#c01e2e'},
         
      ];

      const renderTitle = () => {
          return(
            <View style={{marginVertical: 30}}> 
            <View
              style={{
                flex: 1,
                flexDirection: 'row',
                justifyContent: 'space-evenly',  
              }}>
              <View style={{flexDirection: 'row', alignItems: 'center'}}>
                <View
                  style={{
                    height: 12,
                    width: 12,
                    borderRadius: 6,
                    backgroundColor: '#2ca35e',
                    marginRight: 8,
                  }}
                />
                <Text
                  style={{
                    width: 100,
                    height: 16,
                    color: 'rgba(0,0,0,0.5)',
                  }}>
                  Điểm dự kiến
                </Text>
              </View>
              <View style={{flexDirection: 'row', alignItems: 'center'}}>
                <View
                  style={{
                    height: 12,
                    width: 12,
                    borderRadius: 6,
                    backgroundColor: '#c01e2e',
                    marginRight: 8,
                  }}
                />
                <Text
                  style={{
                    width: 100,
                    height: 16,
                    color: 'rgba(0,0,0,0.5)',
                  }}>
                  Điểm thực tế
                </Text>
              </View>
            </View>
          </View>
          )
      }

    return (
        <View
        style={{
          backgroundColor: '#faf9ff', 
          borderRadius: 10,  
          height:350,
        }}>
        {renderTitle()}
        <BarChart
          data={barData}
          barWidth={8}
          barHeight={1}  
          barBorderRadius={10}
          spacing={30}
          width={Dimensions.get("window").width - 80}
          roundedTop
          roundedBottom
          hideRules={false}
          xAxisThickness={0}
          yAxisThickness={0}
          yAxisTextStyle={{color: 'gray'}}
          noOfSections={4}
          maxValue={100}
          isAnimated
        />
      </View>
    );
};

export default GroupedBars