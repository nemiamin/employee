import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, Image, ScrollView, Modal, BackHandler, ImageBackground, TouchableHighlight } from 'react-native';
import { red } from '../assets/colors';
import Input from '../components/Input';
import Button from '../components/Button';
import { height, width } from '../assets/dimensions';
import { connect } from 'react-redux';
import { login } from '../action/auth';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Loader from '../components/Loader';

const Login = ({ navigation, login }) => {
    const [modalVisible, setModalVisible] = useState(false);
    const [ form, setForm ] = useState({
        email: '', password: ''
    });
    const [loading, isLoading] = useState(false);
    const changeInput = (e, name) => {
        setForm({
            ...form, [name]: e
        })
    }
    
    useEffect(() => {
        const backHandler = BackHandler.addEventListener('hardwareBackPress', handleBackButtonClick);
        return () => {
          backHandler.remove();
        };
      }, []);

      function handleBackButtonClick() {
        setModalVisible(true);
        return true;
    }

    const loginUser = async () => {
      isLoading(true);
        const response = await login(form);
        console.log(response);
        if(response.success) {
            AsyncStorage.setItem('user', JSON.stringify(response.data))
            setForm({
                mobile: '', otp: ''
            });
            navigation.navigate('Home')
        }
        isLoading(false);
    }

    const { email, password } = form;
    return (
      <>
      {loading && <Loader />}
        {!loading && <ScrollView style={{
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
                    <Input changeInput={changeInput} value={password} name='password' secureTextEntry={true} placeholder="Password" prefix_icon="lock" />
                </View>
                <View style={{marginTop:20, justifyContent:'center', alignItems:'center', alignContent:'center',marginBottom:10}}>
                    <Text style={{fontSize:16}}>
                        Remember Me
                    </Text>
                </View>
                <Button label="Login" bgColor={red} textColor="white" clickEvent={()=>loginUser()}  />
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

        <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          setModalVisible(false)
        }}
      >
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <Text style={styles.modalText}>Are you sure you want to close this application?</Text>

            <View style={{justifyContent:'center',alignContent:'center',alignItems:'center', display:'flex',flexDirection:'row'}}>
            <TouchableHighlight
              style={{ ...styles.openButton, backgroundColor: "#4caf50" }}
              onPress={() => {
                setModalVisible(false);
              }}
            >
              <Text style={styles.textStyle}>No</Text>
            </TouchableHighlight>
            <TouchableHighlight
              style={{ ...styles.openButton, backgroundColor: "#f44336" }}
              onPress={() => {
                BackHandler.exitApp();
              }}
            >
              <Text style={styles.textStyle}>Yes</Text>
            </TouchableHighlight>
            </View>
          </View>
        </View>
      </Modal>
         </ScrollView>}
         </>
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
    },
    centeredView: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        marginTop: 22
      },
      modalView: {
        margin: 20,
        backgroundColor: "white",
        borderRadius: 20,
        padding: 35,
        alignItems: "center",
        shadowColor: "#000",
        shadowOffset: {
          width: 0,
          height: 2
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5
      },
      openButton: {
        backgroundColor: "#F194FF",
        borderRadius: 20,
        padding: 10,
        elevation: 2,
        flex:1,
        margin:10
      },
      textStyle: {
        color: "white",
        fontWeight: "bold",
        textAlign: "center"
      },
      modalText: {
        marginBottom: 15,
        textAlign: "center"
      }
})


const mapStateToProps = state => ({

})


export default connect(
    mapStateToProps, {
        login
    }
) (Login)