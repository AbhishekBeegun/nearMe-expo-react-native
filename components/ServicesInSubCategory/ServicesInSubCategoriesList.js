import React from 'react'
import { FlatList,View } from "react-native"
import ServiceCard from "./ServiceCard"

const ServicesInSubCategoriesList = () => {

    const services =  [1,2,3,4,5,6,7,8,9,10]
  return (
    <>
    <FlatList
     data={services}
     renderItem={({ item }) => (
         <View style={{ flex: 1, flexDirection: 'column', margin: 6}}>
           <ServiceCard
           item={item}
            />
         </View>
       )}
       //Setting the number of column
       numColumns={1}
       keyExtractor={(item, index) => index}
    
    />
    </>
  )
}

export default ServicesInSubCategoriesList