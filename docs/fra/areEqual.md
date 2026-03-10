# areEqual

## Description

`areEqual` vérifie si tous les éléments d’un tableau sont égaux à une valeur attendue donnée, en renvoyant `true`
uniquement pour les tableaux non vides dont chaque élément correspond.

### Cas d’utilisation

Valider qu’une liste ne contient qu’une seule valeur autorisée (p. ex., tous les indicateurs d’état sont `true`, tous
les rôles sont `"admin"`, ou toutes les entrées numériques sont égales à une constante requise) tout en considérant une
entrée vide comme invalide (`false`).

> **Remarque pour les utilisateurs TypeScript:**
>
> Utilisez `areEqual` lorsque vous avez besoin d’une vérification stricte sur tous les éléments ; elle renvoie `false`
> pour les tableaux vides et pour toute entrée qui n’est pas un tableau ou qui n’est pas rempli.

### Avantages

- Renvoie `true` uniquement lorsque chaque élément correspond à la valeur attendue ; sinon renvoie `false`.
- Échoue rapidement : arrête la vérification dès qu’un élément ne correspond pas.
- Protège contre les entrées invalides en renvoyant `false` lorsque l’entrée n’est pas un tableau rempli.

## Utilisation

### Syntaxe

Fonction:

- `areEqual(value, expected)`

Paramètres:

- `value`: Le tableau à vérifier.
- `expected`: L’élément auquel comparer chaque élément du tableau.

### Importation locale de fonction

```ts
import { areEqual } from "@type-check/guards";

const allOnes = areEqual([1, 1, 1], 1);
const allTests = areEqual(["test", "test"], "test");
const notAllTwos = areEqual([2, 3, 2], 2);
const emptyIsFalse = areEqual([], 5);

console.log(allOnes, allTests, notAllTwos, emptyIsFalse);
```

### Importation globale d’objet

Pour importer les fonctions en tant que méthodes d’objet globales, utilisez:

```ts
import "@type-check/guards/register-global-object.mjs";
```

La méthode suivante sera alors disponible globalement:

- `Type.areEqual(value, expected)`

## Analyse des fonctions

Une analyse tabulaire de la sortie produite lors de l’insertion de différents paramètres dans les fonctions est
documentée ici: [areEqual](../_analysis/areEqual.md)

<br>

---

<small>Le fichier a été généré le 31 janvier 2026 à 23:50:22 (UTC) avec l’utilisation du *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** par *
*[Roland Milto](https://roland-milto.de/)**.</small>