# isArray

## Description

`isArray` vérifie si une valeur donnée est un tableau et renvoie `true` si c’est le cas, sinon `false`.

### Cas d’utilisation

Valider des données inconnues (p. ex., JSON analysé ou réponses d’API) afin de s’assurer qu’une valeur est un tableau
avant d’itérer, d’indexer ou d’accéder à `.length`.

> **Remarque pour les utilisateurs TypeScript:**
>
> Utilisez `isArray` lorsque vous avez besoin d’une vérification à l’exécution pour les tableaux ; elle renvoie un
> booléen et peut être appelée en toute sécurité avec des valeurs `unknown`.

### Avantages

- Utilise la fonction intégrée `Array.isArray` pour une détection fiable des tableaux à travers les contextes (p. ex.,
  iframes).
- Renvoie un résultat booléen simple (`true`/`false`) adapté aux gardes et à la logique de branchement.
- Fonctionne avec tout type d’entrée, car le paramètre est `unknown`.

## Utilisation

### Syntaxe

Fonction:

- `isArray(value)`

Paramètres:

- `value`: La valeur à vérifier.

### Importation locale de fonction

```ts
import { isArray } from "@type-check/guards";

const input: unknown = [1, 2, 3];

if (isArray(input)) {
  // input est un tableau à l'exécution
  console.log(input.length);
} else {
  console.log("Not an array");
}

```

### Importation globale d’objet

Pour importer les fonctions en tant que méthodes d’objet globales, utilisez:

```ts
import "@type-check/guards/register-global-object.mjs";
```

La méthode suivante sera alors disponible globalement:

- `Type.isArray(value)`

## Analyse des fonctions

Une analyse tabulaire de la sortie produite lors de l’insertion de différents paramètres dans les fonctions est
documentée ici: [isArray](../_analysis/isArray.md)

<br>

---

<small>Le fichier a été généré le 6 février 2026 à 11:30:21 (UTC) avec l’utilisation du *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** par *
*[Roland Milto](https://roland-milto.de/)**.</small>