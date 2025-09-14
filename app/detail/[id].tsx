import {
  COFFEE_SEED_ICON,
  DELIVERY_ICON,
  GREY_NORMAL,
  MILK_ICON,
} from "@/constants";
import { coffeeData } from "@/data/coffeeData";
import { styles } from "@/styles/_detailStyle";
import { common_styles } from "@/styles/_sharedStyle";
import {
  Sora_300Light,
  Sora_400Regular,
  Sora_600SemiBold,
  useFonts,
} from "@expo-google-fonts/sora";
import { Ionicons, MaterialIcons } from "@expo/vector-icons";
import { useLocalSearchParams, useRouter } from "expo-router";
import { useState } from "react";
import { Image, ScrollView, Text, TouchableOpacity, View } from "react-native";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";

export default function CoffeeDetail() {
  const router = useRouter();
  const { id } = useLocalSearchParams<{ id: string }>();
  const coffee = coffeeData.find((c) => c.id.toString() === id);
  const [expanded, setExpanded] = useState(false);
  const [selectedSize, setSelectedSize] = useState("M");
  let [fontLoaded] = useFonts({
    Sora_300Light,
    Sora_400Regular,
    Sora_600SemiBold,
  });
  if (!fontLoaded) {
    return null;
  }

  if (!coffee) {
    return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <Text>Coffee not found ☕</Text>
      </View>
    );
  }

  return (
    <SafeAreaProvider>
      <SafeAreaView style={{ flex: 1 }}>
        <View style={common_styles.container}>
          {/* Header */}
          <View style={styles.header}>
            <TouchableOpacity onPress={() => router.back()}>
              <MaterialIcons
                name="arrow-back-ios"
                size={24}
                color={GREY_NORMAL}
              />
            </TouchableOpacity>
            <Text style={styles.headerTitle}>Detail</Text>
            <TouchableOpacity>
              <Ionicons name="heart-outline" size={24} color={GREY_NORMAL} />
            </TouchableOpacity>
          </View>

          {/* */}
          <ScrollView showsVerticalScrollIndicator={false}>
            <Image
              source={coffee.image}
              style={styles.image}
              resizeMode="cover"
            />
            <View style={styles.info}>
              <View style={styles.infoHeader}>
                <View>
                  <Text style={styles.name}>{coffee.name}</Text>
                  <Text style={styles.type}>{coffee.type}</Text>
                </View>
                <View style={styles.iconRow}>
                  <View style={styles.iconContainer}>
                    <Image
                      source={DELIVERY_ICON}
                      style={{ width: 32, height: 32 }}
                    />
                  </View>
                  <View style={styles.iconContainer}>
                    <Image
                      source={COFFEE_SEED_ICON}
                      style={{ width: 24, height: 24 }}
                    />
                  </View>
                  <View style={styles.iconContainer}>
                    <Image
                      source={MILK_ICON}
                      style={{ width: 24, height: 24 }}
                    />
                  </View>
                </View>
              </View>
              <View style={styles.ratingRow}>
                <Ionicons name="star" size={20} color="#FBBE21" />
                <Text style={styles.ratingText}>{coffee.rating} </Text>
                <Text style={styles.ratingPeople}>(120)</Text>
              </View>
              <View style={styles.line} />
              <Text style={styles.label}>Description</Text>
              <Text
                style={styles.description}
                numberOfLines={expanded ? undefined : 3}
              >
                {coffee.description}
              </Text>
              <TouchableOpacity onPress={() => setExpanded(!expanded)}>
                <Text style={styles.readMore}>
                  {expanded ? "Read Less" : "Read More"}
                </Text>
              </TouchableOpacity>

              <Text style={styles.label}>Size</Text>
              <View style={styles.sizeRow}>
                {["S", "M", "L"].map((size) => (
                  <TouchableOpacity
                    key={size}
                    style={[
                      styles.sizeOption,
                      selectedSize === size && styles.sizeSelected,
                    ]}
                    onPress={() => setSelectedSize(size)}
                  >
                    <Text
                      style={[
                        styles.sizeText,
                        selectedSize === size && styles.sizeTextSelected,
                      ]}
                    >
                      {size}
                    </Text>
                  </TouchableOpacity>
                ))}
              </View>
            </View>
          </ScrollView>
          <View style={styles.bottomBar}>
            <View>
              <Text style={styles.priceLabel}>Price</Text>
              <Text style={styles.price}>${coffee.price.toFixed(2)}</Text>
            </View>
            <TouchableOpacity style={styles.buyButton}>
              <Text style={styles.buyText}>Buy Now</Text>
            </TouchableOpacity>
          </View>
        </View>
      </SafeAreaView>
    </SafeAreaProvider>
  );
}
