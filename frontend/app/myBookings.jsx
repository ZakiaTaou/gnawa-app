import { router } from "expo-router";
import { View, Text, TouchableOpacity } from "react-native";
export default function MyBookingsScreen() {
  return (
    <View style={{flex:1, justifyContent:"center",alignItems:"center"}}>
      <TouchableOpacity onPress={() => router.push(`/booking`)}>
        <Text>My Bookings</Text>
      </TouchableOpacity>
    </View>
  );
}
