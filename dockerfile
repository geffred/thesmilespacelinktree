# Étape 1 : Builder l'application
FROM node:18-alpine AS builder

WORKDIR /app

# Copier les fichiers de configuration
COPY package.json package-lock.json ./
RUN npm install

# Copier le reste des fichiers
COPY . .

# Builder l'application
RUN npm run build

# Étape 2 : Serveur de production
FROM node:18-alpine AS production

WORKDIR /app

# Installer serveur HTTP simple
RUN npm install -g serve

# Copier les fichiers construits depuis le builder
COPY --from=builder /app/dist ./dist

# Exposer le port
EXPOSE 3000

# Commande pour lancer le serveur
CMD ["serve", "-s", "dist", "-l", "3000"]

# Étape 3 : Développement (optionnel)
FROM node:18-alpine AS development

WORKDIR /app

# Copier les fichiers de configuration
COPY package.json package-lock.json ./
RUN npm install

# Copier le reste des fichiers
COPY . .

# Exposer le port
EXPOSE 5173

# Commande pour lancer Vite en dev
CMD ["npm", "run", "dev"]