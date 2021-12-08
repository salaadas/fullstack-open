import React, { useState } from 'react';
import { View, TextInput, Text } from 'react-native';

const PizzaTranslator = () => {
  const [text, setText] = useState('');

  return (
    <View style={{ padding: 10 }}>
      <TextInput
        style={{ height: 40 }}
        placeholder="Type here to translate!"
        onChangeText={(text) => setText(text)}
        defaultValue={text}
      />
      <Text style={{ padding: 10, fontSize: 42 }}>
        {text
          .split(' ')
          .map((w) => w && '🍕')
          .join(' ')}
      </Text>
    </View>
  );
};

export default PizzaTranslator;
