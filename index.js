require('dotenv').config(); // Charger les variables d'environnement depuis le fichier .env
const axios = require('axios');

// URL de l'API et Clé d'authentification
const API_URL = process.env.API_URL;
const API_KEY = process.env.API_KEY;

// Fonction pour récupérer les tâches de manière sécurisée
const fetchTasks = async () => {
  try {
    // Effectuer une requête GET avec un en-tête d'autorisation
    const response = await axios.get(API_URL, {
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${API_KEY}`, // Ajouter le jeton ou clé d'API ici
      },
    });

    // Vérification explicite du statut HTTP
    if (response.status >= 200 && response.status < 300) {
      const tasks = response.data;

      // Traiter ou afficher les tâches récupérées
      console.log('Liste des tâches:', tasks);
    } else {
      console.error(`Erreur : statut HTTP ${response.status}`);
    }
  } catch (error) {
    // Gestion des erreurs
    if (error.response) {
      console.error(
        `Erreur API: ${error.response.status} - ${error.response.statusText}`
      );
    } else if (error.request) {
      console.error('Erreur réseau ou pas de réponse:', error.message);
    } else {
      console.error('Erreur:', error.message);
    }
  }
};
// Appeler la fonction
fetchTasks();


//Creer un nouveau tacche

const newTask = {
  content: 'Check out mockapi.io',
  completed: false,
};

// Fonction pour créer une nouvelle tâche
async function createTask(task) {
  try {
    const response = await axios.post(process.env.API_URL, task, {
      headers: {
        'Content-Type': 'application/json',
      },
    });
    console.log('Nouvelle tâche créée :', response.data);
  } catch (error) {
    console.error('Erreur lors de la création de la tâche :', error.message);
    if (error.response) {
      console.error('Détails de l\'erreur :', error.response.data);
    }
  }
}

// Appeler la fonction
createTask(newTask);