// // app/_layout.jsx
// import { Stack } from 'expo-router';
// import { COLORS } from '../constants/colors';
// import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

// // 🔥 Créer le QueryClient EN DEHORS du composant
// const queryClient = new QueryClient({
//   defaultOptions: {
//     queries: {
//       retry: 2,
//       staleTime: 1000 * 60 * 5, // 5 minutes
//       refetchOnWindowFocus: false,
//     },
//   },
// });

// export default function RootLayout() {
//   return (
//     <QueryClientProvider client={queryClient}>
//       <Stack
//         screenOptions={{
//           headerStyle: { backgroundColor: COLORS.background },
//           headerTintColor: COLORS.text,
//           headerTitleStyle: { fontWeight: 'bold' },
//           contentStyle: { backgroundColor: COLORS.background },
//         }}
//       >
//         <Stack.Screen 
//           name="index" 
//           options={{ title: 'Grande Soirée Gnawa' }} 
//         />
//         <Stack.Screen 
//           name="artists" 
//           options={{ title: 'Artistes Gnawa' }} 
//         />
//         <Stack.Screen 
//           name="artist/[id]" 
//           options={{ title: 'Détails Artiste' }} 
//         />
//         <Stack.Screen 
//           name="booking" 
//           options={{ title: 'Réservation' }} 
//         />
//         <Stack.Screen 
//           name="myBookings" 
//           options={{ title: 'Mes Réservations' }} 
//         />
//       </Stack>
//     </QueryClientProvider>
//   );
// }
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Stack } from "expo-router";
const queryClient = new QueryClient();
export default function RootLayout() {
  return (
    <QueryClientProvider client={queryClient}>
      <Stack screenOptions={{ headerShown: false }}>
        <Stack.Screen name="index" />
        <Stack.Screen name="artists" />
        <Stack.Screen name="artist/[id]" />
        <Stack.Screen name="booking" />
        <Stack.Screen name="myBookings" />
      </Stack>
    </QueryClientProvider>
  );
}