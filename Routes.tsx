import React, { FC } from 'react';
import { createStackNavigator } from '@react-navigation/stack';

const { Navigator, Screen } = createStackNavigator();

import { Home, Settings } from 'src/screens';

import { theme } from 'src/theme';

const ScreenOptions = () => ({
  cardStyle: { backgroundColor: theme.colors.secondary, paddingHorizontal: 16 },
  headerShown: false
});

const Routes: FC = () => (
  <Navigator screenOptions={ScreenOptions}>
    <Screen name='Home' component={Home} />
    <Screen name='Settings' component={Settings} />
  </Navigator>
);

export default Routes;
