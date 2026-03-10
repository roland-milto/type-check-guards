# areWeakSets

## Description

Vérifie si une entrée est un tableau non vide dont chaque élément est un `WeakSet`, et ne renvoie `true` que dans ce
cas.

### Cas d’utilisation

Valider une entrée à l’exécution (p. ex. provenant d’API, de configuration ou de données fournies par l’utilisateur)
afin de s’assurer que vous disposez d’une liste non vide d’instances de `WeakSet` avant de poursuivre une logique qui
dépend du comportement de `WeakSet`.

> **Remarque pour les utilisateurs TypeScript:**
>
> Utilisez `areWeakSets` pour valider une entrée inconnue avant de la traiter comme `WeakSet[]`. Elle renvoie `false`
> pour les tableaux vides et les non-tableaux.

### Avantages

- Garantit que chaque élément du tableau d’entrée est un `WeakSet`.
- Renvoie `false` pour les tableaux vides, évitant des résultats « tous valides » accidentels en cas de données
  manquantes.
- Échoue de manière sûre en renvoyant `false` lorsque l’entrée n’est pas un tableau rempli (y compris `null`).
- Utile comme garde avant d’effectuer des opérations qui nécessitent des instances de `WeakSet`.

## Utilisation

### Syntaxe

Fonction:

- `areWeakSets(array)`

Paramètres:

- `array`: Le tableau à vérifier pour des objets `WeakSet`.

### Importation locale de fonction

```ts
import { areWeakSets } from "@type-check/guards";

const a: unknown = [new WeakSet<object>(), new WeakSet<object>()];
const b: unknown = [new WeakSet<object>(), {}];
const c: unknown = [];

if (areWeakSets(a)) {
  // a est un tableau non vide d'instances de WeakSet
}

console.log(areWeakSets(a)); // vrai
console.log(areWeakSets(b)); // faux
console.log(areWeakSets(c)); // faux
console.log(areWeakSets(null as unknown)); // faux
```

### Importation globale d’objet

Pour importer les fonctions en tant que méthodes d’objet globales, utilisez:

```ts
import "@type-check/guards/register-global-object.mjs";
```

La méthode suivante sera alors disponible globalement:

- `Type.areWeakSets(array)`

## Analyse des fonctions

Une analyse tabulaire de la sortie produite lors de l’insertion de différents paramètres dans les fonctions est
documentée ici: [areWeakSets](../_analysis/areWeakSets.md)

<br>

---

<small>Le fichier a été généré le 30 janvier 2026 à 14:08:32 (UTC) avec l’utilisation du *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** par *
*[Roland Milto](https://roland-milto.de/)**.</small>