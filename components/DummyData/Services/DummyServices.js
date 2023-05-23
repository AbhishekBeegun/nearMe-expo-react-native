import React from 'react'
import { View,TouchableOpacity,Text,Image } from "react-native"
import { Ionicons } from '@expo/vector-icons';
import { Feather } from '@expo/vector-icons';


const DummyServices = () => {
  return (
    <View className="h-[120px] flex flex-row pl-4">
<TouchableOpacity 
    onPress={() => handleServiceCardPress()}
    className="flex flex-row items-center justify-center w-3/4 px-2">

    <View>
    
    {/* Image */}
    <Image
      resizeMode="cover"
   source={{uri : "https://media.istockphoto.com/id/498672367/photo/female-head-muscles-anatomy-front-view.jpg?b=1&s=170667a&w=0&k=20&c=__2QDUxrgH6s_D_H2xNT8ZnH6iUG8NjqKQrBtuEHJ2s=" }}
    className="h-[80px] w-[80px] rounded-full border "/>

    </View>


    <View className="flex flex-col justify-around h-[80px] px-4">  
    {/* title + premium or not */}
    <View className="flex flex-row justify-center items-center gap-5">
    <Text
    className="text-white"
    style={{fontFamily : "SPOTFONT"}}
    >NRC LTD</Text>                
    </View>

    {/* location */}
    <View>
    <Text
    className="text-white"
    style={{fontFamily : "SPOTFONT"}}>NR Location</Text>
    </View>
    </View>


    </TouchableOpacity>
    <View className="flex flex-col justify-evenly items-center h-full w-1/4 py-4">
        <TouchableOpacity className="h-1/2 w-full rounded-t-lg flex justify-center items-center ">
        <Ionicons name="ios-call-sharp" size={24} color="white" />
        </TouchableOpacity>
        <TouchableOpacity className="h-1/2 w-full rounded-b-lg flex justify-center items-center">
        <Feather name="message-circle" size={24} color="white" />  
        </TouchableOpacity>
    </View>
    </View>
  )
}

export default DummyServices