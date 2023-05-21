import React from 'react'
import { FlatList,View } from "react-native"
import SubCategoriesCard from "./SubCategoriesCard"

const SubCategoriesList = () => {

    const fakesubcategorieslist = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15]

  return (
    
    <View className="py-4">
     <FlatList 
        data={fakesubcategorieslist}
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