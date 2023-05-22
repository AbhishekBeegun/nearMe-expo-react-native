import React from 'react'
import {View,Text, ScrollView} from "react-native"
import SDImage from "./components/SDImage"
import SDTitleLocation from "./components/SDTitleLocation"
import SDGrid from "./components/SDGrid"
import SDOpeningHours from "./components/SDOpeningHours"
import SDAbout from "./components/SDAbout"
import SDFixedBtn from "./components/SDFixedBtn"
import SDSocials from "./components/SDSocials"

const ServiceDetails = () => {


  return (
    <View className="flex flex-col justify-center items-center relative">
        <SDImage/>
        <SDTitleLocation/>
        <SDGrid/>
        <SDOpeningHours/>
        <SDSocials/>
        <SDAbout/>
        <SDFixedBtn />
    </View>
  )
}

export default ServiceDetails