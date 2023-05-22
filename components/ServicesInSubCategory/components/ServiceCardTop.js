import React from 'react'
import { View,Text,Image, TouchableOpacity } from "react-native";
import { MaterialIcons } from '@expo/vector-icons';
import {urlFor} from "../../../lib/client"

const ServiceCardTop = ({item}) => {

    const premiumCompany = true ;
  return (
    <TouchableOpacity 
    className="flex flex-row items-center justify-center w-3/4 px-2">

    <View>
    {premiumCompany ? 
    <View className="absolute top-5 left-2 z-10 bg-black rounded-full">
    <MaterialIcons name="verified" size={24} color="orange" />
    </View>
    : null
    } 
    
    {/* Image */}
    <Image
      resizeMode="cover"
   source={{uri : `${urlFor(item.mainImage)}` }}
    className="h-[80px] w-[80px] rounded-full border"/>

    </View>


    <View className="flex flex-col justify-center px-5">  
    {/* title + premium or not */}
    <View className="flex flex-row justify-center items-center gap-5">
    <Text
    className="text-lg"
    style={{fontFamily : "SPOTFONT"}}
    >{item.name}</Text>                
    </View>

    {/* location */}
    <View>
    <Text style={{fontFamily : "SPOTFONT"}}>Location</Text>
    </View>
    </View>
    </TouchableOpacity>
  )
}

export default ServiceCardTop