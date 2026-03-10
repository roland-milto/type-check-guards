# isOneOfType

## Description

`isOneOfType` détermine si une `value` donnée correspond à au moins une des chaînes de type fournies, en renvoyant
`true` si une correspondance est trouvée et `false` sinon.

### Cas d’utilisation

Valider des données faiblement typées ou externes (p. ex., JSON analysé, paramètres de requête) en autorisant plusieurs
types acceptables à l’exécution (comme `number` ou `string`) avant de poursuivre avec une logique supplémentaire.

> **Remarque pour les utilisateurs TypeScript:**
>
> Utilisez `isOneOfType` lorsque vous souhaitez effectuer une vérification à l’exécution indiquant qu’une valeur
> correspond à l’un de plusieurs types autorisés ; la fonction renvoie `true` si au moins un type correspond, sinon
`false`.

### Avantages

- Vérifie une valeur par rapport à plusieurs types autorisés en un seul appel, en renvoyant `true` dès la première
  correspondance.
- Fonctionne avec des entrées `unknown`, ce qui le rend utile aux frontières d’exécution (p. ex., données externes,
  saisie utilisateur).
- Résultat booléen simple (`true`/`false`) qui se compose bien avec la logique conditionnelle et les retours anticipés.

## Utilisation

### Syntaxe

Fonction:

- `isOneOfType(value, types)`

Paramètres:

- `value`: La valeur à vérifier par rapport aux types spécifiés.
- `types`: Un tableau de chaînes de type représentant les types potentiels de la valeur.

### Importation locale de fonction

```ts
import { isOneOfType } from "@type-check/guards";

const input: unknown = JSON.parse('{"count": 3}');

if (isOneOfType(input, ["object"])) {
  // input est un objet à l’exécution
}

console.log(isOneOfType(3, ["number", "string"])); // true
console.log(isOneOfType("hello", ["number", "boolean"])); // false

```

### Importation globale d’objet

Pour importer les fonctions en tant que méthodes d’objet globales, utilisez:

```ts
import "@type-check/guards/register-global-object.mjs";
```

La méthode suivante sera alors disponible globalement:

- `Type.isOneOfType(value, types)`

## Analyse des fonctions

Une analyse tabulaire de la sortie produite lors de l’insertion de différents paramètres dans les fonctions est
documentée ici: [isOneOfType](../_analysis/isOneOfType.md)

<br>

---

<small>Le fichier a été généré le 31 janvier 2026 à 23:43:09 (UTC) avec l’utilisation du *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** par *
*[Roland Milto](https://roland-milto.de/)**.</small>