import React from 'react'
import { Image,View } from "react-native"

const Singleimage = ({imageurl}) => {
  return (
    <View className="h-[35vh] w-[100vw] px-1">
    <Image 
    resizeMode="cover"
    className="h-full w-full rounded-b-lg"
    source={{uri : `${imageurl}`}}>
        
    </Image>
    </View>
  )
}

export default Singleimage