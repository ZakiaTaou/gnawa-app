import { View, Text, ActivityIndicator, StyleSheet } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { COLORS } from "../constants/colors";

export default function QueryState({ isLoading, error, loadingText }) {
  if (isLoading) {
    return (
      <View style={styles.centerContainer}>
        <ActivityIndicator size="large" color={COLORS.secondary} />
        <Text style={styles.loadingText}>
          {loadingText || "Chargement..."}
        </Text>
      </View>
    );
  }

  if (error) {
    return (
      <View style={styles.centerContainer}>
        <Ionicons name="alert-circle" size={64} color={COLORS.error} />
        <Text style={styles.errorTitle}>Erreur de connexion</Text>
        <Text style={styles.errorText}>
          {error.message || "Impossible de charger les données"}
        </Text>
      </View>
    );
  }

  return null;
}

const styles = StyleSheet.create({
  centerContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
  },
  loadingText: {
    marginTop: 12,
    color: COLORS.textSecondary,
    fontSize: 16,
  },
  errorTitle: {
    marginTop: 12,
    fontSize: 18,
    fontWeight: "bold",
    color: COLORS.error,
  },
  errorText: {
    marginTop: 8,
    fontSize: 14,
    textAlign: "center",
    color: COLORS.textSecondary,
  },
});
