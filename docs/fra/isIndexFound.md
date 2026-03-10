# isIndexFound

## Description

`isIndexFound` détermine si une valeur donnée est un entier non négatif, indiquant qu’un index a été trouvé.

### Cas d’utilisation

Valider qu’un résultat de recherche représente un index utilisable (entier `>= 0`) avant d’indexer un tableau ou une
chaîne, afin d’éviter l’utilisation accidentelle de `-1` ou de valeurs non numériques.

> **Remarque pour les utilisateurs TypeScript:**
>
> Utilisez `isIndexFound` après des opérations comme `indexOf`, `findIndex` ou des recherches personnalisées où `-1` (ou
> d’autres valeurs invalides) peut indiquer « introuvable ». Lorsqu’elle renvoie `true`, la valeur est un nombre et peut
> être utilisée en toute sécurité comme index de tableau/chaîne.

### Avantages

- Fournit un garde de type simple pour détecter si un index a été trouvé en vérifiant qu’il s’agit d’un entier non
  négatif.
- Renvoie `true` uniquement pour des valeurs valides de type index (entiers `>= 0`), en rejetant les valeurs négatives,
  non entières et non numériques.
- Aide à éviter les erreurs de décalage d’une unité (off-by-one) et les erreurs liées aux valeurs sentinelles lors de
  l’utilisation d’API qui renvoient `-1` pour « introuvable ».

## Utilisation

### Syntaxe

Fonction:

- `isIndexFound(value)`

Paramètres:

- `value`: La valeur à vérifier pour déterminer si c’est un entier non négatif.

### Importation locale de fonction

```ts
import { isIndexFound } from "@type-check/guards";

const idx: unknown = "3";

if (isIndexFound(idx)) {
  // idx est un nombre ici et est >= 0
  const next = idx + 1;
  console.log(next);
} else {
  console.log("No valid index found");
}

// Utilisation typique avec indexOf
const pos = "hello".indexOf("e");
if (isIndexFound(pos)) {
  console.log("Found at", pos);
}
```

### Importation globale d’objet

Pour importer les fonctions en tant que méthodes d’objet globales, utilisez:

```ts
import "@type-check/guards/register-global-object.mjs";
```

La méthode suivante sera alors disponible globalement:

- `Type.isIndexFound(value)`

## Analyse des fonctions

Une analyse tabulaire de la sortie produite lors de l’insertion de différents paramètres dans les fonctions est
documentée ici: [isIndexFound](../_analysis/isIndexFound.md)

<br>

---

<small>Le fichier a été généré le 31 janvier 2026 à 00:45:54 (UTC) avec l’utilisation du *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** par *
*[Roland Milto](https://roland-milto.de/)**.</small>