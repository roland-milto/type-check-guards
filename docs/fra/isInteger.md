# isInteger

## Description

Détermine si une `value` donnée est un nombre entier sûr.

### Cas d’utilisation

Valider des entrées non fiables (p. ex., paramètres de requête, charges utiles JSON, variables d’environnement) avant de
les utiliser comme entier pour des indices de tableau, la pagination, des compteurs ou des identifiants de base de
données.

> **Remarque pour les utilisateurs TypeScript:**
>
> Utilisez `isInteger` pour valider une entrée inconnue avant de la traiter comme un entier numérique ; il renvoie
`true` uniquement pour les valeurs où `typeof value === "number"` et `Number.isSafeInteger(value)`.

### Avantages

- Vérifie à la fois le type et la sécurité numérique : renvoie `true` uniquement lorsque l’entrée est un nombre et un
  entier sûr.
- Évite les pièges courants liés à la coercition numérique : des chaînes comme "5" renvoient correctement `false`.
- Rejette les non-entiers et les entiers non sûrs, ce qui le rend adapté aux identifiants, compteurs et à l’indexation
  de tableaux.

## Utilisation

### Syntaxe

Fonction:

- `isInteger(value)`

Paramètres:

- `value`: La valeur à vérifier pour déterminer si elle est un entier.

### Importation locale de fonction

```ts
import { isInteger } from "@type-check/guards";

const a = isInteger(5);      // vrai
const b = isInteger(-100);   // vrai
const c = isInteger("5");    // faux
const d = isInteger(5.5);    // faux
const e = isInteger(null);   // faux

```

### Importation globale d’objet

Pour importer les fonctions en tant que méthodes d’objet globales, utilisez:

```ts
import "@type-check/guards/register-global-object.mjs";
```

La méthode suivante sera alors disponible globalement:

- `Type.isInteger(value)`

## Analyse des fonctions

Une analyse tabulaire de la sortie produite lors de l’insertion de différents paramètres dans les fonctions est
documentée ici: [isInteger](../_analysis/isInteger.md)

<br>

---

<small>Le fichier a été généré le 31 janvier 2026 à 00:49:48 (UTC) avec l’utilisation du *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** par *
*[Roland Milto](https://roland-milto.de/)**.</small>