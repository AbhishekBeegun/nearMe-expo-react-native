import React from 'react'
import { Stack } from "expo-router"
import { View,SafeAreaView,FlatList,Text, ScrollView } from "react-native"
import SideBarBtn from "../components/Sidebar/SideBarBtn"
import SearchBar from "../components/Search/SearchBar"
import CategoriesList from "../components/Homepage/Categories/CategoriesList"
import SubCategoriesList from "../components/SubCategories/SubCategoriesList"

const index = () => {



  return (
    <SafeAreaView>
        <ScrollView>

        <Stack.Screen
        options={{
        headerTitle:"NearMe APP",  
        headerLeft : () => (
            <SideBarBtn/>
          )

        }}/>

        <SearchBar />

        <CategoriesList />     

        <SubCategoriesList /> 
       
        </ScrollView>

    </SafeAreaView>
  )
}

export default index