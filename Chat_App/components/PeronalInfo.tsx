import React, { useState } from 'react'
import {View,TextInput,Button,Text,Image} from 'react-native'
import ImageChooser from './ImageChooser';
import Styles from './Styles';
type PersonalInfoProps = {
    onClosed: (name:string, image:string) => void;
}

const PersonalInfo = ({onClosed}: PersonalInfoProps)=>{
    const [name,setname] = useState("")
    const [image,setimage] = useState("")
return(
<View style={Styles.personalInfoContainer}>

<Image 
style={Styles.logo}
source={require('../assets/wired-brain-coffee-logo.png')} />
<View style={Styles.enterYourName}>

    <Text style={Styles.nameText}> Please enter your name</Text>
    <TextInput style={Styles.nameTextInput}
    onChangeText={(text)=>setname(text)}
    value={name}
    /> 
</View>
<ImageChooser onChangeImage={(image) => setimage(image)}/>
<Button title="Start chatting!" onPress={()=>onClosed(name,image)}/>
</View>


);
}

export default PersonalInfo