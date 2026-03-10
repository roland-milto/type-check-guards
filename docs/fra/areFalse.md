# areFalse

## Description

`areFalse` vérifie si tous les éléments d’un tableau fourni sont strictement le booléen `false`.

### Cas d’utilisation

Valider qu’une liste de drapeaux de fonctionnalité, de vérifications ou de résultats de garde sont tous `false` avant de
continuer (p. ex., confirmer qu’aucune condition bloquante n’est présente).

> **Remarque pour les utilisateurs TypeScript:**
>
> Utilisez `areFalse` lorsque vous avez besoin d’une validation stricte indiquant qu’un tableau n’est pas vide et ne
> contient que la valeur booléenne `false`.

### Avantages

- Garantit que chaque élément est strictement `false` (sans coercition truthy/falsey).
- Renvoie `false` pour les non-tableaux ou les tableaux vides en exigeant un tableau rempli via `isFilledArray`.
- S’arrête dès le premier élément non-`false` pour plus d’efficacité.

## Utilisation

### Syntaxe

Fonction:

- `areFalse(array)`

Paramètres:

- `array`: Le tableau à vérifier, contenant des éléments de tout type.

### Importation locale de fonction

```ts
import { areFalse } from "@type-check/guards";

const a = areFalse([false, false, false]); // vrai
const b = areFalse([false, true, false]);  // faux
const c = areFalse([false, "false", false]); // faux
const d = areFalse([]); // faux
```

### Importation globale d’objet

Pour importer les fonctions en tant que méthodes d’objet globales, utilisez:

```ts
import "@type-check/guards/register-global-object.mjs";
```

La méthode suivante sera alors disponible globalement:

- `Type.areFalse(array)`

## Analyse des fonctions

Une analyse tabulaire de la sortie produite lors de l’insertion de différents paramètres dans les fonctions est
documentée ici: [areFalse](../_analysis/areFalse.md)

<br>

---

<small>Le fichier a été généré le 31 janvier 2026 à 16:16:57 (UTC) avec l’utilisation du *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** par *
*[Roland Milto](https://roland-milto.de/)**.</small>