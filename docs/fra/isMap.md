# isMap

## Description

Vérifie si la `value` donnée est une `Map`, en renvoyant `true` si c’est le cas et `false` sinon.

### Cas d’utilisation

Utilisez `isMap` lorsque vous recevez une valeur `unknown` (p. ex., issue de l’analyse JSON, d’API externes ou d’une
saisie utilisateur) et que vous devez vous assurer qu’il s’agit d’une `Map` avant d’effectuer des opérations sur `Map`.

> **Remarque pour les utilisateurs TypeScript:**
>
> `isMap` est un garde d’exécution qui renvoie `true` lorsque la valeur est une `Map` et `false` sinon ; utilisez-le
> pour restreindre `unknown` avant d’appeler les API de `Map`.

### Avantages

- Fournit une vérification rapide à l’exécution pour déterminer si une valeur est une `Map`.
- Aide à prévenir les erreurs de type en protégeant les chemins de code qui nécessitent des méthodes de `Map` comme
  `get`, `set` et `has`.
- Fonctionne bien comme étape de validation légère lors du traitement d’entrées `unknown`.

## Utilisation

### Syntaxe

Fonction:

- `isMap(value)`

Paramètres:

- `value`: La valeur à vérifier.

### Importation locale de fonction

```ts
import { isMap } from "@type-check/guards";

const input: unknown = new Map<string, number>([["a", 1]]);

if (isMap(input)) {
  input.set("b", 2);
  const a = input.get("a");
  console.log(a);
} else {
  console.log("Not a Map");
}

```

### Importation globale d’objet

Pour importer les fonctions en tant que méthodes d’objet globales, utilisez:

```ts
import "@type-check/guards/register-global-object.mjs";
```

La méthode suivante sera alors disponible globalement:

- `Type.isMap(value)`

## Analyse des fonctions

Une analyse tabulaire de la sortie produite lors de l’insertion de différents paramètres dans les fonctions est
documentée ici: [isMap](../_analysis/isMap.md)

<br>

---

<small>Le fichier a été généré le 31 janvier 2026 à 16:04:26 (UTC) avec l’utilisation du *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** par *
*[Roland Milto](https://roland-milto.de/)**.</small>