## 🛡️ Auth API - Node.js, Express, TypeScript, PostgreSQL

Un starter backend sécurisé et propre en TypeScript, intégrant une architecture hybride (POO + FP), l'authentification JWT, une base PostgreSQL et Swagger pour la documentation.

---

### 📦 Stack technique

* **Node.js** + **Express.js**
* **TypeScript**
* **PostgreSQL** avec `pg`
* **JWT** pour l’authentification
* **bcrypt** pour le hash de mot de passe
* **Swagger** pour la documentation API
* Architecture combinant **POO + FP**
* Prêt pour **Docker** et **CI/CD** (à venir)

---

### 🚀 Démarrage rapide

#### 📁 Cloner le repo

```bash
git clone https://github.com/ton-compte/auth-api-ts.git
cd auth-api-ts
```

#### 📦 Installer les dépendances

```bash
npm install
```

#### ⚙️ Configuration de l’environnement

Crée un fichier `.env` à la racine et ajoute :

```env
PORT=5000
DATABASE_URL=postgresql://user:password@localhost:5432/auth_db
JWT_SECRET=supersecret
```

> Remplace `user`, `password` et `auth_db` par tes infos PostgreSQL.

---

### 🧪 Lancer en mode développement

```bash
npm run dev
```

> Serveur accessible sur : `http://localhost:5000`

---

### 📖 Documentation Swagger

Une fois disponible, la doc Swagger sera accessible sur :

```
http://localhost:5000/api-docs
```

---

### 🏗️ Structure du projet

```
src/
├── app.ts             # Configuration Express
├── server.ts          # Lancement du serveur
├── config/            # Config .env, DB
├── controllers/       # Contrôleurs des routes
├── routes/            # Définition des routes
├── services/          # Logique métier (POO)
├── models/            # Représentation des entités
├── middlewares/       # Middlewares FP (auth, error)
├── utils/             # Fonctions utilitaires
├── docs/              # Swagger (OpenAPI)
└── types/             # Types TypeScript personnalisés
```

---

### 🛠️ À venir

* 🔐 Refresh token
* ✅ Tests unitaires avec Jest
* 🐳 Dockerisation
* 📄 Scripts de migration
* 🚀 Déploiement CI/CD (GitHub Actions)

---

### 👨‍💻 Auteur

> Joseph Essey – (https://github.com/ton-github)

---
