import React, { useState, useEffect, useRef } from "react"
import useSound from 'use-sound'
import { GameEngine } from "react-native-game-engine"
import { StyleSheet, View, ImageBackground, TouchableOpacity, Text } from 'react-native'
import { useDispatch, useSelector } from 'react-redux'  
import { onStart, collector } from '../core/actions'
import Slots from '../components/Slots'
import Coins from '../components/Coins'
import mainSound from './sounds/mainSound.mp3'
import { GameLoop } from '../GameLoop'

export default function Main() {

  const bonus = useSelector((state) => state.bonus)
  const bonusArr = useSelector((state) => state.bonusArr)
  const [running, setRunning] = useState(false)

  const [play, { stop }] = useSound(
    mainSound,
    { volume: 0.5 }
  )
  const dispatch = useDispatch()
  const engine = useRef(null)

  useEffect(() => {
    dispatch(onStart(running))
  }, [running])

  useEffect(() => {
    dispatch(collector(bonusArr))
  }, [bonusArr])

  const start = () => {
    setRunning(value => !value) 
    if(!running){
      play()
    }else{
      stop()
    }
  }
  
  return (
    <View style={styles.container}>
      <ImageBackground source={require('../components/fruits/slot_machine.png')} resizeMode="cover" style={styles.image}>
          <View style={styles.bonus}>
            <Text style={styles.title}>SCORE: {bonus}$</Text>
          </View>
          <Coins/>
          <GameEngine
              ref={engine}
              style={{ width: 326, height: 194, flex: null, overflow: 'hidden', borderStyle: 'solid', borderTopWidth: 3, borderBottomWidth: 3, borderColor: '#eb5a1e'}}   
              systems={[ GameLoop ]}             
              entities={{             
                slot0: { position: [0, -6], xspeed: 0, yspeed: 1, nextMove: 3, updateFrequency: 3, size: 64, rotate: 0, nums: null, renderer: <Slots/>},
                slot1: { position: [1, -6], xspeed: 0, yspeed: 1, nextMove: 3, updateFrequency: 3, size: 64, rotate: 0, nums: null, renderer: <Slots/>},
                slot2: { position: [2, -6], xspeed: 0, yspeed: 1, nextMove: 3, updateFrequency: 3, size: 64, rotate: 0, nums: null, renderer: <Slots/>},
                slot3: { position: [3, -6], xspeed: 0, yspeed: 1, nextMove: 3, updateFrequency: 3, size: 64, rotate: 0, nums: null, renderer: <Slots/>},
                slot4: { position: [4, -6], xspeed: 0, yspeed: 1, nextMove: 3, updateFrequency: 3, size: 64, rotate: 0, nums: null, renderer: <Slots/>},
              }}
              running={running}
              //onEvent={onEvent}
          />
          <TouchableOpacity onPress={() => start()} style={styles.btn}>
              <Text style={styles.text}>PUSH</Text>
          </TouchableOpacity>
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
  },
  btn: {
    height: 65,
    width: 65,
    borderRadius: "50%",
    backgroundColor: "#ffdd4c",
    borderStyle: 'solid',
    borderWidth: 3,
    borderColor: '#bb1c45',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 80
  },
  text: {
    fontSize: 18,
    fontWeight: "700",
    color: '#bb1c45'
  },
  bonus: {
    height: 50,
    width: 145,
    backgroundColor: "#ffdd4c",
    borderStyle: 'solid',
    borderWidth: 3,
    borderColor: '#bb1c45',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 10,
    marginBottom: 20
  },
  title: {
    fontSize: 18,
    fontWeight: "700",
    color: '#bb1c45'
  }
})