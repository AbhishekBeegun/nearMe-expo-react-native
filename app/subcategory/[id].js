import React from 'react'
import { useRouter,useSearchParams,Stack } from "expo-router"
import { SafeAreaView } from "react-native"
import BackBtn from "../../components/BasicLayout/BackBtn"
import SubCategoriesList from "../../components/SubCategories/SubCategoriesList"

const SubCategoryPage = () => {

  const params = useSearchParams()

  return (
    <SafeAreaView>
      
    <Stack.Screen
      options={{
        headerTitle:"Sub-Categories",
        headerTitleStyle : {
          color : 'white',
          fontFamily : "SPOTFONT"
        },
        headerStyle : {
          backgroundColor : "black",
        },
        headerLeft : () => (
          <BackBtn/>
        )       
      }}
      />

      <SubCategoriesList id={params.id} />    

    </SafeAreaView>
  )
}

export default SubCategoryPage