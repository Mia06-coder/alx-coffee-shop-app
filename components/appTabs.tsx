import HomeScreen from "@/app/home";
import { PRIMARY } from "@/constants";
import { Ionicons } from "@expo/vector-icons";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import { View } from "react-native";

const Tab = createBottomTabNavigator();

const getTabIcon = (routeName: string, focused: boolean) => {
  switch (routeName) {
    case "Home":
      return focused ? "home" : "home-outline";
    case "Favorites":
      return focused ? "heart" : "heart-outline";
    case "Cart":
      return focused ? "bag" : "bag-outline";
    case "Notifications":
      return focused ? "notifications" : "notifications-outline";
    default:
      return "circle";
  }
};

export default function AppTabs() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          headerShown: false,
          tabBarShowLabel: false,
          tabBarStyle: {
            height: 60,
            backgroundColor: "#fff",
            borderTopWidth: 0,
            boxShadow: "0px,-2px,10px,rgba(0,0,0,0.05)",
            borderTopRightRadius: 12,
            borderTopLeftRadius: 12,
          },
          tabBarIcon: ({ focused }) => {
            const iconName = getTabIcon(route.name, focused);
            return (
              <View style={{ alignItems: "center", justifyContent: "center" }}>
                <Ionicons
                  name={iconName as any}
                  size={26}
                  color={focused ? PRIMARY : "#999"}
                />
                {focused && (
                  <View
                    style={{
                      width: 20,
                      height: 2,
                      backgroundColor: PRIMARY,
                      borderRadius: 1,
                      marginTop: 4,
                    }}
                  />
                )}
              </View>
            );
          },
        })}
      >
        <Tab.Screen name="Home" component={HomeScreen} />
        <Tab.Screen name="Favorites" component={View} />
        <Tab.Screen name="Cart" component={View} />
        <Tab.Screen name="Notifications" component={View} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
