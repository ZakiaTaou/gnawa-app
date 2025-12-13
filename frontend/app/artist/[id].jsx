import { router } from "expo-router";
import { View, Text, TouchableOpacity } from "react-native";
export default function ArtistDetailsScreen() {
  return (
    <View style={{flex:1, justifyContent:"center",alignItems:"center"}}>
      <TouchableOpacity onPress={() => router.push(`/myBookings`)}>
        <Text>Artit Details</Text>
      </TouchableOpacity>
    </View>
  );
}