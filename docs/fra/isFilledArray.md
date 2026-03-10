# isFilledArray

## Description

Vérifie si `value` est un tableau contenant au moins un élément, en renvoyant `true` ou `false`.

### Cas d’utilisation

Utilisez `isFilledArray` pour valider des données entrantes (p. ex. charges utiles d’API, valeurs de formulaire,
configuration) avant d’itérer, d’accéder au premier élément ou d’appliquer une logique qui nécessite au moins un
élément.

> **Remarque pour les utilisateurs TypeScript:**
>
> `isFilledArray` est un garde d’exécution qui renvoie un booléen ; il ne restreint pas les types des éléments au-delà
> de la confirmation que le tableau n’est pas vide.

### Avantages

- Vérification simple et rapide d’un tableau non vide à l’aide de `Array.isArray` et d’un contrôle de longueur.
- Aide à éviter les erreurs d’exécution lorsque le code suppose qu’un tableau contient au moins un élément.
- Résultat booléen clair : renvoie `true` pour les tableaux non vides et `false` sinon.

## Utilisation

### Syntaxe

Fonction:

- `isFilledArray(value)`

Paramètres:

- `value`: La valeur à vérifier pour déterminer si c’est un tableau non vide.

### Importation locale de fonction

```ts
import { isFilledArray } from "@type-check/guards";

const input: unknown = [1, 2, 3];

if (Array.isArray(input) && isFilledArray(input)) {
  // input est un tableau non vide à l’exécution
  console.log(input[0]);
} else {
  console.log("Not a non-empty array");
}

```

### Importation globale d’objet

Pour importer les fonctions en tant que méthodes d’objet globales, utilisez:

```ts
import "@type-check/guards/register-global-object.mjs";
```

La méthode suivante sera alors disponible globalement:

- `Type.isFilledArray(value)`

## Analyse des fonctions

Une analyse tabulaire de la sortie produite lors de l’insertion de différents paramètres dans les fonctions est
documentée ici: [isFilledArray](../_analysis/isFilledArray.md)

<br>

---

<small>Le fichier a été généré le 6 février 2026 à 11:47:02 (UTC) avec l’utilisation du *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** par *
*[Roland Milto](https://roland-milto.de/)**.</small>