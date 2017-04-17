import React from 'react'
import {
  Image,
  ListView,
  Text,
  TouchableOpacity,
  View
} from 'react-native'
import { Actions as NavigationActions } from 'react-native-router-flux'

// Styles
import styles from './Styles/LaunchScreenStyles'

export default class LaunchScreen extends React.Component {
  constructor (props) {
    super(props)

    const ds = new ListView.DataSource({
      rowHasChanged: (r1, r2) => r1 !== r2
    })

    this.state = {
      dataSource: ds.cloneWithRows([
        {
          user: {
            avatar: 'https://scontent.frec3-1.fna.fbcdn.net/v/t1.0-1/c0.0.160.160/p160x160/15873437_377108085976935_7790951994691209456_n.jpg?oh=8789bfef5a6fd5aea73a4228733c2171&oe=597FFF7E',
            name: 'Allan Mariano'
          },
          lastMessage: 'heueheueh'
        },
        {
          user: {
            avatar: 'https://scontent.frec3-1.fna.fbcdn.net/v/t1.0-1/p160x160/15219582_1306051516083599_2433789083511962367_n.jpg?oh=9e110889b28dff5122ce05a1c69e4661&oe=598E756B',
            name: 'Dayana Raquelle'
          },
          lastMessage: '♥️'
        }
      ])
    }
  }

  openConversation (convestaion) {
    NavigationActions.conversationScreen()
  }

  renderRow (conversation) {
    return (
      <TouchableOpacity
        onPress={() => this.openConversation(conversation)}
        style={styles.row}
      >
        <Image
          source={{ uri: conversation.user.avatar }}
          style={styles.avatar}
        />
        <View>
          <Text style={styles.name}>{conversation.user.name}</Text>
          <Text style={styles.lastMessage}>{conversation.lastMessage}</Text>
        </View>
      </TouchableOpacity>
    )
  }

  render () {
    return (
      <View style={styles.container}>
        <ListView
          dataSource={this.state.dataSource}
          enableEmptySections
          renderRow={(data) => this.renderRow(data)}
        />
      </View>
    )
  }
}
