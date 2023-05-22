import { Stack,useSearchParams } from "expo-router"
import React from 'react'
import { SafeAreaView } from "react-native"
import ServiceDetails from "../../components/SeviceDetails/ServiceDetails"
import { ScrollView } from "react-native-gesture-handler"
import BackBtn from "../../components/BasicLayout/BackBtn"


const ServiceDetailsPage = () => {

  const params = useSearchParams()

  return (
    <>
    <Stack.Screen
      options={{
        headerTitle:"",
        headerTransparent : true,
        headerLeft : () => (
        <BackBtn/>
        )       
      }}
      />
      <ServiceDetails id={params.id}/>
    </>
  )
}

export default ServiceDetailsPage