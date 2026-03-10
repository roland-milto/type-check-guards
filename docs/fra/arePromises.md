# arePromises

## Description

`arePromises` détermine si tous les éléments d’un tableau sont des instances de `Promise`.

### Cas d’utilisation

Valider qu’une liste construite dynamiquement ou fournie par une source externe ne contient que des promesses avant de
les agréger (p. ex. avec `Promise.all`).

> **Remarque pour les utilisateurs TypeScript:**
>
> Utilisez `arePromises` pour valider `unknown[]` avant d’appeler `Promise.all` ou d’autres opérations réservées aux
> promesses ; elle renvoie `false` pour les tableaux vides.

### Avantages

- Garantit que chaque élément est une `Promise` avant de poursuivre avec une logique spécifique aux promesses.
- Renvoie `false` pour les tableaux non remplis, évitant des résultats ambigus pour des entrées vides.
- Utile comme garde d’exécution lors de l’utilisation de `unknown[]` provenant de sources externes.

## Utilisation

### Syntaxe

Fonction:

- `arePromises(array)`

Paramètres:

- `array`: Le tableau à vérifier pour des instances de Promise.

### Importation locale de fonction

```ts
import { arePromises } from "@type-check/guards";

const values: unknown[] = [Promise.resolve(1), new Promise<void>(() => {})];

if (arePromises(values)) {
  // values est un tableau d’instances de Promise à l’exécution
  Promise.all(values).then((results) => {
    console.log(results);
  });
} else {
  console.log("Not all items are promises");
}

```

### Importation globale d’objet

Pour importer les fonctions en tant que méthodes d’objet globales, utilisez:

```ts
import "@type-check/guards/register-global-object.mjs";
```

La méthode suivante sera alors disponible globalement:

- `Type.arePromises(array)`

## Analyse des fonctions

Une analyse tabulaire de la sortie produite lors de l’insertion de différents paramètres dans les fonctions est
documentée ici: [arePromises](../_analysis/arePromises.md)

<br>

---

<small>Le fichier a été généré le 30 janvier 2026 à 23:48:10 (UTC) avec l’utilisation du *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** par *
*[Roland Milto](https://roland-milto.de/)**.</small>