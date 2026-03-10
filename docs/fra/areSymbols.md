# areSymbols

## Description

Vérifie si une entrée est un tableau rempli dont les éléments sont tous des symboles, et renvoie `true` ou `false`.

### Cas d’utilisation

Valider qu’un champ de configuration (p. ex. une liste de clés uniques représentées par des symboles) est un tableau non
vide contenant uniquement des symboles avant de l’utiliser dans des API qui exigent `symbol[]`.

> **Remarque pour les utilisateurs TypeScript:**
>
> Utilisez `areSymbols` pour valider une entrée inconnue avant de la traiter comme `symbol[]` ; elle renvoie `false`
> pour les non-tableaux et les tableaux vides.

### Avantages

- Renvoie `true` uniquement lorsque l’entrée est un tableau non vide et que chaque élément est un symbole.
- Évite les faux positifs en rejetant les non-tableaux et les tableaux vides via la vérification interne de tableau
  rempli.
- Utile comme garde de type à l’exécution pour valider des listes composées uniquement de symboles avant un traitement
  ultérieur.

## Utilisation

### Syntaxe

Fonction:

- `areSymbols(array)`

Paramètres:

- `array`: Le tableau à vérifier pour des éléments de type symbole.

### Importation locale de fonction

```ts
import { areSymbols } from "@type-check/guards";

const a = [Symbol("a"), Symbol("b")];
const b = [Symbol("a"), "b"] as unknown[];

if (areSymbols(a)) {
  // a est un tableau contenant uniquement des symboles à l’exécution
  const first = a[0];
  console.log(typeof first); // "symbol"
}

console.log(areSymbols(b)); // false
```

### Importation globale d’objet

Pour importer les fonctions en tant que méthodes d’objet globales, utilisez:

```ts
import "@type-check/guards/register-global-object.mjs";
```

La méthode suivante sera alors disponible globalement:

- `Type.areSymbols(array)`

## Analyse des fonctions

Une analyse tabulaire de la sortie produite lors de l’insertion de différents paramètres dans les fonctions est
documentée ici: [areSymbols](../_analysis/areSymbols.md)

<br>

---

<small>Le fichier a été généré le 30 janvier 2026 à 14:21:35 (UTC) avec l’utilisation du *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** par *
*[Roland Milto](https://roland-milto.de/)**.</small>