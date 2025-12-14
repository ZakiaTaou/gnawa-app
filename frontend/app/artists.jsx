import { View, Text, StyleSheet, FlatList } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { router, useRouter } from "expo-router";
import { COLORS } from "../constants/colors";
import ArtistCard from "../components/ArtistCard";
import { useArtists } from "../hooks/useArtists";
import QueryState from "../components/QueryState";

export default function ArtistsScreen() {
  const { data, isLoading, error } = useArtists();
  // console.log(data);
  const artists = data?.data;
  // const artists = [
  //   {
  //     id: 1,
  //     name: "Hamid El Kasri",
  //     genre: "Gnawa Traditionnel",
  //     performance_time: "20:00 - 21:00",
  //     photo:
  //       "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSZFfUTDnuVm4QIXVTLuzLafTHQFQX0kXPb9g&s",
  //   },
  //   {
  //     id: 2,
  //     name: "Hassan Hakmoun",
  //     genre: "Gnawa Fusion",
  //     performance_time: "21:15 - 22:15",
  //     photo:
  //       "https://i.pinimg.com/736x/31/b3/22/31b322404f18c185d9907561817415b9.jpg",
  //   },
  //   {
  //     id: 3,
  //     name: "Maalem Hassan Boussou",
  //     genre: "Gnawa Spirituel",
  //     performance_time: "22:30 - 23:30",
  //     photo:
  //       "https://i.pinimg.com/1200x/5a/73/be/5a73be8c2b05c8a386cb98cf2e93320d.jpg",
  //   },
  // ];

  if (isLoading || error) {
  return (
    <QueryState
      isLoading={isLoading}
      error={error}
      loadingText="Chargement de l'événement..."
    />
  );
}
  const renderItem = ({ item }) => (
    <ArtistCard
      artist={item}
      onPress={() => router.push(`/artist/${item.id}`)}
    />
  );
  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={artists}
        keyExtractor={(item) => item.id.toString()}
        renderItem={renderItem}
        contentContainerStyle={styles.list}
        ListHeaderComponent={
          <View style={styles.header}>
            <Text style={styles.title}>Programme de la soirée</Text>
            <Text style={styles.subtitle}>
              {artists?.length.toString()} artistes exceptionnels
            </Text>
          </View>
        }
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  centerContainer:{
    flex:1,
    justifyContent:"center",
    alignItems:"center"
  },
  container: {
    flex: 1,
    backgroundColor: COLORS.background,
  },
  list: {
    padding: 16,
  },
  header: {
    marginBottom: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    color: COLORS.text,
  },
  subtitle: {
    fontSize: 16,
    color: COLORS.textSecondary,
  },
});
