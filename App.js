import React, { useState } from 'react'
import { StatusBar } from 'expo-status-bar'
import { StyleSheet, Text, View, ScrollView, FlatList } from 'react-native'
import { Navbar } from './src/Navbar'
import { AddTodo } from './src/AddTodo'
import { Todo } from './src/Todo'
import { Footer } from './src/Footer'
// import Dimensions constants
import { screenWIDTH } from './src/constants/constants'

export default function App() {
  const [todos, setTodos] = useState([])

  const addTodo = title => {
    // const newTodo = {
    //   id: Date.now().toString(),
    //   title,
    // }
    // first var. update state
    // setTodos(todos.concat([newTodo]))

    // second var. update state with prev.state value
    setTodos(prev => [
      ...prev,
      {
        id: Date.now().toString(),
        title,
      },
    ])
  }

  const removeTodo = id => {
    setTodos(prev => prev.filter(todo => todo.id !== id))
  }
  const removeAllTodos = () => {
    setTodos(prev => prev.filter(todo => todo.id == ''))
  }

  return (
    // View has display: flex by default
    <View style={{ flex: 1 }}>
      <StatusBar style='auto' />
      <Navbar title='React Native Todo app' />
      <View style={styles.container}>
        <AddTodo onSubmit={addTodo} onAllRemove={removeAllTodos} />

        {/* use View component, haven't scroll */}
        {/* <View>
          {todos.map(todo => (
            <Todo todo={todo} key={todo.id} />
          ))}
        </View> */}

        {/* use ScrollView component, have scroll */}
        <ScrollView>
          {todos.map(todo => (
            <Todo todo={todo} onRemove={removeTodo} key={todo.id} />
          ))}
        </ScrollView>

        {/* <FlatList
          keyExtractor={item => item.id.toString()}
          data={todos}
          renderItem={({ item }) => <Todo todo={item} onRemove={removeTodo} />}
        /> */}
      </View>
      <View style={styles.footer}>
        <Footer />
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 30,
    paddingVertical: 20,
    backgroundColor: '#eee',
    marginBottom: 200,
  },
  footer: {
    position: 'absolute',
    // use Dimensions
    width: screenWIDTH,
    left: 0,
    right: 0,
    bottom: 0,
  },
})
