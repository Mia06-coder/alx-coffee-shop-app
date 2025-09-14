import {
  COURIER_IMAGE,
  DELIVERY_ICON,
  GREY_LIGHT,
  GREY_LIGHTER,
  GREY_NORMAL,
  MAP_IMAGE,
} from "@/constants";
import { common_styles } from "@/styles/_sharedStyle";
import { Ionicons, MaterialIcons } from "@expo/vector-icons";
import { router } from "expo-router";
import { useState } from "react";
import {
  Animated,
  Easing,
  Image,
  ImageBackground,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";

export default function DeliveryScreen() {
  const [expanded, setExpanded] = useState(false);
  const animatedHeight = new Animated.Value(250);

  const toggleSheet = () => {
    Animated.timing(animatedHeight, {
      toValue: expanded ? 250 : 450,
      duration: 300,
      easing: Easing.ease,
      useNativeDriver: false,
    }).start();
    setExpanded(!expanded);
  };

  return (
    <SafeAreaProvider>
      <SafeAreaView style={{ flex: 1 }}>
        <View style={common_styles.container}>
          {/* Map Placeholder */}
          <ImageBackground source={MAP_IMAGE} style={{ flex: 1 }} />
          <View
            style={{
              ...common_styles.header,
              position: "absolute",
              top: 60,
              left: 0,
              right: 0,
            }}
          >
            <TouchableOpacity
              onPress={() => router.back()}
              style={{
                width: 44,
                height: 44,
                backgroundColor: GREY_LIGHT,
                alignItems: "center",
                justifyContent: "center",
                borderRadius: 12,
              }}
            >
              <MaterialIcons
                name="arrow-back-ios"
                size={24}
                color={GREY_NORMAL}
              />
            </TouchableOpacity>
            <View style={{ width: 24 }} />
            <TouchableOpacity
              onPress={() => router.back()}
              style={{
                width: 44,
                height: 44,
                backgroundColor: GREY_LIGHT,
                alignItems: "center",
                justifyContent: "center",
                borderRadius: 12,
              }}
            >
              <Ionicons name="compass-outline" size={24} color={GREY_NORMAL} />
            </TouchableOpacity>
          </View>{" "}
          {/* Bottom Sheet */}
          <Animated.View
            style={{
              backgroundColor: "#fff",
              borderTopLeftRadius: 24,
              borderTopRightRadius: 24,
              marginTop: -20,
              paddingTop: 16,
              paddingHorizontal: 24,
              paddingBlock: 48,
              shadowColor: "#000",
              shadowOpacity: 0.1,
              shadowOffset: { width: 0, height: -2 },
              shadowRadius: 4,
              elevation: 4,
            }}
          >
            {/* Toggle Bar */}
            <TouchableOpacity
              style={{
                alignSelf: "center",
                width: 45,
                height: 5,
                backgroundColor: GREY_LIGHT,
                borderRadius: 2,
                marginBottom: 12,
              }}
              onPress={toggleSheet}
            />

            {/* ETA + Address */}
            <Text
              style={{
                fontSize: 16,
                fontWeight: "600",
                textAlign: "center",
                lineHeight: 24,
              }}
            >
              10 minutes left
            </Text>
            <View
              style={{
                flexDirection: "row",
                justifyContent: "center",
                alignItems: "center",
                marginBottom: 32,
              }}
            >
              <Text
                style={{
                  fontSize: 12,
                  color: GREY_LIGHTER,
                }}
              >
                Delivery to
              </Text>
              <Text
                style={{
                  fontSize: 12,
                  fontFamily: "Sora_600SEmiBold",
                }}
              >
                {" "}
                Mia Mudzingwa
              </Text>
            </View>

            {/* Progress Indicator */}
            <View style={{ flexDirection: "row", marginBottom: 20 }}>
              {[1, 2, 3, 4].map((i) => (
                <View
                  key={i}
                  style={{
                    flex: 1,
                    height: 4,
                    marginHorizontal: 3,
                    borderRadius: 3,
                    backgroundColor: i <= 3 ? "#36C07E" : GREY_LIGHT, // 3/4 filled green
                  }}
                />
              ))}
            </View>

            {/* Delivery Status */}
            <View
              style={{
                flex: 1,
                alignItems: "center",
                marginBottom: 20,
                borderWidth: 1,
                borderColor: GREY_LIGHT,
                paddingVertical: 8,
                paddingHorizontal: 16,
                borderRadius: 12,
                flexDirection: "row",
                gap: 16,
              }}
            >
              <View
                style={{
                  width: 56,
                  height: 56,
                  borderWidth: 1,
                  borderColor: GREY_LIGHT,
                  borderRadius: 12,
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <Image source={DELIVERY_ICON} width={44} height={44} />
              </View>
              <View style={{ flex: 1, gap: 8 }}>
                <Text
                  style={{ fontSize: 14, fontWeight: "600", lineHeight: 21 }}
                >
                  Delivered your order
                </Text>
                <Text
                  style={{
                    fontSize: 12,
                    fontFamily: "Sora_300Light",
                    color: GREY_LIGHTER,
                  }}
                >
                  We will deliver your goods to you in the shortest possible
                  time
                </Text>
              </View>
            </View>

            {/* Courier Info */}
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "space-between",
                paddingVertical: 12,
              }}
            >
              <View
                style={{ flexDirection: "row", alignItems: "center", gap: 16 }}
              >
                <Image
                  source={COURIER_IMAGE}
                  style={{
                    width: 56,
                    height: 56,
                    borderRadius: 14,
                    marginRight: 12,
                  }}
                />
                <View style={{ gap: 4 }}>
                  <Text
                    style={{ fontSize: 14, fontWeight: "600", lineHeight: 21 }}
                  >
                    Brooklyn Simmons
                  </Text>
                  <Text
                    style={{
                      fontSize: 12,
                      color: GREY_LIGHTER,
                      lineHeight: 14.4,
                    }}
                  >
                    Personal Courier
                  </Text>
                </View>
              </View>
              <TouchableOpacity
                style={{
                  width: 44,
                  height: 44,
                  borderWidth: 1,
                  borderColor: GREY_LIGHT,
                  borderRadius: 12,
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <MaterialIcons name="phone-in-talk" size={24} />
              </TouchableOpacity>
            </View>
          </Animated.View>
        </View>
      </SafeAreaView>
    </SafeAreaProvider>
  );
}
