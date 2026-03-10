# isPlainObject

## Description

Vérifie si la `value` donnée est un objet simple et renvoie `true` si c’est le cas, sinon `false`.

### Cas d’utilisation

Valider qu’une entrée `unknown` (p. ex. JSON analysé, données externes ou arguments de fonction) est un objet simple
avant de lire des clés ou de la mapper vers un objet de configuration typé.

> **Remarque pour les utilisateurs TypeScript:**
>
> `isPlainObject` est utile pour affiner `unknown` avant de le traiter comme un objet de type enregistrement ; il
> renvoie `true` uniquement pour les valeurs dont l’étiquette interne est `[object Object]`.

### Avantages

- Fournit une vérification simple et fiable pour déterminer si une valeur est un objet simple (c.-à-d. `Object` / `{}`),
  en renvoyant `true` ou `false`.
- Aide à distinguer les objets simples des tableaux, des fonctions, de `null` et d’autres types qui ne sont pas des
  objets simples.
- Utile comme garde de type en TypeScript pour affiner des valeurs `unknown` avant d’accéder aux propriétés d’un objet.

## Utilisation

### Syntaxe

Fonction:

- `isPlainObject(value)`

Paramètres:

- `value`: La valeur à tester pour déterminer si elle est un objet simple.

### Importation locale de fonction

```ts
import { isPlainObject } from "@type-check/guards";

const input: unknown = JSON.parse('{"a":1}');

if (isPlainObject(input)) {
  // input est un objet simple ici
  console.log(Object.keys(input));
} else {
  console.log("Not a plain object");
}

console.log(isPlainObject({})); // vrai
console.log(isPlainObject([])); // faux
console.log(isPlainObject(null)); // faux
```

### Importation globale d’objet

Pour importer les fonctions en tant que méthodes d’objet globales, utilisez:

```ts
import "@type-check/guards/register-global-object.mjs";
```

La méthode suivante sera alors disponible globalement:

- `Type.isPlainObject(value)`

## Analyse des fonctions

Une analyse tabulaire de la sortie produite lors de l’insertion de différents paramètres dans les fonctions est
documentée ici: [isPlainObject](../_analysis/isPlainObject.md)

<br>

---

<small>Le fichier a été généré le 6 février 2026 à 12:17:24 (UTC) avec l’utilisation du *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** par *
*[Roland Milto](https://roland-milto.de/)**.</small>