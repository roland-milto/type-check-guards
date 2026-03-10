# isTrue

## Description

`isTrue` détermine si une valeur donnée est strictement égale à `true`.

### Cas d’utilisation

Utilisez `isTrue` pour valider des indicateurs, des bascules de fonctionnalité ou des valeurs de configuration lorsque
seul le littéral `true` doit être accepté et que tout le reste doit être traité comme `false`.

> **Remarque pour les utilisateurs TypeScript:**
>
> Utilisez `isTrue` lorsque vous devez n’accepter que le littéral booléen `true`, et non de simples valeurs truthy.

### Avantages

- Fournit une vérification stricte du littéral booléen `true` (sans coercition).
- Aide à distinguer `true` des valeurs truthy comme `1`, `"true"` ou `{}`.
- Comportement simple et prévisible, adapté aux gardes et aux pipelines de validation.

## Utilisation

### Syntaxe

Fonction:

- `isTrue(value)`

Paramètres:

- `value`: La valeur à vérifier.

### Importation locale de fonction

```ts
import { isTrue } from "@type-check/guards";

const a = isTrue(true);      // vrai
const b = isTrue(1);         // faux
const c = isTrue("true");   // faux

if (isTrue(a)) {
  // a est vrai ici
}
```

### Importation globale d’objet

Pour importer les fonctions en tant que méthodes d’objet globales, utilisez:

```ts
import "@type-check/guards/register-global-object.mjs";
```

La méthode suivante sera alors disponible globalement:

- `Type.isTrue(value)`

## Analyse des fonctions

Une analyse tabulaire de la sortie produite lors de l’insertion de différents paramètres dans les fonctions est
documentée ici: [isTrue](../_analysis/isTrue.md)

<br>

---

<small>Le fichier a été généré le 30 janvier 2026 à 13:42:18 (UTC) avec l’utilisation du *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** par *
*[Roland Milto](https://roland-milto.de/)**.</small>