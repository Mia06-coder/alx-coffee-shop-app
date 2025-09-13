import {
  GREY_LIGHTER,
  PRIMARY,
  SHADOW_CONTAINER,
  SURFACE_WHITE,
} from "@/constants";
import { Dimensions, StyleSheet } from "react-native";
const { height } = Dimensions.get("window");

export const styles = StyleSheet.create({
  hero: { height: height, justifyContent: "flex-end" },
  content: {
    paddingHorizontal: 24,
    paddingBottom: 48,
    paddingTop: 24,
    alignItems: "center",
    backgroundImage: SHADOW_CONTAINER,
    width: "100%",
  },
  contentText: {
    alignItems: "center",
    gap: 8,
  },
  title: {
    fontSize: 32,
    color: SURFACE_WHITE,
    fontFamily: "Sora_600SemiBold",
    textAlign: "center",
    marginBottom: 12,
    letterSpacing: 0.5,
  },
  subtitle: {
    fontSize: 14,
    color: GREY_LIGHTER,
    marginBottom: 32,
    textAlign: "center",
  },
  button: {
    backgroundColor: PRIMARY,
    paddingVertical: 16,
    paddingHorizontal: 20,
    borderRadius: 16,
    width: 237,
    alignItems: "center",
  },
  buttonText: {
    color: SURFACE_WHITE,
    fontSize: 16,
    fontFamily: "Sora_600SemiBold",
  },
});
