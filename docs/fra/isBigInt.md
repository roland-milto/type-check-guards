# isBigInt

## Description

`isBigInt` vérifie si une valeur donnée est de type `bigint`, en renvoyant `true` pour les primitives BigInt et `false`
sinon.

### Cas d’utilisation

Valider et affiner des valeurs provenant de sources non typées (p. ex. analyse JSON, saisie utilisateur, API externes)
avant d’effectuer des calculs spécifiques à BigInt ou de les stocker dans des champs réservés à BigInt.

> **Remarque pour les utilisateurs TypeScript:**
>
> Utilisez `isBigInt` pour affiner `unknown` en `bigint` avant de faire de l’arithmétique BigInt (p. ex. `+`, `*`), qui
> nécessite des opérandes BigInt.

### Avantages

- Fournit une vérification d’exécution simple et fiable pour le type primitif `bigint`.
- Aide à affiner les valeurs `unknown` avant d’effectuer des opérations réservées à BigInt.
- Évite les faux positifs : les nombres ordinaires, les chaînes et les autres types renvoient `false`.

## Utilisation

### Syntaxe

Fonction:

- `isBigInt(value)`

Paramètres:

- `value`: La valeur à vérifier.

### Importation locale de fonction

```ts
import { isBigInt } from "@type-check/guards";

const input: unknown = 10n;

if (isBigInt(input)) {
  const doubled = input * 2n;
  console.log(doubled);
} else {
  console.log("Not a bigint");
}

console.log(isBigInt(10n)); // vrai
console.log(isBigInt(10));  // faux
console.log(isBigInt("10")); // faux

```

### Importation globale d’objet

Pour importer les fonctions en tant que méthodes d’objet globales, utilisez:

```ts
import "@type-check/guards/register-global-object.mjs";
```

La méthode suivante sera alors disponible globalement:

- `Type.isBigInt(value)`

## Analyse des fonctions

Une analyse tabulaire de la sortie produite lors de l’insertion de différents paramètres dans les fonctions est
documentée ici: [isBigInt](../_analysis/isBigInt.md)

<br>

---

<small>Le fichier a été généré le 31 janvier 2026 à 23:31:44 (UTC) avec l’utilisation du *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** par *
*[Roland Milto](https://roland-milto.de/)**.</small>