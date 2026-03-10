# isBinary

## Description

`isBinary` détermine si une valeur est une chaîne binaire (éventuellement préfixée par `0b`/`0B`) et renvoie `true` ou
`false`.

### Cas d’utilisation

Valider les chaînes fournies par l’utilisateur (p. ex., champs de formulaire, arguments CLI, valeurs de configuration)
pour s’assurer qu’elles ne représentent que des chiffres binaires, éventuellement avec un préfixe `0b`/`0B`, avant tout
traitement ultérieur.

> **Remarque pour les utilisateurs TypeScript:**
>
> Utilisez `isBinary` comme garde de type avant d’analyser ou de convertir une chaîne en `BigInt`/`Number` afin d’éviter
> des entrées invalides.

### Avantages

- Accepte les chaînes binaires avec ou sans le préfixe `0b`/`0B`.
- Rejette les chaînes vides et les chaînes avec des espaces en début/fin (ASCII ≤ 32).
- Renvoie `true`/`false` sans lever d’exception, ce qui le rend sûr pour des entrées inconnues.

## Utilisation

### Syntaxe

Fonction:

- `isBinary(value)`

Paramètres:

- `value`: La valeur à vérifier.

### Importation locale de fonction

```ts
import { isBinary } from "@type-check/guards";

const a = isBinary("0b1010"); // vrai
const b = isBinary("1010");   // vrai
const c = isBinary("0b1020"); // faux
const d = isBinary(0b1010);     // faux

```

### Importation globale d’objet

Pour importer les fonctions en tant que méthodes d’objet globales, utilisez:

```ts
import "@type-check/guards/register-global-object.mjs";
```

La méthode suivante sera alors disponible globalement:

- `Type.isBinary(value)`

## Analyse des fonctions

Une analyse tabulaire de la sortie produite lors de l’insertion de différents paramètres dans les fonctions est
documentée ici: [isBinary](../_analysis/isBinary.md)

<br>

---

<small>Le fichier a été généré le 31 janvier 2026 à 23:09:47 (UTC) avec l’utilisation du *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** par *
*[Roland Milto](https://roland-milto.de/)**.</small>