import { View, Text, StyleSheet, ScrollView, Image, TouchableOpacity } from 'react-native';
import { router } from 'expo-router';
import { Ionicons } from '@expo/vector-icons';
import { COLORS } from '../constants/colors';

export default function HomeScreen() {
  const eventData = {
    title: 'La Grande Soirée Gnawa',
    description: 'Une soirée exceptionnelle célébrant la richesse du patrimoine Gnawa marocain avec des artistes de renommée nationale. Venez découvrir les rythmes envoûtants et la spiritualité de la musique Gnawa dans un cadre magique à Agadir.',
    date: '20 Décembre 2025',
    time: '20:00',
    location: 'Agadir, Maroc - Salle des Congrès',
    price: '150 DH',
    banner: 'https://i.pinimg.com/1200x/4f/ce/06/4fce0670901872c0a9ba7e4795a0d51b.jpg',
  };

  return (
    <ScrollView style={styles.container}>
      <Image 
        source={{ uri: eventData.banner }}
        style={styles.banner}
      />

      <View style={styles.content}>
        <Text style={styles.title}>{eventData.title}</Text>
        
        <View style={styles.infoContainer}>
          <View style={styles.infoRow}>
            <Ionicons name="calendar" size={24} color={COLORS.secondary} />
            <View style={styles.infoTextContainer}>
              <Text style={styles.infoLabel}>Date</Text>
              <Text style={styles.infoText}>{eventData.date}</Text>
            </View>
          </View>

          <View style={styles.infoRow}>
            <Ionicons name="time" size={24} color={COLORS.secondary} />
            <View style={styles.infoTextContainer}>
              <Text style={styles.infoLabel}>Heure</Text>
              <Text style={styles.infoText}>{eventData.time}</Text>
            </View>
          </View>

          <View style={styles.infoRow}>
            <Ionicons name="location" size={24} color={COLORS.secondary} />
            <View style={styles.infoTextContainer}>
              <Text style={styles.infoLabel}>Lieu</Text>
              <Text style={styles.infoText}>{eventData.location}</Text>
            </View>
          </View>

          <View style={styles.infoRow}>
            <Ionicons name="cash" size={24} color={COLORS.secondary} />
            <View style={styles.infoTextContainer}>
              <Text style={styles.infoLabel}>Prix</Text>
              <Text style={styles.infoText}>{eventData.price} / billet</Text>
            </View>
          </View>
        </View>

        <View style={styles.descriptionContainer}>
          <Text style={styles.sectionTitle}>À propos</Text>
          <Text style={styles.description}>{eventData.description}</Text>
        </View>

        <TouchableOpacity 
          style={styles.primaryButton}
          onPress={() => router.push('/booking')}
        >
          <Ionicons name="ticket" size={24} color={COLORS.background} />
          <Text style={styles.primaryButtonText}>Réserver maintenant</Text>
        </TouchableOpacity>

        <TouchableOpacity 
          style={styles.secondaryButton}
          onPress={() => router.push('/artists')}
        >
          <Ionicons name="people" size={24} color={COLORS.background} />
          <Text style={styles.primaryButtonText}>Découvrir les artistes</Text>
        </TouchableOpacity>

        <TouchableOpacity 
          style={styles.outlineButton}
          onPress={() => router.push('/myBookings')}
        >
          <Ionicons name="list" size={24} color={COLORS.textSecondary} />
          <Text style={styles.outlineButtonText}>Mes réservations</Text>
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
  banner: {
    width: '100%',
    height: 280,
    resizeMode: 'cover',
  },
  content: {
    padding: 20,
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    color: COLORS.text,
    marginBottom: 24,
    textAlign: 'center',
  },
  infoContainer: {
    backgroundColor: COLORS.card,
    borderRadius: 16,
    padding: 16,
    marginBottom: 24,
  },
  infoRow: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 12,
    borderBottomWidth: 1,
    borderBottomColor: COLORS.background,
  },
  infoTextContainer: {
    marginLeft: 16,
    flex: 1,
  },
  infoLabel: {
    fontSize: 12,
    color: COLORS.textSecondary,
    marginBottom: 4,
  },
  infoText: {
    fontSize: 16,
    color: COLORS.text,
    fontWeight: '500',
  },
  descriptionContainer: {
    marginBottom: 32,
  },
  sectionTitle: {
    fontSize: 22,
    fontWeight: 'bold',
    color: COLORS.text,
    marginBottom: 12,
  },
  description: {
    fontSize: 16,
    color: COLORS.textSecondary,
    lineHeight: 24,
  },
  primaryButton: {
    backgroundColor: COLORS.secondary,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 18,
    borderRadius: 12,
    marginBottom: 12,
  },
  primaryButtonText: {
    color: COLORS.background,
    fontSize: 18,
    fontWeight: 'bold',
    marginLeft: 8,
  },
  secondaryButton: {
    backgroundColor: COLORS.primary,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 18,
    borderRadius: 12,
    marginBottom: 12,
  },
  secondaryButtonText: {
    color: COLORS.text,
    fontSize: 18,
    fontWeight: 'bold',
    marginLeft: 8,
  },
  outlineButton: {
    backgroundColor: 'transparent',
    borderWidth: 2,
    borderColor: COLORS.card,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 18,
    borderRadius: 12,
  },
  outlineButtonText: {
    color: COLORS.textSecondary,
    fontSize: 18,
    fontWeight: 'bold',
    marginLeft: 8,
  },
});