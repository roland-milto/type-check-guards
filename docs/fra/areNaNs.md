# areNaNs

## Description

`areNaNs` vérifie si tous les éléments d’un tableau sont `NaN` et renvoie `true` uniquement si chaque élément est `NaN`.

### Cas d’utilisation

Valider des données entrantes où `NaN` est utilisé comme valeur sentinelle et où vous devez vous assurer que l’ensemble
du tableau est constitué exclusivement de `NaN` (p. ex., détecter une série numérique entièrement manquante).

> **Remarque pour les utilisateurs TypeScript:**
>
> Utilisez `areNaNs` lorsque vous devez valider qu’un tableau ne contient que la valeur numérique `NaN` (sans conversion
> de chaîne en nombre).

### Avantages

- Renvoie `true` uniquement lorsque chaque élément est `NaN` (vérification stricte sur tous les éléments).
- Ne convertit pas les chaînes en nombres ; des valeurs comme "NaN" restent non-`NaN` et rendent le résultat `false`.
- Renvoie `false` pour les tableaux non remplis, évitant un `true` accidentel sur une entrée vide.

## Utilisation

### Syntaxe

Fonction:

- `areNaNs(array)`

Paramètres:

- `array`: Le tableau à vérifier pour des valeurs `NaN`.

### Importation locale de fonction

```ts
import { areNaNs } from "@type-check/guards";

const a = areNaNs([NaN, NaN]); // vrai
const b = areNaNs([NaN, 1, NaN]); // faux
const c = areNaNs([NaN, "NaN", NaN]); // faux
const d = areNaNs([NaN, null, NaN]); // faux
const e = areNaNs([] as unknown[]); // faux
```

### Importation globale d’objet

Pour importer les fonctions en tant que méthodes d’objet globales, utilisez:

```ts
import "@type-check/guards/register-global-object.mjs";
```

La méthode suivante sera alors disponible globalement:

- `Type.areNaNs(array)`

## Analyse des fonctions

Une analyse tabulaire de la sortie produite lors de l’insertion de différents paramètres dans les fonctions est
documentée ici: [areNaNs](../_analysis/areNaNs.md)

<br>

---

<small>Le fichier a été généré le 30 janvier 2026 à 15:51:19 (UTC) avec l’utilisation du *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** par *
*[Roland Milto](https://roland-milto.de/)**.</small>