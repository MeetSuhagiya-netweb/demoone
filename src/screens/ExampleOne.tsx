import React, {useState, useCallback, useEffect} from 'react';
import {GiftedChat} from 'react-native-gifted-chat';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {View} from 'react-native';

export function ExampleOne() {
  const [messages, setMessages] = useState<any>([]);
  const {bottom} = useSafeAreaInsets();

  useEffect(() => {
    setMessages([
      {
        _id: 1,
        text: 'Hello developer',
        createdAt: new Date(),
        user: {
          _id: 2,
          name: 'React Native',
          avatar: 'https://placeimg.com/140/140/any',
        },
      },
    ]);
  }, []);

  const onSend = useCallback((messages = []) => {
    setMessages((previousMessages: any) =>
      GiftedChat.append(previousMessages, messages),
    );
  }, []);

  return (
    <View style={{paddingBottom: bottom, flex: 1}}>
      <GiftedChat
        wrapInSafeArea={false}
        messages={messages}
        onSend={(messages: any) => onSend(messages)}
        user={{
          _id: 1,
        }}
      />
    </View>
  );
}
