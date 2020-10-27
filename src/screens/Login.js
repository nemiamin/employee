import React, { useState } from 'react';
import { View, Text, StyleSheet, Image, ScrollView, ToastAndroid, BackHandler, ImageBackground } from 'react-native';
import { red } from '../assets/colors';
import Input from '../components/Input';
import Button from '../components/Button';
import { height, width } from '../assets/dimensions';

const Login = ({ navigation }) => {
    const [ form, setForm ] = useState({
        email: '', password: ''
    });
    const changeInput = (e, name) => {
        setForm({
            ...form, [name]: e
        })
    }



    const { email, password } = form;
    return (
        <ScrollView style={{
            flex: 1
        }}>
        <ImageBackground source={require('../assets/authBg.png')} style={styles.mainContainer}>
            <View style={styles.logoContainer}>
                <Image source={require('../assets/logo.png')} style={{
                    height: height * 0.2, width: width * 0.38
                }} />
            </View>
            <View style={styles.formContainer}>

                <Input changeInput={changeInput} value={email} name='email' placeholder="Username" prefix_icon="user" />
                <View style={{marginTop:20}}>
                    <Input changeInput={changeInput} value={password} name='password' secureTextEntry={true} placeholder="Password" prefix_icon="lock" suffix_icon="eye" />
                </View>
                <View style={{marginTop:20, justifyContent:'center', alignItems:'center', alignContent:'center',marginBottom:10}}>
                    <Text style={{fontSize:16}}>
                        Remember Me
                    </Text>
                </View>
                <Button label="Login" bgColor={red} textColor="white" clickEvent={()=>navigation.navigate('Home')}  />
                <View style={{marginTop:20, justifyContent:'center', alignItems:'center', alignContent:'center',marginBottom:10}}>
                    <Text style={{fontSize:16}}>
                        Forgot Password ?
                    </Text>
                </View>
            </View>

            <View style={{ paddingHorizontal: width * 0.07,paddingBottom:20 }}>
                <View style={{marginTop:20, justifyContent:'center', alignItems:'center', alignContent:'center',marginBottom:10}}>
                    <Text style={{fontSize:16}}>
                        Don't have an account ?
                    </Text>
                </View>
                <Button label="Sign Up" bgColor={red} textColor="white" clickEvent={()=>navigation.navigate('Register')} />
            </View>
        </ImageBackground>
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
        flex: 1.4,
        // height: height * 0.45,
        paddingHorizontal: width * 0.07,
        justifyContent: 'flex-start'
    },
    text: {
        fontSize: 16,
        color: 'white',
        marginBottom: 8
    }
})


const mapStateToProps = state => ({

})


export default Login