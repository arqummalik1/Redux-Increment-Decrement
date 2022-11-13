import React from 'react';
import {View, Text, Button, TextInput, TouchableOpacity} from 'react-native';
import {useSelector, useDispatch} from 'react-redux';
import {incNumber, decNumber, mulNumber, resetNumber} from './redux/actions/index';

const AppTwo = () => {
  const myState = useSelector(state => state.changeTheNumber);
  const dispatch = useDispatch();
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text>Increment and Decrement</Text>
      <Text>with Redux</Text>
      <View style={{flexDirection: 'row', marginTop: 30}}>
        <TouchableOpacity
          onPress={() => dispatch(incNumber(5))}
          style={{
            backgroundColor: 'red',
            width: 50,
            alignItems: 'center',
            justifyContent: 'center',
          }}>
          <Text>+</Text>
        </TouchableOpacity>
        <TextInput style={{padding: 10, width: 70}}>{myState}</TextInput>
        <TouchableOpacity
          onPress={() => dispatch(decNumber())}
          style={{
            backgroundColor: 'red',
            width: 50,
            alignItems: 'center',
            justifyContent: 'center',
          }}>
          <Text>-</Text>
        </TouchableOpacity>
      </View>
      <TouchableOpacity
     onPress = {() => dispatch(mulNumber(2))}
        style={{
          backgroundColor: 'red',
          marginTop: 50,
          width: 80,
          height: 40,
          alignItems: 'center',
          justifyContent: 'center',
        }}>
        <Text>Multiply by 2</Text>
      </TouchableOpacity>
      <TouchableOpacity
     onPress = {() => dispatch(resetNumber())}
        style={{
          backgroundColor: 'red',
          marginTop: 50,
          width: 80,
          height: 40,
          alignItems: 'center',
          justifyContent: 'center',
        }}>
        <Text>Reset</Text>
      </TouchableOpacity>
    </View>
  );
};
export default AppTwo;
