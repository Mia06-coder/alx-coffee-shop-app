import BottomNav from "@/components/bottomNav";
import { renderCoffeeCard } from "@/components/coffeeCard";
import {
  FILTER_ICON,
  GREY_LIGHTER,
  handleNav,
  PROMO_IMAGE,
  SURFACE_WHITE,
} from "@/constants";
import { coffeeData } from "@/data/coffeeData";
import { styles } from "@/styles/_homeStyle";
import { common_styles } from "@/styles/_sharedStyle";
import {
  Sora_400Regular,
  Sora_600SemiBold,
  useFonts,
} from "@expo-google-fonts/sora";
import { Ionicons } from "@expo/vector-icons";
import { useState } from "react";
import {
  FlatList,
  Image,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";

export default function HomeScreen() {
  const [activeTab, setActiveTab] = useState("All Coffee");
  const filteredData =
    activeTab === "All Coffee"
      ? coffeeData
      : coffeeData.filter((item) => item.type === activeTab);
  const coffeeTypes = [
    "All Coffee",
    ...new Set(coffeeData.map((item) => item.type)),
  ];

  let [fontLoaded] = useFonts({ Sora_400Regular, Sora_600SemiBold });
  if (!fontLoaded) {
    return null;
  }

  return (
    <SafeAreaProvider>
      <SafeAreaView style={common_styles.container}>
        <View style={styles.topSection}>
          {/* Location */}
          <Text style={styles.label}>Location</Text>
          <View style={styles.dropdownContainer}>
            <TextInput
              style={styles.dropdown}
              placeholder="Select city"
              placeholderTextColor={GREY_LIGHTER}
              value="Harare"
            />
            <Ionicons name="chevron-down" size={20} color={GREY_LIGHTER} />
          </View>

          {/* Search and Filter Row */}
          <View style={styles.searchRow}>
            <View style={styles.searchBox}>
              <Ionicons
                name="search-outline"
                size={20}
                color={SURFACE_WHITE}
                style={{ marginRight: 6 }}
              />
              <TextInput
                placeholder="Search Coffee"
                placeholderTextColor={GREY_LIGHTER}
                style={{ flex: 1, color: SURFACE_WHITE }}
              />
            </View>
            <TouchableOpacity style={styles.filterButton}>
              <Image
                source={FILTER_ICON}
                tintColor={SURFACE_WHITE}
                style={{ width: 20, height: 20 }}
              />
            </TouchableOpacity>
          </View>
        </View>

        {/* Promo Card */}
        <View style={styles.promoCard}>
          <Image
            source={PROMO_IMAGE}
            resizeMode="cover"
            style={styles.promoImage}
          />
          <View style={styles.promoTag}>
            <Text style={styles.promoText}>Promo</Text>
          </View>
          <Text style={styles.promoDescription}>Buy one get one FREE</Text>
        </View>

        {/* Coffee List */}
        <View style={styles.bottomSection}>
          <View style={styles.tabs}>
            {coffeeTypes.map((tab) => (
              <TouchableOpacity key={tab} onPress={() => setActiveTab(tab)}>
                <Text
                  style={
                    activeTab === tab ? styles.activeTab : styles.inactiveTab
                  }
                >
                  {tab}
                </Text>
              </TouchableOpacity>
            ))}
          </View>
          <FlatList
            data={filteredData}
            renderItem={renderCoffeeCard}
            keyExtractor={(item) => item.id}
            numColumns={2}
            contentContainerStyle={{ padding: 12 }}
          />
        </View>

        <BottomNav onNavigate={handleNav} />
      </SafeAreaView>
    </SafeAreaProvider>
  );
}
