import React from 'react'
import { View,Text } from "react-native"

const SDOpeningHours = () => {
  return (
    <View>
        <Text className="text-lg py-4 font-semibold">Opening Hours</Text>

        <View className="flex flex-row gap-5">
        <View>
            <Text>Monday - Saturday</Text>
            <Text className="font-semibold py-2">08:30am - 05:30pm </Text>
        </View>
        <View>
            <Text>Sunday - PH</Text>
            <Text className="font-semibold py-2">08:30am - 01:30pm </Text>
        </View>
        </View>
    </View>
  )
}

export default SDOpeningHours