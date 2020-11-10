import 'react-native-gesture-handler';
import React, {useContext} from 'react';
import { NavigationContainer } from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
//import Icon from 'react-native-vector-icons/MaterialIcons';
import Icon from 'react-native-vector-icons/Ionicons';
import {MyContext} from '~/Context/Me';

import Login from './Login';
import SignUp from './SignUp';
import FindPassword from './FindPassword';

import FriendsList from './FriendsList';
import ChatRoomList from './ChatRoomList';
import Setting from './Setting';

import InsideRoom from './InsideRoom';
import DevInfo from './DevInfo';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

const LoginStackNavi = () => {
    return (
      <Stack.Navigator
        screenOptions={{
          headerStyle: {
            backgroundColor: '#87C598',
            height: 50,
          },
          headerTintColor: '#4B955F',
          headerTitle: '',
        }}>
  
        <Stack.Screen
          name="Login"
          component={Login}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="SignUp"
          component={SignUp}
          options={{headerBackTitleVisible: false}}
        />
        <Stack.Screen name="FindPassword" component={FindPassword} />
  
      </Stack.Navigator>
    );
  };

  const SettingStackNavi = () => {
    return (
      <Stack.Navigator
        screenOptions={{
          headerStyle: {
            backgroundColor: '#87C598',
            height: 60,
          },
          headerTintColor: '#4B955F',
          headerTitle: '',
        }}>

        <Stack.Screen
          name="Setting"
          component={Setting}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="DevInfo"
          component={DevInfo}
          options={{
            headerShown: true,
          }}
        />
        <Stack.Screen
          name="Login"
          component={Login}
          options={{headerShown: false}}
        />
        
      </Stack.Navigator>
    );
  };

  const ChatStackNavi = () => {
    return (
      <Stack.Navigator
        screenOptions={{
          headerStyle: {
            backgroundColor: '#FFFFFF',
            height: 60,
          },
          headerTintColor: 'black',
          headerTitle: 'OHMYGIRL',
          headerTitleAlign: 'left',
          headerTitleStyle: {
            fontWeight: 'bold',
            fontSize: 16
          },
        }}>

        <Stack.Screen
          name="ChatRoomList"
          component={ChatRoomList}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="InsideRoom"
          component={InsideRoom}
          options={{
            headerShown: true,
          }}
        />

      </Stack.Navigator>
    );
  };


  const ChatStackNavi2 = () => {
    return (
      <Stack.Navigator
        screenOptions={{
          headerStyle: {
            backgroundColor: '#87C598',
            height: 60,
          },
          headerTintColor: '#4B955F',
          headerTitle: '',
        }}>

        <Stack.Screen
          name="FriendsList"
          component={FriendsList}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="InsideRoom"
          component={InsideRoom}
          options={{
            headerShown: true,
          }}
        />

      </Stack.Navigator>
    );
  };
  const TabNavi = () => {
    return (
      <Tab.Navigator>
        <Tab.Screen
          name="FriendsList"
          component={ChatStackNavi2}
          options={{
            tabBarLabel: 'Friends',
            tabBarIcon: ({color}) => <Icon name="people" color={color} size={26} />,
          }}
        />

        <Tab.Screen
          name="ChatRoomList"
          component={ChatStackNavi}
          options={{
            tabBarLabel: 'Chattings',
            tabBarIcon: ({color}) => (
              <Icon name="chat" color={color} size={26} />
            ),
          }}
        />

        <Tab.Screen
          name="Setting"
          component={SettingStackNavi}
          options={{
            tabBarLabel: 'Setting',
            tabBarIcon: ({color}) => (
              <Icon name="settings" color={color} size={26} />
            ),
          }}
        />
      </Tab.Navigator>
    );
  };

  const BigStackNavi = () => {
    return(
      <Stack.Navigator>
  
        <Stack.Screen
            name="FriendsList"
            component={TabNavi}
            options={{
              headerShown: false,
            }}
          />
  
        <Stack.Screen
            name="ChatRoomList"
            component={ChatStackNavi}
            options={{
              headerShown: false,
              
            }}
          />
  
        <Stack.Screen
            name="Setting"
            component={SettingStackNavi}
            options={{
              headerShown: false,
            }}
          />
      </Stack.Navigator>
    )
  }



  export default () => {
    const {userInfo} = useContext<IMyContext>(MyContext);
  
    return (
      <NavigationContainer>
        {userInfo ? <TabNavi/> : <LoginStackNavi/>}
      </NavigationContainer>
    );
  };
  //{userInfo ? <TabNavi/> : <LoginStackNavi/>}
  //{userInfo ? <LoginStackNavi/> : <TabNavi/>}