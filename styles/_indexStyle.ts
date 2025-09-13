import { Dimensions, StyleSheet } from "react-native";

const { height } = Dimensions.get("window");

// Colors
// Primary
const primary = "#C67C4E";
const primary_dark = "#A65E36";
const primary_light = "#E89B6A";

// Greys
const grey_normal = "#242424";
const grey_light = "#797979";
const grey_lighter = "#A2A2A2";
const grey_dark = "#111111";

// Surfaces
const surface_white = "#FFFFFF";
const surface_light = "#F9F9F9";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: surface_light,
    height: height,
  },
  hero: { height: height, justifyContent: "flex-end" },
  content: {
    paddingHorizontal: 24,
    paddingBottom: 48,
    paddingTop: 24,
    alignItems: "center",
    backgroundImage: "linear-gradient(rgba(5,5,5,0) 0%, rgba(5, 5, 5, 1) 24%)",
    width: "100%",
  },
  contentText: {
    alignItems: "center",
    gap: 8,
  },
  title: {
    fontSize: 32,
    color: surface_white,
    fontFamily: "Sora_600SemiBold",
    textAlign: "center",
    marginBottom: 12,
    letterSpacing: 0.5,
  },
  subtitle: {
    fontSize: 14,
    color: grey_lighter,
    marginBottom: 32,
    textAlign: "center",
  },
  button: {
    backgroundColor: primary,
    paddingVertical: 16,
    paddingHorizontal: 20,
    borderRadius: 16,
    width: 237,
    alignItems: "center",
  },
  buttonText: {
    color: surface_white,
    fontSize: 16,
    fontFamily: "Sora_600SemiBold",
  },
});
