import React, { useState, useEffect, useRef } from "react"
import { GameEngine } from "react-native-game-engine"
import { StyleSheet, View, Button, ImageBackground } from 'react-native'
import { useDispatch } from 'react-redux'  
import { onStart } from '../core/actions'
import Slots from '../components/Slots'
import { GameLoop } from '../GameLoop'

export default function App() {

  const [running, setRunning] = useState(false)
 
  const dispatch = useDispatch()
  const engine = useRef(null)

  useEffect(() => {
    dispatch(onStart(running))
  }, [running])

  const start = () => {
    setRunning(value => !value)
  }

  return (
    <View style={styles.container}>
        <ImageBackground source={require('../components/fruits/slot_machine.png')} resizeMode="cover" style={styles.image}>
            <GameEngine
                ref={engine}
                style={{ width: 326, height: 194, flex: null, overflow: 'hidden', borderStyle: 'solid', borderTopWidth: 3, borderBottomWidth: 3, borderColor: '#eb5a1e'}}   
                systems={[ GameLoop ]}             
                entities={{             
                    slot0: { position: [0, -6], xspeed: 0, yspeed: 1, nextMove: 3, updateFrequency: 3, size: 64, styles: null, nums: null, renderer: <Slots/>},
                    slot1: { position: [1, -6], xspeed: 0, yspeed: 1, nextMove: 3, updateFrequency: 3, size: 64, styles: null, nums: null, renderer: <Slots/>},
                    slot2: { position: [2, -6], xspeed: 0, yspeed: 1, nextMove: 3, updateFrequency: 3, size: 64, styles: null, nums: null, renderer: <Slots/>},
                    slot3: { position: [3, -6], xspeed: 0, yspeed: 1, nextMove: 3, updateFrequency: 3, size: 64, styles: null, nums: null, renderer: <Slots/>},
                    slot4: { position: [4, -6], xspeed: 0, yspeed: 1, nextMove: 3, updateFrequency: 3, size: 64, styles: null, nums: null, renderer: <Slots/>},
                }}
                running={running}
                //onEvent={onEvent}
            />
            <View style={{marginTop: 20}}>
            <Button title="Push" onPress={() => start()} />
            </View>
        </ImageBackground>  
    </View> 
  )
}

const styles = StyleSheet.create({
  container: {
    height: '100%',
    backgroundColor: 'bisque',
   
  },
  image: {
    width: '100%',
    height: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  }
})