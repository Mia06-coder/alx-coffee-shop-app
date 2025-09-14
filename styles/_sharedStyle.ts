import { GREY_LIGHT, GREY_NORMAL, SURFACE_LIGHT } from "@/constants";
import { Dimensions, StyleSheet } from "react-native";

const { height } = Dimensions.get("window");

export const common_styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: SURFACE_LIGHT,
    height: height,
    overflow: "hidden",
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: 24,
    padding: 24,
    color: GREY_NORMAL,
  },
  headerTitle: { fontFamily: "Sora_600SemiBold", lineHeight: 19.2 },
  divider: {
    borderBottomWidth: 1,
    borderBottomColor: GREY_LIGHT,
    marginBottom: 12,
    width: "90%",
    alignSelf: "center",
  },
});
