

import React from 'react';
import { View, StyleSheet, Image, Text, ImageBackground } from 'react-native';
import { height, width } from '../assets/dimensions';
import { connect } from 'react-redux';
import { red } from '../assets/colors';
import { TouchableOpacity } from 'react-native-gesture-handler';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {showToast} from '../action/auth';

 const Menu = ({ data, type, navigation, showToast }) => {

    const addToCart = async (item) => {
        const isExist = await AsyncStorage.getItem('cart');
        if(JSON.parse(isExist) && JSON.parse(isExist).length > 0) {
            let itemExists = JSON.parse(isExist).find(v => (type == 'menu') ? v.item_id ==  item.menuid : v.item_id == item.thali_id );
            if(itemExists) {
                let items = JSON.parse(isExist).map(v => ((type == 'menu') ? v.item_id ==  item.menuid : v.item_id == item.thali_id) ? {...v, quantity: v.quantity + 1} : v );
                AsyncStorage.setItem('cart', JSON.stringify(items));
                showToast('success', 'Item added to cart!')
            } else {
                AsyncStorage.setItem('cart', JSON.stringify([...JSON.parse(isExist),{...item,quantity: 1, type, item_id: type == 'menu' ? item.menuid : item.thali_id }]));
                showToast('success', 'Item added to cart!')
            }
        } else {
            AsyncStorage.setItem('cart', JSON.stringify([{...item,quantity: 1, type, item_id: type == 'menu' ? item.menuid : item.thali_id }]));
            showToast('success', 'Item added to cart!')
        }
    }
    return (
       <>
       {data && data.length > 0 && data.map((item,index) =>
        <View key={index} style={styles.card}>
    <View style={{display:'flex', flexDirection:'row',flex:1, borderBottomColor:'lightgrey',borderBottomWidth:1,backgroundColor:'white',borderTopRightRadius:15, borderBottomRightRadius:15,elevation:4 }}>
                        <View style={{paddingHorizontal:10,paddingVertical:10,}}>
                            <Image source={{ uri: 'http://food.breeur.in/'+item.menu_img }} style={{height:60, width:60, borderRadius:10}} />
                        </View>
                        <View style={{flex:1, marginLeft:20,paddingHorizontal:10,paddingVertical:10,}}>
                        <Text style={{fontWeight:'bold'}}>
                                {type=='menu'?item.dish_name : item.thali_name}
                            </Text>
                            <Text>
                                {type=='menu'?item.menu_category: item.dish_include}
                            </Text>
                            <Text>
                                Rs. {item.dish_price}
                            </Text>
                        </View>
                        <View  style={{justifyContent:'center',alignContent:'center',alignItems:'center', marginRight: 20,}}>
                            <TouchableOpacity onPress={()=>addToCart(item)}>
                                <Text style={{backgroundColor:red, borderRadius:10, padding:10, color:'white'}}>
                                    Add to Cart
                                </Text>
                            </TouchableOpacity>
                        </View>

                    </View>
    </View>
    
    )}
    </>
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
    },
    card: {
        
        paddingHorizontal: 20,
        paddingVertical: 5
    }
})

const mapStateToProps = state => ({

})


export default connect(
    mapStateToProps, {
        showToast
    }
) (Menu)