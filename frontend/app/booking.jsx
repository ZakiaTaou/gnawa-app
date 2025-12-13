import { useState } from 'react';
import { View, Text, StyleSheet, ScrollView, TextInput, TouchableOpacity, Alert } from 'react-native';
import { useRouter } from 'expo-router';
import { Ionicons } from '@expo/vector-icons';
import { COLORS } from '../constants/colors';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function BookingScreen() {
  const router = useRouter();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    tickets: '1',
  });

  const ticketPrice = 150;
  const totalAmount = parseInt(formData.tickets || 0) * ticketPrice;

  const handleSubmit = () => {
    if (!formData.name || !formData.email || !formData.phone) {
      Alert.alert('Erreur', 'Veuillez remplir tous les champs');
      return;
    }

    const confirmationCode = 'GNW-' + Math.random().toString(36).substring(2, 10).toUpperCase();
    
    Alert.alert(
      'Réservation confirmée !',
      `Code de confirmation: ${confirmationCode}\n\nVous recevrez un email de confirmation.`,
      [
        {
          text: 'Voir mes réservations',
          onPress: () => router.push('/my-bookings'),
        },
        {
          text: 'OK',
        },
      ]
    );
  };

  return (
    <ScrollView>

    <SafeAreaView style={styles.container}>
      <View style={styles.content}>
        <View style={styles.header}>
          <Ionicons name="ticket" size={48} color={COLORS.secondary} />
          <Text style={styles.headerTitle}>Réservation de billets</Text>
          <Text style={styles.headerSubtitle}>Remplissez vos informations</Text>
        </View>

        <View style={styles.form}>
          <View style={styles.inputGroup}>
            <Text style={styles.label}>Nom complet *</Text>
            <View style={styles.inputContainer}>
              <Ionicons name="person" size={20} color={COLORS.textSecondary} />
              <TextInput
                style={styles.input}
                placeholder="Ahmed Benali"
                placeholderTextColor={COLORS.textSecondary}
                value={formData.name}
                onChangeText={(text) => setFormData({ ...formData, name: text })}
              />
            </View>
          </View>

          <View style={styles.inputGroup}>
            <Text style={styles.label}>Email *</Text>
            <View style={styles.inputContainer}>
              <Ionicons name="mail" size={20} color={COLORS.textSecondary} />
              <TextInput
                style={styles.input}
                placeholder="ahmed@example.com"
                placeholderTextColor={COLORS.textSecondary}
                keyboardType="email-address"
                autoCapitalize="none"
                value={formData.email}
                onChangeText={(text) => setFormData({ ...formData, email: text })}
              />
            </View>
          </View>

          <View style={styles.inputGroup}>
            <Text style={styles.label}>Téléphone *</Text>
            <View style={styles.inputContainer}>
              <Ionicons name="call" size={20} color={COLORS.textSecondary} />
              <TextInput
                style={styles.input}
                placeholder="0612345678"
                placeholderTextColor={COLORS.textSecondary}
                keyboardType="phone-pad"
                value={formData.phone}
                onChangeText={(text) => setFormData({ ...formData, phone: text })}
              />
            </View>
          </View>

          <View style={styles.inputGroup}>
            <Text style={styles.label}>Nombre de billets (max 10)</Text>
            <View style={styles.ticketSelector}>
              <TouchableOpacity
                style={styles.ticketButton}
                onPress={() => {
                  const current = parseInt(formData.tickets || 1);
                  if (current > 1) setFormData({ ...formData, tickets: (current - 1).toString() });
                }}
              >
                <Ionicons name="remove" size={24} color={COLORS.text} />
              </TouchableOpacity>
              
              <View style={styles.ticketDisplay}>
                <Text style={styles.ticketNumber}>{formData.tickets}</Text>
              </View>

              <TouchableOpacity
                style={styles.ticketButton}
                onPress={() => {
                  const current = parseInt(formData.tickets || 1);
                  if (current < 10) setFormData({ ...formData, tickets: (current + 1).toString() });
                }}
              >
                <Ionicons name="add" size={24} color={COLORS.text} />
              </TouchableOpacity>
            </View>
          </View>
        </View>

        <View style={styles.summary}>
          <Text style={styles.summaryTitle}>Résumé</Text>
          <View style={styles.summaryRow}>
            <Text style={styles.summaryLabel}>Billets</Text>
            <Text style={styles.summaryValue}>{formData.tickets} x {ticketPrice} DH</Text>
          </View>
          <View style={styles.divider} />
          <View style={styles.summaryRow}>
            <Text style={styles.totalLabel}>Total</Text>
            <Text style={styles.totalValue}>{totalAmount} DH</Text>
          </View>
        </View>

        <TouchableOpacity 
          style={styles.submitButton}
          onPress={handleSubmit}
        >
          <Ionicons name="checkmark-circle" size={24} color={COLORS.background} />
          <Text style={styles.submitButtonText}>Confirmer la réservation</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
    </ScrollView>

   
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.background,
  },
  content: {
    padding: 20,
  },
  header: {
    alignItems: 'center',
    marginBottom: 32,
  },
  headerTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    color: COLORS.text,
    marginTop: 16,
    marginBottom: 8,
  },
  headerSubtitle: {
    fontSize: 16,
    color: COLORS.textSecondary,
  },
  form: {
    marginBottom: 24,
  },
  inputGroup: {
    marginBottom: 20,
  },
  label: {
    fontSize: 14,
    color: COLORS.text,
    marginBottom: 8,
    fontWeight: '600',
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: COLORS.card,
    borderRadius: 12,
    paddingHorizontal: 16,
    borderWidth: 1,
    borderColor: COLORS.border,
  },
  input: {
    flex: 1,
    color: COLORS.text,
    fontSize: 16,
    paddingVertical: 16,
    marginLeft: 12,
  },
  ticketSelector: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  ticketButton: {
    backgroundColor: COLORS.card,
    width: 50,
    height: 50,
    borderRadius: 25,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: COLORS.border,
  },
  ticketDisplay: {
    backgroundColor: COLORS.card,
    paddingHorizontal: 40,
    paddingVertical: 16,
    borderRadius: 12,
    borderWidth: 2,
    borderColor: COLORS.secondary,
  },
  ticketNumber: {
    fontSize: 32,
    fontWeight: 'bold',
    color: COLORS.text,
  },
  summary: {
    backgroundColor: COLORS.card,
    borderRadius: 16,
    padding: 20,
    marginBottom: 24,
  },
  summaryTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: COLORS.text,
    marginBottom: 16,
  },
  summaryRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 12,
  },
  summaryLabel: {
    fontSize: 16,
    color: COLORS.textSecondary,
  },
  summaryValue: {
    fontSize: 16,
    color: COLORS.text,
  },
  divider: {
    height: 1,
    backgroundColor: COLORS.border,
    marginVertical: 12,
  },
  totalLabel: {
    fontSize: 18,
    fontWeight: 'bold',
    color: COLORS.text,
  },
  totalValue: {
    fontSize: 22,
    fontWeight: 'bold',
    color: COLORS.secondary,
  },
  submitButton: {
    backgroundColor: COLORS.secondary,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 18,
    borderRadius: 12,
    marginBottom: 16,
  },
  submitButtonText: {
    color: COLORS.background,
    fontSize: 18,
    fontWeight: 'bold',
    marginLeft: 8,
  },
});