import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { COLORS } from "../constants/colors";
import { router } from "expo-router";
import { SafeAreaView } from "react-native-safe-area-context";
export default function MyBookingsScreen() {
  const bookings = [
    {
      id: 1,
      confirmation_code: "GNW-ABC12345",
      customer_name: "Ahmed Benali",
      number_of_tickets: 2,
      total_amount: 300,
      booking_date: "2025-12-01",
      status: "confirmed",
    },
    {
      id: 2,
      confirmation_code: "GNW-XYZ67890",
      customer_name: "Ahmed Benali",
      number_of_tickets: 4,
      total_amount: 600,
      booking_date: "2025-12-05",
      status: "confirmed",
    },
  ];

  const getStatusColor = (status) => {
    switch (status) {
      case "confirmed":
        return COLORS.success;
      case "cancelled":
        return COLORS.error;
      default:
        return COLORS.warning;
    }
  };

  const getStatusText = (status) => {
    switch (status) {
      case "confirmed":
        return "Confirmée";
      case "cancelled":
        return "Annulée";
      default:
        return "En attente";
    }
  };

  if (bookings.length === 0) {
    return (
      <View style={styles.emptyContainer}>
        <Ionicons
          name="ticket-outline"
          size={80}
          color={COLORS.textSecondary}
        />
        <Text style={styles.emptyTitle}>Aucune réservation</Text>
        <Text style={styles.emptyText}>
          Vous n'avez pas encore de réservation pour cet événement
        </Text>
        <TouchableOpacity
          style={styles.emptyButton}
          onPress={() => router.push("/booking")}
        >
          <Ionicons name="add-circle" size={24} color={COLORS.background} />
          <Text style={styles.emptyButtonText}>Réserver maintenant</Text>
        </TouchableOpacity>
      </View>
    );
  }

  return (
    <ScrollView>
      <SafeAreaView style={styles.container}>
        <View style={styles.content}>
          <View style={styles.header}>
            <Text style={styles.headerTitle}>Mes réservations</Text>
            <Text style={styles.headerSubtitle}>
              {bookings.length} réservation(s)
            </Text>
          </View>

          {bookings.map((booking) => (
            <View key={booking.id} style={styles.bookingCard}>
              <View style={styles.codeContainer}>
                <View style={styles.codeHeader}>
                  <Ionicons name="qr-code" size={24} color={COLORS.secondary} />
                  <Text style={styles.codeLabel}>Code de confirmation</Text>
                </View>
                <Text style={styles.codeText}>{booking.confirmation_code}</Text>
              </View>

              <View
                style={[
                  styles.statusBadge,
                  { backgroundColor: getStatusColor(booking.status) + "20" },
                ]}
              >
                <View
                  style={[
                    styles.statusDot,
                    { backgroundColor: getStatusColor(booking.status) },
                  ]}
                />
                <Text
                  style={[
                    styles.statusText,
                    { color: getStatusColor(booking.status) },
                  ]}
                >
                  {getStatusText(booking.status)}
                </Text>
              </View>

              <View style={styles.detailsContainer}>
                <View style={styles.detailRow}>
                  <Ionicons
                    name="person"
                    size={18}
                    color={COLORS.textSecondary}
                  />
                  <Text style={styles.detailLabel}>Nom</Text>
                  <Text style={styles.detailValue}>
                    {booking.customer_name}
                  </Text>
                </View>

                <View style={styles.detailRow}>
                  <Ionicons
                    name="ticket"
                    size={18}
                    color={COLORS.textSecondary}
                  />
                  <Text style={styles.detailLabel}>Billets</Text>
                  <Text style={styles.detailValue}>
                    {booking.number_of_tickets}
                  </Text>
                </View>

                <View style={styles.detailRow}>
                  <Ionicons
                    name="cash"
                    size={18}
                    color={COLORS.textSecondary}
                  />
                  <Text style={styles.detailLabel}>Total</Text>
                  <Text style={styles.detailValue}>
                    {booking.total_amount} DH
                  </Text>
                </View>

                <View style={styles.detailRow}>
                  <Ionicons
                    name="calendar"
                    size={18}
                    color={COLORS.textSecondary}
                  />
                  <Text style={styles.detailLabel}>Date</Text>
                  <Text style={styles.detailValue}>
                    {new Date(booking.booking_date).toLocaleDateString("fr-FR")}
                  </Text>
                </View>
              </View>
            </View>
          ))}
          <TouchableOpacity
            style={styles.newBookingButton}
            onPress={() => router.push("/booking")}
          >
            <Ionicons name="add-circle" size={24} color={COLORS.background} />
            <Text style={styles.newBookingButtonText}>
              Nouvelle réservation
            </Text>
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
    marginBottom: 24,
  },
  headerTitle: {
    fontSize: 28,
    fontWeight: "bold",
    color: COLORS.text,
    marginBottom: 4,
  },
  headerSubtitle: {
    fontSize: 16,
    color: COLORS.textSecondary,
  },
  bookingCard: {
    backgroundColor: COLORS.card,
    borderRadius: 16,
    padding: 20,
    marginBottom: 16,
  },
  codeContainer: {
    marginBottom: 16,
  },
  codeHeader: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 8,
  },
  codeLabel: {
    fontSize: 14,
    color: COLORS.textSecondary,
    marginLeft: 8,
  },
  codeText: {
    fontSize: 24,
    fontWeight: "bold",
    color: COLORS.secondary,
    letterSpacing: 2,
  },
  statusBadge: {
    flexDirection: "row",
    alignItems: "center",
    alignSelf: "flex-start",
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 20,
    marginBottom: 16,
  },
  statusDot: {
    width: 8,
    height: 8,
    borderRadius: 4,
    marginRight: 6,
  },
  statusText: {
    fontSize: 14,
    fontWeight: "600",
  },
  detailsContainer: {
    marginBottom: 16,
  },
  detailRow: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderBottomColor: COLORS.border,
  },
  detailLabel: {
    fontSize: 14,
    color: COLORS.textSecondary,
    marginLeft: 12,
    flex: 1,
  },
  detailValue: {
    fontSize: 14,
    color: COLORS.text,
    fontWeight: "600",
  },
  actionsContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    paddingTop: 16,
    borderTopWidth: 1,
    borderTopColor: COLORS.border,
  },
  actionButton: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 8,
    paddingHorizontal: 16,
  },
  actionButtonText: {
    fontSize: 14,
    color: COLORS.secondary,
    marginLeft: 6,
    fontWeight: "600",
  },
  newBookingButton: {
    backgroundColor: COLORS.secondary,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    padding: 18,
    borderRadius: 12,
    marginTop: 8,
  },
  newBookingButtonText: {
    color: COLORS.background,
    fontSize: 18,
    fontWeight: "bold",
    marginLeft: 8,
  },
  emptyContainer: {
    flex: 1,
    backgroundColor: COLORS.background,
    justifyContent: "center",
    alignItems: "center",
    padding: 40,
  },
  emptyTitle: {
    fontSize: 24,
    fontWeight: "bold",
    color: COLORS.text,
    marginTop: 20,
    marginBottom: 8,
  },
  emptyText: {
    fontSize: 16,
    color: COLORS.textSecondary,
    textAlign: "center",
    marginBottom: 32,
  },
  emptyButton: {
    backgroundColor: COLORS.secondary,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 16,
    paddingHorizontal: 32,
    borderRadius: 12,
  },
  emptyButtonText: {
    color: COLORS.background,
    fontSize: 18,
    fontWeight: "bold",
    marginLeft: 8,
  },
});
