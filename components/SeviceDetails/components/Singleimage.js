import React from 'react'
import { Image,View,Text } from "react-native"
import { AntDesign } from '@expo/vector-icons';
import { urlFor } from "../../../lib/client";

const Singleimage = ({image}) => {
  return (
    <View className="h-[45vh] w-[100vw] relative bg-black ">

      <View className="absolute z-10 top-1/2 right-2">
        <Text>
        <AntDesign name="doubleright" size={20} color="white" />
        </Text>
      </View>
    <Image 
    resizeMode="cover"
    className="h-full w-full opacity-90"
    source={{uri : `${urlFor(image)}`}}>
        
    </Image>
    </View>
  )
}

export default Singleimage