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

const Home = ({ navigation }) => {

    return (
        <>
        <ScrollView style={{
            flex: 1
        }}>
            <Header image={true} navigation={navigation} />
            <SearchContainer navigation={navigation} />
            <CategorySection navigation={navigation} />
            <TitleContainer title="Trending" />
            <PostCard />
            <PostCard />
            <PostCard />
            <PostCard />
            
        </ScrollView>
        <ScrollView style={{flex:1,position:'absolute', backgroundColor:'white', height:height*0.07,width:width-1, borderTopRightRadius:20, borderTopLeftRadius:20, top:'93%',elevation:4}}>
                <View style={{display:'flex', flexDirection:'row', paddingVertical:10, paddingVertical:10,justifyContent:'center', alignItems:'center', alignContent:'center',}}>
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
                </View>
        </ScrollView>
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
    }
})


const mapStateToProps = state => ({

})


export default Home