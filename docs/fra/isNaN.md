# isNaN

## Description

Détermine si la `value` fournie est un `NaN` de type `number` sans convertir les chaînes.

### Cas d’utilisation

Valider des entrées non fiables ou faiblement typées (p. ex. charges utiles d’API, valeurs de formulaire, JSON analysé)
afin de détecter la valeur spéciale `NaN` et de la gérer explicitement, tout en considérant que les entrées non
numériques ne sont pas `NaN`.

> **Remarque pour les utilisateurs TypeScript:**
>
> Utilisez `isNaN` lorsque vous devez détecter la valeur numérique spéciale `NaN` tout en vous assurant que l’entrée est
> bien un `number` (sans conversion de chaîne en nombre).

### Avantages

- Vérifie si une valeur est `NaN` sans convertir de force les non-nombres (p. ex. les chaînes) en nombres.
- Renvoie `true` uniquement pour les valeurs qui sont à la fois de type `number` et `NaN`.
- Sûr pour les entrées `unknown` et évite les faux positifs dus aux conversions implicites.

## Utilisation

### Syntaxe

Fonction:

- `isNaN(value)`

Paramètres:

- `value`: La valeur à vérifier pour déterminer si elle est un `NaN` de type `number`.

### Importation locale de fonction

```ts
import { isNaN } from "@type-check/guards";

const a: unknown = NaN;
const b: unknown = "NaN";
const c: unknown = 123;

console.log(isNaN(a)); // vrai
console.log(isNaN(b)); // faux
console.log(isNaN(c)); // faux

if (isNaN(a)) {
  // a est un nombre et plus précisément NaN
}
```

### Importation globale d’objet

Pour importer les fonctions en tant que méthodes d’objet globales, utilisez:

```ts
import "@type-check/guards/register-global-object.mjs";
```

La méthode suivante sera alors disponible globalement:

- `Type.isNaN(value)`

## Analyse des fonctions

Une analyse tabulaire de la sortie produite lors de l’insertion de différents paramètres dans les fonctions est
documentée ici: [isNaN](../_analysis/isNaN.md)

<br>

---

<small>Le fichier a été généré le 30 janvier 2026 à 15:45:58 (UTC) avec l’utilisation du *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** par *
*[Roland Milto](https://roland-milto.de/)**.</small>