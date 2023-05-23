import React from 'react'
import { useState } from "react";
import { useEffect } from "react";
import { FlatList,View } from "react-native"
import SubCategoriesCard from "./SubCategoriesCard"
import SubCategoriesSkeleton from "../Skeleton/SubCategoriesSkeleton"
import { getSubCategories } from "../../lib/client";

import DummySubCategories from "../DummyData/SubCategories/DummySubCategories";
const SubCategoriesList = ({id}) => {

  const [Data, setData] = useState()

  useEffect(() => {
      getSubCategories(id).then((data) => setData(data))
      .catch(console.error)      
  }, [])

  return (
    
    <View className="py-4 bg-black">

      {Data ? 
       <FlatList 
        data={Data}
        renderItem={({ item }) => (
            <View style={{ flex: 1, flexDirection: 'column', margin: 6}}>
              <SubCategoriesCard
              item={item}
               />
            </View>
          )}
          ListFooterComponent={
          <>
         <DummySubCategories/>
         <DummySubCategories/>
         <DummySubCategories/>
         <DummySubCategories/>
         <DummySubCategories/>
          </>
        }
          numColumns={1}
          keyExtractor={(item, index) => index}
        />       
        :
        <SubCategoriesSkeleton />
}
    </View>
  )
}

export default SubCategoriesList