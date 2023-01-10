import React, { useEffect, useMemo } from 'react'
import { StyleSheet, View, Image } from "react-native"
import { useSelector, useDispatch } from 'react-redux'
import { result, collector } from '../core/actions'

export default function Slots(props) {

  const start = useSelector((state) => state.start)
  const results = useSelector((state) => state.result)

  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(result(props.nums))
  }, [start])

  useEffect(() => {
    dispatch(collector(results))
  }, [results])

  const x = props.position[0]
  const y = props.position[1]

  let colorNumColumn = null
  let colorNumRow0 = null
  let colorNumRow1 = null
  let colorNumRow2 = null

  let bonus = 0
  let showBonus = 0
  if(!start){
    if(props.nums?.[6] === props.nums?.[7] && props.nums?.[6] === props.nums?.[8]){
      colorNumColumn = props.nums?.[8]
      bonus = bonus + 10
      showBonus = 10
    }
  }
  console.log(bonus)
  let array0 = results.map(item => item[0]).sort((a, b) => a - b)
  if(array0[0] === array0[4]){
    colorNumRow0 = array0[0]
    bonus += 50
    showBonus = 50
  }
  let array1 = results.map(item => item[1]).sort((a, b) => a - b)
  if(array1[0] === array1[4]){
    colorNumRow1 = array1[0]
    bonus += 50
    showBonus = 50
  }
  let array2 = results.map(item => item[2]).sort((a, b) => a - b)
  if(array2[0] === array2[4]){
    colorNumRow2 = array2[0]
    bonus += 50
    showBonus = 50
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
    return <View style={{backgroundColor: colorNumColumn || colorNumRow0 || colorNumRow1 || colorNumRow2 === pics[item]?.id ? 'gold' : 'white' }}>{pics[item].pic}</View>
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