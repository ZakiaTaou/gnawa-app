import { View, Text, StyleSheet, ScrollView, Image, TouchableOpacity } from 'react-native';
import { useLocalSearchParams, useRouter } from 'expo-router';
import { Ionicons } from '@expo/vector-icons';
import { COLORS } from '../../constants/colors';

export default function ArtistDetailsScreen() {
   const { id } = useLocalSearchParams();
    const router = useRouter();
  
    const artistsData = {
      1: {
        name: 'Hamid El Kasri',
        genre: 'Gnawa Traditionnel',
        performance_time: '20:00 - 21:00',
        photo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSZFfUTDnuVm4QIXVTLuzLafTHQFQX0kXPb9g&s',
        biography: 'Maître incontesté de la musique Gnawa, Hamid El Kasri perpétue la tradition avec passion depuis plus de 40 ans. Considéré comme l\'un des plus grands maâlems vivants, il a su préserver l\'authenticité des rituels Gnawa tout en les faisant rayonner sur les scènes internationales. Sa voix puissante et son jeu de guembri hypnotique ont conquis des milliers de spectateurs à travers le monde.',
        instagram: '@hamidelkasri',
      },
      2: {
        name: 'Hassan Hakmoun',
        genre: 'Gnawa Fusion',
        performance_time: '21:15 - 22:15',
        photo: 'https://i.pinimg.com/736x/31/b3/22/31b322404f18c185d9907561817415b9.jpg',
        biography: 'Virtuose du guembri et de la guitare, Majid Bekkas fusionne avec brio les traditions Gnawa et le jazz moderne. Multi-instrumentiste d\'exception, il a collaboré avec les plus grands noms du jazz international. Son approche innovante respecte l\'essence spirituelle de la musique Gnawa tout en l\'ouvrant à de nouveaux horizons musicaux.',
        instagram: '@majidbekkas',
      },
      3: {
        name: 'Maalem Hassan Boussou',
        genre: 'Gnawa Spirituel',
        performance_time: '22:30 - 23:30',
        photo: 'https://i.pinimg.com/1200x/5a/73/be/5a73be8c2b05c8a386cb98cf2e93320d.jpg',
        biography: 'Héritiers d\'une grande lignée de maâlems, ce groupe préserve l\'authenticité des rituels Gnawa dans leur forme la plus pure. Fondé par le légendaire Mahmoud Gania, le groupe perpétue une tradition familiale vieille de plusieurs générations. Leurs performances sont de véritables cérémonies spirituelles.',
        instagram: '@maalemgania',
      },
    };
  
    const artist = artistsData[id] || artistsData[1];
  
    return (
      <ScrollView style={styles.container}>
        <Image 
          source={{ uri: artist.photo }}
          style={styles.photo}
        />
        <View style={styles.content}>
          <Text style={styles.name}>{artist.name}</Text>
          <Text style={styles.genre}>{artist.genre}</Text>
            <View style={styles.timeCard}>
            <Ionicons name="time" size={24} color={COLORS.secondary} />
            <View style={styles.timeInfo}>
              <Text style={styles.timeLabel}>Performance</Text>
              <Text style={styles.timeText}>{artist.performance_time}</Text>
            </View>
          </View>
            <View style={styles.bioSection}>
            <Text style={styles.sectionTitle}>Biographie</Text>
            <Text style={styles.bioText}>{artist.biography}</Text>
          </View>
            <TouchableOpacity style={styles.instagramButton}>
            <Ionicons name="logo-instagram" size={24} color={COLORS.text} />
            <Text style={styles.instagramText}>{artist.instagram}</Text>
          </TouchableOpacity>
          <TouchableOpacity 
            style={styles.bookButton}
            onPress={() => router.push('/booking')}
          >
            <Ionicons name="ticket" size={24} color={COLORS.background} />
            <Text style={styles.bookButtonText}>Réserver pour cette soirée</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    );
  }
  
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: COLORS.background,
    },
    photo: {
      width: '100%',
      height: 400,
      resizeMode: 'cover',
    },
    content: {
      padding: 20,
    },
    name: {
      fontSize: 28,
      fontWeight: 'bold',
      color: COLORS.text,
      marginBottom: 8,
    },
    genre: {
      fontSize: 18,
      color: COLORS.secondary,
      marginBottom: 24,
    },
    timeCard: {
      backgroundColor: COLORS.card,
      borderRadius: 12,
      padding: 16,
      flexDirection: 'row',
      alignItems: 'center',
      marginBottom: 24,
    },
    timeInfo: {
      marginLeft: 16,
    },
    timeLabel: {
      fontSize: 12,
      color: COLORS.textSecondary,
      marginBottom: 4,
    },
    timeText: {
      fontSize: 18,
      color: COLORS.text,
      fontWeight: 'bold',
    },
    bioSection: {
      marginBottom: 24,
    },
    sectionTitle: {
      fontSize: 22,
      fontWeight: 'bold',
      color: COLORS.text,
      marginBottom: 12,
    },
    bioText: {
      fontSize: 16,
      color: COLORS.textSecondary,
      lineHeight: 24,
    },
    instagramButton: {
      backgroundColor: COLORS.card,
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'center',
      padding: 16,
      borderRadius: 12,
      marginBottom: 24,
    },
    instagramText: {
      fontSize: 16,
      color: COLORS.text,
      marginLeft: 8,
      fontWeight: '600',
    },
    bookButton: {
      backgroundColor: COLORS.secondary,
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'center',
      padding: 18,
      borderRadius: 12,
    },
    bookButtonText: {
      color: COLORS.background,
      fontSize: 18,
      fontWeight: 'bold',
      marginLeft: 8,
    },
  });