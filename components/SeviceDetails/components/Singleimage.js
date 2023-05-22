import React from 'react'
import { Image,View,Text } from "react-native"
import { AntDesign } from '@expo/vector-icons';
import { urlFor } from "../../../lib/client";

const Singleimage = ({image}) => {
  return (
    <View className="h-[45vh] w-[100vw] relative">

      <View className="absolute z-10 top-1/2 right-2">
        <Text className="text-white text-lg bg-black p-1 rounded-xl font-semibold">
        <AntDesign name="doubleright" size={20} color="white" />
        </Text>
      </View>
    <Image 
    resizeMode="cover"
    className="h-full w-full rounded-b-xl"
    source={{uri : `${urlFor(image)}`}}>
        
    </Image>
    </View>
  )
}

export default Singleimage