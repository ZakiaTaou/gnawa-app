import {
  View,
  Text,
  StyleSheet,
  FlatList,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useRouter } from 'expo-router';
import { COLORS } from '../constants/colors';
import ArtistCard from '../components/ArtistCard';

export default function ArtistsScreen() {
  const router = useRouter();

  const artists = [
    { id: 1, name: 'Hamid El Kasri', genre: 'Gnawa Traditionnel', performance_time: '20:00 - 21:00', photo: 'https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=400', }, { id: 2, name: 'Majid Bekkas', genre: 'Gnawa Fusion', performance_time: '21:15 - 22:15', photo: 'https://images.unsplash.com/photo-1511367461989-f85a21fda167?w=400', }, { id: 3, name: 'Groupe Maalem Mahmoud Gania', genre: 'Gnawa Spirituel', performance_time: '22:30 - 23:30', photo: 'https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?w=400', }, { id: 4, name: 'Hassan Boussou', genre: 'Gnawa Contemporain', performance_time: '23:45 - 00:30', photo: 'https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=400', }, { id: 5, name: 'Asmaa Hamzaoui & Bnat Timbouktou', genre: 'Gnawa Féminin', performance_time: '19:00 - 19:45', photo: 'https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?w=400', },
  ];

  const renderItem = 
    ({ item }) => (
      <ArtistCard
        artist={item}
        onPress={() => router.push(`/artist/${item.id}`)}
      />
    )
   ;

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
              {artists.length} artistes exceptionnels
            </Text>
          </View>
        }
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
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
    fontWeight: 'bold',
    color: COLORS.text,
  },
  subtitle: {
    fontSize: 16,
    color: COLORS.textSecondary,
  },
});
