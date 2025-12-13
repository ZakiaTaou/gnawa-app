import { router } from "expo-router";
import { View, Text, TouchableOpacity } from "react-native";
export default function BookingScreen() {
  return (
    <View style={{flex:1, justifyContent:"center",alignItems:"center"}}>
      <TouchableOpacity onPress={() => router.push(`/myBookings`)}>
        <Text>Booking</Text>
      </TouchableOpacity>
    </View>
  );
}
