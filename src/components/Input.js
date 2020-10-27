import React from 'react';
import { TextInput, StyleSheet,View } from 'react-native'
import { width } from '../assets/dimensions';
import Icon from 'react-native-vector-icons/FontAwesome5'

 const Input = ({  changeInput, value, secureTextEntry, name, color, mar, placeholder , textColor, prefix_icon, suffix_icon, icon_flex, elevation, backgroundColor}) => {
    return (
        <View style={{...styles.inputContainer,elevation:elevation ? 0 : 4,
            backgroundColor: backgroundColor?backgroundColor:'white',}}>
            <View style={{flex:icon_flex?icon_flex:0.1, justifyContent:'center', alignContent:'center', alignItems:'center'}}>
                <Icon name={prefix_icon} size={20} />
            </View>
            <View style={{flex:1}}>
                <TextInput secureTextEntry={secureTextEntry} placeholder={placeholder} value={value} name={name} onChangeText={(e) => changeInput(e, name)} style={{ ...styles.input, backgroundColor: backgroundColor ? backgroundColor : 'white', marginVertical: mar ? 6 : 0,   color: textColor ? textAlign : 'black' }} placeholderTextColor={textColor?textColor:'black'} />
            </View>
            <View style={{justifyContent:'center', alignContent:'center', alignItems:'center',paddingEnd:10}}>
                <Icon name={suffix_icon} size={20} />
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    input: {
        backgroundColor: 'red',
        
    },
    inputContainer: {
        display:'flex',
        flexDirection:'row',
        
        borderRadius:10,
    }
})

export default Input