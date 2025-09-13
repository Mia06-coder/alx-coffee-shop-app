import { HERO_IMAGE } from "@/constants";
import { styles } from "@/styles/_indexStyle";
import {
  Sora_400Regular,
  Sora_600SemiBold,
  useFonts,
} from "@expo-google-fonts/sora";
import { ImageBackground } from "expo-image";
import { Text, TouchableOpacity, View } from "react-native";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";

export default function Index() {
  let [fontLoaded] = useFonts({ Sora_400Regular, Sora_600SemiBold }); // useFonts({ Poppins: require("./assets/fonts/Poppins-Regular.ttf") });
  if (!fontLoaded) {
    return null;
  }
  return (
    <SafeAreaProvider>
      <SafeAreaView style={{ flex: 1 }}>
        <View style={styles.container}>
          <ImageBackground source={HERO_IMAGE} style={styles.hero}>
            <View style={styles.content}>
              <View style={styles.contentText}>
                <Text style={styles.title}>
                  Fall in Love with Coffee in Blissful Delight!
                </Text>
                <Text style={styles.subtitle}>
                  Welcome to our cozy coffee corner, where every cup is a
                  delightful for you.
                </Text>
              </View>
              <TouchableOpacity style={styles.button}>
                <Text style={styles.buttonText}>Get Started</Text>
              </TouchableOpacity>
            </View>
          </ImageBackground>
        </View>
      </SafeAreaView>
    </SafeAreaProvider>
  );
}
