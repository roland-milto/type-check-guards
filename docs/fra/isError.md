# isError

## Description

Vérifie si une `value` donnée est une instance de `Error`.

### Cas d’utilisation

Utilisez `isError` lorsque vous recevez une valeur `unknown` (par exemple depuis un bloc `catch`, un callback ou une
bibliothèque externe) et que vous devez déterminer en toute sécurité s’il s’agit d’un `Error` avant de lire `message`,
`name` ou `stack`.

> **Remarque pour les utilisateurs TypeScript:**
>
> Utilisez `isError` pour protéger des valeurs `unknown` (p. ex., provenant de `catch`) avant de les traiter comme un
`Error`.

### Avantages

- Fournit une vérification simple à l’exécution pour déterminer si une valeur est une instance de `Error`.
- Aide à affiner des entrées inconnues avant d’accéder aux propriétés de `Error` comme `message` ou `stack`.
- Réduit le risque d’exceptions à l’exécution lors du traitement de valeurs provenant de `catch`, d’API externes ou de
  sources non typées.

## Utilisation

### Syntaxe

Fonction:

- `isError(value)`

Paramètres:

- `value`: La valeur à vérifier par rapport au type `Error`.

### Importation locale de fonction

```ts
import { isError } from "@type-check/guards";

function formatFailure(value: unknown): string {
  if (isError(value)) {
    return `Error: ${value.message}`;
  }
  return "Unknown failure";
}

console.log(formatFailure(new Error("Boom")));
console.log(formatFailure("Boom"));
```

### Importation globale d’objet

Pour importer les fonctions en tant que méthodes d’objet globales, utilisez:

```ts
import "@type-check/guards/register-global-object.mjs";
```

La méthode suivante sera alors disponible globalement:

- `Type.isError(value)`

## Analyse des fonctions

Une analyse tabulaire de la sortie produite lors de l’insertion de différents paramètres dans les fonctions est
documentée ici: [isError](../_analysis/isError.md)

<br>

---

<small>Le fichier a été généré le 6 février 2026 à 12:45:23 (UTC) avec l’utilisation du *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** par *
*[Roland Milto](https://roland-milto.de/)**.</small>