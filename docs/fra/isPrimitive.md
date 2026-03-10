# isPrimitive

## Description

`isPrimitive` détermine si une valeur donnée est un primitif (`null`, `undefined`, `boolean`, `number`, `string`,
`bigint`, `symbol`).

### Cas d’utilisation

Valider les entrées à l’exécution (p. ex., champs de charge utile d’API, valeurs de configuration ou données fournies
par l’utilisateur) afin de s’assurer qu’une valeur est un primitif avant de la sérialiser, de la journaliser ou
d’appliquer des opérations réservées aux primitifs.

> **Remarque pour les utilisateurs TypeScript:**
>
> Utilisez `isPrimitive` pour protéger des entrées `unknown` avant de les traiter comme des objets ou des fonctions ;
> elle renvoie `true` pour les primitifs et `false` pour les objets et les fonctions.

### Avantages

- Vérification rapide, sans allocation, pour déterminer si une valeur est un primitif JavaScript.
- Traite correctement `null` comme un primitif (même si `typeof null` vaut `"object"`).
- Aide à affiner des valeurs `unknown` avant d’effectuer des opérations réservées aux objets.

## Utilisation

### Syntaxe

Fonction:

- `isPrimitive(value)`

Paramètres:

- `value`: La valeur à vérifier pour déterminer si elle est de type primitif.

### Importation locale de fonction

```ts
import { isPrimitive } from "@type-check/guards";

function format(value: unknown): string {
  if (isPrimitive(value)) {
    return String(value);
  }
  return "[non-primitive]";
}

console.log(isPrimitive(null));
console.log(isPrimitive(42));
console.log(isPrimitive("hello"));
console.log(isPrimitive({}));
console.log(isPrimitive(() => {}));
```

### Importation globale d’objet

Pour importer les fonctions en tant que méthodes d’objet globales, utilisez:

```ts
import "@type-check/guards/register-global-object.mjs";
```

La méthode suivante sera alors disponible globalement:

- `Type.isPrimitive(value)`

## Analyse des fonctions

Une analyse tabulaire de la sortie produite lors de l’insertion de différents paramètres dans les fonctions est
documentée ici: [isPrimitive](../_analysis/isPrimitive.md)

<br>

---

<small>Le fichier a été généré le 30 janvier 2026 à 23:56:06 (UTC) avec l’utilisation du *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** par *
*[Roland Milto](https://roland-milto.de/)**.</small>