import React from 'react'
import {View} from "react-native"
import ServiceCardTop from "./components/ServiceCardTop"
import ServicecardBottom from "./components/ServicecardBottom"


const ServiceCard = ({item}) => {
  console.log(item)
  return (
    <View className="h-[120px] flex flex-row px-8">
    <ServiceCardTop
    item={item}
    />
    <ServicecardBottom />
    </View>
  )
}

export default ServiceCard