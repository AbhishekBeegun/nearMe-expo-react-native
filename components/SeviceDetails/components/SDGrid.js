import React from 'react'
import { useState } from "react";
import { View,Text } from "react-native";
import { AntDesign } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';
const SDGrid = () => {

  const [IsOpen, setIsOpen] = useState(true)

  return (
    <View className="flex flex-row flex-wrap">
    <View className="flex flex-row items-center justify-center gap-2 w-1/2 py-2">
      <AntDesign name="clockcircleo" size={20} color="white" />
      {IsOpen ? <Text className="text-white">Open</Text> : <Text className="text-white">Closed</Text>}
    </View>

    <View className="flex flex-row items-center justify-center gap-2 w-1/2 py-2">
    <AntDesign name="tago" size={20} color="white" />
        <Text className="text-white">2% Off</Text>
    </View>

    <View className="flex flex-row items-center justify-center gap-2 w-1/2 py-2">
    <FontAwesome name="star" size={20} color="white" />
        <Text className="text-white">4.5</Text>
    </View>

    <View className="flex flex-row items-center justify-center gap-2 w-1/2 py-2">
    <AntDesign name="eyeo" size={20} color="white" /> 
    <Text className="text-white">10 K</Text>
    </View>

    </View>
  )
}

export default SDGrid