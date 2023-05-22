import React from 'react'
import {useState} from "react"
import {useEffect} from "react"
import {View} from "react-native"
import SDImage from "./components/SDImage"
import SDTitleLocation from "./components/SDTitleLocation"
import SDGrid from "./components/SDGrid"
import SDOpeningHours from "./components/SDOpeningHours"
// import SDAbout from "./components/SDAbout"
import SDFixedBtn from "./components/SDFixedBtn"
import SDSocials from "./components/SDSocials"
import { getServiceFull } from "../../lib/client"
import { FlatList } from "react-native-gesture-handler"


const ServiceDetails = ({id}) => {
  
  const [Data, setData] = useState()

  useEffect(() => {
      getServiceFull(id).then((data) => setData(data))
      .catch(console.error)      
  }, [])

  return (
    <View>
    <FlatList 
         data={Data}
         renderItem={({ item }) => (
          <View className="flex flex-col justify-center items-center relative bg-black">
          <SDImage images={item.images}/>
          <SDTitleLocation name={item.name}/>
          <SDGrid/>
          <SDOpeningHours/>
          <SDSocials/>
          {/* <SDAbout/> */}
          <SDFixedBtn />
      </View>
           )}
           //Setting the number of column
           keyExtractor={(item, index) => index}

    />

    </View>
  )
}

export default ServiceDetails