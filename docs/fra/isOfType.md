# isOfType

## Description

Détermine si une `value` donnée correspond à une chaîne de type spécifiée, en utilisant `typeof` pour les primitifs et
un mécanisme de secours pour les types complexes.

### Cas d’utilisation

Valider et affiner des entrées `unknown` (p. ex. réponses d’API, saisie utilisateur, JSON analysé) en vérifiant si une
valeur est d’un type attendu (sous forme de chaîne) avant d’effectuer des opérations spécifiques au type.

> **Remarque pour les utilisateurs TypeScript:**
>
> Utilisez `isOfType` pour effectuer un branchement selon les types à l’exécution lorsque vous travaillez avec des
> valeurs `unknown` ; elle renvoie `true`/`false` et traite explicitement `null` et `undefined`.

### Avantages

- Vérifie les types primitifs via un `typeof` direct pour la rapidité et la clarté.
- Gère correctement `null` et `undefined`, que `typeof` seul ne peut pas distinguer comme prévu.
- Prend en charge des chaînes de type complexes ou personnalisées via une comparaison de secours utilisant `getTypeOf`.
- Renvoie un résultat booléen simple (`true`/`false`) adapté aux gardes et aux branchements.

## Utilisation

### Syntaxe

Fonction:

- `isOfType(value, type)`

Paramètres:

- `value`: La valeur à tester par rapport à `type`.
- `type`: La représentation sous forme de chaîne du type à vérifier.

### Importation locale de fonction

```ts
import { isOfType } from "@type-check/guards";

const input: unknown = Math.random() > 0.5 ? 123 : "hello";

if (isOfType(input, "number")) {
  // input est un nombre ici
  const doubled = input * 2;
  console.log(doubled);
} else if (isOfType(input, "string")) {
  // input est une chaîne de caractères ici
  console.log(input.toUpperCase());
}

console.log(isOfType(null, "null"));
console.log(isOfType(undefined, "undefined"));
```

### Importation globale d’objet

Pour importer les fonctions en tant que méthodes d’objet globales, utilisez:

```ts
import "@type-check/guards/register-global-object.mjs";
```

La méthode suivante sera alors disponible globalement:

- `Type.isOfType(value, type)`

## Analyse des fonctions

Une analyse tabulaire de la sortie produite lors de l’insertion de différents paramètres dans les fonctions est
documentée ici: [isOfType](../_analysis/isOfType.md)

<br>

---

<small>Le fichier a été généré le 30 janvier 2026 à 16:59:37 (UTC) avec l’utilisation du *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** par *
*[Roland Milto](https://roland-milto.de/)**.</small>