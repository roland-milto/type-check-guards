# areIndexesFound

## Description

`areIndexesFound` vérifie si une valeur est un tableau non vide dont les éléments sont tous des index valides, en
renvoyant `true` si c’est le cas et `false` sinon.

### Cas d’utilisation

Valider des données fournies par l’utilisateur ou externes (p. ex. du JSON analysé) qui sont censées être une liste
d’index avant de les utiliser pour accéder à des tableaux ou les découper.

> **Remarque pour les utilisateurs TypeScript:**
>
> Utilisez `areIndexesFound` pour valider une entrée inconnue avant de traiter ses éléments comme des index de tableau ;
> elle renvoie `false` pour les tableaux vides et pour les tableaux contenant des valeurs qui ne sont pas des index.

### Avantages

- Renvoie `true` uniquement lorsque l’entrée est un tableau non vide et que chaque élément est un index valide.
- Échoue rapidement : renvoie `false` dès qu’un élément non index est rencontré.
- Utile comme garde avant d’utiliser des valeurs comme positions ou décalages de tableau.

## Utilisation

### Syntaxe

Fonction:

- `areIndexesFound(array)`

Paramètres:

- `array`: Le tableau à vérifier pour la conformité des index.

### Importation locale de fonction

```ts
import { areIndexesFound } from "@type-check/guards";

const a: unknown[] = [0, 1, 2];
const b: unknown[] = [0, "a", 2];
const c: unknown[] = [];

console.log(areIndexesFound(a)); // vrai
console.log(areIndexesFound(b)); // faux
console.log(areIndexesFound(c)); // faux

if (areIndexesFound(a)) {
  // Ici, `a` est confirmé comme étant un tableau d’index rempli.
  const firstIndex = a[0];
  console.log(firstIndex);
}

```

### Importation globale d’objet

Pour importer les fonctions en tant que méthodes d’objet globales, utilisez:

```ts
import "@type-check/guards/register-global-object.mjs";
```

La méthode suivante sera alors disponible globalement:

- `Type.areIndexesFound(array)`

## Analyse des fonctions

Une analyse tabulaire de la sortie produite lors de l’insertion de différents paramètres dans les fonctions est
documentée ici: [areIndexesFound](../_analysis/areIndexesFound.md)

<br>

---

<small>Le fichier a été généré le 31 janvier 2026 à 00:41:43 (UTC) avec l’utilisation du *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** par *
*[Roland Milto](https://roland-milto.de/)**.</small>