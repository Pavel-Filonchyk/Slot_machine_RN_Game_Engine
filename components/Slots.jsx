import React from 'react'
import { View, Image } from "react-native"

export default function Slots(props) {
    //console.log(props)
    const x = props.position[0]
    const y = props.position[1]
    const colors = [
      <Image style={{width: 56, height: 56}} source={require('./fruits/IMG_7122-1.png')}/>, 
      <Image style={{width: 56, height: 56}} source={require('./fruits/IMG_7122-2.png')}/>, 
      <Image style={{width: 56, height: 56}} source={require('./fruits/IMG_7122-3.png')}/>, 
      <Image style={{width: 56, height: 56}} source={require('./fruits/IMG_7122-4.png')}/>, 
      <Image style={{width: 56, height: 56}} source={require('./fruits/IMG_7122-5.png')}/>, 
      <Image style={{width: 56, height: 56}} source={require('./fruits/IMG_7122-6.png')}/>, 
      <Image style={{width: 56, height: 56}} source={require('./fruits/IMG_7122-7.png')}/>, 
      <Image style={{width: 56, height: 56}} source={require('./fruits/IMG_7122-8.png')}/>, 
      <Image style={{width: 56, height: 56}} source={require('./fruits/IMG_7122-9.png')}/>, 
      ]
  return (
    <View style={{position: 'absolute', left: x * props.size, top: y * props.size,}}>
      {
        colors.map((item, index) => {
          return <View style={{width: props.size, height: props.size, padding: 2}} key={index}>
            {item}
          </View>
        })
      } 
    </View>
  )
}
