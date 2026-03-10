# isFinite

## Description

Détermine si une `value` donnée est un `number` fini.

### Cas d’utilisation

Utilisez `isFinite` pour valider une entrée inconnue (p. ex. provenant de JSON, de formulaires ou d’API) avant
d’effectuer des calculs numériques, en garantissant que la valeur est un nombre réel et fini.

> **Remarque pour les utilisateurs TypeScript:**
>
> `isFinite` renvoie `true` uniquement pour les nombres finis ; il renvoie `false` pour `NaN`, `Infinity` et toute
> valeur qui n'est pas un nombre.

### Avantages

- Utilise la fonction intégrée `Number.isFinite` pour une vérification fiable de la finitude.
- Renvoie `true` uniquement pour les nombres finis ; renvoie `false` pour `NaN`, `Infinity` et les entrées qui ne sont
  pas des nombres.
- Prédicat simple, sans effets de bord, adapté à la validation et à la logique de garde.

## Utilisation

### Syntaxe

Fonction:

- `isFinite(value)`

Paramètres:

- `value`: La valeur à vérifier pour la finitude.

### Importation locale de fonction

```ts
import { isFinite } from "@type-check/guards";

const inputs: unknown[] = [123, -123.45, "123", Infinity, NaN, null, undefined];

const finiteNumbers = inputs.filter(isFinite);
// finiteNumbers est : [123, -123.45]

const value: unknown = 42;
if (isFinite(value)) {
  // value est un nombre fini ici
  const doubled = value * 2;
  console.log(doubled);
}
```

### Importation globale d’objet

Pour importer les fonctions en tant que méthodes d’objet globales, utilisez:

```ts
import "@type-check/guards/register-global-object.mjs";
```

La méthode suivante sera alors disponible globalement:

- `Type.isFinite(value)`

## Analyse des fonctions

Une analyse tabulaire de la sortie produite lors de l’insertion de différents paramètres dans les fonctions est
documentée ici: [isFinite](../_analysis/isFinite.md)

<br>

---

<small>Le fichier a été généré le 30 janvier 2026 à 16:29:44 (UTC) avec l’utilisation du *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** par *
*[Roland Milto](https://roland-milto.de/)**.</small>