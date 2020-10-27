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

const Health = ({ navigation }) => {

    return (
        <ScrollView style={{
            flex: 1
        }}>
            <Header image={true} navigation={navigation} />
            <View style={{justifyContent:'flex-start', alignContent:'flex-start', alignItems:'flex-start', marginTop:24}}>
                <Text style={{fontSize:24, fontWeight:'700', marginLeft:20,letterSpacing:2}}>
                    Health
                </Text>
            </View>

            <ImageBackground source={require('../assets/healthBox.png')} style={{height:200, margin:20, display:'flex', flexDirection:'row',justifyContent:'center', alignContent:'center',alignItems:'center'}} imageStyle={{borderRadius:30}}>
                <View style={{justifyContent:'center', alignContent:'center',alignItems:'center',}}>
                    
                    <Image source={require('../assets/circle.png')} />
                </View>
                <View style={{justifyContent:'center', alignContent:'center',alignItems:'flex-start',marginLeft:30}}>
                    <Text style={{fontSize:25, fontWeight:'bold', color:'white'}}>
                        Dslrgilkgn
                    </Text>
                    <Text style={{fontSize:20,  color:'white'}}>
                        gsrlhtj;hld;
                    </Text>
                </View>
            </ImageBackground>
            
            <View style={{justifyContent:'flex-start', alignContent:'flex-start', alignItems:'flex-start', marginTop:0}}>
                <Text style={{fontSize:24, fontWeight:'700', marginLeft:20,letterSpacing:2}}>
                    FElkeak
                </Text>
            </View>
            {/* <View style={{flex:1}}> */}
            <ScrollView horizontal={true} contentContainerStyle={{flexGrow:1}}>
                <View style={{paddingLeft:10, paddingVertical:20}}>
                    <Image source={require('../assets/rectangleCard.png')} />
                </View>
                <View style={{paddingLeft:10, paddingVertical:20}}>
                    <Image source={require('../assets/rectangleCard.png')} />
                </View>
                <View style={{paddingLeft:10, paddingVertical:20}}>
                    <Image source={require('../assets/rectangleCard.png')} />
                </View>
                <View style={{paddingLeft:10, paddingVertical:20}}>
                    <Image source={require('../assets/rectangleCard.png')} />
                </View>
                <View style={{paddingLeft:10, paddingVertical:20}}>
                    <Image source={require('../assets/rectangleCard.png')} />
                </View>
                <View style={{paddingLeft:10, paddingVertical:20}}>
                    <Image source={require('../assets/rectangleCard.png')} />
                </View>
                <View style={{paddingLeft:10, paddingVertical:20}}>
                    <Image source={require('../assets/rectangleCard.png')} />
                </View>
               
            </ScrollView>
            {/* </View> */}



            <View style={{justifyContent:'flex-start', alignContent:'flex-start', alignItems:'flex-start', marginTop:0}}>
                <Text style={{fontSize:24, fontWeight:'700', marginLeft:20,letterSpacing:2}}>
                    Csdmvsk
                </Text>
            </View>
            <ScrollView style={{flex:1}} horizontal={true}>
                <View style={{paddingLeft:10, paddingVertical:20}}>
                    <Image source={require('../assets/smallCard.png')} />
                </View>
                <View style={{paddingLeft:10, paddingVertical:20}}>
                    <Image source={require('../assets/smallCard.png')} />
                </View>
                <View style={{paddingLeft:10, paddingVertical:20}}>
                    <Image source={require('../assets/smallCard.png')} />
                </View>
                <View style={{paddingLeft:10, paddingVertical:20}}>
                    <Image source={require('../assets/smallCard.png')} />
                </View>
               
            </ScrollView>
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


export default Health