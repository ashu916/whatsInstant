
import React, { useState,useRef,useEffect,} from 'react'
import { StyleSheet, Text, View,TextInput,number,TouchableOpacity,Linking,ImageBackground,Image,Button} from 'react-native';
import PhoneInput from 'react-native-phone-number-input';
import { AppOpenAd, InterstitialAd, RewardedAd, BannerAd, TestIds,BannerAdSize,AdEventType } from 'react-native-google-mobile-ads';





const adUnitId='ca-app-pub-2436931674369370/7629127286';
const interstitial = InterstitialAd.createForAdRequest(adUnitId, {
  requestNonPersonalizedAdsOnly: true,
  keywords: ['fashion', 'clothing'],
});

//  const [loaded, setLoaded] = useState(false);

  










export default function App() {

//varuables
    const [code, setcode] = useState('91');
      const phoneInput = useRef(null);
     const [mobile,setMobile] = useState('')
     const [Wtrue,setWtrue] = useState(true)

     

useEffect(() => {
    const unsubscribe = interstitial.addAdEventListener(AdEventType.LOADED, () => {
      interstitial.show();
    });

    // Start loading the interstitial straight away
    interstitial.load();

    // Unsubscribe from events on unmount
    return unsubscribe;
  }, []);

  // No advert ready to show yet
  





  
const 
replaceplus = () =>{setcode (  code.toString().replace('+',''))}
  
//functions
  
 
//

  const sendMessage = ()=>{

    
    
    const url = Wtrue?`whatsapp://send?phone=${code+
    mobile}`:`https://api.whatsapp.com/send?phone=${code+mobile}`
    

    if(mobile.length == 10){Linking.openURL(url)}
  else{
    alert('Please enter correct number')
    
  }
console.log(url)
  }
   
 
//returning  
  return (

   <View style ={styles.container}>
    
<Text style={styles.title}>Whatsapp Direct</Text>


  
  <ImageBackground source={require('./assest/what.png') } style={{width:'100%',height:'100%'}} >





    <View style={styles.btnout}>
      <TouchableOpacity style={styles.selBtn}
onPress={()=>{
  
  setWtrue(true);
  
}}
><Button 

title='WhatsApp'
color='#48f442'
disabled={!Wtrue}


></Button></TouchableOpacity>

<TouchableOpacity style={styles.selBtn} 
onPress={()=>{
  
  setWtrue(false);

}}><Button 
title='WA Business'
color='#48f442'
disabled={Wtrue} 

></Button></TouchableOpacity>
</View>






   <View style={{alignItems:'center',justifyContent:'center',marginBottom:250,marginVertical:100}}>



  <PhoneInput 
        ref={phoneInput}
        
        
        onChangeFormattedText={(text) => {

          setcode(text);
          
          
        }}  />


    <TextInput
    style={styles.input}
   returnKeyType = 'send'
   onSubmitEditing={()=>{replaceplus()
    sendMessage()}}
    onChangeText = {(text)=>{
      setMobile(text);}} 
    value={number}
    keyboardType='numeric'
    placeholder=' Mobile number'
    ></TextInput>
    
   

    <TouchableOpacity
    style={{}}
    onPress={()=>{
      replaceplus()
      sendMessage();
     
      
     }}
     ><Text style ={styles.btn}>Send Message</Text></TouchableOpacity>


     
   </View>
   <View >

<BannerAd 
size={BannerAdSize.FULL_BANNER}
unitId={"ca-app-pub-2436931674369370/5603150621"} 
requestOptions={{
  requestNonPersonalizesAdsOnly:true,
}}/>
</View>
</ImageBackground>
   </View>


  );
}

const styles = StyleSheet.create({
  container: {
    flex:1,
    alignItems:'center',
  
   
  },
  title:{
    
    fontSize:30,
    fontWeight:'bold',
    marginVertical:10,
    
    
    
  },
  input:{
    fontSize :25,
    marginBottom:10,
    backgroundColor:'#e3ecf5',
    width:320,
    height:50,
    borderRadius:10,
    borderWidth:1,
    elevation:20,
    borderColor:'black',
    textAlign:'center'
  },
  



  btn:{

    backgroundColor:'#48f442',
    width:200,
    height:35,
fontSize:25,
fontWeight:'bold',
color:'black',
textAlign:'center',
borderRadius:20,
elevation:50,
borderWidth:2,
borderColor:'white',

  },
  radiosol:{
    flex:1,
    flexDirection:'row',
    height:35,
    
  },
  radiobtn:{
    backgroundColor:'#48f442',
    width:'80%',
    height:'20%'
  },
  btnout:{
    flexDirection:'row',
    marginTop:20,
    alignItems:'center',
    justifyContent: 'center',
  },
  selBtn:{
    marginHorizontal:20,
  borderWidth:2,
  width:150,
  
  }
});

