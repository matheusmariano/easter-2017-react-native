import { StyleSheet } from 'react-native'
import { Metrics, ApplicationStyles } from '../../Themes/'

export default StyleSheet.create({
  ...ApplicationStyles.screen,
  container: {
    flex: 1,
    marginTop: Metrics.navBarHeight
  },
  row: {
    height: 70,
    padding: 10,
    flexDirection: 'row',
    alignItems: 'center',
    borderBottomColor: 'lightgray',
    borderBottomWidth: 1
  },
  avatar: {
    height: 50,
    width: 50,
    borderRadius: 25,
    marginRight: 8
  },
  name: {
    fontWeight: 'bold',
    fontSize: 16
  },
  lastMessage: {
    color: 'gray'
  }
})
