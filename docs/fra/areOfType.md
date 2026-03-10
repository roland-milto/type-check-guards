# areOfType

## Description

Vérifie si tous les éléments du `array` donné sont du `type` spécifié.

### Cas d’utilisation

Utilisez `areOfType` pour valider une entrée inconnue (p. ex. JSON analysé, charges utiles d’API, saisie utilisateur)
avant d’effectuer des opérations spécifiques au type sur chaque élément d’un tableau.

> **Remarque pour les utilisateurs TypeScript:**
>
> Comme `areOfType` est un garde de type, TypeScript réduit le tableau à l’intérieur d’un bloc `if (areOfType(...)) {}`
> en `Array<DataTypeOf<T>>`.

### Avantages

- Fournit un garde de type TypeScript : lorsqu’il renvoie `true`, l’entrée est réduite à `Array<DataTypeOf<T>>`.
- Valide chaque élément par rapport au type d’exécution demandé, empêchant les tableaux de types mixtes de passer.
- Échoue rapidement : renvoie `false` dès qu’un élément non correspondant est trouvé.
- Rejette les non-tableaux et les tableaux vides par conception (dépend de `isFilledArray`).

## Utilisation

### Syntaxe

Fonction:

- `areOfType(array, type)`

Paramètres:

- `array`: Le tableau à vérifier.
- `type`: Le type à vérifier pour chaque élément du tableau.

### Importation locale de fonction

```ts
import { areOfType } from "@type-check/guards";

const values: unknown[] = [1, 2, 3];

if (areOfType(values, "number")) {
  // values est maintenant number[]
  const sum = values.reduce((a, b) => a + b, 0);
  console.log(sum);
}

const mixed: unknown[] = [1, "2", 3];
const allNumbers = areOfType(mixed, "number"); // faux

```

### Importation globale d’objet

Pour importer les fonctions en tant que méthodes d’objet globales, utilisez:

```ts
import "@type-check/guards/register-global-object.mjs";
```

La méthode suivante sera alors disponible globalement:

- `Type.areOfType(array, type)`

## Analyse des fonctions

Une analyse tabulaire de la sortie produite lors de l’insertion de différents paramètres dans les fonctions est
documentée ici: [areOfType](../_analysis/areOfType.md)

<br>

---

<small>Le fichier a été généré le 30 janvier 2026 à 17:09:25 (UTC) avec l’utilisation du *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** par *
*[Roland Milto](https://roland-milto.de/)**.</small>