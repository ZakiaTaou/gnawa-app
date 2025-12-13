import { Stack } from 'expo-router';
import { COLORS } from '../constants/colors';

export default function RootLayout() {
  return (
    <Stack
      screenOptions={{
        headerStyle: { backgroundColor: COLORS.background },
        headerTintColor: COLORS.text,
        headerTitleStyle: { fontWeight: 'bold' },
        contentStyle: { backgroundColor: COLORS.background },
      }}
    >
      <Stack.Screen 
        name="index" 
        options={{ title: 'Grande Soirée Gnawa' }} 
      />
      <Stack.Screen 
        name="artists" 
        options={{ title: 'Artistes Gnawa' }} 
      />
      <Stack.Screen 
        name="artist/[id]" 
        options={{ title: 'Détails Artiste' }} 
      />
      <Stack.Screen 
        name="booking" 
        options={{ title: 'Réservation' }} 
      />
      <Stack.Screen 
        name="myBookings" 
        options={{ title: 'Mes Réservations' }} 
      />
    </Stack>
  );
}
