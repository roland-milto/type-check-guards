# areDates

## Description

`areDates` détermine si un tableau donné est rempli et ne contient que des objets `Date`, en renvoyant `true` uniquement
lorsque tous les éléments sont des dates valides.

### Cas d’utilisation

Utilisez `areDates` pour valider une entrée inconnue (p. ex. JSON analysé, données de formulaire, charges utiles d’API)
avant d’exécuter une logique spécifique aux dates comme le tri par heure, le formatage ou le calcul d’intervalles.

> **Remarque pour les utilisateurs TypeScript:**
>
> Renvoie `true` uniquement pour les tableaux non vides dont chaque élément est un `Date` ; les tableaux vides renvoient
`false`.

### Avantages

- Garantit qu’un tableau n’est pas vide avant de valider son contenu, évitant un résultat `true` pour des entrées vides.
- Vérifie que chaque élément est une instance de `Date`, en renvoyant immédiatement `false` dès la première discordance.
- Utile comme vérification de type garde avant d’effectuer des opérations spécifiques aux dates sur les éléments du
  tableau.

## Utilisation

### Syntaxe

Fonction:

- `areDates(array)`

Paramètres:

- `array`: Le tableau à vérifier pour des objets `Date`.

### Importation locale de fonction

```ts
import { areDates } from "@type-check/guards";

const a: unknown[] = [new Date(), new Date("2021-01-01")];
const b: unknown[] = [];
const c: unknown[] = [new Date(), "not a date"];

console.log(areDates(a)); // vrai
console.log(areDates(b)); // faux
console.log(areDates(c)); // faux

if (areDates(a)) {
  const timestamps = a.map(d => d.getTime());
  console.log(timestamps);
}

```

### Importation globale d’objet

Pour importer les fonctions en tant que méthodes d’objet globales, utilisez:

```ts
import "@type-check/guards/register-global-object.mjs";
```

La méthode suivante sera alors disponible globalement:

- `Type.areDates(array)`

## Analyse des fonctions

Une analyse tabulaire de la sortie produite lors de l’insertion de différents paramètres dans les fonctions est
documentée ici: [areDates](../_analysis/areDates.md)

<br>

---

<small>Le fichier a été généré le 31 janvier 2026 à 15:30:14 (UTC) avec l’utilisation du *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** par *
*[Roland Milto](https://roland-milto.de/)**.</small>