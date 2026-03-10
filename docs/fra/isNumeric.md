# isNumeric

## Description

`isNumeric` détermine si une `value` donnée est considérée comme numérique en comparant son type résolu à
`NUMERIC_TYPES`.

### Cas d’utilisation

Utilisez `isNumeric` pour valider des entrées (p. ex., charges utiles d’API, valeurs de formulaire, configuration) avant
d’effectuer des opérations numériques, et pour accepter de manière cohérente des types de type numérique (comme
`BigInt`) conformément à `NUMERIC_TYPES`.

> **Remarque pour les utilisateurs TypeScript:**
>
> `isNumeric` est un prédicat qui renvoie un booléen ; considérez-le comme une vérification à l’exécution indiquant si
> une valeur appartient à l’ensemble de types numériques défini par la bibliothèque.

### Avantages

- Utilise `getTypeOf` ainsi que `NUMERIC_TYPES` pour centraliser la logique de détection numérique et maintenir des
  vérifications cohérentes dans une base de code.
- Renvoie un booléen simple (`true`/`false`) pour faciliter les branchements et une utilisation de type garde.
- Prend en charge plusieurs représentations numériques (p. ex., `number`, `BigInt`) telles que définies par
  `NUMERIC_TYPES`.

## Utilisation

### Syntaxe

Fonction:

- `isNumeric(value)`

Paramètres:

- `value`: La valeur à vérifier pour un type numérique.

### Importation locale de fonction

```ts
import { isNumeric } from "@type-check/guards";

const inputs: unknown[] = [42, 3.14, BigInt(1000), "123", null, undefined];

for (const v of inputs) {
  if (isNumeric(v)) {
    // v est considéré comme numérique selon les règles de type de la bibliothèque
    console.log("numeric:", v);
  } else {
    console.log("not numeric:", v);
  }
}

```

### Importation globale d’objet

Pour importer les fonctions en tant que méthodes d’objet globales, utilisez:

```ts
import "@type-check/guards/register-global-object.mjs";
```

La méthode suivante sera alors disponible globalement:

- `Type.isNumeric(value)`

## Analyse des fonctions

Une analyse tabulaire de la sortie produite lors de l’insertion de différents paramètres dans les fonctions est
documentée ici: [isNumeric](../_analysis/isNumeric.md)

<br>

---

<small>Le fichier a été généré le 6 février 2026 à 15:52:30 (UTC) avec l’utilisation du *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** par *
*[Roland Milto](https://roland-milto.de/)**.</small>