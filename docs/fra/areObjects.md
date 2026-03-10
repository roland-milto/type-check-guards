# areObjects

## Description

`areObjects` vérifie si un tableau non vide fourni ne contient que des objets.

### Cas d’utilisation

Utilisez `areObjects` lorsque vous recevez un tableau inconnu (p. ex. via l’analyse de JSON ou des API externes) et que
vous devez vous assurer qu’il n’est pas vide et que chaque élément est un objet avant d’itérer et d’accéder aux
propriétés des objets.

> **Remarque pour les utilisateurs TypeScript:**
>
> Utilisez `areObjects` pour valider `unknown[]` avant de traiter les éléments comme des objets ; la fonction renvoie
`false` pour les tableaux vides.

### Avantages

- Renvoie `true` uniquement lorsque l’entrée est un tableau non vide et que chaque élément est un objet.
- S’arrête tôt et renvoie `false` dès qu’un élément non objet est trouvé.
- Aide à valider une entrée inconnue avant d’effectuer des opérations spécifiques aux objets.

## Utilisation

### Syntaxe

Fonction:

- `areObjects(array)`

Paramètres:

- `array`: Le tableau à vérifier pour des éléments de type objet.

### Importation locale de fonction

```ts
import { areObjects } from "@type-check/guards";

const value: unknown = [{}, { a: 1 }, new Date()];

if (Array.isArray(value) && areObjects(value)) {
  // value est un tableau rempli d’objets
  console.log("All items are objects:", value.length);
} else {
  console.log("Not a filled array of objects");
}

```

### Importation globale d’objet

Pour importer les fonctions en tant que méthodes d’objet globales, utilisez:

```ts
import "@type-check/guards/register-global-object.mjs";
```

La méthode suivante sera alors disponible globalement:

- `Type.areObjects(array)`

## Analyse des fonctions

Une analyse tabulaire de la sortie produite lors de l’insertion de différents paramètres dans les fonctions est
documentée ici: [areObjects](../_analysis/areObjects.md)

<br>

---

<small>Le fichier a été généré le 31 janvier 2026 à 00:08:40 (UTC) avec l’utilisation du *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** par *
*[Roland Milto](https://roland-milto.de/)**.</small>