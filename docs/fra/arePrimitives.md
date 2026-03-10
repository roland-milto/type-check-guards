# arePrimitives

## Description

`arePrimitives` évalue si tous les éléments d’un tableau fourni et non vide sont des types primitifs.

### Cas d’utilisation

Valider que les données entrantes (p. ex. paramètres de requête, valeurs de ligne CSV ou liste d’ID/tags) ne contiennent
que des valeurs primitives avant de les sérialiser, de les hacher, de les journaliser ou de les transmettre à des API
qui ne doivent pas recevoir d’objets.

> **Remarque pour les utilisateurs TypeScript:**
>
> Utilisez `arePrimitives` lorsque vous devez vous assurer qu’un `unknown[]` ne contient que des valeurs primitives (
> string, number, bigint, boolean, symbol, undefined ou null) avant tout traitement ultérieur.

### Avantages

- Renvoie `true` uniquement lorsque chaque élément est une valeur primitive, ce qui en fait une garde stricte pour les
  tableaux « sans objets/fonctions ».
- Échoue rapidement : renvoie `false` dès qu’un élément non primitif est trouvé.
- Renvoie également `false` pour les non-tableaux et les tableaux vides (via la vérification de tableau rempli), évitant
  l’acceptation accidentelle d’une entrée invalide.

## Utilisation

### Syntaxe

Fonction:

- `arePrimitives(array)`

Paramètres:

- `array`: Le tableau à vérifier afin de déterminer si ses éléments sont de type primitif.

### Importation locale de fonction

```ts
import { arePrimitives } from "@type-check/guards";

const a: unknown[] = [1, "string", true];
const b: unknown[] = [null, undefined, Symbol("x")];
const c: unknown[] = [1, {}, false];

const r1 = arePrimitives(a); // vrai
const r2 = arePrimitives(b); // vrai
const r3 = arePrimitives(c); // faux
```

### Importation globale d’objet

Pour importer les fonctions en tant que méthodes d’objet globales, utilisez:

```ts
import "@type-check/guards/register-global-object.mjs";
```

La méthode suivante sera alors disponible globalement:

- `Type.arePrimitives(array)`

## Analyse des fonctions

Une analyse tabulaire de la sortie produite lors de l’insertion de différents paramètres dans les fonctions est
documentée ici: [arePrimitives](../_analysis/arePrimitives.md)

<br>

---

<small>Le fichier a été généré le 31 janvier 2026 à 00:04:27 (UTC) avec l’utilisation du *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** par *
*[Roland Milto](https://roland-milto.de/)**.</small>