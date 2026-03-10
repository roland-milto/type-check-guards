# areRegExes

## Description

`areRegExes` vérifie si une valeur est un tableau rempli ne contenant que des objets `RegExp`.

### Cas d’utilisation

Valider qu’une option de configuration (p. ex., une liste de motifs d’autorisation/refus) est un tableau non vide
d’expressions régulières avant de l’utiliser pour la correspondance.

> **Remarque pour les utilisateurs TypeScript:**
>
> Utilisez `areRegExes` pour restreindre `unknown` à `RegExp[]` avant d’itérer ou de composer des motifs.

### Avantages

- Garantit qu’une valeur est un tableau non vide dont chaque élément est une instance de `RegExp`.
- Fournit une simple garde booléenne (`true`/`false`) pour valider une saisie utilisateur ou une configuration.
- Aide à prévenir les erreurs d’exécution lorsque le code ultérieur suppose que tous les éléments prennent en charge les
  opérations d’expressions régulières.

## Utilisation

### Syntaxe

Fonction:

- `areRegExes(array)`

Paramètres:

- `array`: La valeur à vérifier.

### Importation locale de fonction

```ts
import { areRegExes } from "@type-check/guards";

const patterns: unknown = [/[a-z]/, /[0-9]/];

if (areRegExes(patterns)) {
  // patterns est un tableau de RegExp ici
  const combined = new RegExp(patterns.map(r => r.source).join("|"));
  console.log(combined.test("abc123"));
} else {
  throw new TypeError("Expected a non-empty array of RegExp");
}

```

### Importation globale d’objet

Pour importer les fonctions en tant que méthodes d’objet globales, utilisez:

```ts
import "@type-check/guards/register-global-object.mjs";
```

La méthode suivante sera alors disponible globalement:

- `Type.areRegExes(array)`

## Analyse des fonctions

Une analyse tabulaire de la sortie produite lors de l’insertion de différents paramètres dans les fonctions est
documentée ici: [areRegExes](../_analysis/areRegExes.md)

<br>

---

<small>Le fichier a été généré le 30 janvier 2026 à 23:18:04 (UTC) avec l’utilisation du *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** par *
*[Roland Milto](https://roland-milto.de/)**.</small>