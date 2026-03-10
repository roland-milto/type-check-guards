# isSet

## Description

Détermine si une valeur donnée est un `Set`.

### Cas d’utilisation

Valider des entrées provenant de sources externes (p. ex. analyse JSON, saisie utilisateur ou API tierces) afin de
s’assurer qu’une valeur est un `Set` avant d’effectuer des opérations sur `Set`.

> **Remarque pour les utilisateurs TypeScript:**
>
> Utilisez `isSet` pour affiner des valeurs `unknown` avant d’appeler des API spécifiques à `Set` comme `.add`, `.has`
> ou `.size`.

### Avantages

- Fournit une vérification simple à l’exécution pour confirmer si une valeur est un `Set`.
- Aide à prévenir les erreurs de type en permettant une bifurcation précoce lorsqu’une valeur n’est pas un `Set`.
- Fonctionne avec n’importe quel contenu de `Set` (vide ou rempli) et renvoie `true`/`false` de manière cohérente.

## Utilisation

### Syntaxe

Fonction:

- `isSet(value)`

Paramètres:

- `value`: La valeur à vérifier.

### Importation locale de fonction

```ts
import { isSet } from "@type-check/guards";

const a: unknown = new Set([1, 2, 3]);
const b: unknown = [1, 2, 3];

if (isSet(a)) {
  // a est un Set à l’exécution
  console.log(a.size);
}

console.log(isSet(b)); // faux

```

### Importation globale d’objet

Pour importer les fonctions en tant que méthodes d’objet globales, utilisez:

```ts
import "@type-check/guards/register-global-object.mjs";
```

La méthode suivante sera alors disponible globalement:

- `Type.isSet(value)`

## Analyse des fonctions

Une analyse tabulaire de la sortie produite lors de l’insertion de différents paramètres dans les fonctions est
documentée ici: [isSet](../_analysis/isSet.md)

<br>

---

<small>Le fichier a été généré le 30 janvier 2026 à 23:09:33 (UTC) avec l’utilisation du *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** par *
*[Roland Milto](https://roland-milto.de/)**.</small>