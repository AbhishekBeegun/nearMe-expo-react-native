import React from 'react'
import { useRouter} from "expo-router";
import { View,Text,TouchableOpacity,Image } from "react-native"
import { urlFor } from "../../../lib/client"

const CategoriesCard = ({item}) => {
  
  const id = item._id;
  
  const router = useRouter()

  const handleCategoryOnPress = () => {
    router.push(`/subcategory/${id}`);  
  };
  return (
    <TouchableOpacity
    onPress={() => handleCategoryOnPress()}    
    className="rounded-xl h-[150px] flex flex-col justify-between items-center">
    
    <View className="h-3/4 w-full rounded-t-xl">
      <Image className="h-full w-full rounded-t-xl"
           resizeMode="cover"
           source={{uri : `${urlFor(item.image)}` }} />
    </View>
    
    <View className="h-1/4 w-full flex justify-center items-center">
    <Text>
        {item.title}
    </Text>
    </View>
    </TouchableOpacity>
  )
}

export default CategoriesCard