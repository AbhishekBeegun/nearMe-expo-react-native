import React from 'react'
import { useState } from "react";
import { useEffect } from "react";
import { FlatList,View} from "react-native"
import ServiceCard from "../ServicesInSubCategory/ServiceCard"
import { getServices } from "../../lib/client";


const ServicesInSubCategoriesList = ({id}) => {

  const [Data, setData] = useState()

  useEffect(() => {
      getServices(id).then((data) => setData(data))
      .catch(console.error)      
  }, [])

  return (
    <View className="bg-black">
    <FlatList
     data={Data}
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
    </View>
  )
}

export default ServicesInSubCategoriesList