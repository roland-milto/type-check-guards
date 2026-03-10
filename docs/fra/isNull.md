# isNull

## Description

Détermine si la `value` fournie est `null`.

### Cas d’utilisation

Utilisez `isNull` pour valider des entrées ou des champs de charge utile d’API où `null` est une valeur sentinelle
significative et doit être gérée différemment de `undefined` ou d’autres valeurs.

> **Remarque pour les utilisateurs TypeScript:**
>
> Utilisez `isNull` lorsque vous devez distinguer `null` de `undefined` et d’autres valeurs falsy ; il renvoie `true`
> uniquement pour `null`.

### Avantages

- Fournit une vérification précise de `null` sans le confondre avec `undefined`.
- Fonctionne de manière fiable pour tout type d’entrée, car il accepte `unknown`.
- Simple, rapide et sans effets de bord ; renvoie uniquement `true` ou `false`.

## Utilisation

### Syntaxe

Fonction:

- `isNull(value)`

Paramètres:

- `value`: La valeur à vérifier pour `null`.

### Importation locale de fonction

```ts
import { isNull } from "@type-check/guards";

const a: unknown = null;
const b: unknown = undefined;

console.log(isNull(a)); // vrai
console.log(isNull(b)); // faux

if (isNull(a)) {
  // a est null ici
}
```

### Importation globale d’objet

Pour importer les fonctions en tant que méthodes d’objet globales, utilisez:

```ts
import "@type-check/guards/register-global-object.mjs";
```

La méthode suivante sera alors disponible globalement:

- `Type.isNull(value)`

## Analyse des fonctions

Une analyse tabulaire de la sortie produite lors de l’insertion de différents paramètres dans les fonctions est
documentée ici: [isNull](../_analysis/isNull.md)

<br>

---

<small>Le fichier a été généré le 31 janvier 2026 à 15:39:10 (UTC) avec l’utilisation du *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** par *
*[Roland Milto](https://roland-milto.de/)**.</small>