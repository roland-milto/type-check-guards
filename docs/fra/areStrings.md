# areStrings

## Description

`areStrings` vérifie si un tableau est non vide et si tous ses éléments sont des chaînes de caractères, en renvoyant
`true` uniquement dans ce cas.

### Cas d’utilisation

Valider des données externes ou fournies par l’utilisateur (p. ex., paramètres de requête, charges utiles JSON, champs
CSV) afin de s’assurer que vous disposez d’une liste non vide de chaînes de caractères avant le traitement.

> **Remarque pour les utilisateurs TypeScript:**
>
> Utilisez `areStrings` pour valider des tableaux inconnus avant d’appliquer une logique réservée aux chaînes ; la
> fonction renvoie `false` pour les tableaux vides.

### Avantages

- Garantit que chaque élément est une chaîne de caractères et rejette les tableaux de types mixtes en renvoyant `false`.
- Rejette les tableaux vides ; ainsi, `true` indique uniquement une liste non vide de chaînes de caractères.
- Utile comme garde d’exécution rapide avant d’effectuer des opérations réservées aux chaînes (p. ex., `trim`,
  `toLowerCase`).

## Utilisation

### Syntaxe

Fonction:

- `areStrings(value)`

Paramètres:

- `value`: Expected type `string[]`.

### Importation locale de fonction

```ts
import { areStrings } from "@type-check/guards";

const input: unknown = ["hello", "world"];

if (Array.isArray(input) && areStrings(input)) {
  // input est un string[] non vide à l’exécution
  const upper = input.map((s) => s.toUpperCase());
  console.log(upper);
} else {
  console.log("Not a non-empty array of strings");
}

```

### Importation globale d’objet

Pour importer les fonctions en tant que méthodes d’objet globales, utilisez:

```ts
import "@type-check/guards/register-global-object.mjs";
```

La méthode suivante sera alors disponible globalement:

- `Type.areStrings(value)`

## Analyse des fonctions

Une analyse tabulaire de la sortie produite lors de l’insertion de différents paramètres dans les fonctions est
documentée ici: [areStrings](../_analysis/areStrings.md)

<br>

---

<small>Le fichier a été généré le 30 janvier 2026 à 13:18:06 (UTC) avec l’utilisation du *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** par *
*[Roland Milto](https://roland-milto.de/)**.</small>