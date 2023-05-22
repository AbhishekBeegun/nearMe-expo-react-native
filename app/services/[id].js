import React from 'react'
import { useRouter,useSearchParams,Stack } from "expo-router"
import { SafeAreaView } from "react-native"
import BackBtn from "../../components/BasicLayout/BackBtn"
import ServicesInSubCategoriesList from "../../components/ServicesInSubCategory/ServicesInSubCategoriesList"

const ServicesList = () => {
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

      <ServicesInSubCategoriesList id={params.id}/>

    </SafeAreaView>
  )
}

export default ServicesList