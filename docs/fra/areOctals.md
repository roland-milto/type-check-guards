# areOctals

## Description

`areOctals` détermine si la valeur fournie est un tableau non vide de chaînes octales valides.

### Cas d’utilisation

Utilisez `areOctals` lors de la validation d’entrées utilisateur, de valeurs de configuration ou de charges utiles d’API
qui doivent contenir des littéraux octaux (p. ex., des modes de permission de fichiers comme `0o755`) et lorsque vous
souhaitez rejeter les tableaux vides ou toute entrée invalide en renvoyant `false`.

> **Remarque pour les utilisateurs TypeScript:**
>
> Utilisez `areOctals` pour vous assurer d’avoir un `unknown[]` non vide où chaque entrée est une chaîne octale valide
> avant de convertir (p. ex., via `Number(...)` ou un parsing personnalisé).

### Avantages

- Valide qu’une valeur est un tableau non vide dont chaque élément est une chaîne octale, en renvoyant `true` uniquement
  lorsque tous les éléments réussissent.
- Échoue rapidement : renvoie `false` dès qu’un élément non octal est trouvé.
- Utile comme garde avant d’analyser ou de convertir des chaînes octales afin d’éviter des erreurs à l’exécution et une
  gestion incohérente des entrées.

## Utilisation

### Syntaxe

Fonction:

- `areOctals(array)`

Paramètres:

- `array`: La valeur à vérifier.

### Importation locale de fonction

```ts
import { areOctals } from "@type-check/guards";

const value: unknown = ["0o123", "+0O755"];

if (Array.isArray(value) && areOctals(value)) {
  // value est un tableau non vide de chaînes octales
  const parsed = value.map(v => Number(v));
  console.log(parsed);
} else {
  console.log("Not an array of octal strings");
}

```

### Importation globale d’objet

Pour importer les fonctions en tant que méthodes d’objet globales, utilisez:

```ts
import "@type-check/guards/register-global-object.mjs";
```

La méthode suivante sera alors disponible globalement:

- `Type.areOctals(array)`

## Analyse des fonctions

Une analyse tabulaire de la sortie produite lors de l’insertion de différents paramètres dans les fonctions est
documentée ici: [areOctals](../_analysis/areOctals.md)

<br>

---

<small>Le fichier a été généré le 30 janvier 2026 à 14:45:08 (UTC) avec l’utilisation du *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** par *
*[Roland Milto](https://roland-milto.de/)**.</small>