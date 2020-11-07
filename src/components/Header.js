import React,{useState, useEffect} from 'react';
import { View, StyleSheet, Image, Text, Modal, TouchableHighlight } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { height, width } from '../assets/dimensions';
import {light_grey} from '../assets/colors';
import AsyncStorage from '@react-native-async-storage/async-storage';

 const Header = ({ image, back, navigation }) => {
    const [modalVisible, setModalVisible] = useState(false);
    const logoutUser = async () => {
        setModalVisible(false);
        AsyncStorage.removeItem('user');
        await AsyncStorage.removeItem('loggedIn');
        navigation.navigate('Login');
    }
    return (
        <View style={styles.main}>
            <View style={styles.start}>
            <TouchableOpacity onPress={() => navigation.navigate('Home')}>
                <Image source={require('../assets/logo.png')} style={{
                    height: 50, width: 50
                }} />
                </TouchableOpacity>
            </View>
            <View style={styles.end}>
                {image && (
                    <TouchableOpacity onPress={()=>setModalVisible(true)}>
            {/* <Image source={require('../assets/user.png')} style={{
                    height: 50, width: 50
                }} /> */}
                <Text>Logout</Text>
                </TouchableOpacity>
                )}
                {/* {back && (
                    <TouchableOpacity onPress={() => navigation.goBack()}>
                    <Image  source={require('../assets/back.png')} style={{
                        height: 50, width: 50
                    }} />
                    </TouchableOpacity>
                )} */}
            </View>


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
            <Text style={styles.modalText}>Are you sure you want to logout?</Text>

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
                logoutUser();
              }}
            >
              <Text style={styles.textStyle}>Yes</Text>
            </TouchableHighlight>
            </View>
          </View>
        </View>
      </Modal>
        </View>
    )
}

const styles = StyleSheet.create({
    main: {
        flexDirection: 'row',
        paddingHorizontal: width * 0.04,
        backgroundColor: light_grey?light_grey:'white',
        elevation: 4,
        paddingVertical: height * 0.015,
        borderBottomEndRadius:10,
        borderBottomStartRadius:10,
    },
    start: {
        alignItems: 'flex-start',
        flex: 1
    },
    end: {
        alignItems: 'flex-end',
        flex: 1,
        justifyContent:'center',
        alignContent:'center',
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

export default Header;