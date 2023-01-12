import React, { useEffect } from 'react'
import useSound from 'use-sound'
import { StyleSheet, View, Image } from "react-native"
import { useSelector, useDispatch } from 'react-redux'
import { result } from '../core/actions'
import winSound from './sounds/winSound.mp3'

export default function Slots(props) {

  const start = useSelector((state) => state.start)
  const lines = useSelector((state) => state.lines)
  const status = useSelector((state) => state.status)
  const showBonus = useSelector((state) => state.showBonus)

  const dispatch = useDispatch()
  
  useEffect(() => {
    dispatch(result(props.nums))
  }, [start])
  const [play, { stop }] = useSound(
    winSound,
    { volume: 0.5 }
  )
  const x = props.position[0]
  const y = props.position[1]

  if(showBonus > 0){
    play()
  }else{
    stop()
  }
  let colorNumColumn = null
  
  if(!start && status){
    if(props.nums?.[6] === props.nums?.[7] && props.nums?.[6] === props.nums?.[8]){
      colorNumColumn = props.nums?.[8]
    }
  }  

  const pics = [
    {id: 0, pic:<Image style={{width: 60, height: 60}} source={require('./fruits/IMG_7122-1.png')}/>}, 
    {id: 1, pic:<Image style={{width: 60, height: 60}} source={require('./fruits/IMG_7122-2.png')}/>}, 
    {id: 2, pic:<Image style={{width: 60, height: 60}} source={require('./fruits/IMG_7122-3.png')}/>}, 
    {id: 3, pic:<Image style={{width: 60, height: 60}} source={require('./fruits/IMG_7122-4.png')}/>}, 
    {id: 4, pic:<Image style={{width: 60, height: 60}} source={require('./fruits/IMG_7122-5.png')}/>}, 
    {id: 5, pic:<Image style={{width: 60, height: 60}} source={require('./fruits/IMG_7122-6.png')}/>}, 
    {id: 6, pic:<Image style={{width: 60, height: 60}} source={require('./fruits/IMG_7122-7.png')}/>}, 
    {id: 7, pic:<Image style={{width: 60, height: 60}} source={require('./fruits/IMG_7122-8.png')}/>}, 
    {id: 8, pic:<Image style={{width: 60, height: 60}} source={require('./fruits/IMG_7122-9.png')}/>} 
  ]

  let fruits = props.nums ? props.nums.map(item => {
    return <View style={{backgroundColor: colorNumColumn || lines?.[0] === pics[item]?.id ? 'gold' : '' }}>{pics[item].pic}</View>
  }) : pics.map(item => {return item.pic})

  return (
    <View style={[styles.slots, {left: x * props.size, top: start ? y * props.size : -6 * props.size}]}>
      {
        fruits?.map((item, index) => {
          return <View style={[{width: props.size, height: props.size}]} key={index}>
            {item}
          </View>
        })
      }
    </View>
  )
}
const styles = StyleSheet.create({
  slots: {
    borderStyle: 'solid',
    borderLeftWidth: 3,
    borderRightWidth: 3,
    borderColor: '#eb5a1e',
    backgroundColor: 'lightyellow',
    position: "absolute"
  },
})