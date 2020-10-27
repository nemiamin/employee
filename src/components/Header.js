import React from 'react';
import { View, StyleSheet, Image } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { height, width } from '../assets/dimensions';
import {light_grey} from '../assets/colors';

 const Header = ({ image, back, navigation }) => {
    return (
        <View style={styles.main}>
            <View style={styles.start}>
            <TouchableOpacity onPress={() => navigation.navigate('Dashboard')}>
                <Image source={require('../assets/logo.png')} style={{
                    height: 50, width: 50
                }} />
                </TouchableOpacity>
            </View>
            <View style={styles.end}>
                {image && (
                    <TouchableOpacity onPress={() =>navigation.navigate('Profile')}>
            <Image source={require('../assets/user.png')} style={{
                    height: 50, width: 50
                }} />
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
        flex: 1
    }
})

export default Header;