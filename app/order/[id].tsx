import {
  ADD_ICON,
  DISCOUNT_ICON,
  GREY_NORMAL,
  PRIMARY,
  SUBTRACT_ICON,
} from "@/constants";
import { coffeeData } from "@/data/coffeeData";
import { styles } from "@/styles/_orderStyle";
import { common_styles } from "@/styles/_sharedStyle";
import { Ionicons, MaterialIcons } from "@expo/vector-icons";
import { useLocalSearchParams, useRouter } from "expo-router";
import { useState } from "react";
import { Image, ScrollView, Text, TouchableOpacity, View } from "react-native";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";

export default function OrderScreen() {
  const [tab, setTab] = useState("Delivery");
  const [qty, setQty] = useState(1);
  const router = useRouter();
  const { id } = useLocalSearchParams<{ id: string }>();
  const coffee = coffeeData.find((c) => c.id.toString() === id);

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
          {" "}
          {/* Header */}
          <View style={common_styles.header}>
            <TouchableOpacity onPress={() => router.back()}>
              <MaterialIcons
                name="arrow-back-ios"
                size={24}
                color={GREY_NORMAL}
              />
            </TouchableOpacity>
            <Text style={common_styles.headerTitle}>Order</Text>
            <View style={{ width: 24 }} />
          </View>{" "}
          <ScrollView
            style={{
              paddingHorizontal: 24,
            }}
          >
            {/* Toggle Tabs */}
            <View style={styles.toggleContainer}>
              {["Delivery", "Pick Up"].map((item) => (
                <TouchableOpacity
                  key={item}
                  style={[
                    styles.toggleBtn,
                    tab === item && styles.toggleActive,
                  ]}
                  onPress={() => setTab(item)}
                >
                  <Text
                    style={[
                      styles.toggleText,
                      tab === item && styles.toggleTextActive,
                    ]}
                  >
                    {item}
                  </Text>
                </TouchableOpacity>
              ))}
            </View>

            <ScrollView showsVerticalScrollIndicator={false}>
              {" "}
              {/* Address */}
              <Text style={styles.sectionTitle}>Delivery Address</Text>
              <Text style={styles.address}>
                123 Coffee Street, Harare, Zimbabwe
              </Text>
              <View style={styles.pillsRow}>
                <TouchableOpacity style={styles.pill}>
                  <MaterialIcons
                    name="edit-note"
                    size={12}
                    color={GREY_NORMAL}
                  />
                  <Text>Edit Address</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.pill}>
                  <MaterialIcons name="notes" size={12} color={GREY_NORMAL} />
                  <Text>Add Note</Text>
                </TouchableOpacity>
              </View>
              <View style={common_styles.divider} />
              {/* Coffee Item */}
              <View style={styles.itemRow}>
                <Image source={coffee.image} style={styles.coffeeImg} />
                <View style={{ flex: 1 }}>
                  <Text style={styles.coffeeName}>{coffee.name}</Text>
                  <Text style={styles.coffeeType}>{coffee.type}</Text>
                </View>
                <View style={styles.qtyRow}>
                  <TouchableOpacity
                    onPress={() => setQty(Math.max(1, qty - 1))}
                  >
                    <Image source={SUBTRACT_ICON} width={24} height={24} />
                  </TouchableOpacity>
                  <Text style={styles.qtyText}>{qty}</Text>
                  <TouchableOpacity onPress={() => setQty(qty + 1)}>
                    <Image source={ADD_ICON} width={24} height={24} />
                  </TouchableOpacity>
                </View>
              </View>
              <View style={styles.dividerThick} />
              {/* Discount */}
              <TouchableOpacity style={styles.discountRow}>
                <Image source={DISCOUNT_ICON} width={20} height={20} />
                <Text style={styles.discountText}>1 Discount Applied</Text>
                <Ionicons name="chevron-forward" size={20} color="black" />
              </TouchableOpacity>
              {/* Payment Summary */}
              <Text style={{ ...styles.sectionTitle, marginBottom: 16 }}>
                Payment Summary
              </Text>
              <View style={styles.summaryRow}>
                <Text>Price</Text>
                <Text
                  style={{
                    fontSize: 14,
                    lineHeight: 21,
                    fontFamily: "Sora_600SemiBold",
                  }}
                >
                  ${(qty * coffee.price).toFixed(2)}
                </Text>
              </View>
              <View style={styles.summaryRow}>
                <Text>Delivery Fee</Text>
                <View style={{ flexDirection: "row", alignItems: "center" }}>
                  <Text style={styles.strike}>$2.00 </Text>
                  <Text
                    style={{
                      fontSize: 14,
                      lineHeight: 21,
                      fontFamily: "Sora_600SemiBold",
                    }}
                  >
                    $1.00
                  </Text>
                </View>
              </View>
            </ScrollView>
          </ScrollView>
          {/* Bottom Section */}
          <View style={styles.bottomBar}>
            <View style={styles.walletRow}>
              <Ionicons name="wallet-outline" size={20} color={PRIMARY} />
              <View style={{ flex: 1 }}>
                <Text
                  style={{
                    flex: 1,
                    fontSize: 14,
                    lineHeight: 16.8,
                    fontFamily: "Sora_600SemiBold",
                  }}
                >
                  Cash / Wallet
                </Text>
                <Text
                  style={{
                    color: PRIMARY,
                    fontSize: 12,
                    lineHeight: 18,
                    fontFamily: "Sora_600SemiBold",
                  }}
                >
                  $ {(coffee.price * qty + 1).toFixed(2)}
                </Text>
              </View>
              <Ionicons name="chevron-down" size={20} />
            </View>
            <TouchableOpacity style={styles.orderBtn}>
              <Text style={styles.orderText}>Order</Text>
            </TouchableOpacity>
          </View>
        </View>
      </SafeAreaView>
    </SafeAreaProvider>
  );
}
