import React, { useState } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';

const Cat = ({ name = '', style = {} }) => {
  const [isHungry, setHungry] = useState(true);

  return (
    <View>
      <Text>
        I am {name}, and I am {isHungry ? 'hungry' : 'full'}!
      </Text>
      <TouchableOpacity
        style={style}
        disabled={!isHungry}
        onPress={() => setHungry(!isHungry)}
      >
        <Text>{isHungry ? 'POUR ME SOME MILK, PLEASE!' : 'Thank you!'}</Text>
      </TouchableOpacity>
    </View>
  );
};

const Cafe = ({ style = {} }) => {
  return (
    <>
      <Cat name="bob" style={style} />
      <Cat name="jane" style={style} />
    </>
  );
};

export default Cafe;
