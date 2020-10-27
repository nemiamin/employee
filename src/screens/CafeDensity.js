import React, { useState } from 'react';
import { View, Text, StyleSheet, Image, ScrollView, ToastAndroid, BackHandler, ImageBackground } from 'react-native';
import { red } from '../assets/colors';
import Header from '../components/Header';
import SearchContainer from '../components/SearchContainer';
import CategorySection from '../components/CategorySection';
import TitleContainer from '../components/TitleContainer';
import PostCard from '../components/PostCard';
import { height, width } from '../assets/dimensions';
import { TouchableOpacity } from 'react-native-gesture-handler';

const CafeDensity = ({ navigation }) => {

    return (
        <ScrollView style={{
            flex: 1
        }}>
            <Header image={true} navigation={navigation} />
            <View style={{justifyContent:'center', alignContent:'center', alignItems:'center', marginTop:20}}>
                <Text style={{fontSize:24, fontWeight:'bold'}}>
                    Cafeteria Density
                </Text>
            </View>
            <View style={{borderRadius:10, borderWidth:1, borderColor:'lightgrey', marginHorizontal:20, marginVertical:20, justifyContent:'center', alignItems:'center', alignContent:'center'}}>
                <Text style={{paddingTop:60, paddingBottom:60, fontSize:100, color:'#A9A9A9'}}>
                    272
                </Text>
            </View>
            
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


export default CafeDensity