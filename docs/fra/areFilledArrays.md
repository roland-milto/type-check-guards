# areFilledArrays

## Description

`areFilledArrays` vérifie si un tableau bidimensionnel n’est pas vide et si tous ses sous-tableaux ne sont pas vides.

### Cas d’utilisation

Utilisez `areFilledArrays` pour valider une entrée tabulaire ou de type matrice (p. ex. lignes CSV, données de grille,
résultats groupés) afin de pouvoir supposer en toute sécurité qu’il existe au moins un sous-tableau et qu’aucun des
sous-tableaux n’est vide.

> **Remarque pour les utilisateurs TypeScript:**
>
> Utilisez `areFilledArrays` lorsque vous devez vous assurer qu’un tableau 2D comporte au moins une ligne et que chaque
> ligne contient au moins un élément avant d’itérer dessus ou d’y accéder par index.

### Avantages

- Valide que le tableau externe n’est pas vide et que chaque tableau interne n’est pas vide également, en renvoyant
  `true` uniquement lorsque les deux conditions sont remplies.
- Fonctionne avec tout type d’éléments à l’intérieur des sous-tableaux (p. ex. nombres, chaînes, objets, tableaux
  imbriqués) car il vérifie uniquement l’état « rempli » du tableau, pas le contenu des éléments.
- Fournit un résultat booléen simple (`true`/`false`) adapté aux gardes avant de traiter des données bidimensionnelles.

## Utilisation

### Syntaxe

Fonction:

- `areFilledArrays(array)`

Paramètres:

- `array`: Le tableau bidimensionnel à vérifier.

### Importation locale de fonction

```ts
import { areFilledArrays } from "@type-check/guards";

const a: unknown[][] = [[1]];
const b: unknown[][] = [["a", "b"], [1, 2, 3]];
const c: unknown[][] = [[{}, []], ["string"]];
const d: unknown[][] = [[]];
const e: unknown[][] = [[], [1, 2, 3]];
const f: unknown[][] = [];

console.log(areFilledArrays(a)); // vrai
console.log(areFilledArrays(b)); // vrai
console.log(areFilledArrays(c)); // vrai
console.log(areFilledArrays(d)); // faux
console.log(areFilledArrays(e)); // faux
console.log(areFilledArrays(f)); // faux

```

### Importation globale d’objet

Pour importer les fonctions en tant que méthodes d’objet globales, utilisez:

```ts
import "@type-check/guards/register-global-object.mjs";
```

La méthode suivante sera alors disponible globalement:

- `Type.areFilledArrays(array)`

## Analyse des fonctions

Une analyse tabulaire de la sortie produite lors de l’insertion de différents paramètres dans les fonctions est
documentée ici: [areFilledArrays](../_analysis/areFilledArrays.md)

<br>

---

<small>Le fichier a été généré le 6 février 2026 à 11:56:31 (UTC) avec l’utilisation du *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** par *
*[Roland Milto](https://roland-milto.de/)**.</small>