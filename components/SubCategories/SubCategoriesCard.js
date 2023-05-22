import React from 'react'
import { useRouter} from "expo-router";
import { View,Text,TouchableOpacity,Image } from "react-native"
import { urlFor } from "../../lib/client"


const SubCategoriesCard = ({item}) => {
  const router = useRouter()

  const handleSubCategoryOnPress = () => {
    router.push(`/services/${item._id}`);  
  };
  return (
    <TouchableOpacity
    onPress={() => handleSubCategoryOnPress()}
    
    className="rounded-xl h-[150px] flex flex-col justify-between items-center border">
    
    <View className="h-3/4 w-full rounded-t-xl">
    <Image className="h-full w-full rounded-t-xl"
           resizeMode="cover"
           source={{uri : `${urlFor(item.mainImage)}` }} />
    </View>
    
    <View className="h-1/4 w-full flex justify-center items-center">
    <Text
    className="text-white"
    style={{fontFamily : "SPOTFONT"}}
    >
        {item.title}
    </Text>
    </View>
    </TouchableOpacity>
  )
}

export default SubCategoriesCard