# areNumbers

## Description

`areNumbers` vérifie si une valeur est un tableau non vide dont tous les éléments sont des nombres.

### Cas d’utilisation

Valider des données fournies par l’utilisateur ou par une API afin de s’assurer qu’il s’agit d’un tableau non vide de
nombres avant de calculer des totaux, des moyennes ou d’autres agrégations numériques.

> **Remarque pour les utilisateurs TypeScript:**
>
> Utilisez `areNumbers` pour valider des tableaux inconnus avant d’effectuer des calculs numériques ; elle renvoie
`false` pour les tableaux vides et pour les tableaux contenant une valeur qui n’est pas un nombre.

### Avantages

- Renvoie `true` uniquement lorsque l’entrée est un tableau non vide et que chaque élément est un nombre.
- Évite les faux positifs en rejetant les tableaux vides et les entrées qui ne sont pas des tableaux.
- Utile comme garde avant des opérations numériques (p. ex., somme, moyenne) afin d’éviter des erreurs à l’exécution.

## Utilisation

### Syntaxe

Fonction:

- `areNumbers(array)`

Paramètres:

- `array`: Le tableau à vérifier pour des éléments numériques.

### Importation locale de fonction

```ts
import { areNumbers } from "@type-check/guards";

const input: unknown = [1, 2, 3];

if (Array.isArray(input) && areNumbers(input)) {
  const total = input.reduce((sum, n) => sum + n, 0);
  console.log(total);
} else {
  console.log("Not a non-empty number array");
}

```

### Importation globale d’objet

Pour importer les fonctions en tant que méthodes d’objet globales, utilisez:

```ts
import "@type-check/guards/register-global-object.mjs";
```

La méthode suivante sera alors disponible globalement:

- `Type.areNumbers(array)`

## Analyse des fonctions

Une analyse tabulaire de la sortie produite lors de l’insertion de différents paramètres dans les fonctions est
documentée ici: [areNumbers](../_analysis/areNumbers.md)

<br>

---

<small>Le fichier a été généré le 30 janvier 2026 à 13:04:10 (UTC) avec l’utilisation du *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** par *
*[Roland Milto](https://roland-milto.de/)**.</small>