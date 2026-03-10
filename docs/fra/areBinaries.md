# areBinaries

## Description

Vérifie si la valeur fournie est un tableau non vide de chaînes binaires valides et renvoie `true` uniquement si tous
les éléments passent la validation.

### Cas d’utilisation

Utilisez `areBinaries` lorsque vous recevez une liste inconnue (p. ex. depuis du JSON, des formulaires ou des API) et
que vous devez vous assurer qu’il s’agit d’un tableau non vide de chaînes binaires avant de l’analyser ou de la traiter.

> **Remarque pour les utilisateurs TypeScript:**
>
> Utilisez `areBinaries` pour valider une entrée inconnue avant de convertir des chaînes binaires en nombres/BigInt ;
> cela garantit que le tableau n’est pas vide et que chaque élément est une chaîne binaire valide.

### Avantages

- Valide qu’une valeur est un tableau non vide dont chaque élément est une chaîne binaire valide.
- Renvoie un résultat booléen simple (`true`/`false`) adapté aux gardes, aux retours anticipés et à la validation des
  entrées.
- Évite les erreurs d’analyse en aval en rejetant les tableaux qui contiennent une entrée non binaire.

## Utilisation

### Syntaxe

Fonction:

- `areBinaries(array)`

Paramètres:

- `array`: La valeur à vérifier.

### Importation locale de fonction

```ts
import { areBinaries } from "@type-check/guards";

const a = ["0b1010", "1101"];
const b = ["1010", "1020"];

console.log(areBinaries(a)); // vrai
console.log(areBinaries(b)); // faux
console.log(areBinaries([])); // faux
```

### Importation globale d’objet

Pour importer les fonctions en tant que méthodes d’objet globales, utilisez:

```ts
import "@type-check/guards/register-global-object.mjs";
```

La méthode suivante sera alors disponible globalement:

- `Type.areBinaries(array)`

## Analyse des fonctions

Une analyse tabulaire de la sortie produite lors de l’insertion de différents paramètres dans les fonctions est
documentée ici: [areBinaries](../_analysis/areBinaries.md)

<br>

---

<small>Le fichier a été généré le 31 janvier 2026 à 23:14:26 (UTC) avec l’utilisation du *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** par *
*[Roland Milto](https://roland-milto.de/)**.</small>