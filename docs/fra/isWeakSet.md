# isWeakSet

## Description

Détermine si la `value` donnée est un `WeakSet` d’objets.

### Cas d’utilisation

Utilisez `isWeakSet` lorsque vous acceptez une entrée non typée (p. ex. depuis des API externes, une configuration
dynamique ou des valeurs `unknown`) et que vous devez vérifier qu’il s’agit d’un `WeakSet` avant d’utiliser des
opérations spécifiques à `WeakSet`.

> **Remarque pour les utilisateurs TypeScript:**
>
> Utilisez `isWeakSet` pour affiner une valeur `unknown` en `WeakSet<object>` à l’exécution ; notez que `WeakSet` ne
> peut contenir que des références d’objets.

### Avantages

- Fournit une vérification simple à l’exécution pour déterminer si une valeur est un `WeakSet`.
- Aide à prévenir les erreurs de type en garantissant que seules les instances de `WeakSet` sont traitées comme telles.
- Fonctionne avec toute entrée `unknown` et renvoie un résultat booléen clair (`true`/`false`).

## Utilisation

### Syntaxe

Fonction:

- `isWeakSet(value)`

Paramètres:

- `value`: La valeur à vérifier.

### Importation locale de fonction

```ts
import { isWeakSet } from "@type-check/guards";

const a: unknown = new WeakSet<object>();
const b: unknown = new Set();

console.log(isWeakSet(a)); // vrai
console.log(isWeakSet(b)); // faux

if (isWeakSet(a)) {
  // a est un WeakSet à l'exécution
}
```

### Importation globale d’objet

Pour importer les fonctions en tant que méthodes d’objet globales, utilisez:

```ts
import "@type-check/guards/register-global-object.mjs";
```

La méthode suivante sera alors disponible globalement:

- `Type.isWeakSet(value)`

## Analyse des fonctions

Une analyse tabulaire de la sortie produite lors de l’insertion de différents paramètres dans les fonctions est
documentée ici: [isWeakSet](../_analysis/isWeakSet.md)

<br>

---

<small>Le fichier a été généré le 30 janvier 2026 à 14:14:43 (UTC) avec l’utilisation du *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** par *
*[Roland Milto](https://roland-milto.de/)**.</small>