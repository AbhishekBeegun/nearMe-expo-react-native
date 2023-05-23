import React from 'react'
import { FlatList,View } from "react-native"
import SubCategoriesCardSkeleton from "../Skeleton/SubCategoriesCardSkeleton"
const SubCategoriesSkeleton = () => {
    const arrry = [1,2,3,4,5,6,7,8,9,10]
  return (
    <>
   
    <FlatList 
        data={arrry}
        renderItem={({ item }) => (
            <View style={{ flex: 1, flexDirection: 'column', margin: 6}}>
              <SubCategoriesCardSkeleton
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

export default SubCategoriesSkeleton