
# FetchTasks - Gestionnaire de Tâches avec une API REST

Un projet Node.js permettant de récupérer et d'afficher des tâches depuis une API REST sécurisée. Les informations sensibles telles que l'URL de l'API et la clé d'authentification sont gérées via des variables d'environnement pour plus de sécurité.

## Table des Matières

- [Introduction](#introduction)
- [Fonctionnalités](#fonctionnalités)
- [Prérequis](#prérequis)
- [Installation](#installation)
- [Configuration](#configuration)
- [Utilisation](#utilisation)
- [Exemple de Sortie](#exemple-de-sortie)
- [Dépendances](#dépendances)
- [Contributeurs](#contributeurs)
- [Licence](#licence)

## Introduction

FetchTasks est un script Node.js qui utilise **axios** pour effectuer des requêtes HTTP sécurisées à une API REST. Il inclut une gestion robuste des erreurs pour garantir un bon retour d'information même en cas d'échec.

## Fonctionnalités

- Récupération des tâches à l'aide d'une clé d'authentification API.
- Gestion des erreurs réseau et API.
- Facilité de configuration grâce aux variables d'environnement.

## Prérequis

Avant de commencer, assurez-vous que vous avez les éléments suivants installés :

- Node.js (version 14 ou plus recommandée)
- npm (gestionnaire de paquets Node.js)
- Une API REST accessible et ses informations :
  - URL de l'API (`API_URL`)
  - Clé d'authentification (`API_KEY`)

## Installation

1. Clonez le dépôt :
   ```bash
   git clone https://github.com/votre-utilisateur/votre-repo.git
   cd votre-repo
   ```

2. Installez les dépendances requises :
   ```bash
   npm install
   ```

## Configuration

1. Créez un fichier `.env` à la racine du projet.
2. Ajoutez-y vos informations d'API :
   ```env
   API_URL=https://exemple.com/api/tasks
   API_KEY=VotreCleAPI
   ```

## Utilisation

Pour exécuter le script, lancez la commande suivante dans le terminal :
```bash
node index.js
```

Le script interagira avec l'API pour récupérer et afficher les tâches dans la console.

## Exemple de Sortie

Voici un exemple de sortie réussie du script :
```
Liste des tâches: [
  { id: 1, title: "Faire les courses", status: "en attente" },
  { id: 2, title: "Lire un livre", status: "terminé" }
]
```

En cas d'erreur d'authentification ou réseau :
```
Erreur API: 401 - Unauthorized
```

## Dépendances

Ce projet repose sur les bibliothèques suivantes :

- [dotenv](https://www.npmjs.com/package/dotenv) : Pour charger les variables d'environnement à partir d'un fichier `.env`.
- [axios](https://www.npmjs.com/package/axios) : Pour effectuer des requêtes HTTP.

Installez-les en exécutant :
```bash
npm install dotenv axios
```

## Contributeurs

- [Votre Nom](https://github.com/votre-utilisateur) – Développeur principal

## Licence

Ce projet est sous licence MIT. Consultez le fichier [LICENSE](LICENSE) pour plus de détails.
```

Ce fichier README offre une structure complète pour votre projet et est prêt à être publié sur GitHub. Assurez-vous de remplacer les sections "Votre Nom" et "votre-repo" avec vos informations.
