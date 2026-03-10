# areBigInts

## Description

`areBigInts` détermine si une valeur est un tableau non vide ne contenant que des valeurs `bigint`.

### Cas d’utilisation

Valider une entrée inconnue (p. ex., des données de type JSON analysées, des charges utiles d’API ou des paramètres de
fonction typés en `unknown`) afin de s’assurer qu’il s’agit d’un tableau non vide de valeurs `bigint` avant traitement ;
renvoie `true` uniquement lorsque tous les éléments sont des `bigint`, sinon `false`.

> **Remarque pour les utilisateurs TypeScript:**
>
> Utilisez `areBigInts` comme garde d’exécution avant d’effectuer des opérations réservées aux `bigint` (p. ex.,
> arithmétique, comparaisons) sur une entrée inconnue.

### Avantages

- Garantit que chaque élément est un `bigint`, en renvoyant `true` uniquement lorsque l’ensemble du tableau correspond.
- Rejette par conception les non-tableaux et les tableaux vides (via `isFilledArray`), évitant l’acceptation
  accidentelle d’entrées invalides.
- Échec rapide : renvoie `false` dès qu’un élément non-`bigint` est trouvé.

## Utilisation

### Syntaxe

Fonction:

- `areBigInts(array)`

Paramètres:

- `array`: La valeur à vérifier.

### Importation locale de fonction

```ts
import { areBigInts } from "@type-check/guards";

const a: unknown = [10n, 20n];
const b: unknown = [10n, 20];
const c: unknown = [];

console.log(areBigInts(a)); // vrai
console.log(areBigInts(b)); // faux
console.log(areBigInts(c)); // faux
```

### Importation globale d’objet

Pour importer les fonctions en tant que méthodes d’objet globales, utilisez:

```ts
import "@type-check/guards/register-global-object.mjs";
```

La méthode suivante sera alors disponible globalement:

- `Type.areBigInts(array)`

## Analyse des fonctions

Une analyse tabulaire de la sortie produite lors de l’insertion de différents paramètres dans les fonctions est
documentée ici: [areBigInts](../_analysis/areBigInts.md)

<br>

---

<small>Le fichier a été généré le 31 janvier 2026 à 23:25:47 (UTC) avec l’utilisation du *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** par *
*[Roland Milto](https://roland-milto.de/)**.</small>