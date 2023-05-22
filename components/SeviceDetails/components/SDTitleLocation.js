import React from 'react'
import { View,Text } from "react-native"

const SDTitleLocation = () => {
  return (
    <View className="flex flex-col items-center gap-2">
    <Text className="text-lg font-semibold pt-2">
        Title
    </Text>
    <Text className="py-2">
        Location
    </Text>
    </View>
  )
}

export default SDTitleLocation