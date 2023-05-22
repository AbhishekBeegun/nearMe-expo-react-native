import React from 'react'
import { View,Text } from "react-native"

const SDOpeningHours = () => {
  return (
    <View>
        <Text 
        style={{fontFamily : "SPOTFONT"}}
        className="text-lg py-4 font-semibold text-white">Opening Hours</Text>

        <View className="flex flex-row gap-5 px-2">
        <View className="bg-[#222222] px-2 py-1 rounded-xl flex items-center justify-center">
            <Text 
                style={{fontFamily : "SPOTFONT"}}
            className="text-white text-xs">Monday - Saturday</Text>
            <Text 
                style={{fontFamily : "SPOTFONT"}}
            className="font-semibold py-2 text-white text-xs">08:30am - 05:30pm </Text>
        </View>
        <View className="bg-[#222222] px-2 py-1 rounded-xl flex items-center justify-center">
            <Text 
                style={{fontFamily : "SPOTFONT"}}
            className="text-white text-xs">Sunday - PH</Text>
            <Text
                style={{fontFamily : "SPOTFONT"}}
            className="font-semibold py-2 text-white text-xs">08:30am - 01:30pm </Text>
        </View>
        </View>
    </View>
  )
}

export default SDOpeningHours