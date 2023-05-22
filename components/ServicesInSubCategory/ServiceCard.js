import React from 'react'
import {View} from "react-native"
import ServiceCardTop from "./components/ServiceCardTop"
import ServicecardBottom from "./components/ServicecardBottom"


const ServiceCard = ({item}) => {

  return (
    <View className="h-[120px] flex flex-row pl-4">
    <ServiceCardTop
    item={item}
    />
    <ServicecardBottom />
    </View>
  )
}

export default ServiceCard