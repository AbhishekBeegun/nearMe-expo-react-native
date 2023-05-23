import React from 'react'
import { FlatList,View } from "react-native"
import CategoriesCardSkeleton from "./CategoriesCardSkeleton"


const CategoriesSkeleton = () => {

    const array = [1,2,3,4,5,6,7,8,9,10] 

  return (
<>
     <FlatList 
        data={array}
        renderItem={({ item }) => (
            <View style={{ flex: 1, flexDirection: 'column', margin: 6}}>
              <CategoriesCardSkeleton
              item={item}
               />
            </View>
          )}
          //Setting the number of column
          numColumns={2}
          keyExtractor={(item, index) => index}
        />
    </>
  )
}

export default CategoriesSkeleton