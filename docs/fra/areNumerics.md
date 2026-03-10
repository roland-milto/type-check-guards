# areNumerics

## Description

`areNumerics` vérifie si une valeur est un tableau non vide dont tous les éléments sont numériques.

### Cas d’utilisation

Utilisez `areNumerics` pour valider des données externes ou non typées (p. ex. charges utiles JSON, paramètres de
requête, saisie de formulaire) avant de calculer des sommes, des moyennes ou d’autres opérations numériques, en
garantissant que l’entrée est un tableau numérique non vide et en renvoyant `false` sinon.

> **Remarque pour les utilisateurs TypeScript:**
>
> Utilisez `areNumerics` pour protéger une entrée `unknown` avant de la traiter comme un tableau numérique ; la fonction
> renvoie `false` pour les non-tableaux et les tableaux vides.

### Avantages

- Renvoie `true` uniquement lorsque l’entrée est un tableau non vide et que chaque élément est numérique.
- Échoue rapidement : s’arrête dès qu’un élément non numérique est trouvé, en renvoyant `false`.
- Aide à valider en toute sécurité une entrée inconnue avant d’effectuer des opérations numériques.

## Utilisation

### Syntaxe

Fonction:

- `areNumerics(array)`

Paramètres:

- `array`: Le tableau à vérifier pour des éléments numériques.

### Importation locale de fonction

```ts
import { areNumerics } from "@type-check/guards";

const a: unknown = [1, 2, 3];
const b: unknown = [-3.14, 0, 42];
const c: unknown = [1, "two", 3];
const d: unknown = "string";
const e: unknown = [];

console.log(areNumerics(a)); // vrai
console.log(areNumerics(b)); // vrai
console.log(areNumerics(c)); // faux
console.log(areNumerics(d)); // faux
console.log(areNumerics(e)); // faux

function sumUnknown(values: unknown): number | null {
  if (!areNumerics(values)) return null;
  return values.reduce((acc, n) => acc + n, 0);
}

console.log(sumUnknown([10, 20, 30])); // 60
console.log(sumUnknown([10, "20", 30])); // null
```

### Importation globale d’objet

Pour importer les fonctions en tant que méthodes d’objet globales, utilisez:

```ts
import "@type-check/guards/register-global-object.mjs";
```

La méthode suivante sera alors disponible globalement:

- `Type.areNumerics(array)`

## Analyse des fonctions

Une analyse tabulaire de la sortie produite lors de l’insertion de différents paramètres dans les fonctions est
documentée ici: [areNumerics](../_analysis/areNumerics.md)

<br>

---

<small>Le fichier a été généré le 6 février 2026 à 16:04:59 (UTC) avec l’utilisation du *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** par *
*[Roland Milto](https://roland-milto.de/)**.</small>