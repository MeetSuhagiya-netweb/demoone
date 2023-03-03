import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import * as React from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
import {ExampleOne} from './src/screens/ExampleOne';
import {ExampleThree} from './src/screens/ExampleThree';
import {ExampleTwo} from './src/screens/ExampleTwo';

function HomeScreen({navigation}: any) {
  const AppButton = ({title, onPress}: any) => (
    <TouchableOpacity
      activeOpacity={0.7}
      onPress={onPress}
      style={{backgroundColor: 'black', padding: 20, marginTop: 10}}>
      <Text style={{color: 'white', fontWeight: 'bold'}}>
        {title.toUpperCase()}
      </Text>
    </TouchableOpacity>
  );
  return (
    <View style={{flex: 1}}>
      <AppButton
        title="Example One"
        onPress={() => {
          navigation.navigate('ExampleOne');
        }}
      />
      <AppButton
        title="Example Two"
        onPress={() => {
          navigation.navigate('ExampleTwo');
        }}
      />
      <AppButton
        title="Example Three"
        onPress={() => {
          navigation.navigate('ExampleThree');
        }}
      />
    </View>
  );
}

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="ExampleOne" component={ExampleOne} />
        <Stack.Screen name="ExampleTwo" component={ExampleTwo} />
        <Stack.Screen name="ExampleThree" component={ExampleThree} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
