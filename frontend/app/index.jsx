import { router } from "expo-router";
import { Image, StyleSheet, Text, TouchableOpacity } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
export default function HomeScreen() {
  return (
    <SafeAreaView
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor:"#F8F5F6"
      }}
    >
      <Text style={styles.title}>ShareBite</Text>
      <Text style={styles.subTitle}>Share more, waste less</Text>

    </SafeAreaView>
  );
}
const styles = StyleSheet.create({
  title: {
    color: "#B90C40",
    fontSize: 40,
    fontWeight: "700",
    marginBottom: 3,
  },
  subTitle: {
    fontSize: 15,
    marginBottom: 25,
    fontWeight: "500",
  }
});
