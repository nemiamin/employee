import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';


// importing screens
import Login from '../screens/Login';
import Register from '../screens/Register';
import Home from '../screens/Home';
import Search from '../screens/Search';
import Cart from '../screens/Cart';
import OrderSuccess from '../screens/OrderSuccess';
import Feedback from '../screens/Feedback';
import OrderStatus from '../screens/OrderStatus';
import Report from '../screens/Report';
import CategoryItems from '../screens/CategoryItems';
import CafeDensity from '../screens/CafeDensity';
import Health from '../screens/Health';


const UiStack = createStackNavigator();
const UiNavigator = ({ navigation }) => (
    <UiStack.Navigator headerMode='none'>
        <UiStack.Screen name='Login' component={Login} />
        <UiStack.Screen name='Register' component={Register} />
        <UiStack.Screen name='Home' component={Home} />
        <UiStack.Screen name='Search' component={Search} />
        <UiStack.Screen name='Cart' component={Cart} />
        <UiStack.Screen name='OrderSuccess' component={OrderSuccess} />
        <UiStack.Screen name='Feedback' component={Feedback} />
        <UiStack.Screen name='OrderStatus' component={OrderStatus} />
        <UiStack.Screen name='Report' component={Report} />
        <UiStack.Screen name='CategoryItems' component={CategoryItems} />
        <UiStack.Screen name='CafeDensity' component={CafeDensity} />
        <UiStack.Screen name='Health' component={Health} />
    </UiStack.Navigator>
)

const Navigation = () => (
    <NavigationContainer>
        <UiNavigator />
    </NavigationContainer>
    )
    
  
    
    export default Navigation