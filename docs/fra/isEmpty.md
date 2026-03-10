# isEmpty

## Description

Détermine si une valeur donnée est vide, en renvoyant `true` pour `null`, `undefined`, les chaînes vides/composées
d’espaces, les tableaux vides, les `Map`/`Set` vides, ou les objets sans propriétés énumérables propres.

### Cas d’utilisation

Utilisez `isEmpty` pour valider les entrées et détecter les valeurs manquantes/vides sur plusieurs types de données (p.
ex. champs de formulaire, charges utiles d’API, objets de configuration) lorsque `null`, `undefined`, les chaînes
composées d’espaces, les collections vides et les objets sans propriétés doivent être traités comme vides.

> **Remarque pour les utilisateurs TypeScript:**
>
> `isEmpty` est un utilitaire qui renvoie un booléen (et non un prédicat de type TypeScript), il ne réduit donc pas les
> types à lui seul ; utilisez-le pour la validation/le branchement plutôt que pour un affinage à la compilation.

### Avantages

- Traite `null` et `undefined` comme `true` pour les vérifications de vacuité.
- Considère les chaînes composées uniquement d’espaces comme vides en les tronquant avant de vérifier la longueur.
- Prend en charge les types de conteneurs courants (tableaux, `Map`, `Set`) ainsi que les objets simples sans propriétés
  énumérables propres.
- Évite de compter les propriétés héritées en utilisant des vérifications `hasOwnProperty`.
- Renvoie un résultat booléen simple (`true`/`false`) adapté aux gardes et à la validation.

## Utilisation

### Syntaxe

Fonction:

- `isEmpty(value)`

Paramètres:

- `value`: La valeur à vérifier pour déterminer si elle est vide.

### Importation locale de fonction

```ts
import { isEmpty } from "@type-check/guards";

const values: unknown[] = [
  null,
  undefined,
  "   ",
  "Hello",
  [],
  [1],
  new Map(),
  new Set(["x"]),
  {},
  { a: undefined }
];

const results = values.map(v => ({ value: v, empty: isEmpty(v) }));
console.log(results);

```

### Importation globale d’objet

Pour importer les fonctions en tant que méthodes d’objet globales, utilisez:

```ts
import "@type-check/guards/register-global-object.mjs";
```

La méthode suivante sera alors disponible globalement:

- `Type.isEmpty(value)`

## Analyse des fonctions

Une analyse tabulaire de la sortie produite lors de l’insertion de différents paramètres dans les fonctions est
documentée ici: [isEmpty](../_analysis/isEmpty.md)

<br>

---

<small>Le fichier a été généré le 6 février 2026 à 16:18:21 (UTC) avec l’utilisation du *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** par *
*[Roland Milto](https://roland-milto.de/)**.</small>