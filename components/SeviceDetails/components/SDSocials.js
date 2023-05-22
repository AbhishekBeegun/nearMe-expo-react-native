import React from 'react'
import { View,Text,TouchableOpacity } from "react-native"
import { FontAwesome5 } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';    
const SDSocials = () => {
  return (
    <View className="flex flex-row justify-evenly items-center w-full py-4">
        <TouchableOpacity className="bg-[#222222] px-4 py-2 rounded-xl">
        <FontAwesome5 name="tiktok" size={24} color="white" />
        </TouchableOpacity>

        <TouchableOpacity className="bg-[#222222] px-4 py-2 rounded-xl">
        <FontAwesome5 name="facebook-f" size={24} color="white" /> 
        </TouchableOpacity>

        <TouchableOpacity className="bg-[#222222] px-4 py-2 rounded-xl">
        <FontAwesome5 name="whatsapp" size={24} color="white" />
        </TouchableOpacity>

        <TouchableOpacity className="bg-[#222222] px-4 py-2 rounded-xl">
        <MaterialCommunityIcons name="web" size={24} color="white" />
        </TouchableOpacity>
    </View>
  )
}

export default SDSocials