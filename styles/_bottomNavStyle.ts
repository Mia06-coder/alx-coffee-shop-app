import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    height: 100,
    backgroundColor: "#fff",
    borderTopWidth: 1,
    borderTopColor: "#e0e0e0",
    borderTopRightRadius: 24,
    borderTopLeftRadius: 24,
    boxShadow: "0px,-2px,10px,rgba(0,0,0,0.1)",
  },
  tabButton: {
    alignItems: "center",
    justifyContent: "center",
  },
  underline: {
    marginTop: 4,
    height: 5,
    width: 10,
    borderRadius: 18,
  },
});
