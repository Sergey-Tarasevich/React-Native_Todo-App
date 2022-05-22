import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'

export const Todo = ({ todo, onRemove }) => {
  const longPressHandler = () => {
    onRemove(todo.id)
  }

  return (
    <TouchableOpacity
      activeOpacity={0.3}
      onPress={() => console.log('Pressed', todo.id)}
      //   first var. onLongPress, but if we have a lot of function => better var. #2
      //   onLongPress={() => onRemove(todo.id)}

      //   second var. onLongPress
      onLongPress={longPressHandler}

      //   third var. onLongPress
      //   onLongPress={onRemove.bind(null, todo.id)}
    >
      <View style={styles.todo}>
        <Text style={styles.title}>{todo.title}</Text>
      </View>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  todo: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 15,
    borderWidth: 1,
    borderColor: '#eeeeee',
    borderRadius: 5,
    marginBottom: 10,
  },
  title: {
    fontSize: 17,
  },
})
