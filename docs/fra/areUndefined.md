# areUndefined

## Description

`areUndefined` vérifie si chaque élément d’un tableau fourni est `undefined`.

### Cas d’utilisation

Valider qu’une liste de résultats optionnels ne contient aucune valeur réelle (uniquement `undefined`), par exemple
après un mapping de recherches où les entrées manquantes sont représentées par `undefined`, et que vous souhaitez
confirmer que toutes les recherches ont échoué.

> **Remarque pour les utilisateurs TypeScript:**
>
> Utilisez `areUndefined` lorsque vous devez affirmer qu’un `unknown[]` ne contient que des valeurs `undefined` ; il
> renvoie `false` pour les tableaux vides et les entrées non-tableau/invalides en raison de la vérification interne
`isFilledArray`.

### Avantages

- Renvoie `false` pour les non-tableaux et les tableaux vides en exigeant un tableau rempli via `isFilledArray`.
- Garantit que chaque élément est `undefined`, et pas seulement certains, rendant l’intention explicite.
- Utile comme prédicat de type garde lors de la validation de collections d’entrée inconnues.

## Utilisation

### Syntaxe

Fonction:

- `areUndefined(array)`

Paramètres:

- `array`: Le tableau à vérifier pour des éléments `undefined`.

### Importation locale de fonction

```ts
import { areUndefined } from "@type-check/guards";

const a: unknown[] = [undefined, undefined];
const b: unknown[] = [undefined, null];
const c: unknown[] = [undefined, 0, undefined];

const r1 = areUndefined(a); // true
const r2 = areUndefined(b); // false
const r3 = areUndefined(c); // false

// Remarque : renvoie false pour les tableaux vides
const r4 = areUndefined([]); // false

```

### Importation globale d’objet

Pour importer les fonctions en tant que méthodes d’objet globales, utilisez:

```ts
import "@type-check/guards/register-global-object.mjs";
```

La méthode suivante sera alors disponible globalement:

- `Type.areUndefined(array)`

## Analyse des fonctions

Une analyse tabulaire de la sortie produite lors de l’insertion de différents paramètres dans les fonctions est
documentée ici: [areUndefined](../_analysis/areUndefined.md)

<br>

---

<small>Le fichier a été généré le 30 janvier 2026 à 13:55:41 (UTC) avec l’utilisation du *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** par *
*[Roland Milto](https://roland-milto.de/)**.</small>