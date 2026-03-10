# isSymbol

## Description

`isSymbol` détermine si une valeur donnée est de type `symbol`, en renvoyant `true` pour les symboles et `false` sinon.

### Cas d’utilisation

Valider qu’une valeur `unknown` est un `symbol` avant de l’utiliser comme identifiant unique, clé de registre ou clé de
propriété calculée dans des objets et des maps.

> **Remarque pour les utilisateurs TypeScript:**
>
> Utilisez `isSymbol` pour affiner `unknown` en `symbol` avant d’appeler des fonctions liées aux symboles ou de
> l’utiliser comme clé de propriété calculée.

### Avantages

- Fournit une vérification d’exécution simple et fiable pour le type primitif JavaScript `symbol`.
- Aide à affiner des valeurs `unknown` avant d’utiliser des API spécifiques aux symboles ou de les stocker comme clés.
- Évite les faux positifs en utilisant `typeof`, qui est la méthode canonique pour détecter les valeurs `symbol`.

## Utilisation

### Syntaxe

Fonction:

- `isSymbol(value)`

Paramètres:

- `value`: La valeur à vérifier.

### Importation locale de fonction

```ts
import { isSymbol } from "@type-check/guards";

const input: unknown = Symbol("key");

if (isSymbol(input)) {
  // input est un symbole ici
  const registryKey = Symbol.keyFor(input);
  console.log(registryKey);
} else {
  console.log("Not a symbol");
}

```

### Importation globale d’objet

Pour importer les fonctions en tant que méthodes d’objet globales, utilisez:

```ts
import "@type-check/guards/register-global-object.mjs";
```

La méthode suivante sera alors disponible globalement:

- `Type.isSymbol(value)`

## Analyse des fonctions

Une analyse tabulaire de la sortie produite lors de l’insertion de différents paramètres dans les fonctions est
documentée ici: [isSymbol](../_analysis/isSymbol.md)

<br>

---

<small>Le fichier a été généré le 30 janvier 2026 à 14:26:40 (UTC) avec l’utilisation du *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** par *
*[Roland Milto](https://roland-milto.de/)**.</small>