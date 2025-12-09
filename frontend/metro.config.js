// frontend/metro.config.js
const { getDefaultConfig } = require('expo/metro-config');
const path = require('path');

const projectRoot = __dirname;
const workspaceRoot = path.resolve(projectRoot, '..');

const config = getDefaultConfig(projectRoot);

// 1. Surveiller uniquement le dossier frontend
config.watchFolders = [projectRoot];

// 2. Bloquer les dossiers de la racine
config.resolver.blockList = [
  // Bloquer node_modules à la racine
  new RegExp(`${workspaceRoot}/node_modules/.*`),
  // Bloquer le dossier backend
  new RegExp(`${workspaceRoot}/backend/.*`),
];

// 3. Résoudre les modules depuis frontend uniquement
config.resolver.nodeModulesPaths = [
  path.resolve(projectRoot, 'node_modules'),
];

module.exports = config;