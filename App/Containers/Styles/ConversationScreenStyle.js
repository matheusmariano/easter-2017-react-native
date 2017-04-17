import { StyleSheet } from 'react-native'
import { Metrics } from '../../Themes/'

export default StyleSheet.create({
  outerContainer: {
    flex: 1
  },
  container: {
    flex: 1,
    marginTop: Metrics.navBarHeight,
    backgroundColor: 'white'
  },
  textBox: {
    backgroundColor: 'gainsboro',
    height: 50,
    padding: 8,
    flexDirection: 'row',
    justifyContent: 'center'
  },
  textInput: {
    backgroundColor: 'white',
    borderRadius: 5,
    borderWidth: 1,
    borderColor: 'silver',
    height: 34,
    paddingHorizontal: 8,
    flexGrow: 1
  },
  sendButton: {
    width: 60,
    justifyContent: 'center',
    alignItems: 'center'
  },
  sendButtonText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: 'royalblue'
  },
  messageRow: {
    justifyContent: 'center',
    paddingHorizontal: 8,
    paddingVertical: 4
  },
  messageRowInside: {
    alignItems: 'flex-end'
  },
  messageRowOutside: {
    alignItems: 'flex-start'
  },
  messageBalloon: {
    borderRadius: 10,
    padding: 8
  },
  messageBalloonInside: {
    backgroundColor: 'lightseagreen'
  },
  messageBalloonOutside: {
    backgroundColor: 'lightgray'
  },
  messageBody: {
    color: 'black',
    fontSize: 16
  },
  messageBodyInside: {
    color: 'white'
  }
})
