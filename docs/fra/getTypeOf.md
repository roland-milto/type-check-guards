# getTypeOf

## Description

`getTypeOf` renvoie un libellé de type détaillé et lisible par des humains pour une valeur donnée, y compris des types
numériques affinés et des catégories d’objets spécifiques.

### Cas d’utilisation

Utilisez `getTypeOf` pour normaliser la détection de type dans la validation des entrées et les diagnostics—par exemple,
pour rejeter `nan`, n’accepter que des identifiants `integer`, traiter des chaînes numériques comme `decimal`
différemment d’une simple `string`, ou journaliser des catégories d’objets précises telles que `date` et `regexp`.

> **Remarque pour les utilisateurs TypeScript:**
>
> Le type de retour est `DataTypeAsString | string`. Traitez-le comme un libellé descriptif ; comparez-le à des
> littéraux connus comme `integer`, `float`, `nan`, `array`, `null` et `undefined` lors de branchements conditionnels.

### Avantages

- Renvoie une chaîne de type plus granulaire que le `typeof` de JavaScript, y compris des sous-types numériques comme
  `integer`, `float` et `nan`.
- Distingue explicitement `null` et `undefined` en tant que `null` et `undefined`.
- Détecte les formats courants de chaînes numériques et les signale comme `binary`, `octal`, `decimal` ou `hexadecimal`
  au lieu de simplement `string`.
- Identifie les tableaux comme `array` et utilise `Object.prototype.toString` pour fournir des noms de types d’objets
  spécifiques (p. ex. `date`, `regexp`, `map`, `set`).
- Utile pour la validation, la journalisation et le débogage lorsque des libellés de type cohérents et lisibles par des
  humains sont nécessaires.

## Utilisation

### Syntaxe

Fonction:

- `getTypeOf(value)`

Paramètres:

- `value`: La valeur pour laquelle déterminer le type de données.

### Importation locale de fonction

```ts
import { getTypeOf } from "@type-check/guards";

const samples: unknown[] = [
  42,
  3.14,
  NaN,
  "3.14",
  "0xff",
  "0b1010",
  "0o77",
  "hello",
  null,
  undefined,
  [1, 2, 3],
  new Date(),
  /abc/i,
  new Map(),
  { a: 1 }
];

const results = samples.map((v) => ({ value: v, type: getTypeOf(v) }));
console.log(results);

// Vérifications d'exemple
if (getTypeOf(42) === "integer") {
  console.log("Got an integer");
}

if (getTypeOf("3.14") === "decimal") {
  console.log("Got a decimal string");
}

```

### Importation globale d’objet

Pour importer les fonctions en tant que méthodes d’objet globales, utilisez:

```ts
import "@type-check/guards/register-global-object.mjs";
```

La méthode suivante sera alors disponible globalement:

- `Type.getTypeOf(value)`

## Analyse des fonctions

Une analyse tabulaire de la sortie produite lors de l’insertion de différents paramètres dans les fonctions est
documentée ici: [getTypeOf](../_analysis/getTypeOf.md)

<br>

---

<small>Le fichier a été généré le 6 février 2026 à 13:06:24 (UTC) avec l’utilisation du *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** par *
*[Roland Milto](https://roland-milto.de/)**.</small>