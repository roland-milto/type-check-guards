# arePlainObjects

## Description

Vérifie si tous les éléments d’un tableau sont des objets simples, en renvoyant `true` uniquement si chaque élément est
admissible.

### Cas d’utilisation

Valider des données externes ou non typées (p. ex. JSON analysé, charges utiles d’API, soumissions de formulaires) afin
de s’assurer que vous avez reçu un tableau non vide dont chaque entrée est un objet simple avant d’itérer et de lire des
propriétés.

> **Remarque pour les utilisateurs TypeScript:**
>
> Utilisez `arePlainObjects` pour valider une entrée inconnue avant de la traiter comme `Record<string, unknown>[]` (ou
> une forme d’objet plus stricte) en TypeScript.

### Avantages

- Garantit que chaque élément du tableau d’entrée est un objet simple, en renvoyant `true` uniquement lorsque tous les
  éléments correspondent.
- Rejette rapidement les entrées invalides (non-tableaux ou tableaux vides) en renvoyant `false`.
- Considère comme objets simples valides à la fois les objets littéraux et les objets `Object.create(null)`.

## Utilisation

### Syntaxe

Fonction:

- `arePlainObjects(array)`

Paramètres:

- `array`: Le tableau à vérifier afin de s’assurer qu’il contient des éléments qui sont des objets simples.

### Importation locale de fonction

```ts
import { arePlainObjects } from "@type-check/guards";

const a = arePlainObjects([{ a: 1 }, { b: 2 }]); // vrai
const b = arePlainObjects([{}, Object.create(null)]); // vrai
const c = arePlainObjects([{ a: 1 }, 2 as unknown]); // faux
const d = arePlainObjects([] as unknown[]); // faux
```

### Importation globale d’objet

Pour importer les fonctions en tant que méthodes d’objet globales, utilisez:

```ts
import "@type-check/guards/register-global-object.mjs";
```

La méthode suivante sera alors disponible globalement:

- `Type.arePlainObjects(array)`

## Analyse des fonctions

Une analyse tabulaire de la sortie produite lors de l’insertion de différents paramètres dans les fonctions est
documentée ici: [arePlainObjects](../_analysis/arePlainObjects.md)

<br>

---

<small>Le fichier a été généré le 30 janvier 2026 à 16:25:05 (UTC) avec l’utilisation du *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** par *
*[Roland Milto](https://roland-milto.de/)**.</small>