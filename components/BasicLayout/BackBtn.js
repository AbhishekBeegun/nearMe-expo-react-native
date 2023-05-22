import React from 'react'
import { Text } from "react-native";
import { Ionicons } from '@expo/vector-icons';
import { TouchableOpacity } from "react-native";
import { useRouter } from "expo-router";

const BackBtn = () => {

    const router = useRouter()

    function goBack(){
        router.back()
    }
  return (
    <TouchableOpacity 
    className="pr-8"
    onPress={() => goBack()}>
     <Ionicons name="arrow-back-circle-sharp" size={30} color="white" /> 

    </TouchableOpacity>
  )
}

export default BackBtn