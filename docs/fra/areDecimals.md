# areDecimals

## Description

Vérifie si tous les éléments d’un tableau sont des nombres décimaux et si le tableau est rempli, en renvoyant `true` ou
`false`.

### Cas d’utilisation

Valider des listes fournies par l’utilisateur (p. ex. des colonnes CSV ou des entrées de formulaire) afin de s’assurer
que le tableau n’est pas vide et que chaque entrée est une valeur décimale avant l’analyse ou les calculs.

> **Remarque pour les utilisateurs TypeScript:**
>
> Utilisez `areDecimals` lorsque vous avez besoin d’une vérification booléenne rapide indiquant qu’un `unknown[]` n’est
> pas vide et que chaque élément est une représentation décimale.

### Avantages

- Garantit que l’entrée est un tableau rempli avant de valider les éléments, évitant l’acceptation accidentelle de
  listes vides.
- Valide chaque élément avec `isDecimal`, de sorte que des valeurs mixtes ou invalides entraînent immédiatement un
  résultat `false`.
- Fournit un résultat booléen simple (`true`/`false`) adapté aux gardes et aux flux de validation avec retour anticipé.

## Utilisation

### Syntaxe

Fonction:

- `areDecimals(array)`

Paramètres:

- `array`: Le tableau à vérifier.

### Importation locale de fonction

```ts
import { areDecimals } from "@type-check/guards";

const a: unknown[] = ["1.0", "2.5", "3.14"];
const b: unknown[] = ["1.0", "abc", "3.14"];
const c: unknown[] = [];

console.log(areDecimals(a)); // vrai
console.log(areDecimals(b)); // faux
console.log(areDecimals(c)); // faux
```

### Importation globale d’objet

Pour importer les fonctions en tant que méthodes d’objet globales, utilisez:

```ts
import "@type-check/guards/register-global-object.mjs";
```

La méthode suivante sera alors disponible globalement:

- `Type.areDecimals(array)`

## Analyse des fonctions

Une analyse tabulaire de la sortie produite lors de l’insertion de différents paramètres dans les fonctions est
documentée ici: [areDecimals](../_analysis/areDecimals.md)

<br>

---

<small>Le fichier a été généré le 31 janvier 2026 à 15:57:04 (UTC) avec l’utilisation du *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** par *
*[Roland Milto](https://roland-milto.de/)**.</small>