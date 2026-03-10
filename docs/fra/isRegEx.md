# isRegEx

## Description

Détermine si une valeur fournie est une instance de `RegExp`.

### Cas d’utilisation

Valider des valeurs fournies par l’utilisateur ou dynamiques (p. ex., configuration, charges utiles d’API, entrées de
plugins) avant de les traiter comme une expression régulière.

> **Remarque pour les utilisateurs TypeScript:**
>
> Utilisez `isRegEx` pour affiner des valeurs `unknown` (ou d’union) avant d’utiliser des propriétés ou des méthodes
> spécifiques à RegExp ; elle renvoie `true` uniquement pour les valeurs qui sont des instances de `RegExp`.

### Avantages

- Fournit un garde de type simple à l’exécution pour vérifier si une valeur est une `RegExp`.
- Aide à prévenir les erreurs lorsque le code attend une expression régulière (p. ex., avant d’appeler `test`, `exec` ou
  de lire `source`).
- Fonctionne à la fois avec les littéraux regex et les instances créées via `new RegExp(...)`.
- Renvoie un résultat booléen clair (`true`/`false`) sans lever d’exception pour les entrées qui ne sont pas des regex.

## Utilisation

### Syntaxe

Fonction:

- `isRegEx(value)`

Paramètres:

- `value`: La valeur à vérifier.

### Importation locale de fonction

```ts
import { isRegEx } from "@type-check/guards";

const input: unknown = /abc/i;

if (isRegEx(input)) {
  // input est une RegExp ici
  console.log(input.test("ABC"));
} else {
  console.log("Not a RegExp");
}

```

### Importation globale d’objet

Pour importer les fonctions en tant que méthodes d’objet globales, utilisez:

```ts
import "@type-check/guards/register-global-object.mjs";
```

La méthode suivante sera alors disponible globalement:

- `Type.isRegEx(value)`

## Analyse des fonctions

Une analyse tabulaire de la sortie produite lors de l’insertion de différents paramètres dans les fonctions est
documentée ici: [isRegEx](../_analysis/isRegEx.md)

<br>

---

<small>Le fichier a été généré le 30 janvier 2026 à 23:29:16 (UTC) avec l’utilisation du *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** par *
*[Roland Milto](https://roland-milto.de/)**.</small>