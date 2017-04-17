import React from 'react'
import {
  ListView,
  KeyboardAvoidingView,
  Text,
  TextInput,
  TouchableOpacity,
  View
} from 'react-native'
import { connect } from 'react-redux'
import R from 'ramda'
// Add Actions - replace 'Your' with whatever your reducer is called :)
// import YourActions from '../Redux/YourRedux'

// Styles
import styles from './Styles/ConversationScreenStyle'

class ConversationScreen extends React.Component {
  constructor (props) {
    super(props)

    const ds = new ListView.DataSource({
      rowHasChanged: (r1, r2) => r1 !== r2
    })

    const messages = [
      {
        body: 'heueheueh',
        user: {
          id: 3
        }
      },
      {
        body: 'e aí?',
        user: {
          id: 3
        }
      }
    ]

    this.state = {
      dataSource: ds.cloneWithRows(messages),
      message: '',
      messages
    }
  }

  appendMessage (message) {
    const messages = R.append({
      body: message,
      user: {
        id: 1
      }
    }, this.state.messages)

    this.setState({
      dataSource: this.state.dataSource.cloneWithRows(messages),
      messages
    })
  }

  isMe (user) {
    return user.id === 1
  }

  messageDidChange (message) {
    this.setMessage(message)
  }

  scrollConversationToEnd (animated = true) {
    this.refs.conversation.scrollToEnd({ animated })
  }

  sendMessage (message) {
    this.appendMessage(message)
    this.setMessage('')
  }

  setMessage (message) {
    this.setState({ message })
  }

  renderMessage (message) {
    return (
      <View style={[
        styles.messageRow,
        this.isMe(message.user) && styles.messageRowInside,
        !this.isMe(message.user) && styles.messageRowOutside
      ]}>
        <View style={[
          styles.messageBalloon,
          this.isMe(message.user) && styles.messageBalloonInside,
          !this.isMe(message.user) && styles.messageBalloonOutside
        ]}>
          <Text style={[
            styles.messageBody,
            this.isMe(message.user) && styles.messageBodyInside,
            !this.isMe(message.user) && styles.messageBodyOutside
          ]}>{message.body}</Text>
        </View>
      </View>
    )
  }

  render () {
    return (
      <KeyboardAvoidingView
        behavior='padding'
        style={styles.outerContainer}
      >
        <View style={styles.container}>
          <ListView
            dataSource={this.state.dataSource}
            enableEmptySections
            /* onLayout={() => this.scrollConversationToEnd(false)} */
            ref='conversation'
            renderRow={(data) => this.renderMessage(data)}
          />
          <View style={styles.textBox}>
            <TextInput
              onChangeText={(text) => this.messageDidChange(text)}
              placeholder='Mensagem'
              placeholderTextColor='silver'
              style={styles.textInput}
              value={this.state.message}
            />
            <TouchableOpacity
              onPress={() => this.sendMessage(this.state.message)}
              style={styles.sendButton}
            >
              <Text style={styles.sendButtonText}>Enviar</Text>
            </TouchableOpacity>
          </View>
        </View>
      </KeyboardAvoidingView>
    )
  }
}

const mapStateToProps = (state) => {
  return {
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ConversationScreen)
