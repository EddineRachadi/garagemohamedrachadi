# Garage Mohamed Rachadi — site vitrine (HTML / CSS / JS)

Site statique, une seule page, sans framework ni étape de build.

## Structure
```
index.html      → tout le contenu et la structure
styles.css       → design (police Oswald + Work Sans, palette atelier)
script.js        → menu mobile + apparition au défilement
assets/img/      → photos réelles du garage (issues du portfolio PDF)
```

## Tester en local
Aucune installation requise. Deux options :
1. Ouvrir directement `index.html` dans un navigateur.
2. Ou lancer un petit serveur local (recommandé, évite les soucis de chemins) :
   ```
   python3 -m http.server 8000
   ```
   puis ouvrir http://localhost:8000

## Mettre en ligne
Ce dossier peut être déposé tel quel sur **n'importe quel hébergement web** :
- Hébergement mutualisé classique (dépôt par FTP du dossier entier)
- Netlify ou Vercel (glisser-déposer le dossier)
- GitHub Pages / GitLab Pages
- Un simple espace web fourni par un opérateur local aux Comores

Il n'y a rien à compiler : les 3 fichiers + le dossier `assets/` suffisent.

## Personnaliser
- Textes et sections : dans `index.html`
- Couleurs, polices, espacements : dans `styles.css` (variables en haut du fichier, sous `:root`)
- Téléphone / adresse : rechercher "33 20 143", "44 20 143" et l'adresse dans `index.html`
