import React from 'react'
import { View,Text,Image, TouchableOpacity } from "react-native";
import { MaterialIcons } from '@expo/vector-icons';


const ServiceCardTop = () => {

    const premiumCompany = true ;
  return (
    <TouchableOpacity 
    className="flex flex-row items-center justify-center w-3/4 px-4">
    
 

    <>
    {premiumCompany ? 
    <View className="absolute top-5 left-2 z-10 bg-black rounded-full">
    <MaterialIcons name="verified" size={24} color="orange" />
    </View>
    : null
    } 
    
    {/* Image */}
    <Image
    source={{uri : "https://static.spotboye.com/uploads/Aaliyah-Kashyap_2021-6-9-9-11-2_thumbnail.jpg"}}
    className="h-[90px] w-[90px] rounded-full border">
    </Image>
    </>


    <View className="flex flex-col justify-center px-5">  
    {/* title + premium or not */}
    <View className="flex flex-row justify-center items-center gap-5">
    <Text
    className="text-lg"
    style={{fontFamily : "SPOTFONT"}}
    >Title/Name</Text>                
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