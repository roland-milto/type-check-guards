# isObject

## Description

Détermine si une `value` donnée est un `object` (en excluant `null`).

### Cas d’utilisation

Utilisez `isObject` pour valider des entrées inconnues (p. ex. JSON analysé, réponses d’API, charges utiles
d’événements) avant d’accéder aux propriétés, en garantissant que la valeur est un objet et non `null`.

> **Remarque pour les utilisateurs TypeScript:**
>
> `isObject` est un garde d’exécution qui renvoie un booléen ; il ne restreint pas à une forme d’objet spécifique.
> Combinez-le avec des vérifications supplémentaires (p. ex. existence de propriétés) lorsque vous avez besoin d’un typage
> plus strict.

### Avantages

- Renvoie `true` uniquement pour les valeurs non `null` dont le `typeof` est `"object"`.
- Évite le piège courant en JavaScript où `null` serait autrement traité comme un objet.
- Fonctionne pour les objets simples et les instances d’objets intégrées (p. ex. `Date`, `RegExp`).
- Vérification d’exécution simple et rapide, adaptée à la programmation défensive et à la validation des entrées.

## Utilisation

### Syntaxe

Fonction:

- `isObject(value)`

Paramètres:

- `value`: La valeur à vérifier pour déterminer si c’est un `object`.

### Importation locale de fonction

```ts
import { isObject } from "@type-check/guards";

const input: unknown = { a: 1 };

if (isObject(input)) {
  // input est un objet non nul à l'exécution
  console.log("Object detected");
} else {
  console.log("Not an object");
}

```

### Importation globale d’objet

Pour importer les fonctions en tant que méthodes d’objet globales, utilisez:

```ts
import "@type-check/guards/register-global-object.mjs";
```

La méthode suivante sera alors disponible globalement:

- `Type.isObject(value)`

## Analyse des fonctions

Une analyse tabulaire de la sortie produite lors de l’insertion de différents paramètres dans les fonctions est
documentée ici: [isObject](../_analysis/isObject.md)

<br>

---

<small>Le fichier a été généré le 31 janvier 2026 à 00:18:23 (UTC) avec l’utilisation du *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** par *
*[Roland Milto](https://roland-milto.de/)**.</small>