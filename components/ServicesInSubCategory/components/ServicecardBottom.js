import React from 'react'
import { View ,TouchableOpacity, Text } from "react-native";
import { Ionicons } from '@expo/vector-icons';
import { Feather } from '@expo/vector-icons';
const ServicecardBottom = () => {
  return (
    <View className="flex flex-col justify-evenly h-full w-1/4 py-4 pr-1">
        <TouchableOpacity className="h-1/2 w-full rounded-t-lg flex justify-center items-center ">
        <Ionicons name="ios-call-sharp" size={24} color="blue" />
        </TouchableOpacity>

        <TouchableOpacity className="h-1/2 w-full rounded-b-lg flex justify-center items-center">
        <Feather name="message-circle" size={24} color="green" />  
        </TouchableOpacity>
    </View>
  )
}

export default ServicecardBottom