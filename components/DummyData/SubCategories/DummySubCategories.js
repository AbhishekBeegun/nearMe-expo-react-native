import React from 'react'
import { View,Text,TouchableOpacity,Image } from "react-native"

const DummySubCategories = () => {
  return (
    <TouchableOpacity
    onPress={() => handleSubCategoryOnPress()}
    
    className="rounded-xl h-[150px] flex flex-col justify-between items-center border">
    
    <View className="h-3/4 w-full rounded-t-xl">
    <Image className="h-full w-full rounded-t-xl"
           resizeMode="cover"
           source={{uri : "https://media.istockphoto.com/id/607589356/photo/row-of-dummies.jpg?b=1&s=170667a&w=0&k=20&c=ZOMF_d6jdj4MnKyhYqsSMsogas6s2T3AqxPiGu-G9qw=" }} />
    </View>
    
    <View className="h-1/4 w-full flex justify-center items-center">
    <Text
    className="text-white"
    style={{fontFamily : "SPOTFONT"}}
    >
    Space Filler
    </Text>
    </View>
    </TouchableOpacity>
  )
}

export default DummySubCategories