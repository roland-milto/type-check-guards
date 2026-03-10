# areErrors

## Description

Vérifie si un tableau n’est pas vide et ne contient que des objets `Error`, en renvoyant `true` ou `false`.

### Cas d’utilisation

Valider qu’un `unknown[]` fourni à l’exécution (p. ex. échecs agrégés, résultats de validation ou données désérialisées)
est une liste non vide d’objets `Error` avant d’itérer, de journaliser ou de relancer.

> **Remarque pour les utilisateurs TypeScript:**
>
> `areErrors` renvoie `true` uniquement pour un tableau rempli où chaque élément est un `Error` ; il renvoie `false`
> pour un tableau vide ou si un élément n’est pas un `Error`.

### Avantages

- Garantit que chaque élément est une instance de `Error`, permettant une gestion et une journalisation des erreurs en
  toute sécurité.
- Rejette les tableaux vides, évitant que des états « aucune erreur » accidentels soient traités comme des listes
  d’erreurs valides.
- Fonctionne bien comme garde d’exécution lors du traitement d’entrées `unknown[]` (p. ex. provenant d’API ou de blocs
  `catch`).

## Utilisation

### Syntaxe

Fonction:

- `areErrors(array)`

Paramètres:

- `array`: Le tableau à vérifier pour des objets `Error`.

### Importation locale de fonction

```ts
import { areErrors } from "@type-check/guards";

const value: unknown = [new Error("error1"), new TypeError("error2")];

if (Array.isArray(value) && areErrors(value)) {
  // value est un tableau non vide d'objets Error
  for (const err of value) {
    console.error(err.name, err.message);
  }
} else {
  console.log("Not a non-empty Error[]");
}

```

### Importation globale d’objet

Pour importer les fonctions en tant que méthodes d’objet globales, utilisez:

```ts
import "@type-check/guards/register-global-object.mjs";
```

La méthode suivante sera alors disponible globalement:

- `Type.areErrors(array)`

## Analyse des fonctions

Une analyse tabulaire de la sortie produite lors de l’insertion de différents paramètres dans les fonctions est
documentée ici: [areErrors](../_analysis/areErrors.md)

<br>

---

<small>Le fichier a été généré le 6 février 2026 à 12:33:31 (UTC) avec l’utilisation du *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** par *
*[Roland Milto](https://roland-milto.de/)**.</small>