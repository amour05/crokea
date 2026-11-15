# CROKEA — Haute Joaillerie Textile

Site web vitrine et boutique d'artisanat d'exception pour **CROKEA** (bijoux faits main en crochet et perles de culture véritables).
Développé en **React 18**, entièrement responsive (ordinateur, tablette, mobile) et doté d'un routage d'onglets dynamique avec soulignement visuel de l'onglet actif.

---

## 🌟 Architecture du Projet

Le site est conçu comme une application monopage (**SPA**) réactive propulsée par **React 18** :

1. **`index.html` — Application React 18 Complète**
   - **En-tête fixe avec Logo officiel CROKEA** : optimisé pour fond lin avec détourage `mix-blend-multiply`.
   - **Barre d'onglets réactive & soulignée** :
     - Sur grand écran (>= 1024px) : barre d'onglets avec soulignement doré/bronze automatique (`h-[3px] bg-primary rounded-full`) sur l'onglet actif.
     - Sur mobile (< 1024px) : tiroir latéral fluide (drawer) avec bordure gauche mise en valeur (`border-l-4 border-primary`), badge `ACTIF` et icône de validation.
     - Prise en charge automatique de l'historique et des ancres d'URL (`#accueil`, `#collections`, `#produit`, `#sur-mesure`, `#savoir-faire`, `#communaute`).
   - **Vues & Pages Intégrées** :
     1. **Accueil** : Hero haute couture, 3 piliers d'atelier (*Haute Maille Éthérée*, *Perles Authentiques d'Eau Douce*, *Zéro Gravité*), best-sellers et newsletter VIP.
     2. **Collections** : Galerie complète des 6 modèles avec filtres par catégorie (*Tous, Rosaces & Fleurs, Trèfles Précieux, Pastels & Nacres, Collection Fêtes*), pastilles de nuances et commande rapide.
     3. **Modèle Signature (Fiche Produit)** : Zoom haute résolution (Lightbox), sélecteur de teintes de fil, choix du type d'attache (crochets or 24k, clips, clous), quantité, ajout à l'écrin et commande directe WhatsApp préremplie.
     4. **Sur-Mesure (Configurateur d'Atelier)** : Parcours interactif en 4 étapes (Motif floral, Nuance du fil, Perle centrale, Finition métallique) avec estimation tarifaire en temps réel et bon de commande WhatsApp généré automatiquement.
     5. **Savoir-Faire** : Histoire de la haute maille, fil 0.6mm, perles baroques et rondes certifiées, et guide d'entretien.
     6. **Communauté** : Hub VIP, avis et retours de clientes, module interactif « Laisser un mot doux », accès au Cercle Privé.
   - **Conditions & Engagements d'Atelier (Modale Complète)** :
     - **Conditions Générales de Vente (CGV)** : nature artisanale, devises (XOF & EUR), moyens de paiement (Mobile Money MTN/Moov, espèces, virement), délais de confection (48h-72h) et politique de rétractation.
     - **Livraison & Expéditions** : Cotonou/Calavi par coursier, villes du Bénin, sous-région UEMOA et international/diaspora.
     - **Garanties, Retours & SAV** : apprêts hypoallergéniques or fin 24k, perles véritables de culture Grade A, garantie d'atelier et retouches.
     - **Mentions Légales & Confidentialité** : coordonnées de l'Atelier, respect des données personnelles et propriété intellectuelle.
   - **Écrin Latéral (Panier React)** :
     - Sauvegarde automatique dans `localStorage`.
     - Option coffret cadeau velours & ruban.
     - Acceptation des CGV en un clic avant validation WhatsApp.
     - Générateur de commande WhatsApp avec récapitulatif complet (articles, nuances, options, total FCFA & EUR).
   - **Bouton Conciergerie Flottant (FAB WhatsApp)** en bas à gauche pour assistance instantanée.

2. **`produit.html` & `sur-mesure.html`**
   - Redirection automatique et instantanée vers l'application React unifiée (`index.html#produit` et `index.html#sur-mesure`).

3. **`assets/logo.jpg`**
   - Logo officiel Crokea 500x500 avec détourage `mix-blend-multiply` pour s'intégrer harmonieusement à la charte graphique lin crémeux.

---

## ⚙️ Configuration & Liens Officiels

- **Numéro Principal Bénin (Commandes & Panier)** : `+229 01 40 82 04 73` (ou `01 40 82 04 73`)
- **Numéro Conciergerie Bénin (Bouton « Atelier Direct »)** : `+229 01 44 09 69 15` (ou `01 44 09 69 15`)
- **Chat / Groupe VIP WhatsApp** : [Rejoindre le Groupe WhatsApp Crokea](https://chat.whatsapp.com/H3HMwhpYP3G0T0BRv0NSAe?s=cl&p=i&mlu=4&ilr=4&iam=2)
- **Page Officielle Facebook** : [Visiter la Page Facebook CROKEA](https://www.facebook.com/share/1AivRknS6m/?mibextid=wwXIfr)
- **Conception & Déploiement** : [Amour Govoetchan](https://www.facebook.com/beaudelaire.amor/)

Ces coordonnées sont configurées dans `CROKEA_CONFIG` dans [index.html](file:///c:/Users/Dell/Documents/CROKEA/index.html) :

```javascript
const CROKEA_CONFIG = {
  whatsappNumber: "2290140820473", // Numéro principal béninois pour commandes (+229 01 40 82 04 73)
  whatsappNumberFormatted: "+229 01 40 82 04 73",
  whatsappDirectNumber: "2290144096915", // Second numéro béninois pour l'Atelier Direct (+229 01 44 09 69 15)
  whatsappDirectNumberFormatted: "+229 01 44 09 69 15",
  whatsappGroupUrl: "https://chat.whatsapp.com/H3HMwhpYP3G0T0BRv0NSAe?s=cl&p=i&mlu=4&ilr=4&iam=2",
  facebookUrl: "https://www.facebook.com/share/1AivRknS6m/?mibextid=wwXIfr",
  developerFacebookUrl: "https://www.facebook.com/beaudelaire.amor/",
  developerName: "Amour Govoetchan",
  currencyRate: 650 // 1€ ≈ 650 FCFA
};
```

---

## 🚀 Utilisation & Test

Double-cliquez simplement sur le fichier [index.html](file:///c:/Users/Dell/Documents/CROKEA/index.html) pour l'ouvrir dans votre navigateur habituel (Google Chrome, Microsoft Edge, Mozilla Firefox, Apple Safari).
Aucune installation de dépendance ni compilation terminal n'est requise.
