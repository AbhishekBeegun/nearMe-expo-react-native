import React from 'react'
import { View,Text,TouchableOpacity } from "react-native"


const CategoriesCard = ({item}) => {
  return (
    <TouchableOpacity className="rounded-xl h-[150px] flex flex-col justify-between items-center">
    
    <View className="h-3/4 w-full bg-red-500 rounded-t-xl">
      <Text>Image</Text>
    </View>
    
    <View className="h-1/4 w-full flex justify-center items-center">
    <Text>
        Categorie Name
    </Text>
    </View>
    </TouchableOpacity>
  )
}

export default CategoriesCard