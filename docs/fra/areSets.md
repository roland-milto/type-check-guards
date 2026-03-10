# areSets

## Description

Vérifie si un tableau non vide donné ne contient que des instances de `Set`, en renvoyant `true` si c’est le cas et
`false` sinon.

### Cas d’utilisation

Valider qu’une valeur (p. ex. issue d’une saisie utilisateur, d’un parsing JSON ou d’API externes) est un tableau non
vide d’objets `Set` avant de traiter chaque ensemble.

> **Remarque pour les utilisateurs TypeScript:**
>
> Utilisez `areSets` pour valider une entrée inconnue avant d’itérer et d’appeler les API de `Set` (p. ex. `.size`,
`.has`, `.add`) sur chaque élément.

### Avantages

- Renvoie `true` uniquement lorsque l’entrée est un tableau non vide et que chaque élément est une instance de `Set`.
- Évite les faux positifs pour les tableaux vides en renvoyant `false` lorsque le tableau ne contient aucun élément.
- Utile comme garde d’exécution avant d’effectuer des opérations spécifiques à `Set` sur chaque élément.

## Utilisation

### Syntaxe

Fonction:

- `areSets(array)`

Paramètres:

- `array`: Le tableau à vérifier pour des instances de `Set`.

### Importation locale de fonction

```ts
import { areSets } from "@type-check/guards";

const a = [new Set(), new Set([1, 2]), new Set()];
const b = [new Set(), {}, new Set([1, 2])];
const c: unknown[] = [];

if (areSets(a)) {
  // a est un tableau d’instances de Set à l’exécution
  for (const s of a) {
    console.log(s.size);
  }
}

console.log(areSets(b)); // faux
console.log(areSets(c)); // faux
```

### Importation globale d’objet

Pour importer les fonctions en tant que méthodes d’objet globales, utilisez:

```ts
import "@type-check/guards/register-global-object.mjs";
```

La méthode suivante sera alors disponible globalement:

- `Type.areSets(array)`

## Analyse des fonctions

Une analyse tabulaire de la sortie produite lors de l’insertion de différents paramètres dans les fonctions est
documentée ici: [areSets](../_analysis/areSets.md)

<br>

---

<small>Le fichier a été généré le 30 janvier 2026 à 23:13:18 (UTC) avec l’utilisation du *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** par *
*[Roland Milto](https://roland-milto.de/)**.</small>