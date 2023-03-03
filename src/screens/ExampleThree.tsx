import React from 'react';
import {Button, View} from 'react-native';
import EmojiPicker from 'rn-emoji-keyboard';

export function ExampleThree() {
  const [isOpen, setIsOpen] = React.useState<boolean>(false);
  return (
    <View style={{flex: 1}}>
      <Button title="OPEN" onPress={() => setIsOpen(true)} />
      <EmojiPicker
        onEmojiSelected={value => console.log(value)}
        open={isOpen}
        onClose={() => setIsOpen(false)}
      />
    </View>
  );
}
