<a name="retour-en-haut"></a>
<h1 align="center">
  <br>
    
  <a href="http://www.amitmerchant.com/electron-markdownify"><img src="https://i.ibb.co/vchLtJP/color-noir-interact-vertical.png" alt="Markdownify" width="200"></a>
  <br>
  Couleur 3 Interact / Front-end
  <br>
</h1>

<h4 align="center">Front-end pour l'application Couleur 3 Interact.
    <br><br>
    <a href="https://github.com/LesPingouins/couleur3interact-backend" target="_blank">Voir le back-end</a>
</h4>

<p align="center">
  <a href="#a-propos">À propos du projet</a> •
  <a href="#installation">Installation</a> •
  <a href="#utilisation">Utilisation</a> •
  <a href="#roadmap">Roadmap</a> •
  <a href="#contact">Contact</a> •
</p>


## A propos
Dans le cadre du projet d'articulation de la HEIG-VD en Ingénierie des Médias. Notre équipe a fait le choix de travailler sur un projet de la RTS, plus précisément celui de la radio Couleur 3. 

L'objectif, imaginer la radio du futur, celle que nous aimerions construire et comment elle pourrait interagir avec son public.

Sur cette base nous avons alors développé une application de chat portable, qui pourrait se greffer sur n'importe quel site à l'aide de la balise iFrame.

Ce front-end permet d'avoir l'application de chat. Dessus vous pourrez, communiquer avec les autres participants, participer à des sondages mais aussi à des concours.

### Développé avec
* [![Vue][Vue.js]][Vue-url]
* [![Bootstrap][Bootstrap.com]][Bootstrap-url]


<p align="right">(<a href="#retour-en-haut">retour en haut</a>)</p>

## Installation
Pour cloner cette application, vous aurez besoin de [Git](https://git-scm.com/downloads), [Node.js](https://nodejs.org/en/download/) (qui vient avec [npm](http://npmjs.com)) et du [Couleur 3 Interact / Back-end](https://github.com/LesPingouins/couleur3interact-backend) installés sur votre ordinateur. Ensuite, exécutez ces lignes de commandes.

```bash
# Cloner le repo
$ git clone https://github.com/LesPingouins/couleur3interact-frontend

# Aller dans le répertoire
$ cd couleur3interact-frontend

# Installation des dépendances
$ npm i
```

Il vous faudra ensuite créer le fichier .env à la racine du projet. Ajoutez y ces informations.

```bash
# Configuration du backend et du serveur de websockets
VITE_BACKEND_URL="http://127.0.0.1:8000/api"
VITE_WEBSOCKETS_KEY=local
VITE_WEBSOCKETS_SERVER=127.0.0.1
```

Lancez ensuite le serveur.
```bash
# Lancer le front-end
$ npm run dev
```
<p align="right">(<a href="#retour-en-haut">retour en haut</a>)</p>

## Utilisation
Pour utiliser le front-end, rendez-vous ensuite sur un navigateur et entrez : http://localhost:[Port donné par la dernière commande]

Connectez-vous ensuite à l'aide de l'adresse mail d'un des utilisateurs qui a été généré dans votre base de données. 
Le mot de passe associés aux utilisateurs est : "password" 😉

Il se peut qu'en fonction de l'ordre d'exécution des serveurs l'iFrame du chat ne fonctionne plus.

Pour régler ce soucis, rendez-vous dans "resources/views/dashboard.blade.php". Retrouvez ensuite la balise iFrame et remplacez le src par le lien du front-end.

Vous pourrez alors prendre part à l'expérience du chat Couleur 3 interact, pour voir les fonctionnalités possibles : <a href="#roadmap">Roadmap</a>

Pour profiter pleinement de l'expérience Couleur 3, utilisez le [Couleur 3 Interact / Back-end](https://github.com/LesPingouins/couleur3interact-backend) fourni par notre équipe. 

<p align="right">(<a href="#retour-en-haut">retour en haut</a>)</p>

## Roadmap
- [x] Envoyer des messages dans le chat
- [x] Login
- [x] Logout
- [x] Gestion de l'utilisateur
  - [ ] Se créer un compte
  - [ ] Modifier ses informations
  - [ ] Supprimer son compte 
- [x] Participer à un sondage
- [x] Participer à un concours
- [x] Dark Mode
- [ ] Gérer ses paramètres

<p align="right">(<a href="#retour-en-haut">retour en haut</a>)</p>

## Contact
La team Pingouin - HEIG-VD - Ingénierie des Médias

Back-end : [Couleur 3 Interact / Back-end](https://github.com/LesPingouins/couleur3interact-backend)
<br>
Front-end : [Couleur 3 Interact / Front-end](https://github.com/LesPingouins/couleur3interact-frontend)

<p align="right">(<a href="#retour-en-haut">retour en haut</a>)</p>

<!-- MARKDOWN LINKS & IMAGES -->
<!-- https://www.markdownguide.org/basic-syntax/#reference-style-links -->
[Vue.js]: https://img.shields.io/badge/Vue.js-35495E?style=for-the-badge&logo=vuedotjs&logoColor=4FC08D
[Vue-url]: https://vuejs.org/
[Bootstrap.com]: https://img.shields.io/badge/Bootstrap-563D7C?style=for-the-badge&logo=bootstrap&logoColor=white
[Bootstrap-url]: https://getbootstrap.com
