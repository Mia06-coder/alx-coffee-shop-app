import { GREY_LIGHTER, PRIMARY } from "@/constants";
import { styles } from "@/styles/_bottomNavStyle";
import { Ionicons } from "@expo/vector-icons";
import { useState } from "react";
import { TouchableOpacity, View } from "react-native";

const BottomNav = ({
  onNavigate,
}: {
  onNavigate: (screen: string) => void;
}) => {
  const [active, setActive] = useState("home");

  const tabs = [
    { name: "home", iconOutline: "home-outline", iconSolid: "home" },
    { name: "favorites", iconOutline: "heart-outline", iconSolid: "heart" },
    { name: "cart", iconOutline: "bag-outline", iconSolid: "bag" },
    {
      name: "notifications",
      iconOutline: "notifications-outline",
      iconSolid: "notifications",
    },
  ];
  return (
    <View style={styles.container}>
      {tabs.map((tab) => {
        const isActive = active === tab.name;
        return (
          <TouchableOpacity
            key={tab.name}
            onPress={() => {
              setActive(tab.name);
              onNavigate(tab.name);
            }}
            style={styles.tabButton}
          >
            <Ionicons
              name={
                isActive ? (tab.iconSolid as any) : (tab.iconOutline as any)
              }
              size={28}
              color={isActive ? PRIMARY : GREY_LIGHTER}
            />
            <View
              style={[
                styles.underline,
                { backgroundColor: isActive ? PRIMARY : "transparent" },
              ]}
            />
          </TouchableOpacity>
        );
      })}
    </View>
  );
};

export default BottomNav;
