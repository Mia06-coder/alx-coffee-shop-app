import { PRIMARY } from "@/constants";
import { Coffee } from "@/data/coffeeData";
import { styles } from "@/styles/_homeStyle";
import { Ionicons, MaterialIcons } from "@expo/vector-icons";
import { router } from "expo-router";
import {
  Image,
  ListRenderItemInfo,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

export const renderCoffeeCard = ({ item }: ListRenderItemInfo<Coffee>) => {
  return (
    <TouchableOpacity
      style={styles.coffeeCard}
      onPress={() =>
        router.push({
          pathname: "/detail/[id]",
          params: { id: item.id.toString() },
        })
      }
    >
      <Image
        source={item.image}
        resizeMode="cover"
        style={styles.coffeeImage}
      />
      <View style={styles.ratingBadge}>
        <Ionicons name="star" size={12} color={"#FBBE21"} />
        <Text style={styles.ratingText}>{item.rating}</Text>
      </View>
      <Text style={styles.coffeeName}>{item.name}</Text>
      <Text style={styles.coffeeType}>{item.type}</Text>
      <View style={styles.cardFooter}>
        <Text style={styles.price}>${item.price.toFixed(2)}</Text>
        <MaterialIcons name="add-box" size={32} color={PRIMARY} />
      </View>
    </TouchableOpacity>
  );
};
