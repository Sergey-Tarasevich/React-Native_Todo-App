import {
  View,
  Text,
  StyleSheet,
  Linking,
  Image,
  TouchableOpacity,
} from 'react-native'

export const Footer = props => {
  return (
    <View style={styles.footer}>
      <View style={styles.blockText}>
        <Text style={styles.text}>Don't put off until tomorrow</Text>
        <Text style={styles.text}>what you can do it today</Text>
      </View>

      <View style={styles.contacts}>
        <Text
          style={styles.teleskope}
          onPress={() => {
            Linking.openURL('https://telescope.epam.com/who/Sergey_Tarasevich')
          }}
        >
          Sergey_Tarasevich
        </Text>
        <View style={styles.imagesBlock}>
          <TouchableOpacity
            onPress={() => Linking.openURL('https://vk.com/nsp_grodno')}
          >
            <Image
              style={styles.logoVk}
              source={require('../assets/vk_logo.png')}
            />
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() =>
              Linking.openURL(
                'https://www.linkedin.com/in/sergey-tarasevich-2b0703237/'
              )
            }
          >
            <Image
              style={styles.linkedinLogo}
              source={require('../assets/linkedinLogo.png')}
            />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  footer: {
    flexDirection: 'row',
    height: 70,
    marginTop: -70,
    backgroundColor: '#293133',
    // alignItems: 'center',
    justifyContent: 'space-between',
    paddingTop: 10,
    paddingBottom: 10,
    paddingHorizontal: 25,
  },
  blockText: {
    flexDirection: 'column',
    justifyContent: 'space-around',
  },
  text: {
    fontSize: 15,
    color: '#fff',
  },
  contacts: {
    flexDirection: 'column',
    justifyContent: 'space-around',
  },
  teleskope: {
    fontSize: 15,
    color: '#fff',
  },

  imagesBlock: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    marginTop: 3,
  },

  logoVk: {
    width: 20,
    height: 20,
    resizeMode: 'contain',
  },
  linkedinLogo: {
    width: 20,
    height: 20,
  },
})
