# isFalse

## Description

`isFalse` vérifie si une valeur donnée est strictement égale au littéral booléen `false`.

### Cas d’utilisation

Valider des données inconnues (p. ex. issues de JSON, de paramètres de requête ou d’une saisie utilisateur) où seule la
valeur booléenne explicite `false` doit être considérée comme un indicateur valide, et où tout le reste doit être
rejeté.

> **Remarque pour les utilisateurs TypeScript:**
>
> Utilisez `isFalse` lorsque vous devez n’accepter que le littéral `false` et rejeter toutes les autres valeurs falsy ;
> il renvoie `true` uniquement pour `value === false`.

### Avantages

- Fournit une vérification stricte du littéral booléen `false` sans coercition.
- Aide à distinguer `false` des autres valeurs falsy comme `0`, `""`, `null` et `undefined`.
- Améliore la lisibilité en rendant l’intention explicite lors de la validation d’une entrée inconnue.

## Utilisation

### Syntaxe

Fonction:

- `isFalse(value)`

Paramètres:

- `value`: La valeur à vérifier.

### Importation locale de fonction

```ts
import { isFalse } from "@type-check/guards";

const input: unknown = false;

if (isFalse(input)) {
  // input est exactement false ici
  console.log("Got false");
} else {
  console.log("Not false");
}

```

### Importation globale d’objet

Pour importer les fonctions en tant que méthodes d’objet globales, utilisez:

```ts
import "@type-check/guards/register-global-object.mjs";
```

La méthode suivante sera alors disponible globalement:

- `Type.isFalse(value)`

## Analyse des fonctions

Une analyse tabulaire de la sortie produite lors de l’insertion de différents paramètres dans les fonctions est
documentée ici: [isFalse](../_analysis/isFalse.md)

<br>

---

<small>Le fichier a été généré le 31 janvier 2026 à 16:21:31 (UTC) avec l’utilisation du *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** par *
*[Roland Milto](https://roland-milto.de/)**.</small>