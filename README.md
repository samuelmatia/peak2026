# PEAK 2026 - Site Web Officiel

Site web professionnel pour l'événement **Polytech Engineering & Applied Knowledge (PEAK 2026)** organisé par la Faculté Polytechnique de l'Université de Kinshasa.

## 🎨 Caractéristiques

- **Design Neumorphisme** : Style moderne avec ombres douces et effets 3D
- **Responsive** : Mobile-first, adapté à tous les écrans
- **Performance** : Code optimisé et chargement rapide
- **Accessibilité** : Navigation claire et structure sémantique

## 📋 Pages du Site

1. **Accueil** (`index.html`) - Page principale avec hero, compteur, statistiques
2. **À propos** (`about.html`) - Vision, mission et objectifs de PEAK 2026
3. **Programme** (`program.html`) - Programme détaillé des deux jours
4. **Intervenants** (`speakers.html`) - Présentation des experts et conférenciers
5. **Projets & Concours** (`projects.html`) - Informations sur le concours d'innovation
6. **Partenaires** (`partners.html`) - Sponsors et partenaires institutionnels
7. **Inscription** (`register.html`) - Formulaire d'inscription
8. **Contact** (`contact.html`) - Coordonnées et formulaire de contact
9. **Mentions légales** (`legal.html`) - Informations légales

## 🎨 Charte Graphique

- **Couleur primaire** : RGB(41, 1, 108) - Violet foncé
- **Couleur secondaire** : RGB(243, 52, 10) - Rouge
- **Couleur accent** : RGB(250, 99, 6) - Orange
- **Police** : Inter (Google Fonts)

## 📁 Structure du Projet

```
peak2026/
├── index.html          # Page d'accueil
├── about.html          # À propos
├── program.html        # Programme
├── speakers.html       # Intervenants
├── projects.html       # Projets & Concours
├── partners.html       # Partenaires
├── register.html       # Inscription
├── contact.html        # Contact
├── legal.html          # Mentions légales
├── css/
│   └── style.css       # Styles principaux
├── js/
│   └── main.js         # JavaScript principal
├── logos/              # Logos et images
└── README.md           # Documentation
```

## 🚀 Installation et Utilisation

1. **Télécharger les fichiers** dans un répertoire web
2. **Ouvrir `index.html`** dans un navigateur moderne
3. **Pour un serveur local** :
   ```bash
   # Avec Python
   python -m http.server 8000
   
   # Avec Node.js (http-server)
   npx http-server
   ```

## 🔧 Personnalisation

### Modifier les couleurs
Éditez les variables CSS dans `css/style.css` :
```css
:root {
    --color-primary: rgb(41, 1, 108);
    --color-secondary: rgb(243, 52, 10);
    --color-accent: rgb(250, 99, 6);
}
```

### Ajouter des intervenants
Modifiez `speakers.html` et ajoutez des cartes dans `.speakers-grid`

### Modifier le formulaire d'inscription
- Option 1 : Modifier le formulaire dans `register.html`
- Option 2 : Intégrer un Google Form en remplaçant le formulaire

## 📱 Responsive Design

Le site est optimisé pour :
- 📱 Mobile (< 480px)
- 📱 Tablette (768px)
- 💻 Desktop (> 1200px)

## 🌐 Compatibilité Navigateurs

- Chrome (dernière version)
- Firefox (dernière version)
- Safari (dernière version)
- Edge (dernière version)

## 📝 Notes

- Le formulaire d'inscription nécessite une intégration backend pour fonctionner
- Les logos des partenaires doivent être ajoutés dans le dossier `logos/`
- Les photos des intervenants doivent être ajoutées dans un dossier `images/speakers/`
- Le compteur est configuré pour le 27 Février 2026 à 9h00

## 📧 Contact

Pour toute question ou support technique, contactez :
- Email : contact@peak2026.cd
- Site : [PEAK 2026](index.html)

## 📄 Licence

© 2026 PEAK - Tous droits réservés
