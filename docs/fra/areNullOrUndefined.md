# areNullOrUndefined

## Description

Vérifie si tous les éléments du tableau donné sont `null` ou `undefined`.

### Cas d’utilisation

Valider qu’une liste de champs optionnels ne contient aucune valeur réelle (uniquement `null`/`undefined`) avant de
décider d’ignorer le traitement ou d’afficher un état « aucune valeur fournie ».

> **Remarque pour les utilisateurs TypeScript:**
>
> Utilisez `areNullOrUndefined` lorsque vous devez vérifier qu’un tableau ne contient que des valeurs manquantes (
`null`/`undefined`). Notez qu’il renvoie `false` pour un tableau vide.

### Avantages

- Renvoie `true` uniquement lorsque chaque élément est `null` ou `undefined`.
- Renvoie `false` pour les tableaux vides, ce qui aide à distinguer « aucune donnée » de « toutes les valeurs
  manquantes ».
- Fonctionne avec `unknown[]`, ce qui le rend sûr à utiliser avant de restreindre les types.

## Utilisation

### Syntaxe

Fonction:

- `areNullOrUndefined(array)`

Paramètres:

- `array`: Le tableau à vérifier.

### Importation locale de fonction

```ts
import { areNullOrUndefined } from "@type-check/guards";

const allMissing = areNullOrUndefined([null, undefined, null]);
// allMissing === true

const containsValue = areNullOrUndefined([null, "value", undefined]);
// containsValue === false

const empty = areNullOrUndefined([]);
// empty === false

```

### Importation globale d’objet

Pour importer les fonctions en tant que méthodes d’objet globales, utilisez:

```ts
import "@type-check/guards/register-global-object.mjs";
```

La méthode suivante sera alors disponible globalement:

- `Type.areNullOrUndefined(array)`

## Analyse des fonctions

Une analyse tabulaire de la sortie produite lors de l’insertion de différents paramètres dans les fonctions est
documentée ici: [areNullOrUndefined](../_analysis/areNullOrUndefined.md)

<br>

---

<small>Le fichier a été généré le 31 janvier 2026 à 00:29:40 (UTC) avec l’utilisation du *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** par *
*[Roland Milto](https://roland-milto.de/)**.</small>