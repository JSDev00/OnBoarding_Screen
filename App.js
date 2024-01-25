import { Box,View} from 'native-base'
import { NativeBaseProvider } from 'native-base';
import { useState } from 'react';
import AppIntroSlider from 'react-native-app-intro-slider';
import { COLORS, SIZES } from './constants/theme';
import {Image,Text} from 'react-native'

const slides = [
  {id:1,
  title:"Discover best places",
  desc:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.",
  image:require("./assets/1.png"),
},
  {id:2,
  title:"Discover best places",
  desc:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.",
  image:require("./assets/2.png"),
},
  {id:3,
  title:"Discover best places",
  desc:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.",
  image:require("./assets/3.png"),

},
  {id:4,
  title:"Discover best places",
  desc:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.",
  image:require("./assets/4.png"),
}
];
export default function App() {
 const [ showImages,setShowImages] = useState(false)
 const buttonLabel = (label) =>{
  return(
    <View style={{padding:12}}>
      <Text style={{ color:COLORS.title,fontWeight:600,fontSize:SIZES.h4 }}>{label}</Text>
    </View>
  )
 }
 if(!showImages){
  return(
    <NativeBaseProvider>
    <AppIntroSlider
    data={slides}
    renderItem={({item})=>{
      return(
        <View flex={1} alignItems="center" justifyContent={'center'}>
          <Image
            source={item.image}
            style={{ width:SIZES.width - 80,height:400 }}
            resizeMode={"contain"}
            alt="Logo"
          />
          <Text style={{ fontWeight:"bold",fontSize:SIZES.h1,color:COLORS.title }}>{item.title}</Text>
          <Text style={{ textAlign:"center",paddingTop:5,paddingRight:10,paddingLeft:10 }}>{item.desc}</Text>
        </View>
      )
    }}
    activeDotStyle={{ backgroundColor:COLORS.primary ,width:30}}
    showSkipButton
    showPrevButton
    renderNextButton={()=>buttonLabel("NEXT")}
    renderSkipButton={()=>buttonLabel("Skip")}
    renderPrevButton={()=>buttonLabel("Prev")}
    renderDoneButton={()=>buttonLabel("Done")}
    onDone={()=>setShowImages(true)}
  />
  </NativeBaseProvider>
  )
 }
  return (
    <NativeBaseProvider>
      <Box flex={1} safeAreaTop justifyContent={"center"} alignItems="center">
        <Text style={{ fontSize:SIZES.h1 }}>Welcome With abdelnasser 😎</Text>
      </Box>
    </NativeBaseProvider>
  );
}
