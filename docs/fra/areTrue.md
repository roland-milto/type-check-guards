# areTrue

## Description

Vérifie si un tableau non vide ne contient que des valeurs booléennes `true`.

### Cas d’utilisation

Utilisez `areTrue` pour valider qu’un ensemble de préconditions ou de drapeaux de fonctionnalité est entièrement
activé (toutes les valeurs sont `true`) avant de continuer, tout en considérant les entrées vides ou mal formées comme
non satisfaites (`false`).

> **Remarque pour les utilisateurs TypeScript:**
>
> `areTrue` renvoie `false` pour un tableau vide et pour les tableaux contenant une valeur qui n’est pas strictement
`true`.

### Avantages

- Renvoie `true` uniquement lorsque chaque élément est strictement `true` et que le tableau n’est pas vide.
- Échoue rapidement : renvoie `false` dès qu’une valeur non `true` est trouvée.
- Rejette les entrées invalides (non-tableaux ou tableaux vides) en renvoyant `false`.

## Utilisation

### Syntaxe

Fonction:

- `areTrue(array)`

Paramètres:

- `array`: Le tableau à vérifier pour s’assurer que toutes les valeurs sont `true`.

### Importation locale de fonction

```ts
import { areTrue } from "@type-check/guards";

const a = areTrue([true, true, true]);
const b = areTrue([true, false, true]);
const c = areTrue([]);
const d = areTrue([true, "string" as unknown, true]);

console.log(a, b, c, d);
```

### Importation globale d’objet

Pour importer les fonctions en tant que méthodes d’objet globales, utilisez:

```ts
import "@type-check/guards/register-global-object.mjs";
```

La méthode suivante sera alors disponible globalement:

- `Type.areTrue(array)`

## Analyse des fonctions

Une analyse tabulaire de la sortie produite lors de l’insertion de différents paramètres dans les fonctions est
documentée ici: [areTrue](../_analysis/areTrue.md)

<br>

---

<small>Le fichier a été généré le 30 janvier 2026 à 13:51:09 (UTC) avec l’utilisation du *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** par *
*[Roland Milto](https://roland-milto.de/)**.</small>