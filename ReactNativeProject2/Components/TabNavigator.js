import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import PostsView from '../Screens/PostsScreen';
import CreatePostsView from '../Screens/CreatePostsScreen';
import ProfileView from '../Screens/ProfileScreen';
import Feather from 'react-native-vector-icons/Feather';
import { tabIconsColor, orangeAccent, whiteContrastColor } from './Constants';

const Tab = createBottomTabNavigator();

export default function MyTabs() {
    return (
            <Tab.Navigator screenOptions={{
                tabBarStyle: { position: 'absolute', bottom: 0, height: 60, paddingBottom: 9, paddingTop: 9, paddingLeft: "20%", paddingRight: "20%" },
                tabBarShowLabel: false,
                headerShown: false,
        }}>
                <Tab.Screen name="Posts" component={PostsView} options={{
                    tabBarIcon: ({ color, size }) => (
                    <Feather name="grid" color={tabIconsColor} size={24} />
                    ),
                    tabBarIconStyle: {marginLeft: 12},
                    tabBarItemStyle: {alignItems: "flex-start"},    
            }} />
                <Tab.Screen name="CreatePosts" component={CreatePostsView} style={{width: 40  }} options={{ 
                    tabBarIcon: ({ color, size }) => (
                        <Feather name="plus" color={whiteContrastColor} size={24} />
                    ),
                    tabBarIconStyle: {},
                    tabBarItemStyle: {backgroundColor: orangeAccent, width: 70, hight: 40, borderRadius: 20,},
            }}/>
                <Tab.Screen name="Profile" component={ProfileView} options={{
                    tabBarIcon: ({ color, size }) => (
                    <Feather name="user" color={tabIconsColor} size={24} />
                    ),
                    tabBarIconStyle: {marginRight: 12},
                    tabBarItemStyle: {alignItems: "flex-end"},  
            }} />
            
            </Tab.Navigator>
  );
};