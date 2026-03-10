# isWeakMap

## Description

Détermine si une `value` donnée est une instance de `WeakMap`.

### Cas d’utilisation

Utilisez `isWeakMap` lorsque vous acceptez une valeur `unknown` (p. ex. depuis une API publique, un système de plugins
ou une configuration dynamique) et que vous devez vérifier qu’il s’agit d’un `WeakMap` avant d’utiliser un comportement
spécifique à `WeakMap`.

> **Remarque pour les utilisateurs TypeScript:**
>
> `isWeakMap` effectue une vérification `instanceof WeakMap` ; c’est un garde d’exécution qui renvoie `true` uniquement
> pour de véritables instances de `WeakMap`.

### Avantages

- Vérification simple à l’exécution pour savoir si une valeur est un `WeakMap`.
- Aide à prévenir une mauvaise utilisation des API qui exigent un `WeakMap` en renvoyant `true`/`false` au lieu de lever
  une exception.
- Fonctionne avec des entrées `unknown`, ce qui le rend pratique aux frontières des modules (p. ex. analyse, données
  externes ou code non typé).

## Utilisation

### Syntaxe

Fonction:

- `isWeakMap(value)`

Paramètres:

- `value`: La valeur à vérifier.

### Importation locale de fonction

```ts
import { isWeakMap } from "@type-check/guards";

const a: unknown = new WeakMap<object, number>();
const b: unknown = new Map();

if (isWeakMap(a)) {
  // a est une WeakMap à l'exécution
}

console.log(isWeakMap(a)); // true
console.log(isWeakMap(b)); // false
```

### Importation globale d’objet

Pour importer les fonctions en tant que méthodes d’objet globales, utilisez:

```ts
import "@type-check/guards/register-global-object.mjs";
```

La méthode suivante sera alors disponible globalement:

- `Type.isWeakMap(value)`

## Analyse des fonctions

Une analyse tabulaire de la sortie produite lors de l’insertion de différents paramètres dans les fonctions est
documentée ici: [isWeakMap](../_analysis/isWeakMap.md)

<br>

---

<small>Le fichier a été généré le 30 janvier 2026 à 13:24:58 (UTC) avec l’utilisation du *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** par *
*[Roland Milto](https://roland-milto.de/)**.</small>