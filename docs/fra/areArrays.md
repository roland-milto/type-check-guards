# areArrays

## Description

`areArrays` détermine si une valeur est un tableau bidimensionnel rempli dont tous les éléments sont des tableaux.

### Cas d’utilisation

Utilisez `areArrays` pour valider des entrées tabulaires ou de type matrice (p. ex., lignes CSV, données de grille ou
listes groupées) avant d’effectuer des opérations sur les lignes/colonnes ; la fonction renvoie `false` si l’entrée
n’est pas un tableau, est vide ou contient un élément qui n’est pas un tableau.

> **Remarque pour les utilisateurs TypeScript:**
>
> Utilisez `areArrays` lorsque vous devez vous assurer qu’une valeur est un tableau 2D non vide et que chaque ligne est
> un tableau avant d’itérer ou d’indexer dans des tableaux imbriqués.

### Avantages

- Valide que l’entrée est un tableau bidimensionnel non vide où chaque élément est un tableau.
- Renvoie un résultat booléen simple (`true`/`false`) adapté aux gardes et aux sorties anticipées.
- Aide à prévenir les erreurs d’exécution lorsque le code ultérieur suppose des opérations sur des tableaux imbriqués (
  p. ex., mapper des lignes).

## Utilisation

### Syntaxe

Fonction:

- `areArrays(array)`

Paramètres:

- `array`: L’entrée à vérifier.

### Importation locale de fonction

```ts
import { areArrays } from "@type-check/guards";

const value: unknown = [[1, 2], [3, 4]];

if (areArrays(value as unknown[][])) {
  // value est un tableau 2D avec des tableaux comme éléments
  const lengths = value.map(row => row.length);
  console.log(lengths);
} else {
  console.log("Not a 2D array of arrays");
}

```

### Importation globale d’objet

Pour importer les fonctions en tant que méthodes d’objet globales, utilisez:

```ts
import "@type-check/guards/register-global-object.mjs";
```

La méthode suivante sera alors disponible globalement:

- `Type.areArrays(array)`

## Analyse des fonctions

Une analyse tabulaire de la sortie produite lors de l’insertion de différents paramètres dans les fonctions est
documentée ici: [areArrays](../_analysis/areArrays.md)

<br>

---

<small>Le fichier a été généré le 6 février 2026 à 13:39:30 (UTC) avec l’utilisation du *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** par *
*[Roland Milto](https://roland-milto.de/)**.</small>