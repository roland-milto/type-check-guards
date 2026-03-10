# areIntegers

## Description

`areIntegers` détermine si tous les éléments d’un tableau donné sont des entiers, en renvoyant `true` si c’est le cas et
`false` sinon.

### Cas d’utilisation

Utilisez `areIntegers` pour valider des données fournies par l’utilisateur ou externes (p. ex., paramètres de requête,
charges utiles JSON, lignes CSV) lorsque votre logique exige une liste remplie de valeurs entières telles que des
identifiants, des compteurs, des décalages de pagination ou des indices de tableau.

> **Remarque pour les utilisateurs TypeScript:**
>
> Utilisez `areIntegers` comme garde d’exécution pour des entrées `unknown[]` avant de les traiter comme un `number[]`
> ne contenant que des entiers. Si la fonction renvoie `false`, l’entrée n’est soit pas un tableau rempli, soit elle
> contient au moins une valeur non entière.

### Avantages

- Renvoie `true` uniquement lorsque chaque élément est un entier ; sinon renvoie `false`.
- Aide à valider une entrée inconnue avant d’effectuer des opérations réservées aux entiers (p. ex., indexation,
  comptages, identifiants).
- Échoue rapidement : s’arrête de vérifier dès qu’un élément non entier est trouvé.

## Utilisation

### Syntaxe

Fonction:

- `areIntegers(array)`

Paramètres:

- `array`: Le tableau à vérifier pour des éléments entiers.

### Importation locale de fonction

```ts
import { areIntegers } from "@type-check/guards";

const a: unknown[] = [1, 2, 3];
const b: unknown[] = [0, -10, 42];
const c: unknown[] = [1, 2, "3"];

console.log(areIntegers(a)); // vrai
console.log(areIntegers(b)); // vrai
console.log(areIntegers(c)); // faux

function sumIntegers(values: unknown[]): number {
  if (!areIntegers(values)) {
    throw new TypeError("Expected a filled array of integers");
  }
  return (values as number[]).reduce((acc, n) => acc + n, 0);
}

console.log(sumIntegers([10, 20, 30]));

```

### Importation globale d’objet

Pour importer les fonctions en tant que méthodes d’objet globales, utilisez:

```ts
import "@type-check/guards/register-global-object.mjs";
```

La méthode suivante sera alors disponible globalement:

- `Type.areIntegers(array)`

## Analyse des fonctions

Une analyse tabulaire de la sortie produite lors de l’insertion de différents paramètres dans les fonctions est
documentée ici: [areIntegers](../_analysis/areIntegers.md)

<br>

---

<small>Le fichier a été généré le 31 janvier 2026 à 00:58:16 (UTC) avec l’utilisation du *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** par *
*[Roland Milto](https://roland-milto.de/)**.</small>