import React from 'react'
import { useState } from "react";
import { useEffect } from "react";
import { FlatList,View } from "react-native"
import SubCategoriesCard from "./SubCategoriesCard"

import { getSubCategories } from "../../lib/client";

const SubCategoriesList = ({id}) => {

  const [Data, setData] = useState()

  useEffect(() => {
      getSubCategories(id).then((data) => setData(data))
      .catch(console.error)      
  }, [])
  return (
    
    <View className="py-4">
     <FlatList 
        data={Data}
        renderItem={({ item }) => (
            <View style={{ flex: 1, flexDirection: 'column', margin: 6}}>
              <SubCategoriesCard
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

export default SubCategoriesList