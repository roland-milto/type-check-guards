# areFinite

## Description

`areFinite` vérifie si une valeur est un tableau non vide dont les éléments sont tous des nombres finis, en renvoyant
`true` si c’est le cas et `false` sinon.

### Cas d’utilisation

Valider des tableaux d’entrées numériques (p. ex. séries de graphiques, listes de coordonnées, échantillons de mesures)
avant d’effectuer des calculs, en garantissant que le résultat est `true` uniquement lorsque toutes les valeurs sont des
nombres finis.

> **Remarque pour les utilisateurs TypeScript:**
>
> Utilisez `areFinite` lorsque vous devez vous assurer qu’un tableau n’est pas vide et ne contient que des nombres
> finis ; la fonction renvoie `false` pour les tableaux vides et pour les tableaux contenant `NaN` ou des infinis.

### Avantages

- Renvoie `true` uniquement lorsque l’entrée est un tableau non vide et que chaque élément est un nombre fini.
- Rejette `Infinity`, `-Infinity` et `NaN` en s’appuyant sur des vérifications `isFinite` pour chaque élément.
- Fournit un résultat booléen simple (`true`/`false`) adapté aux gardes et aux flux de validation.

## Utilisation

### Syntaxe

Fonction:

- `areFinite(array)`

Paramètres:

- `array`: Le tableau à vérifier afin de s’assurer que tous ses éléments sont finis.

### Importation locale de fonction

```ts
import { areFinite } from "@type-check/guards";

const a: unknown[] = [1, 2, 3];
const b: unknown[] = [1, Infinity, 3];
const c: unknown[] = [true, false, null];

console.log(areFinite(a)); // vrai
console.log(areFinite(b)); // faux
console.log(areFinite(c)); // faux

function sumIfFinite(values: unknown[]): number | null {
  if (!areFinite(values)) return null;
  return values.reduce((acc, n) => acc + n, 0);
}

console.log(sumIfFinite([10, 20, 30])); // 60
console.log(sumIfFinite([10, NaN, 30])); // null
```

### Importation globale d’objet

Pour importer les fonctions en tant que méthodes d’objet globales, utilisez:

```ts
import "@type-check/guards/register-global-object.mjs";
```

La méthode suivante sera alors disponible globalement:

- `Type.areFinite(array)`

## Analyse des fonctions

Une analyse tabulaire de la sortie produite lors de l’insertion de différents paramètres dans les fonctions est
documentée ici: [areFinite](../_analysis/areFinite.md)

<br>

---

<small>Le fichier a été généré le 30 janvier 2026 à 16:34:35 (UTC) avec l’utilisation du *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** par *
*[Roland Milto](https://roland-milto.de/)**.</small>