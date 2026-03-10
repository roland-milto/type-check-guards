# isBuffer

## Description

Vérifie si une valeur est un `Buffer` Node.js et renvoie `true` ou `false`.

### Cas d’utilisation

Valider les entrées à l’exécution (p. ex., charges utiles d’API, données de fichier ou tampons de messages) afin de
s’assurer qu’une valeur est un `Buffer` avant de la traiter, et obtenir de manière fiable `false` lors de l’exécution en
dehors de Node.js où `Buffer` peut ne pas exister.

> **Remarque pour les utilisateurs TypeScript:**
>
> Utilisez `isBuffer` pour affiner les valeurs `unknown` en `Buffer` avant d’appeler des méthodes spécifiques à Buffer.

### Avantages

- Détecte en toute sécurité les instances de `Buffer` Node.js à l’aide de `Buffer.isBuffer`.
- Renvoie `false` dans les environnements où `Buffer` n’est pas disponible, évitant les erreurs à l’exécution.
- Fonctionne avec une entrée `unknown`, ce qui le rend adapté à la validation à l’exécution et à l’affinage de type.

## Utilisation

### Syntaxe

Fonction:

- `isBuffer(value)`

Paramètres:

- `value`: La valeur à tester.

### Importation locale de fonction

```ts
import { isBuffer } from "@type-check/guards";

const a: unknown = Buffer.from("hello");
const b: unknown = "hello";

console.log(isBuffer(a)); // vrai
console.log(isBuffer(b)); // faux

if (isBuffer(a)) {
  // a est un Buffer ici
  console.log(a.toString("utf8"));
}
```

### Importation globale d’objet

Pour importer les fonctions en tant que méthodes d’objet globales, utilisez:

```ts
import "@type-check/guards/register-global-object.mjs";
```

La méthode suivante sera alors disponible globalement:

- `Type.isBuffer(value)`

## Analyse des fonctions

Une analyse tabulaire de la sortie produite lors de l’insertion de différents paramètres dans les fonctions est
documentée ici: [isBuffer](../_analysis/isBuffer.md)

<br>

---

<small>Le fichier a été généré le 31 janvier 2026 à 16:31:33 (UTC) avec l’utilisation du *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** par *
*[Roland Milto](https://roland-milto.de/)**.</small>