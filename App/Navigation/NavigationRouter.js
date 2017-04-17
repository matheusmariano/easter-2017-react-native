import React, { Component } from 'react'
import {
  Text,
  TouchableOpacity
} from 'react-native'
import { Scene, Router } from 'react-native-router-flux'
import Styles from './Styles/NavigationContainerStyles'
import NavigationDrawer from './NavigationDrawer'

// screens identified by the router
import LaunchScreen from '../Containers/LaunchScreen'

/* **************************
* Documentation: https://github.com/aksonov/react-native-router-flux
***************************/

class NavigationRouter extends Component {
  rightButton () {
    return (
      <TouchableOpacity>
        <Text>Nova</Text>
      </TouchableOpacity>
    )
  }
  render () {
    return (
      <Router>
        <Scene
          key='drawer'
          component={NavigationDrawer}
          open={false}
        >
          <Scene
            key='drawerChildrenWrapper'
            navigationBarStyle={Styles.navBar}
            titleStyle={Styles.title}
            leftButtonIconStyle={Styles.leftButton}
            rightButtonTextStyle={Styles.rightButton}
          >
            <Scene
              component={LaunchScreen}
              initial
              key='launchScreen'
              renderRightButton={() => this.rightButton()}
              title='Conversas'
            />
            <Scene
              component={require('../Containers/ConversationScreen').default}
              key='conversationScreen'
              title='Allan Mariano'
            />
          </Scene>
        </Scene>
      </Router>
    )
  }
}

export default NavigationRouter
