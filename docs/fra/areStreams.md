# areStreams

## Description

`areStreams` détermine si une valeur est un tableau non vide dans lequel chaque élément est un `Stream`.

### Cas d’utilisation

Valider des collections fournies par l’utilisateur ou construites dynamiquement (p. ex., plusieurs flux de lecture de
fichiers) avant de les rediriger (pipe), de les reprendre (resume) ou d’effectuer toute autre opération dessus en tant
que groupe.

> **Remarque pour les utilisateurs TypeScript:**
>
> Utilisez `areStreams` pour valider une entrée inconnue avant de la traiter comme `Stream[]` ; la fonction renvoie
`true` uniquement lorsque la valeur est un tableau non vide et que chaque élément est un `Stream`.

### Avantages

- Garantit qu’une entrée est un tableau non vide dont chaque élément est un `Stream`.
- Fournit une garde simple `true`/`false` pour valider des collections de flux avant traitement.
- Échoue rapidement : renvoie `false` dès qu’un élément non-`Stream` est trouvé.
- Aide à prévenir les erreurs d’exécution lorsque le code suppose que tous les éléments sont des instances de `Stream`.

## Utilisation

### Syntaxe

Fonction:

- `areStreams(array)`

Paramètres:

- `array`: Le tableau à vérifier pour des objets Stream.

### Importation locale de fonction

```ts
import fs from "node:fs";
import { areStreams } from "@type-check/guards";

const stream1 = fs.createReadStream("file1.txt");
const stream2 = fs.createReadStream("file2.txt");

const input: unknown = [stream1, stream2];

if (areStreams(input)) {
  // input est un tableau rempli d’objets Stream
  for (const s of input) {
    s.resume();
  }
} else {
  throw new TypeError("Expected a filled array of Stream objects");
}

```

### Importation globale d’objet

Pour importer les fonctions en tant que méthodes d’objet globales, utilisez:

```ts
import "@type-check/guards/register-global-object.mjs";
```

La méthode suivante sera alors disponible globalement:

- `Type.areStreams(array)`

## Analyse des fonctions

Une analyse tabulaire de la sortie produite lors de l’insertion de différents paramètres dans les fonctions est
documentée ici: [areStreams](../_analysis/areStreams.md)

<br>

---

<small>Le fichier a été généré le 30 janvier 2026 à 23:33:43 (UTC) avec l’utilisation du *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** par *
*[Roland Milto](https://roland-milto.de/)**.</small>