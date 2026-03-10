# isUndefined

## Description

Vérifie si une valeur donnée est `undefined`.

### Cas d’utilisation

Utilisez `isUndefined` pour protéger des entrées optionnelles, détecter des propriétés manquantes ou différencier
entre « non fourni » (`undefined`) et « explicitement vide » (`null`).

> **Remarque pour les utilisateurs TypeScript:**
>
> Utilisez `isUndefined` lorsque vous devez spécifiquement détecter `undefined` (et non `null`). C’est sûr, car il
> s’appuie sur `typeof value === "undefined"`.

### Avantages

- Fournit une vérification claire et explicite de `undefined` à l’aide de `typeof`, en évitant les cas limites liés aux
  variables non déclarées.
- Renvoie un simple résultat booléen (`true`/`false`) adapté aux gardes, aux branchements et à la logique de validation.
- Aide à distinguer `undefined` d’autres valeurs « vides » comme `null`, `0`, `""` ou `NaN`.

## Utilisation

### Syntaxe

Fonction:

- `isUndefined(value)`

Paramètres:

- `value`: La valeur à vérifier.

### Importation locale de fonction

```ts
import { isUndefined } from "@type-check/guards";

let x: unknown;

if (isUndefined(x)) {
  // x est indéfini ici
} else {
  // x n'est pas indéfini ici
}

const a = isUndefined(undefined); // vrai
const b = isUndefined(null);      // faux
```

### Importation globale d’objet

Pour importer les fonctions en tant que méthodes d’objet globales, utilisez:

```ts
import "@type-check/guards/register-global-object.mjs";
```

La méthode suivante sera alors disponible globalement:

- `Type.isUndefined(value)`

## Analyse des fonctions

Une analyse tabulaire de la sortie produite lors de l’insertion de différents paramètres dans les fonctions est
documentée ici: [isUndefined](../_analysis/isUndefined.md)

<br>

---

<small>Le fichier a été généré le 30 janvier 2026 à 14:02:41 (UTC) avec l’utilisation du *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** par *
*[Roland Milto](https://roland-milto.de/)**.</small>