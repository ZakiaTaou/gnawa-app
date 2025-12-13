import { router } from "expo-router";
import { View, Text, TouchableOpacity } from "react-native";
export default function ArtistScreen() {
  return (
    <View style={{flex:1, justifyContent:"center",alignItems:"center"}}>
      <TouchableOpacity onPress={() => router.push(`/artist/[id]`)}>
        <Text>Artists</Text>
      </TouchableOpacity>
    </View>
  );
}
