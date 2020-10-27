import React from 'react';
import { View, StyleSheet, Image, Text, ImageBackground, ScrollView } from 'react-native';
import { height, width } from '../assets/dimensions';
import Input from '../components/Input';
import Header from '../components/Header';

 const CategoryItems = ({ image, back, navigation }) => {
    return (
        <ScrollView style={{
            flex: 1
        }}>
            <Header image={true} navigation={navigation} />
        <View style={styles.main}>
            <View style={{flex:1,backgroundColor:'#E5E5E5',borderRadius:30}}>
                <ImageBackground source={require('../assets/Mask.png')} style={{height:height*0.3}} imageStyle={{borderRadius:30}}>
                    <View style={{backgroundColor:'rgba(255, 0, 0, 0.5)', width:width*0.5, justifyContent:'flex-end', alignContent:'flex-end', alignItems:'flex-start', position:'absolute', top:'70%', marginLeft:20, borderBottomLeftRadius:10}}>
                        <Text style={{color:'white', fontSize:24, fontWeight:'bold', paddingStart:10}}>
                            Lorem Ipsum
                        </Text>
                        <Text style={{color:'white', fontSize:18, letterSpacing:2, paddingStart:10}}>
                            Scfnfjen
                        </Text>
                    </View>
                </ImageBackground>
            </View>

        </View>

        <View style={{// display:'flex',
        flexDirection: 'row',
        // paddingHorizontal: width * 0.04,
        backgroundColor: 'white',
        // elevation: 4,
        paddingVertical: height * 0.015,
        borderBottomColor:'lightgrey',
        borderBottomWidth:2}}>
        <View style={{flex:1, justifyContent:'center', alignContent:'center',alignItems:'center'}}>
            <Text>
                Lorem Ipsum
            </Text>
        </View>
        <View style={{flex:1, justifyContent:'center', alignContent:'center',alignItems:'center'}}>
            <Text>
                Lorem 
            </Text>
        </View>
        <View style={{flex:1, justifyContent:'center', alignContent:'center',alignItems:'center'}}>
            <Text>
                Ipsum
            </Text>
        </View>
        <View style={{flex:1, justifyContent:'center', alignContent:'center',alignItems:'center'}}>
            <Text style={{color:'#ED2124', paddingTop:5,paddingBottom:5, paddingEnd:15, paddingStart:15, borderRadius:200,}}>
                Lorem
            </Text>
        </View>
    </View>


    <View style={styles.card}>
    <View style={{display:'flex', flexDirection:'row',flex:1, borderBottomColor:'lightgrey',borderBottomWidth:1,backgroundColor:'white',borderTopRightRadius:15, borderBottomRightRadius:15,elevation:4 }}>
                        <View style={{paddingHorizontal:10,paddingVertical:10,}}>
                            <Image source={require('../assets/food.png')} style={{height:60, width:60, borderRadius:10}} />
                        </View>
                        <View style={{flex:1, marginLeft:20,paddingHorizontal:10,paddingVertical:10,}}>
                        <Text style={{fontWeight:'bold'}}>
                                Order Placed
                            </Text>
                            <Text>
                                kjgchgvhgkuj
                            </Text>
                            <Text>
                                kjgchgvhgkujnjbhbkjb
                            </Text>
                        </View>
                    </View>
    </View>



    

    <View style={styles.card}>
    <View style={{display:'flex', flexDirection:'row',flex:1, borderBottomColor:'lightgrey',borderBottomWidth:1,backgroundColor:'white',borderTopRightRadius:15, borderBottomRightRadius:15,elevation:4 }}>
                        <View style={{paddingHorizontal:10,paddingVertical:10,}}>
                            <Image source={require('../assets/food.png')} style={{height:60, width:60, borderRadius:10}} />
                        </View>
                        <View style={{flex:1, marginLeft:20,paddingHorizontal:10,paddingVertical:10,}}>
                        <Text style={{fontWeight:'bold'}}>
                                Order Placed
                            </Text>
                            <Text>
                                kjgchgvhgkuj
                            </Text>
                            <Text>
                                kjgchgvhgkujnjbhbkjb
                            </Text>
                        </View>
                    </View>
    </View>



    



    <View style={styles.card}>
    <View style={{display:'flex', flexDirection:'row',flex:1, borderBottomColor:'lightgrey',borderBottomWidth:1,backgroundColor:'white',borderTopRightRadius:15, borderBottomRightRadius:15,elevation:4 }}>
                        <View style={{paddingHorizontal:10,paddingVertical:10,}}>
                            <Image source={require('../assets/food.png')} style={{height:60, width:60, borderRadius:10}} />
                        </View>
                        <View style={{flex:1, marginLeft:20,paddingHorizontal:10,paddingVertical:10,}}>
                        <Text style={{fontWeight:'bold'}}>
                                Order Placed
                            </Text>
                            <Text>
                                kjgchgvhgkuj
                            </Text>
                            <Text>
                                kjgchgvhgkujnjbhbkjb
                            </Text>
                        </View>
                    </View>
    </View>






    <View style={styles.card}>
    <View style={{display:'flex', flexDirection:'row',flex:1, borderBottomColor:'lightgrey',borderBottomWidth:1,backgroundColor:'white',borderTopRightRadius:15, borderBottomRightRadius:15,elevation:4 }}>
                        <View style={{paddingHorizontal:10,paddingVertical:10,}}>
                            <Image source={require('../assets/food.png')} style={{height:60, width:60, borderRadius:10}} />
                        </View>
                        <View style={{flex:1, marginLeft:20,paddingHorizontal:10,paddingVertical:10,}}>
                        <Text style={{fontWeight:'bold'}}>
                                Order Placed
                            </Text>
                            <Text>
                                kjgchgvhgkuj
                            </Text>
                            <Text>
                                kjgchgvhgkujnjbhbkjb
                            </Text>
                        </View>
                    </View>
    </View>





    <View style={styles.card}>
    <View style={{display:'flex', flexDirection:'row',flex:1, borderBottomColor:'lightgrey',borderBottomWidth:1,backgroundColor:'white',borderTopRightRadius:15, borderBottomRightRadius:15,elevation:4 }}>
                        <View style={{paddingHorizontal:10,paddingVertical:10,}}>
                            <Image source={require('../assets/food.png')} style={{height:60, width:60, borderRadius:10}} />
                        </View>
                        <View style={{flex:1, marginLeft:20,paddingHorizontal:10,paddingVertical:10,}}>
                        <Text style={{fontWeight:'bold'}}>
                                Order Placed
                            </Text>
                            <Text>
                                kjgchgvhgkuj
                            </Text>
                            <Text>
                                kjgchgvhgkujnjbhbkjb
                            </Text>
                        </View>
                    </View>
    </View>



    
   
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    main: {
        flexDirection: 'column',
        paddingHorizontal: width * 0.04,
        backgroundColor: '#FCF8F8',
        // elevation: 4,
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
    },
    card: {
        
        paddingHorizontal: 20,
        paddingVertical: 5
    }
})

export default CategoryItems;