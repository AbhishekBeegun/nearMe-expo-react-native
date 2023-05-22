import React from 'react'
import { View,Text } from "react-native"

const SDTitleLocation = ({name}) => {
  return (
    <View className="flex flex-col items-center gap-2 mt-2 rounded-t-xl">
    <Text 
    style={{fontFamily : "SPOTFONT"}}
    className="text-xl text-white font-semibold pt-4">
       {name}
    </Text>
    <Text 
    style={{fontFamily : "SPOTFONT"}}
    className="py-2 text-white">
        Location
    </Text>
    </View>
  )
}

export default SDTitleLocation