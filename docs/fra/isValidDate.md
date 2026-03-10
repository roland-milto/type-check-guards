# isValidDate

## Description

`isValidDate` vérifie si une valeur donnée est un objet `Date` valide et renvoie `true` uniquement pour de vraies dates
non invalides.

### Cas d’utilisation

Valider une saisie utilisateur ou des données d’API pouvant contenir des dates, en s’assurant que la valeur est une
véritable instance de `Date` et non une date invalide avant d’effectuer des calculs, du formatage ou des comparaisons de
dates.

> **Remarque pour les utilisateurs TypeScript:**
>
> Utilisez `isValidDate` avant d’appeler des méthodes de `Date` (p. ex., `toISOString`, `getTime`) sur des valeurs
> typées `unknown` afin de vous assurer qu’il s’agit d’objets `Date` valides.

### Avantages

- Garantit qu’une valeur est une instance de `Date` et pas seulement une chaîne ou un nombre ressemblant à une date.
- Rejette les dates invalides (p. ex., `new Date("invalid")`) en vérifiant les valeurs de temps `NaN`.
- Garde booléen simple, facile à utiliser dans des conditions et des pipelines de validation.
- Aide à prévenir les erreurs à l’exécution lors de l’appel de méthodes de date en vérifiant d’abord l’entrée.

## Utilisation

### Syntaxe

Fonction:

- `isValidDate(value)`

Paramètres:

- `value`: La valeur à vérifier.

### Importation locale de fonction

```ts
import { isValidDate } from "@type-check/guards";

const input: unknown = new Date();

if (isValidDate(input)) {
  // input est une instance de Date valide
  const iso = input.toISOString();
  console.log(iso);
} else {
  console.log("Not a valid Date");
}

console.log(isValidDate(new Date("invalid"))); // faux
console.log(isValidDate("2025-12-22")); // faux

```

### Importation globale d’objet

Pour importer les fonctions en tant que méthodes d’objet globales, utilisez:

```ts
import "@type-check/guards/register-global-object.mjs";
```

La méthode suivante sera alors disponible globalement:

- `Type.isValidDate(value)`

## Analyse des fonctions

Une analyse tabulaire de la sortie produite lors de l’insertion de différents paramètres dans les fonctions est
documentée ici: [isValidDate](../_analysis/isValidDate.md)

<br>

---

<small>Le fichier a été généré le 30 janvier 2026 à 16:39:59 (UTC) avec l’utilisation du *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** par *
*[Roland Milto](https://roland-milto.de/)**.</small>