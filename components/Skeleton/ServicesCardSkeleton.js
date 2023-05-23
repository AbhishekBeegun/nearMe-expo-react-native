import React from 'react'
import { View,Text } from "react-native"
const ServicesCardSkeleton = () => {
  return (
    <View className="h-[120px] flex flex-row pl-4">
    <View 
    className="flex flex-row items-center justify-center w-3/4 px-2">

    <View    
    className="h-[80px] w-[80px] rounded-full border bg-[#999999] ">
    </View>


    <View className="flex flex-col justify-around h-[80px] px-4">  
    {/* title + premium or not */}
    <View className="bg-[#999999] px-10 py-2 rounded-lg">              
    </View>

    {/* location */}
    <View className="bg-[#999999] px-10 py-2 rounded-lg">

    </View>
    </View>


    </View>
    </View>
  )
}

export default ServicesCardSkeleton