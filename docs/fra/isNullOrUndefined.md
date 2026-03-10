# isNullOrUndefined

## Description

Vérifie si une valeur donnée est `null` ou `undefined`.

### Cas d’utilisation

Utilisez `isNullOrUndefined` lorsque vous devez traiter à la fois `null` et `undefined` comme « aucune valeur », par
exemple pour valider des entrées optionnelles, normaliser des charges utiles d’API ou protéger des chemins de code avant
de déréférencer une valeur potentiellement manquante.

> **Remarque pour les utilisateurs TypeScript:**
>
> Utilisez `isNullOrUndefined` pour vous prémunir contre les valeurs manquantes avant d’accéder à des propriétés ou
> d’appeler des méthodes ; elle renvoie `true` uniquement pour `null` et `undefined`.

### Avantages

- Fournit une garde claire et réutilisable pour détecter `null` et `undefined` au même endroit.
- Renvoie un booléen simple (`true`/`false`) facile à composer dans des conditions et des validations.
- Aide à éviter des erreurs d’exécution courantes en vérifiant l’absence de valeurs avant d’accéder à des propriétés ou
  d’appeler des méthodes.

## Utilisation

### Syntaxe

Fonction:

- `isNullOrUndefined(value)`

Paramètres:

- `value`: La valeur à vérifier pour `null` ou `undefined`.

### Importation locale de fonction

```ts
import { isNullOrUndefined } from "@type-check/guards";

const a: unknown = null;
const b: unknown = undefined;
const c: unknown = 0;

if (isNullOrUndefined(a)) {
  // gérer la valeur manquante
}

console.log(isNullOrUndefined(b)); // vrai
console.log(isNullOrUndefined(c)); // faux

```

### Importation globale d’objet

Pour importer les fonctions en tant que méthodes d’objet globales, utilisez:

```ts
import "@type-check/guards/register-global-object.mjs";
```

La méthode suivante sera alors disponible globalement:

- `Type.isNullOrUndefined(value)`

## Analyse des fonctions

Une analyse tabulaire de la sortie produite lors de l’insertion de différents paramètres dans les fonctions est
documentée ici: [isNullOrUndefined](../_analysis/isNullOrUndefined.md)

<br>

---

<small>Le fichier a été généré le 31 janvier 2026 à 00:33:37 (UTC) avec l’utilisation du *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** par *
*[Roland Milto](https://roland-milto.de/)**.</small>