import React from 'react'
import { useState } from "react";
import { useEffect } from "react";
import { FlatList,View } from "react-native"
import CategoriesCard from "./CategoriesCard"

import { getCategories } from "../../../lib/client";


const CategoriesList = () => {

  const [Data, setData] = useState()

  useEffect(() => {
      getCategories().then((data) => setData(data))
      .catch(console.error)      
  }, [])

  return (
    <View className="py-4">
     <FlatList 
        data={Data}
        renderItem={({ item }) => (
            <View style={{ flex: 1, flexDirection: 'column', margin: 6}}>
              <CategoriesCard
              item={item}
               />
            </View>
          )}
          //Setting the number of column
          numColumns={2}
          keyExtractor={(item, index) => index}
        />
    </View>
  )
}

export default CategoriesList