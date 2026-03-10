# areJson

## Description

Vérifie si tous les éléments d’un tableau sont des chaînes JSON, en renvoyant `true` uniquement si le tableau est rempli
et que chaque élément est un JSON valide ; sinon renvoie `false`.

### Cas d’utilisation

Valider des données entrantes (p. ex. depuis des paramètres de requête, des variables d’environnement ou des API
externes) lorsque vous attendez un tableau de chaînes encodées en JSON et que vous souhaitez rejeter les tableaux vides
ou toute entrée non JSON.

> **Remarque pour les utilisateurs TypeScript:**
>
> Utilisez `areJson` lorsque vous devez valider qu’un `unknown[]` ne contient que des chaînes JSON avant de les
> analyser (p. ex. avec `JSON.parse`).

### Avantages

- Renvoie `true` uniquement lorsque chaque élément est une chaîne JSON valide ; sinon renvoie `false`.
- Échoue rapidement : cesse la vérification dès qu’un élément non JSON est trouvé.
- Rejette les tableaux vides par conception, en renvoyant `false` pour une entrée non renseignée.

## Utilisation

### Syntaxe

Fonction:

- `areJson(array)`

Paramètres:

- `array`: Le tableau à vérifier afin de déterminer s’il contient des éléments de type chaîne JSON.

### Importation locale de fonction

```ts
import { areJson } from "@type-check/guards";

const ok = areJson(["{\"a\":1}", "{\"b\":2}"]); // vrai
const mixed = areJson(["{\"a\":1}", 123 as unknown]); // faux
const empty = areJson([]); // faux

```

### Importation globale d’objet

Pour importer les fonctions en tant que méthodes d’objet globales, utilisez:

```ts
import "@type-check/guards/register-global-object.mjs";
```

La méthode suivante sera alors disponible globalement:

- `Type.areJson(array)`

## Analyse des fonctions

Une analyse tabulaire de la sortie produite lors de l’insertion de différents paramètres dans les fonctions est
documentée ici: [areJson](../_analysis/areJson.md)

<br>

---

<small>Le fichier a été généré le 30 janvier 2026 à 16:15:44 (UTC) avec l’utilisation du *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** par *
*[Roland Milto](https://roland-milto.de/)**.</small>