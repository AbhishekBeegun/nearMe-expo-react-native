import React from 'react'
import {View,FlatList,Image,Text} from "react-native"
import Singleimage from "./Singleimage"

const SDImage = () => {
    const threeimages = [
        "https://images.unsplash.com/photo-1552566626-52f8b828add9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8cmVzdGF1cmFudHxlbnwwfHwwfHx8MA%3D%3D&w=1000&q=80",
        "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cmVzdGF1cmFudHxlbnwwfHwwfHx8MA%3D%3D&w=1000&q=80",
        "https://media.istockphoto.com/id/1307190527/photo/happy-waiter-serving-food-to-group-of-friends-in-a-pub.jpg?b=1&s=170667a&w=0&k=20&c=eacqj2h_OTRrDGVrrcpXh2RVV41bwzV_Luar2kdY4fU="
    ]
  return (
    <View className="">

        <Text>SDIMAGE</Text>
 
         <FlatList
         horizontal
         data={threeimages}
         renderItem={({ item }) =>             
            <Singleimage
            imageurl={item}
            />            
          }
          keyExtractor={(item) => item}
         />
        <Singleimage/>            
  
                
    </View>
  )
}

export default SDImage