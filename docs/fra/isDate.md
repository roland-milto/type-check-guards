# isDate

## Description

`isDate` détermine si une valeur fournie est un `Date`, renvoyant `true` pour les instances de `Date` et `false` sinon.

### Cas d’utilisation

Valider et affiner des valeurs inconnues (p. ex., des données de requête, des valeurs de configuration ou du JSON
analysé) avant d’effectuer des opérations sur `Date` telles que le formatage, les comparaisons ou l’appel de
`toISOString()`.

> **Remarque pour les utilisateurs TypeScript:**
>
> Utilisez `isDate` pour affiner `unknown` en `Date` à l’exécution ; il renvoie `true` uniquement pour de véritables
> instances de `Date` (pas pour des chaînes de date).

### Avantages

- Fournit une protection simple à l’exécution pour vérifier si une valeur est un `Date`.
- Aide à prévenir les erreurs de type en garantissant que seules les instances de `Date` passent la validation.
- Utile pour valider des entrées inconnues (p. ex., des charges utiles d’API) avant d’utiliser des méthodes spécifiques
  aux dates.

## Utilisation

### Syntaxe

Fonction:

- `isDate(value)`

Paramètres:

- `value`: La valeur à vérifier pour le type `Date`.

### Importation locale de fonction

```ts
import { isDate } from "@type-check/guards";

const input: unknown = new Date();

if (isDate(input)) {
  // input est une Date ici
  const iso = input.toISOString();
  console.log(iso);
} else {
  console.log("Not a Date");
}

```

### Importation globale d’objet

Pour importer les fonctions en tant que méthodes d’objet globales, utilisez:

```ts
import "@type-check/guards/register-global-object.mjs";
```

La méthode suivante sera alors disponible globalement:

- `Type.isDate(value)`

## Analyse des fonctions

Une analyse tabulaire de la sortie produite lors de l’insertion de différents paramètres dans les fonctions est
documentée ici: [isDate](../_analysis/isDate.md)

<br>

---

<small>Le fichier a été généré le 31 janvier 2026 à 15:37:15 (UTC) avec l’utilisation du *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** par *
*[Roland Milto](https://roland-milto.de/)**.</small>