# areMaps

## Description

`areMaps` détermine si un tableau donné est non vide et si tous ses éléments sont des instances de `Map`.

### Cas d’utilisation

Valider une entrée inconnue (p. ex. issue de l’analyse JSON, d’API externes ou de sources dynamiques) avant de la
traiter comme une liste non vide d’objets `Map`.

> **Remarque pour les utilisateurs TypeScript:**
>
> Renvoie `false` pour un tableau vide ; il ne renvoie `true` que lorsque le tableau est rempli et que chaque élément
> est un `Map`.

### Avantages

- Garantit que chaque élément est une instance de `Map`, en renvoyant `true` uniquement lorsque l’ensemble du tableau
  réussit la vérification.
- Rejette les tableaux vides par conception, évitant l’acceptation accidentelle de « aucune donnée » comme entrée
  valide.
- Utile comme garde avant d’effectuer des opérations spécifiques à `Map` (p. ex. `.get()`, `.set()`, itération) sur une
  collection.

## Utilisation

### Syntaxe

Fonction:

- `areMaps(array)`

Paramètres:

- `array`: Le tableau à vérifier.

### Importation locale de fonction

```ts
import { areMaps } from "@type-check/guards";

const items: unknown[] = [new Map<string, number>([["a", 1]]), new Map<string, number>()];

if (areMaps(items)) {
  // items est garanti d’être un tableau non vide d’instances de Map à l’exécution
  for (const m of items) {
    m.set("x", 42);
  }
} else {
  // faux pour : les tableaux vides, ou les tableaux contenant une valeur non-Map
}

```

### Importation globale d’objet

Pour importer les fonctions en tant que méthodes d’objet globales, utilisez:

```ts
import "@type-check/guards/register-global-object.mjs";
```

La méthode suivante sera alors disponible globalement:

- `Type.areMaps(array)`

## Analyse des fonctions

Une analyse tabulaire de la sortie produite lors de l’insertion de différents paramètres dans les fonctions est
documentée ici: [areMaps](../_analysis/areMaps.md)

<br>

---

<small>Le fichier a été généré le 31 janvier 2026 à 16:12:26 (UTC) avec l’utilisation du *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** par *
*[Roland Milto](https://roland-milto.de/)**.</small>