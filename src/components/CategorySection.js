import React from 'react';
import { View, StyleSheet, Image, Text, ImageBackground } from 'react-native';
import { height, width } from '../assets/dimensions';
import Input from '../components/Input';
import { TouchableOpacity } from 'react-native-gesture-handler';

 const CategorySection = ({ image, back, navigation }) => {
    return (
        <View style={styles.main}>
            <View style={{display:'flex', flexDirection:'row',justifyContent:'center', alignItems:'center', alignContent:'center'}}>
                <ImageBackground source={require('../assets/orangeBox.png')} style={{ height:80,width:width/3.5, justifyContent:'center', alignItems:'center', alignContent:'center',padding:5, margin:5,elevation:4}} imageStyle={{borderRadius:6}}>
                <TouchableOpacity onPress={()=>navigation.navigate('CategoryItems')}>
                <Text style={{textAlign:'center', color: 'white', fontSize:18}}>
                        Live & Menu
                    </Text>
                </TouchableOpacity>
                </ImageBackground>
                <ImageBackground source={require('../assets/greenBox.png')} style={{ height:80,justifyContent:'center', alignItems:'center', alignContent:'center', padding:5, margin:5,width:width/3.5,elevation:4}} imageStyle={{borderRadius:6, }}>
                <Text style={{textAlign:'center', color: 'white',fontSize:18}}>
                        Order Food
                    </Text>
                    </ImageBackground>
                <ImageBackground source={require('../assets/brownBox.png')} style={{ height:80,justifyContent:'center', alignItems:'center', alignContent:'center', padding:5, margin:5,width:width/3.5,elevation:4}} imageStyle={{borderRadius:6}}>
                    <Text style={{textAlign:'center', color: 'white',fontSize:18}}>
                        Cafeteria Density
                    </Text>
                    </ImageBackground>
            </View>


            <View style={{display:'flex', flexDirection:'row',justifyContent:'center', alignItems:'center', alignContent:'center'}}>
                <ImageBackground source={require('../assets/lightPurpleBox.png')} style={{ height:80,width:width/3.5, justifyContent:'center', alignItems:'center', alignContent:'center',padding:5, margin:5,elevation:4}} imageStyle={{borderRadius:6}}>
                <Text style={{textAlign:'center', color: 'white', fontSize:18}}>
                        Health & Tracker
                    </Text>
                </ImageBackground>
                <ImageBackground source={require('../assets/orangeBox.png')} style={{ height:80,justifyContent:'center', alignItems:'center', alignContent:'center', padding:5, margin:5,width:width/3.5,elevation:4}} imageStyle={{borderRadius:6, }}>
                <Text style={{textAlign:'center', color: 'white',fontSize:18}}>
                        Meal Tracker
                    </Text>
                    </ImageBackground>
                <ImageBackground source={require('../assets/purpleBox.png')} style={{ height:80,justifyContent:'center', alignItems:'center', alignContent:'center', padding:5, margin:5,width:width/3.5,elevation:4}} imageStyle={{borderRadius:6}}>
                    <Text style={{textAlign:'center', color: 'white',fontSize:18}}>
                        Report
                    </Text>
                    </ImageBackground>
            </View>
        </View>
        
    )
}

const styles = StyleSheet.create({
    main: {
        flexDirection: 'column',
        paddingHorizontal: width * 0.04,
        backgroundColor: 'white',
        elevation: 4,
        paddingVertical: height * 0.015,
    },
    start: {
        alignItems: 'flex-start',
        flex: 0.3,
        justifyContent:'center'
    },
    end: {
        alignItems: 'flex-end',
        flex: 2
    }
})

export default CategorySection;