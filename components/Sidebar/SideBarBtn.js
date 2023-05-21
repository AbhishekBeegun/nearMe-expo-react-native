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
     <Ionicons name="md-menu-outline" size={35} color="blue" /> 
    </TouchableOpacity>
  )
}

export default BackBtn