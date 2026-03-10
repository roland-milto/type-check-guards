# areWeakMaps

## Description

`areWeakMaps` vérifie si une valeur est un tableau non vide dont chaque élément est un `WeakMap`, en renvoyant `true`
uniquement dans ce cas et `false` sinon.

### Cas d’utilisation

Valider des données à l’exécution (p. ex. JSON analysé, entrées de plugins ou configuration faiblement typée) afin de
s’assurer qu’il s’agit d’un tableau non vide d’instances de `WeakMap` avant d’itérer et d’appeler des méthodes
`WeakMap` ; renvoie `false` lorsqu’un élément n’est pas un `WeakMap` ou lorsque le tableau est vide.

> **Remarque pour les utilisateurs TypeScript:**
>
> Utilisez `areWeakMaps` pour valider une entrée inconnue avant de la traiter comme un `WeakMap[]` non vide ; la
> fonction renvoie `false` pour les tableaux vides.

### Avantages

- Garantit que chaque élément du tableau fourni est une instance de `WeakMap`.
- Renvoie `false` pour les tableaux vides, évitant d’accepter accidentellement une « absence de données » comme une
  entrée valide.
- Utile comme garde avant d’effectuer des opérations spécifiques à `WeakMap` sur tous les éléments.

## Utilisation

### Syntaxe

Fonction:

- `areWeakMaps(array)`

Paramètres:

- `array`: Le tableau à vérifier pour des instances de `WeakMap`.

### Importation locale de fonction

```ts
import { areWeakMaps } from "@type-check/guards";

const list: unknown[] = [new WeakMap<object, number>(), new WeakMap<object, number>()];

if (areWeakMaps(list)) {
  // list est un tableau non vide d'instances de WeakMap
  for (const wm of list) {
    wm.set({}, 1);
  }
} else {
  // pas un WeakMap[] non vide
}

```

### Importation globale d’objet

Pour importer les fonctions en tant que méthodes d’objet globales, utilisez:

```ts
import "@type-check/guards/register-global-object.mjs";
```

La méthode suivante sera alors disponible globalement:

- `Type.areWeakMaps(array)`

## Analyse des fonctions

Une analyse tabulaire de la sortie produite lors de l’insertion de différents paramètres dans les fonctions est
documentée ici: [areWeakMaps](../_analysis/areWeakMaps.md)

<br>

---

<small>Le fichier a été généré le 30 janvier 2026 à 13:37:07 (UTC) avec l’utilisation du *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** par *
*[Roland Milto](https://roland-milto.de/)**.</small>