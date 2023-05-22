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
        headerTitle:"",
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