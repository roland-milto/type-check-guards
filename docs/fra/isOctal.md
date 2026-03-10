# isOctal

## Description

Détermine si une valeur est une chaîne de littéral octal valide (p. ex. `0o755`).

### Cas d’utilisation

Valider une saisie utilisateur ou des valeurs de configuration qui doivent être exprimées sous forme de chaîne de
littéral octal (par exemple, des modes de permissions de fichiers comme `0o644`) avant de les analyser ou de les
convertir.

> **Remarque pour les utilisateurs TypeScript:**
>
> `isOctal` est un garde de type (`value is string`). Après un résultat `true`, TypeScript restreint la variable
> vérifiée à `string`.

### Avantages

- Fournit un garde de type strict : renvoie `true` uniquement lorsque l’entrée est une chaîne qui correspond au format
  d’un littéral octal.
- Rejette les chaînes vides et les chaînes avec des espaces en début/fin (contrôle ASCII/espace), réduisant les
  correspondances accidentelles.
- Prend en charge un signe optionnel et n’est pas sensible à la casse pour le préfixe `0o`/`0O`.
- Tolérant pour les entrées non-chaînes en renvoyant `false` au lieu de lever une exception.

## Utilisation

### Syntaxe

Fonction:

- `isOctal(value)`

Paramètres:

- `value`: La valeur à vérifier.

### Importation locale de fonction

```ts
import { isOctal } from "@type-check/guards";

const a: unknown = "0o123";
const b: unknown = "+0O755";
const c: unknown = "0o128";
const d: unknown = 0o123;

console.log(isOctal(a)); // vrai
console.log(isOctal(b)); // vrai
console.log(isOctal(c)); // faux
console.log(isOctal(d)); // faux

if (isOctal(a)) {
  // a est une chaîne ici
  const normalized = a.toLowerCase();
  console.log(normalized);
}
```

### Importation globale d’objet

Pour importer les fonctions en tant que méthodes d’objet globales, utilisez:

```ts
import "@type-check/guards/register-global-object.mjs";
```

La méthode suivante sera alors disponible globalement:

- `Type.isOctal(value)`

## Analyse des fonctions

Une analyse tabulaire de la sortie produite lors de l’insertion de différents paramètres dans les fonctions est
documentée ici: [isOctal](../_analysis/isOctal.md)

<br>

---

<small>Le fichier a été généré le 30 janvier 2026 à 14:45:08 (UTC) avec l’utilisation du *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** par *
*[Roland Milto](https://roland-milto.de/)**.</small>