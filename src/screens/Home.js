import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, Image, ScrollView, Modal, BackHandler, TouchableHighlight, Alert } from 'react-native';
import { red } from '../assets/colors';
import Header from '../components/Header';
import SearchContainer from '../components/SearchContainer';
import CategorySection from '../components/CategorySection';
import TitleContainer from '../components/TitleContainer';
import PostCard from '../components/PostCard';
import { height, width } from '../assets/dimensions';

const Home = ({ navigation }) => {
    const [modalVisible, setModalVisible] = useState(false);
    useEffect(() => {
        const backHandler = BackHandler.addEventListener('hardwareBackPress', handleBackButtonClick);
        return () => {
          console.log('closed')
          backHandler.remove();
        };
      }, []);

      function handleBackButtonClick() {
        console.log('clicked')
        setModalVisible(true);
        // BackHandler.exitApp();
        return true;
    }

    return (
        <>
        <ScrollView style={{
            flex: 1
        }}>
            <Header image={true} navigation={navigation} />
            {/* <SearchContainer navigation={navigation} /> */}
            <CategorySection navigation={navigation} />
            <TitleContainer title="Trending" />
            <PostCard />
            <PostCard />
            <PostCard />
            <PostCard />
            
        </ScrollView>
        {/* <ScrollView style={{flex:1,position:'absolute', backgroundColor:'white', height:height*0.07,width:width-1, borderTopRightRadius:20, borderTopLeftRadius:20, top:'93%',elevation:4}}> */}
                {/* <View style={{display:'flex', flexDirection:'row', paddingVertical:10, paddingVertical:10,justifyContent:'center', alignItems:'center', alignContent:'center',}}>
                    <View style={{justifyContent:'center', alignItems:'center', alignContent:'center', flex:1}}>
                        <TouchableOpacity onPress={()=>navigation.navigate('Cart')}>
                            <Image source={require('../assets/cart.png')} style={{height:30, width:30}} />
                        </TouchableOpacity>
                    </View>
                    <View style={{justifyContent:'center', alignItems:'center', alignContent:'center', flex:1}}>
                        <TouchableOpacity onPress={()=>navigation.navigate('CafeDensity')}>
                            <Image source={require('../assets/cart.png')} style={{height:30, width:30}} />
                        </TouchableOpacity>
                    </View>
                    <View style={{justifyContent:'center', alignItems:'center', alignContent:'center', flex:1}}>
                        <TouchableOpacity onPress={()=>navigation.navigate('Health')}>
                            <Image source={require('../assets/cart.png')} style={{height:30, width:30}} />
                        </TouchableOpacity>
                    </View>
                </View> */}


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
        {/* </ScrollView> */}
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


export default Home