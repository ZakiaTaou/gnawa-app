import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { COLORS } from '../constants/colors';

export default function ArtistCard({ artist, onPress }) {
  const formatTime = (timeString) => {
  const [hours, minutes] = timeString.split(":");

  return `${hours}:${minutes}`;
};
  return (
    <TouchableOpacity style={styles.card} onPress={onPress}>
      <Image source={{ uri: artist.photo_url }} style={styles.image} />

      <View style={styles.info}>
        <Text style={styles.name}>{artist.name}</Text>
        <Text style={styles.genre}>{artist.genre}</Text>

        <View style={styles.timeRow}>
          <Ionicons name="time" size={16} color={COLORS.secondary} />
          <Text style={styles.time}>{formatTime(artist.start_time)} - {formatTime(artist.end_time)}</Text>
        </View>
      </View>

      <Ionicons
        name="chevron-forward"
        size={22}
        color={COLORS.textSecondary}
      />
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  card: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: COLORS.card,
    padding: 16,
    borderRadius: 16,
    marginBottom: 12,
  },
  image: {
    width: 80,
    height: 80,
    borderRadius: 40,
    marginRight: 16,
  },
  info: {
    flex: 1,
  },
  name: {
    fontSize: 18,
    fontWeight: 'bold',
    color: COLORS.text,
  },
  genre: {
    fontSize: 14,
    color: COLORS.textSecondary,
    marginVertical: 6,
  },
  timeRow: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  time: {
    marginLeft: 6,
    fontSize: 14,
    color: COLORS.secondary,
    fontWeight: '600',
  },
});
