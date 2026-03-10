# areHexadecimals

## Description

Vérifie si tous les éléments d’un tableau sont des chaînes hexadécimales, en renvoyant `true` uniquement pour les
tableaux non vides où chaque élément est valide.

### Cas d’utilisation

Utilisez `areHexadecimals` pour valider la saisie utilisateur ou des données externes (p. ex. des identifiants, des
sommes de contrôle, des codes couleur sans un « # » initial) avant d’effectuer une analyse hexadécimale ou un traitement
ultérieur.

> **Remarque pour les utilisateurs TypeScript:**
>
> Utilisez `areHexadecimals` pour valider une entrée inconnue avant d’analyser ou de convertir des valeurs (par exemple,
> avant `parseInt(value, 16)` ou des conversions en BigInt).

### Avantages

- Valide que chaque élément est une chaîne hexadécimale et renvoie `true` uniquement lorsque tous les éléments
  correspondent.
- Rejette les tableaux vides par conception, en renvoyant `false` en cas de données d’entrée manquantes.
- Fournit un résultat booléen simple (`true`/`false`) adapté aux gardes et à la validation avec retour anticipé.

## Utilisation

### Syntaxe

Fonction:

- `areHexadecimals(array)`

Paramètres:

- `array`: Le tableau à vérifier pour des éléments de type chaîne hexadécimale.

### Importation locale de fonction

```ts
import { areHexadecimals } from "@type-check/guards";

const a = areHexadecimals(["1A", "3F", "B2"]);
const b = areHexadecimals(["1A", "3G", "B2"]);
const c = areHexadecimals([10 as unknown as string, "3F", "B2"] as unknown[]);
const d = areHexadecimals([]);

console.log(a, b, c, d);
```

### Importation globale d’objet

Pour importer les fonctions en tant que méthodes d’objet globales, utilisez:

```ts
import "@type-check/guards/register-global-object.mjs";
```

La méthode suivante sera alors disponible globalement:

- `Type.areHexadecimals(array)`

## Analyse des fonctions

Une analyse tabulaire de la sortie produite lors de l’insertion de différents paramètres dans les fonctions est
documentée ici: [areHexadecimals](../_analysis/areHexadecimals.md)

<br>

---

<small>Le fichier a été généré le 31 janvier 2026 à 23:06:02 (UTC) avec l’utilisation du *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** par *
*[Roland Milto](https://roland-milto.de/)**.</small>