import React from 'react'
import { View } from "react-native"
const SubCategoriesCardSkeleton = () => {
  return (
    <View    
    className="rounded-xl h-[150px] flex flex-col justify-between items-center border">
    
    <View className="h-3/4 w-full rounded-t-xl bg-[#999999]">
    </View>
    
    <View className="h-1/4 w-full flex justify-center items-center">
    </View>
    </View>
  )
}

export default SubCategoriesCardSkeleton