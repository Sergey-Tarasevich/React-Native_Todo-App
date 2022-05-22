import React, { useState } from 'react'
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  Button,
  Alert,
  TouchableWithoutFeedback,
  Pressable,
} from 'react-native'

export const AddTodo = ({ onSubmit, onAllRemove }) => {
  const [value, setValue] = useState('')

  const pressHandler = () => {
    if (value.trim()) {
      onSubmit(value)
      setValue('')
    } else {
      //error
      Alert.alert('Todo is empty, need enter todo')
    }
  }

  const showAlert = () =>
    Alert.alert(
      '                   ATTENTION !!!',
      'Are you sure you want to delete ALL todos?',
      [
        {
          text: 'Agree',
          onPress: () => onAllRemove(),
          style: 'default',
        },
        {
          text: 'Cancel',
          onPress: () =>
            Alert.alert(
              '                      STOP CRY !!! \n      CONTINUE -  YOU CAN DO IT!!!!'
            ),
          style: 'cancel',
        },
      ],
      {
        cancelable: true,
        onDismiss: () =>
          Alert.alert(
            '                      STOP CRY !!! \n      CONTINUE -  YOU CAN DO IT!!!!',
            'This alert was dismissed by tapping outside of the alert dialog.'
          ),
      }
    )

  return (
    <View style={styles.block}>
      <TextInput
        style={styles.input}
        onChangeText={text => setValue(text)}
        value={value}
        placeholder='Enter todo'
        // autoCorrect - T9 cannot correct words
        autoCorrect={false}
        // autoCapitalize - control of letter changes in a words (IOS)
        autoCapitalize='words'
        //keyBoardType - change type keyBoard, ex. 'number-pad' => change to numbers keyboard
        // keyboardType='number-pad'
      />
      <View style={styles.buttons}>
        <View>
          {/* <Button
          title='Add'
            onPress={pressHandler}
          /> */}

          {/* Pressable - an alternative to using a button but here we can use styles */}
          <Pressable onPress={pressHandler}>
            <Text style={styles.buttonAdd}>Add</Text>
          </Pressable>
        </View>
        <View style={styles.buttonClear}>
          <Button title='Clear' onPress={showAlert} color='#FF6347' />
        </View>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  block: {
    flexDirection: 'row',
    // justifyContent: 'space-around',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    marginBottom: 15,
  },
  input: {
    width: '80%',
    fontSize: 20,
    padding: 10,
    borderStyle: 'solid',
    borderBottomWidth: 2,
    borderBottomColor: '#3949ab',
  },
  buttons: {},
  buttonAdd: {
    fontSize: 30,
    color: '#4682B4',
    textAlign: 'center',
    fontWeight: '800',
  },
  buttonClear: {
    // alignContent: 'space-around',
    // marginTop: 10,
    paddingTop: 10,
  },
})
