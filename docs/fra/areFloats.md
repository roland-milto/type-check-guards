# areFloats

## Description

`areFloats` vérifie si un tableau donné est rempli et si tous ses éléments sont des flottants.

### Cas d’utilisation

Utilisez `areFloats` lorsque vous recevez un `unknown[]` (p. ex. depuis du JSON, des paramètres de requête ou des API
externes) et que vous devez vous assurer qu’il s’agit d’un tableau rempli où chaque élément est un flottant avant
d’exécuter une logique numérique telle que la moyenne, l’interpolation ou des calculs statistiques.

> **Remarque pour les utilisateurs TypeScript:**
>
> Utilisez `areFloats` pour protéger `unknown[]` avant de le traiter comme un `number[]` ne contenant que des
> flottants ; la fonction renvoie `false` pour les tableaux vides et pour tout élément non flottant.

### Avantages

- Renvoie `true` uniquement lorsque l’entrée est un tableau non vide et que chaque élément est un flottant.
- Échoue rapidement : renvoie `false` dès qu’un élément non flottant est trouvé.
- Aide à valider une entrée inconnue avant d’effectuer des calculs spécifiques aux flottants.

## Utilisation

### Syntaxe

Fonction:

- `areFloats(array)`

Paramètres:

- `array`: Le tableau à vérifier pour des éléments flottants.

### Importation locale de fonction

```ts
import { areFloats } from "@type-check/guards";

const a: unknown[] = [3.14, 2.71, 1.0];
const b: unknown[] = [3.14, 2];
const c: unknown[] = [];

console.log(areFloats(a)); // vrai
console.log(areFloats(b)); // faux
console.log(areFloats(c)); // faux

function sumFloats(values: unknown): number | null {
  if (!Array.isArray(values) || !areFloats(values)) return null;
  return values.reduce((acc, n) => acc + n, 0);
}

console.log(sumFloats([0.5, 1.25])); // 1.75
console.log(sumFloats([1, 2])); // null
```

### Importation globale d’objet

Pour importer les fonctions en tant que méthodes d’objet globales, utilisez:

```ts
import "@type-check/guards/register-global-object.mjs";
```

La méthode suivante sera alors disponible globalement:

- `Type.areFloats(array)`

## Analyse des fonctions

Une analyse tabulaire de la sortie produite lors de l’insertion de différents paramètres dans les fonctions est
documentée ici: [areFloats](../_analysis/areFloats.md)

<br>

---

<small>Le fichier a été généré le 30 janvier 2026 à 15:57:15 (UTC) avec l’utilisation du *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** par *
*[Roland Milto](https://roland-milto.de/)**.</small>