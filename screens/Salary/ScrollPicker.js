import * as React from 'react';
import { Text, View, StyleSheet } from 'react-native'; 
// You can import from local files 

// or any pure javascript modules available in npm
import SmoothPicker from 'react-native-smooth-picker';

const dataCity = [
  '1',
  '2',
  '3',
  '4',
  '5',
  '6',
  '7',
  '8',
  '9',
  '10',
  '11',
  '12', 
];

const opacities = {
  0: 1,
  1: 1,
  2: 0.7,
  3: 0.4,
  4: 0.2,
};
const sizeText = {
  0: 18,
  1: 13,
  2: 8,
};

const Item = React.memo(({ opacity, selected, vertical, fontSize, name }) => {
  return (
    <View
      style={[
        styles.OptionWrapper,
        {
            opacity,
            // borderColor:'transparent',
            borderColor: selected ? '#c01e2e' : 'transparent',
            borderWidth: selected ? 2 : 0, 
            borderRadius: 15,
            width: vertical ? 190 : 'auto',   
            transition: 'all 0.2s ease-in-out'
        },
      ]}>
      <Text style={{ fontSize }}>{name}</Text>
    </View>
  );
});

const ItemToRender = ({ item, index }, indexSelected, vertical) => {
  const selected = index === indexSelected;
  const gap = Math.abs(index - indexSelected);

  let opacity = opacities[gap];
  if (gap > 1) {
    opacity = opacities[4];
  }
  let fontSize = sizeText[gap];
  if (gap > 1) {
    fontSize = sizeText[2];
  }

  return (
    <Item
      opacity={opacity}
      selected={selected}
      vertical={vertical}
      fontSize={fontSize}
      name={`Tháng ${item}/2022`}
    />
  );
};

export default function App() {
  function handleChange(index) {
    setSelected(index);
  }

  const [selected, setSelected] = React.useState(3);

  return (
    <View style={styles.container}>
      <View style={styles.wrapperVertical}>
        <SmoothPicker
          initialScrollToIndex={selected}
          onScrollToIndexFailed={() => {}}
          keyExtractor={(_, index) => index.toString()}
          showsVerticalScrollIndicator={false}
          data={dataCity}
          scrollAnimation
          onSelected={({ item, index }) => handleChange(index)}
          renderItem={(option) => ItemToRender(option, selected, true)}
          magnet
          selectOnPress
        />
      </View>
      {/* <View>
        <Text>{`Your selection is ${dataCity[selected]}`}</Text>
      </View> */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 30,
    paddingBottom: 30,
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    backgroundColor: '#faf9ff',
    marginBottom:20,
    borderRadius:10,
  },
  wrapperVertical: {
    width: 250,
    height: 200,
    justifyContent: 'center',
    alignItems: 'center',
    margin: 'auto',
    color: 'black',
  },
  OptionWrapper: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 10,
    marginBottom: 10,
    paddingTop: 10,
    paddingBottom: 10,
    paddingLeft: 30,
    paddingRight: 30,
    height: 50,
    borderWidth: 3,
    borderRadius: 10,
  },
});
