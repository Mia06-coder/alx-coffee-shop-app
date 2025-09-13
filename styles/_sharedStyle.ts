import { SURFACE_LIGHT } from "@/constants";
import { Dimensions, StyleSheet } from "react-native";

const { height } = Dimensions.get("window");

export const common_styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: SURFACE_LIGHT,
    height: height,
    overflow: "hidden",
  },
});
