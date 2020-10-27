import React, { useState } from 'react';
import { View, Text, StyleSheet, Image, ScrollView, ToastAndroid, BackHandler, ImageBackground } from 'react-native';
import { red } from '../assets/colors';
import Header from '../components/Header';
import Button from '../components/Button';
import { height, width } from '../assets/dimensions';

const Cart = ({ navigation }) => {

    return (
        <>
        <ScrollView style={{
            flex: 1,
            backgroundColor:'#FCF8F8'
        }}>
            <Header image={true} navigation={navigation} />
           
            <View style={styles.deliveryAddress}>
                <View style={styles.deliveryDurationContainer}>
                    <Text style={{flex:1}}>
                        Delivery time
                    </Text>
                    <Text>
                        Today, 10:00 AM  >
                    </Text>
                </View>
                <View style={{display:'flex',
        flexDirection:'row',
        paddingVertical:10,
        paddingHorizontal:20, }}>
                    <Image source={require('../assets/marker.png')} style={{justifyContent:'center', alignContent:'center'}} />
                    <Text style={{flex:0.9, marginLeft:10}}>
                        Akshya nagar 1st block 1st, Cross Rammurthi nagar, Banglore - 560016
                    </Text>
                    <Text style={{fontSize:20,flex:0.1, textAlign:'right'}}>
                        >
                    </Text>
                </View>
            </View>







            <View style={{...styles.deliveryAddress, borderBottomWidth:1, borderBottomColor:'lightgrey'}}>
            <View style={{display:'flex', flexDirection:'row',flex:1,marginLeft:0,  marginRight:0 }}>
                        <View style={{}}>
                            <Image source={require('../assets/food.png')} style={{height:60, width:60, borderRadius:10}} />
                        </View>
                        <View style={{flex:1, marginLeft:20,}}>
                            <Text style={{fontWeight:'bold'}}>
                                Thali
                            </Text>
                            <Text style={{color:'grey'}}>
                                kjgchgvhgkuj
                            </Text>
                            <View style={{display:'flex', flexDirection:'row',}}>
                                <Text style={{flex:1}}>
                                    Rs. 200
                                </Text>
                                <View style={{display:'flex', flexDirection:'row',}}>
                                    <Image source={require('../assets/-.png')} style={{}} />
                                    <Text style={{marginLeft:10, marginRight:10}}>1</Text>
                                    <Image source={require('../assets/+.png')} />
                                </View>
                            </View>
                        </View>
                        </View>






                        <View style={{display:'flex', flexDirection:'row',flex:1,marginLeft:0,  marginRight:0, marginTop:20 }}>
                        <View style={{}}>
                            <Image source={require('../assets/food.png')} style={{height:60, width:60, borderRadius:10}} />
                        </View>
                        <View style={{flex:1, marginLeft:20,}}>
                            <Text style={{fontWeight:'bold'}}>
                                Thali
                            </Text>
                            <Text style={{color:'grey'}}>
                                kjgchgvhgkuj
                            </Text>
                            <View style={{display:'flex', flexDirection:'row',}}>
                                <Text style={{flex:1}}>
                                    Rs. 200
                                </Text>
                                <View style={{display:'flex', flexDirection:'row',}}>
                                    <Image source={require('../assets/-.png')} style={{}} />
                                    <Text style={{marginLeft:10, marginRight:10}}>1</Text>
                                    <Image source={require('../assets/+.png')} />
                                </View>
                            </View>
                        </View>
                        </View>




                        <View style={{paddingVertical:20}}>
                            <View style={{display:'flex', flexDirection:'row',}}>
                                <Text style={{fontSize:16, flex:1}}>
                                    Sub Total
                                </Text>
                                <Text>
                                    Rs. 600
                                </Text>
                            </View>
                            <View style={{display:'flex', flexDirection:'row',}}>
                                <Text style={{fontSize:16, flex:1}}>
                                    Delivery Fee
                                </Text>
                                <Text>
                                    Rs. 80
                                </Text>
                            </View>
                            <View style={{display:'flex', flexDirection:'row',}}>
                                <Text style={{fontWeight:'bold', fontSize:16, flex:1}}>
                                    Total
                                </Text>
                                <Text>
                                    Rs. 680
                                </Text>
                            </View>
                        </View>
            </View>
        </ScrollView>
        <ScrollView style={{flex:1,position:'absolute', backgroundColor:'white', height:height*0.1,width:width-1, borderTopRightRadius:20, borderTopLeftRadius:20, top:'90%',elevation:4}}>
                <View style={{display:'flex', flexDirection:'row', paddingVertical:10, paddingVertical:10,justifyContent:'center', alignItems:'center', alignContent:'center',}}>
                <View style={{display:'flex', flexDirection:'row',paddingHorizontal:10,paddingVertical:10}}>
                                <View style={{flex:0.8}}>
                                    <Text style={{fontWeight:'bold', fontSize:16, }}>
                                        Total: Rs. 680
                                    </Text>
                                    <Text style={{ fontSize:16, color:'grey'}}>
                                        2 items
                                    </Text>
                                </View>
                                <View style={{flex:0.3}}>
                                    <Button label="Pay" bgColor="#B50019" textColor="white" clickEvent={()=>navigation.navigate('OrderSuccess')}  />
                                </View>
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
    deliveryAddress: {
        backgroundColor:'white',
        paddingVertical:10,
        paddingHorizontal:20,
        elevation:4,
        margin:20,
        borderRadius:6
    },
    deliveryDurationContainer: {
        display:'flex',
        flexDirection:'row',
        paddingVertical:10,
        paddingHorizontal:20,
        borderBottomWidth:1,
        borderBottomColor:'lightgrey'
    }
})


const mapStateToProps = state => ({

})


export default Cart