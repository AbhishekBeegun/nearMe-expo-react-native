import React from 'react'
import {View,FlatList,Image,Text} from "react-native"
import Singleimage from "./Singleimage"


const SDImage = ({images}) => {
  return (
    <> 
         <FlatList
         horizontal
         data={images}
         renderItem={({ item }) =>             
            <Singleimage
            image={item}
            />            
          }
          keyExtractor={(item) => item._key}
         />
    </>
  )
}

export default SDImage