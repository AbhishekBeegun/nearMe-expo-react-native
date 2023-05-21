import React from 'react'
import {View} from "react-native"
import ServiceCardTop from "./components/ServiceCardTop"
import ServicecardBottom from "./components/ServicecardBottom"


const ServiceCard = () => {
  return (
    <View className="h-[120px] flex flex-row">
    <ServiceCardTop/>
    <ServicecardBottom />
    </View>
  )
}

export default ServiceCard