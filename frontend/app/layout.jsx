import { Stack } from "expo-router";

export default function RootLayout() {
  return (
    <Stack
      screenOptions={{
        headerShown: false,
      }}
    />
  );
}

// food-waste-sharing-app/
// │
// ├── app/                         # Tous tes écrans ici
// │   ├── _layout.js               # Structure principale de navigation
// │   ├── index.js                 # Écran d'accueil (carte ou welcome)
// │   ├── login.js                 # Connexion
// │   ├── signup.js                # Inscription
// │   ├── add-offering.js          # Ajouter une offre
// │   ├── offering/[id].js         # Détail d’une offre (page dynamique)
// │   ├── my-offerings.js          # Mes offres partagées
// │   └── profile.js               # Profil utilisateur
// │
// ├── assets/                      # Images, icônes, splash...
// │   ├── logo.png
// │   └── placeholder-food.jpg
// │
// ├── src/
// │   ├── firebase/                # Configuration Firebase
// │   │   └── firebaseConfig.js
// │   │
// │   ├── components/              # Composants réutilisables
// │   │   ├── FoodCard.js
// │   │   └── Button.js
// │   │
// │   └── utils/                   # Fonctions utiles
// │       └── helpers.js
// │
// ├── app.json
// ├── package.json
// ├── babel.config.js
// └── README.md
