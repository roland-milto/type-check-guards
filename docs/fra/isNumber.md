# isNumber

## Description

`isNumber` vérifie si une valeur est un nombre fini, non `NaN`.

### Cas d’utilisation

Valider des entrées numériques provenant de sources non fiables (formulaires, paramètres de requête, charges utiles
JSON) avant des calculs, le stockage ou des vérifications de plage, en s’assurant que seuls les nombres finis passent (
`true`) et que tout le reste renvoie `false`.

> **Remarque pour les utilisateurs TypeScript:**
>
> Utilisez `isNumber` pour valider des valeurs `unknown` avant de faire des opérations arithmétiques ; il rejette `NaN`,
`Infinity` et `-Infinity`.

### Avantages

- Renvoie `true` uniquement pour de vrais nombres JavaScript (vérification de type plus rejet de `NaN` et de l’infini).
- Évite les bogues de validation courants où `NaN`, `Infinity` ou `-Infinity` passent accidentellement pour des nombres.
- Fonctionne bien comme garde d’exécution pour des entrées inconnues (p. ex. JSON, saisie utilisateur, API externes).
- Simple, rapide et sans effets de bord.

## Utilisation

### Syntaxe

Fonction:

- `isNumber(value)`

Paramètres:

- `value`: La valeur à vérifier.

### Importation locale de fonction

```ts
import { isNumber } from "@type-check/guards";

const input: unknown = 42;

if (isNumber(input)) {
  // input est un nombre fini valide
  const doubled = input * 2;
  console.log(doubled);
} else {
  console.log("Not a valid number");
}

console.log(isNumber(NaN));
console.log(isNumber(Infinity));
console.log(isNumber("42"));
```

### Importation globale d’objet

Pour importer les fonctions en tant que méthodes d’objet globales, utilisez:

```ts
import "@type-check/guards/register-global-object.mjs";
```

La méthode suivante sera alors disponible globalement:

- `Type.isNumber(value)`

## Analyse des fonctions

Une analyse tabulaire de la sortie produite lors de l’insertion de différents paramètres dans les fonctions est
documentée ici: [isNumber](../_analysis/isNumber.md)

<br>

---

<small>Le fichier a été généré le 30 janvier 2026 à 13:08:53 (UTC) avec l’utilisation du *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** par *
*[Roland Milto](https://roland-milto.de/)**.</small>