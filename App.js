import React, { Component } from "react"
import { GameEngine, dispatch } from "react-native-game-engine"
import { StyleSheet, StatusBar, View, Button } from 'react-native'
import { constants }  from './constants/constants'
import Slots from './components/Slots'
import { GameLoop } from './GameLoop'

export default class App extends Component {
  constructor(props) {
      super(props)
      this.boardSize = constants.GRID_SIZE * constants.CELL_SIZE  
      this.engine = null     
      this.state = {
          running: false                                            
      }
  }
  render() {
    return (
      <View style={styles.container}>
         <GameEngine
            //ref={(ref) => { this.engine = ref }} 
            style={[{ width: this.boardSize, height: 180, backgroundColor: '#ffffff', flex: null,  overflow: 'hidden'}]}   
            systems={[ GameLoop ]}             
            entities={{
              slot0: { position: [0, -2], xspeed: 0, yspeed: 1, nextMove: 20, updateFrequency: 20, size: 60, renderer: <Slots/>},
              slot1: { position: [1, -2], xspeed: 0, yspeed: 1, nextMove: 20, updateFrequency: 20, size: 60, renderer: <Slots/>},
              slot2: { position: [2, -2], xspeed: 0, yspeed: 1, nextMove: 20, updateFrequency: 20, size: 60, renderer: <Slots/>},
              slot3: { position: [3, -2], xspeed: 0, yspeed: 1, nextMove: 20, updateFrequency: 20, size: 60, renderer: <Slots/>},
              slot4: { position: [4, -2], xspeed: 0, yspeed: 1, nextMove: 20, updateFrequency: 20, size: 60, renderer: <Slots/>},
            }}
            running={this.state.running}
            //onEvent={this.onEvent}
            />

            <View style={{marginTop: 20}}>
              <Button title="Press" onPress={() => this.setState(state => ({running: !state.running}))} />
            </View>
            <StatusBar hidden={true} />
      </View> 
    )
  }
}

const styles = StyleSheet.create({
  container: {
    height: '100%',
    backgroundColor: 'bisque',
    alignItems: 'center',
    justifyContent: 'center',
  },
})


