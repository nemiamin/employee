import React, { useState } from 'react';
import { View, Text, StyleSheet, Image, ScrollView, ToastAndroid, BackHandler, ImageBackground } from 'react-native';
import { red } from '../assets/colors';
import Input from '../components/Input';
import Button from '../components/Button';
import { height, width } from '../assets/dimensions';

const Register = ({ navigation }) => {
    const [ form, setForm ] = useState({
        email: '', password: ''
    });
    const [registerForm, setRegisterForm] = useState(true);
    const changeInput = (e, name) => {
        setForm({
            ...form, [name]: e
        })
    }

    const submit = () => {
        setRegisterForm(false);
        setTimeout(()=>{
            navigation.navigate('Login');
        }, 3000);
        
    }



    const { email, password } = form;
    return (
        <ScrollView style={{
            flex: 1
        }}>
        {registerForm && <ImageBackground source={require('../assets/authBg.png')} style={styles.mainContainer}>
            <View style={styles.logoContainer}>
                <Image source={require('../assets/logo.png')} style={{
                    height: height * 0.2, width: width * 0.38
                }} />
            </View>
            <View style={styles.formContainer}>

                
                <View style={{display:'flex',flexDirection:'row',paddingBottom: width * 0.05,}}>
                    <View style={{flex:1,paddingEnd:5}}>
                        <Input changeInput={changeInput} value={email} name='email' placeholder="First Name" prefix_icon="user" icon_flex={0.2} />
                    </View>
                    <View style={{flex:1,paddingStart:5}}>
                        <Input changeInput={changeInput} value={password} name='password' placeholder="Last Name" prefix_icon="user" icon_flex={0.2} />
                    </View>
                </View>
                <View style={{marginTop:0}}>
                        <Input changeInput={changeInput} value={password} name='password' placeholder="Mobile" prefix_icon="mobile" />
                    </View>
                <View style={{marginTop:10}}>
                        <Input changeInput={changeInput} value={password} name='password' secureTextEntry={false} placeholder="Email ID" prefix_icon="envelope" />
                    </View>
                    <View style={{marginTop:15}}>
                        <Input changeInput={changeInput} value={password} name='password' secureTextEntry={true} placeholder="Password" prefix_icon="lock" />
                    </View>
                <View style={{marginTop:15, marginBottom:30}}>
                        <Input changeInput={changeInput} value={password} name='password' secureTextEntry={true} placeholder="Confirm Password" prefix_icon="lock" />
                    </View>

                <Button label="Sign Up" bgColor={red} textColor="white" clickEvent={()=>submit()} />

            </View>

        </ImageBackground>}
        {!registerForm && <ImageBackground source={require('../assets/successBg.png')} style={styles.mainContainer}>
            <View style={{       justifyContent: 'flex-start',
        alignItems: 'center',
        marginTop: height*0.1, marginBottom:height*0.07}}>
                <Image source={require('../assets/logo.png')} style={{
                    height: height * 0.2, width: width * 0.38
                }} />
            </View>
            <View style={{
        paddingHorizontal: width * 0.08,
        justifyContent: 'flex-start',display:'flex',flexDirection:'row'}}>
                <View style={{flex:0.3}}>
                    <Image source={require('../assets/success.png')} style={{height:70,width:70}} />
                </View>
                <View style={{flex:1, justifyContent:'center',}}>
                    <Text style={{fontSize:30, letterSpacing:2}}>
                        Thank you for registration
                    </Text>
                </View>
            </View>
        </ImageBackground>}
         </ScrollView>
    )
}

const styles = StyleSheet.create({
    mainContainer: {
        height:height
    },
    logoContainer: {
        flex: 0.8,
        // height: height * 0.1,
        justifyContent: 'flex-start',
        alignItems: 'center',
        marginTop: height*0.25
    },
    formContainer: {
        flex: 1.7,
        // height: height * 0.45,
        paddingHorizontal: width * 0.05,
        justifyContent: 'flex-start',
        
    },
    text: {
        fontSize: 16,
        color: 'white',
        marginBottom: 8
    }
})


const mapStateToProps = state => ({

})


export default Register