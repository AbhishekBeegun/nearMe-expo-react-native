import React from 'react'
import { useState } from "react";
import { useEffect } from "react";
import { FlatList,View} from "react-native"
import ServiceCard from "../ServicesInSubCategory/ServiceCard"
import { getServices } from "../../lib/client";
import ServicesListSkeleton from "../Skeleton/ServicesListSkeleton"
import DummyServices from "../DummyData/Services/DummyServices"
const ServicesInSubCategoriesList = ({id}) => {

  const [Data, setData] = useState()

  useEffect(() => {
      getServices(id).then((data) => setData(data))
      .catch(console.error)      
  }, [])

  return (
    <View className="bg-black">
      {Data ? 
    <FlatList
     data={Data}
     renderItem={({ item }) => (
         <View style={{ flex: 1, flexDirection: 'column', margin: 6}}>
           <ServiceCard
           item={item}
            />
         </View>
       )}

       ListFooterComponent={
       <>
       <DummyServices />
       <DummyServices />
       <DummyServices />
       <DummyServices />
       <DummyServices />
       <DummyServices />

       </>}
       //Setting the number of column
       numColumns={1}
       keyExtractor={(item, index) => index}
    />
    :
    <ServicesListSkeleton />
    }
    </View>
  )
}

export default ServicesInSubCategoriesList