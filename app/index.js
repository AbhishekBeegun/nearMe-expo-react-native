import React from 'react'
import { Stack } from "expo-router"
import "react-native-url-polyfill/auto"
import { View,SafeAreaView,FlatList,Text, ScrollView } from "react-native"
import SideBarBtn from "../components/Sidebar/SideBarBtn"
import SearchBar from "../components/Search/SearchBar"
import CategoriesList from "../components/Homepage/Categories/CategoriesList"


import SubCategoriesList from "../components/SubCategories/SubCategoriesList"
import ServiceInSubCategoriesList from "../components/ServicesInSubCategory/ServicesInSubCategoriesList"
import ServiceDetails from "../components/SeviceDetails/ServiceDetails"
const index = () => {



  return (
    <SafeAreaView>
        <Stack.Screen
        options={{
        headerTitle:"ProServ APP",  
        headerTitleStyle : {
          color : 'white',
          fontFamily : "SPOTFONT"
        },
        headerStyle : {
          backgroundColor : "black",
        },
        headerLeft : () => (
            <SideBarBtn/>
          )

        }}/>

        <FlatList 
        ListHeaderComponent={<SearchBar/>}
        ListEmptyComponent={<CategoriesList/>}
        // ListFooterComponent={<OC/>}
        />
        {/* <SubCategoriesList />  */}
        {/* <ServiceInSubCategoriesList /> */}
       {/* <ServiceDetails/> */}
    </SafeAreaView>
  )
}

export default index