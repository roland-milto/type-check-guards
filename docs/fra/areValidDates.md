# areValidDates

## Description

Détermine si un tableau est non vide et composé exclusivement d’objets `Date` valides.

### Cas d’utilisation

Utilisez `areValidDates` pour valider des tableaux fournis par l’utilisateur ou par une API avant d’effectuer des
opérations basées sur les dates (tri, vérifications de plage, mise en forme), en garantissant que toutes les entrées
sont de vrais objets `Date` valides et que la liste n’est pas vide.

> **Remarque pour les utilisateurs TypeScript:**
>
> `areValidDates` renvoie `false` pour un tableau vide ; assurez-vous que le tableau est censé être non vide avant de
> vous y fier comme étape de validation.

### Avantages

- Renvoie `true` uniquement lorsque chaque élément est une instance valide de `Date` (pas de dates invalides comme
  `new Date('invalid')`).
- Rejette une entrée vide en renvoyant `false`, garantissant que vous n’acceptez que des listes de dates pertinentes et
  non vides.
- Fournit une vérification booléenne simple de type garde, facile à composer avec d’autres validations.

## Utilisation

### Syntaxe

Fonction:

- `areValidDates(array)`

Paramètres:

- `array`: Le tableau à vérifier, pouvant contenir des objets `Date`.

### Importation locale de fonction

```ts
import { areValidDates } from "@type-check/guards";

const a = [new Date(), new Date("2025-12-17")];
const b = [new Date(), "not a date"] as unknown[];
const c: unknown[] = [];
const d = [new Date("invalid date")] as unknown[];

console.log(areValidDates(a)); // vrai
console.log(areValidDates(b)); // faux
console.log(areValidDates(c)); // faux
console.log(areValidDates(d)); // faux

```

### Importation globale d’objet

Pour importer les fonctions en tant que méthodes d’objet globales, utilisez:

```ts
import "@type-check/guards/register-global-object.mjs";
```

La méthode suivante sera alors disponible globalement:

- `Type.areValidDates(array)`

## Analyse des fonctions

Une analyse tabulaire de la sortie produite lors de l’insertion de différents paramètres dans les fonctions est
documentée ici: [areValidDates](../_analysis/areValidDates.md)

<br>

---

<small>Le fichier a été généré le 30 janvier 2026 à 14:31:42 (UTC) avec l’utilisation du *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** par *
*[Roland Milto](https://roland-milto.de/)**.</small>