import React from 'react'
import { View,Text, TouchableOpacity } from "react-native"
import { Ionicons } from '@expo/vector-icons';
const SDFixedBtn = () => {
  return (
    <View className="h-16 w-screen flex flex-row justify-evenly py-2">
        <TouchableOpacity className="border border-white flex justify-center items-center rounded-full px-10">
        <Ionicons name="ios-logo-whatsapp" size={24} color="white" />
        </TouchableOpacity>

        <TouchableOpacity className="bg-emerald-500 flex justify-center items-center rounded-full px-20">
        <Ionicons name="call" size={24} color="white" />
        </TouchableOpacity>
    </View>
  )
}

export default SDFixedBtn