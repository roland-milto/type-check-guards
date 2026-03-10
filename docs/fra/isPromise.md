# isPromise

## Description

Détermine si une valeur donnée est une `Promise`.

### Cas d’utilisation

Utilisez `isPromise` pour valider des entrées inconnues avant de les traiter comme une `Promise`, par exemple lors de la
gestion de valeurs renvoyées par des plugins, des imports dynamiques ou des API faiblement typées.

> **Remarque pour les utilisateurs TypeScript:**
>
> `isPromise` vérifie via `instanceof Promise`, donc il ne renvoie `true` que pour de véritables instances de
`Promise` (pas pour des thenables génériques).

### Avantages

- Fournit une vérification simple à l’exécution pour savoir si une valeur est une `Promise`.
- Aide à sécuriser les chemins de code qui nécessitent une véritable instance de `Promise`, en renvoyant `true` ou
  `false` de manière prévisible.
- Évite les faux positifs provenant d’objets « thenable » (p. ex. `{ then() {} }`) en exigeant une véritable instance de
  `Promise`.

## Utilisation

### Syntaxe

Fonction:

- `isPromise(value)`

Paramètres:

- `value`: La valeur à vérifier.

### Importation locale de fonction

```ts
import { isPromise } from "@type-check/guards";

const a: unknown = Promise.resolve(123);
const b: unknown = { then() {} };

if (isPromise(a)) {
  a.then((v) => console.log("resolved:", v));
}

console.log(isPromise(a)); // vrai
console.log(isPromise(b)); // faux
console.log(isPromise(123)); // faux
console.log(isPromise(null)); // faux

```

### Importation globale d’objet

Pour importer les fonctions en tant que méthodes d’objet globales, utilisez:

```ts
import "@type-check/guards/register-global-object.mjs";
```

La méthode suivante sera alors disponible globalement:

- `Type.isPromise(value)`

## Analyse des fonctions

Une analyse tabulaire de la sortie produite lors de l’insertion de différents paramètres dans les fonctions est
documentée ici: [isPromise](../_analysis/isPromise.md)

<br>

---

<small>Le fichier a été généré le 30 janvier 2026 à 23:52:46 (UTC) avec l’utilisation du *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** par *
*[Roland Milto](https://roland-milto.de/)**.</small>