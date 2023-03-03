import {FlashList} from '@shopify/flash-list';
import React from 'react';
import {FlatList, Text, TouchableOpacity, View} from 'react-native';
import Data from '../../emoji_grp_5.json';

export function ExampleTwo() {
  const manupulateData = (data: any) => {
    let fiveStack: any = [];
    let finalStack: any = [];
    for (let i in data) {
      if (i % 6 === 0 || i === data.length) {
        finalStack = [...finalStack, fiveStack];
        fiveStack = [];
      } else {
        fiveStack.push(data[i]);
      }
    }
    console.log(finalStack);
  };
  return (
    <FlashList
      horizontal
      // numColumns={10}
      // keyExtractor={item => item}
      data={Data}
      scrollEventThrottle={1}
      estimatedItemSize={Data.length}
      decelerationRate={'fast'}
      renderItem={({item}: any) => (
        <View>
          {item.map((mapItem: any) => (
            <TouchableOpacity
              onPress={() => {
                console.log(mapItem);
              }}>
              <Text style={{fontSize: 30}}>{mapItem.char}</Text>
            </TouchableOpacity>
          ))}
        </View>
      )}
    />
  );
}
