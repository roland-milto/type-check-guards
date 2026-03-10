# areOneOfType

## Description

`areOneOfType` vérifie si tous les éléments d’un tableau non vide appartiennent à l’un des types d’exécution spécifiés.

### Cas d’utilisation

Valider des données entrantes (p. ex., du JSON analysé) lorsqu’un champ doit être un tableau non vide dont les éléments
sont limités à un ensemble connu de types primitifs ; renvoyer `false` lorsque le tableau est vide ou contient un type
non autorisé.

> **Remarque pour les utilisateurs TypeScript:**
>
> Cette fonction renvoie un booléen et ne restreint pas les types des éléments du tableau à la compilation ; utilisez-la
> comme étape de validation à l’exécution avant tout traitement ultérieur.

### Avantages

- Garantit que chaque élément d’un tableau correspond à au moins un type d’exécution autorisé, en renvoyant `true`
  uniquement lorsque l’ensemble du tableau est valide.
- Rejette rapidement les entrées invalides : renvoie `false` lorsque `array` ou `types` est vide ou n’est pas un tableau
  rempli.
- Utile pour valider des collections à types mixtes (p. ex., nombres et chaînes) avec un seul appel à `areOneOfType`.

## Utilisation

### Syntaxe

Fonction:

- `areOneOfType(array, types)`

Paramètres:

- `array`: Un tableau d’éléments à vérifier par rapport aux types fournis.
- `types`: Un tableau de chaînes représentant les types de données à vérifier.

### Importation locale de fonction

```ts
import { areOneOfType } from "@type-check/guards";

const values1: unknown[] = [1, "a", true];
const ok1 = areOneOfType(values1, ["number", "string", "boolean"]);

const values2: unknown[] = [1, "a", {}];
const ok2 = areOneOfType(values2, ["number", "string"]);

const values3: unknown[] = [];
const ok3 = areOneOfType(values3, ["number"]);

console.log({ ok1, ok2, ok3 });
```

### Importation globale d’objet

Pour importer les fonctions en tant que méthodes d’objet globales, utilisez:

```ts
import "@type-check/guards/register-global-object.mjs";
```

La méthode suivante sera alors disponible globalement:

- `Type.areOneOfType(array, types)`

## Analyse des fonctions

Une analyse tabulaire de la sortie produite lors de l’insertion de différents paramètres dans les fonctions est
documentée ici: [areOneOfType](../_analysis/areOneOfType.md)

<br>

---

<small>Le fichier a été généré le 31 janvier 2026 à 23:36:45 (UTC) avec l’utilisation du *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** par *
*[Roland Milto](https://roland-milto.de/)**.</small>