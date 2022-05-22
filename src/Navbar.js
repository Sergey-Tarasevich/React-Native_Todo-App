import { View, Text, StyleSheet } from 'react-native'

export const Navbar = props => {
  return (
    <View style={styles.navbar}>
      {/* first var. add navbar title */}
      {/* <Text style={styles.text}> React Native Todo app</Text> */}
      {/* second var. add navbar title from props. add title in App.js - Navbar */}

      {/* inline style */}
      <Text
        style={{
          fontWeight: 'bold',
          fontSize: 20,
          color: '#fff',
          // fontFamily: 'Iowan Old Style',
        }}
      >
        {props.title}
      </Text>
    </View>
  )
}

const styles = StyleSheet.create({
  navbar: {
    height: 70,
    backgroundColor: '#293133',
    alignItems: 'center',
    justifyContent: 'flex-end',
    paddingBottom: 15,
  },
  // text: {
  //   fontSize: 20,
  //   fontWeight: 'bold',
  //   color: '#fff',
  // },
})
