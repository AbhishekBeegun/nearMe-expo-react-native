import React from 'react'
import { View,FlatList } from "react-native"
import ServicesCardSkeleton from "../Skeleton/ServicesCardSkeleton"

const ServicesListSkeleton = () => {

    const arrry=[1,2,3,4,5,6,7,8,9]
  return (
    <FlatList
     data={arrry}
     renderItem={({ item }) => (
         <View style={{ flex: 1, flexDirection: 'column', margin: 6}}>
           <ServicesCardSkeleton
           item={item}
            />
         </View>
       )}
       //Setting the number of column
       numColumns={1}
       keyExtractor={(item, index) => index}
    
    />
  )
}

export default ServicesListSkeleton