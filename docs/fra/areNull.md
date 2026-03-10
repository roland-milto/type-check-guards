# areNull

## Description

Vérifie si tous les éléments du `array` donné sont `null`.

### Cas d’utilisation

Valider qu’une colonne de jeu de données, une liste de champs d’API ou un tableau de placeholders ne contient que des
valeurs `null` avant d’appliquer une logique qui suppose que toutes les entrées sont intentionnellement vides.

> **Remarque pour les utilisateurs TypeScript:**
>
> Utilisez `areNull` lorsque vous avez besoin d’une vérification stricte indiquant qu’une entrée est un tableau non vide
> et que chaque élément est exactement `null` (ni `undefined`, ni des valeurs falsy).

### Avantages

- Renvoie `true` uniquement lorsque chaque élément est `null`, ce qui en fait une garde stricte de type « tous
  correspondent ».
- Rejette les non-tableaux et les tableaux vides en renvoyant `false`, évitant des résultats accidentellement truthy sur
  une entrée invalide.
- Fonctionne bien comme vérification de précondition avant de traiter des données qui doivent être entièrement `null`.

## Utilisation

### Syntaxe

Fonction:

- `areNull(array)`

Paramètres:

- `array`: Le tableau d’entrée à vérifier pour des éléments `null`.

### Importation locale de fonction

```ts
import { areNull } from "@type-check/guards";

const a = [null, null];
const b = [null, 1, null];

const allNullA = areNull(a); // vrai
const allNullB = areNull(b); // faux

const notAnArray = areNull(123 as unknown as unknown[]); // faux
const empty = areNull([]); // faux

```

### Importation globale d’objet

Pour importer les fonctions en tant que méthodes d’objet globales, utilisez:

```ts
import "@type-check/guards/register-global-object.mjs";
```

La méthode suivante sera alors disponible globalement:

- `Type.areNull(array)`

## Analyse des fonctions

Une analyse tabulaire de la sortie produite lors de l’insertion de différents paramètres dans les fonctions est
documentée ici: [areNull](../_analysis/areNull.md)

<br>

---

<small>Le fichier a été généré le 31 janvier 2026 à 15:43:10 (UTC) avec l’utilisation du *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** par *
*[Roland Milto](https://roland-milto.de/)**.</small>