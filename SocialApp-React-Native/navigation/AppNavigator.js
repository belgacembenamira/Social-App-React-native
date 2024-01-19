/**
    * @description      : 
    * @author           : belgacem
    * @group            : 
    * @created          : 19/01/2024 - 18:57:54
    * 
    * MODIFICATION LOG
    * - Version         : 1.0.0
    * - Date            : 19/01/2024
    * - Author          : belgacem
    * - Modification    : 
**/
import React from 'react';
import { BottomNavigator, AuthNavigator } from './SocialAppNavigator';
import { useSelector } from 'react-redux';
import { NavigationContainer } from '@react-navigation/native';

import StartupScreen from '../screens/StartupScreen';

const AppNavigator = props => {
    const isAuth = useSelector(state => !!state.auth.token);
    const didTryAutoLogin = useSelector(state => state.auth.didTryAutoLogin);


    return(
        <NavigationContainer>
            { isAuth && <BottomNavigator /> }
            { !isAuth && didTryAutoLogin && <AuthNavigator />}
            { !isAuth && !didTryAutoLogin && <StartupScreen />}
        </NavigationContainer>
    );
}

export default AppNavigator;