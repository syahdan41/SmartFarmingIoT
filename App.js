import React from 'react';
import { NavigationContainer } from '@react-navigation/native';

import { MainStack} from './StackNavigator';

export default function App(){
  return(
    <NavigationContainer>
      <MainStack/>
    </NavigationContainer>

  )
}

