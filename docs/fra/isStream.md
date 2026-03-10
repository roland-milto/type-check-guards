# isStream

## Description

`isStream` vérifie si une valeur donnée est un objet flux (de type flux Node.js, `ReadableStream` ou `WritableStream`).

### Cas d’utilisation

Valider des entrées qui peuvent être soit des objets simples, soit des flux (p. ex. téléversements de fichiers, corps
HTTP ou pipelines de traitement) et adapter la logique selon que la valeur est un flux.

> **Remarque pour les utilisateurs TypeScript:**
>
> Utilisez `isStream` pour affiner un `unknown` avant d’appeler des méthodes de flux ; il reconnaît les objets de type
> flux Node.js (via `pipe`/`on`) et les Web Streams (`ReadableStream`/`WritableStream`) lorsque ces globales existent.

### Avantages

- Détecte en toute sécurité les objets courants de type flux Node.js en vérifiant la présence des fonctions `pipe` et
  `on`.
- Prend également en charge les Web Streams en reconnaissant `ReadableStream` et `WritableStream` lorsqu’ils sont
  disponibles.
- Renvoie un résultat booléen simple (`true`/`false`) adapté aux gardes de type et à la logique conditionnelle.

## Utilisation

### Syntaxe

Fonction:

- `isStream(value)`

Paramètres:

- `value`: La valeur à vérifier.

### Importation locale de fonction

```ts
import fs from "node:fs";
import { isStream } from "@type-check/guards";

const nodeStream = fs.createReadStream("file1.txt");

if (isStream(nodeStream)) {
  // nodeStream est de type flux ; vous pouvez utiliser en toute sécurité les API de flux courantes
  nodeStream.on("data", (chunk) => {
    console.log("chunk length:", chunk.length);
  });
}

console.log(isStream({}));
console.log(isStream(null));
console.log(isStream("notAStream"));
```

### Importation globale d’objet

Pour importer les fonctions en tant que méthodes d’objet globales, utilisez:

```ts
import "@type-check/guards/register-global-object.mjs";
```

La méthode suivante sera alors disponible globalement:

- `Type.isStream(value)`

## Analyse des fonctions

Une analyse tabulaire de la sortie produite lors de l’insertion de différents paramètres dans les fonctions est
documentée ici: [isStream](../_analysis/isStream.md)

<br>

---

<small>Le fichier a été généré le 30 janvier 2026 à 23:39:39 (UTC) avec l’utilisation du *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** par *
*[Roland Milto](https://roland-milto.de/)**.</small>