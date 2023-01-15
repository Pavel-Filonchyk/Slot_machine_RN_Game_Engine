import React, {useRef, useEffect} from 'react'
import { View, StyleSheet, Text, Image, Animated} from 'react-native'
import { useSelector } from 'react-redux' 

export default function Coins() {
    const showBonus = useSelector((state) => state.showBonus)
    
    const animatedValue = useRef(new Animated.Value(showBonus)).current
    const animatedValue2 = useRef(new Animated.Value(0)).current
    
    useEffect(() => {
      start()
      start2()
    }, [animatedValue, showBonus])

    const animate = (animate) => {
      return Animated.loop(
        Animated.timing(animate, {
          toValue: animate === animatedValue ? 246 : -246,   
          duration: 600,                                   
          iterations: Infinity,
          useNativeDriver: false
        })
      )
    }
    function start() {
      if(showBonus > 0){
        animate(animatedValue).start()
      }else{
        animate(animatedValue).stop()
      }
    }
    function start2() {
      if(showBonus > 0){
        animate(animatedValue2).start()
      }else{
        animate(animatedValue2).stop()
      }
    }

    return (
    <View style={styles.wrapCoins}>
      {
        showBonus === 0 ? <Image style={{width: 76, height: 76}} source={require('./fruits/coin.png')}/> 
        : <Animated.View style={{ height: 76, width: 76, transform: [{ translateX: animatedValue }] }}>
          <Image style={{height: '100%', width: '100%'}}source={require('./fruits/coin.png')}/>
        </Animated.View>
      }
      <View style={styles.showBonus}>
        <Text style={styles.title}>BONUS: {showBonus}$</Text>
      </View>
      {
        showBonus === 0 ? <Image style={{width: 76, height: 76}} source={require('./fruits/coin.png')}/>
        :  <Animated.View style={{ height: 76, width: 76, transform: [{ translateX: animatedValue2 }] }}>
          <Image style={{width: '100%', height: '100%'}} source={require('./fruits/coin.png')}/>
        </Animated.View>
      }
    </View>
  )
}
const styles = StyleSheet.create({
    wrapCoins: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      width: 326,
      height: 80,
      position: 'relative'
    },
    showBonus: {
      height: 50,
      width: 120,
      backgroundColor: "#ffdd4c",
      borderStyle: 'solid',
      borderWidth: 3,
      borderColor: '#bb1c45',
      alignItems: 'center',
      justifyContent: 'center',
      borderRadius: 10,
      marginTop: 13,
    },
    title: {
      fontSize: 18,
      fontWeight: "700",
      color: '#bb1c45'
    }
  })
