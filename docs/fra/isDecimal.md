# isDecimal

## Description

`isDecimal` vérifie si une valeur est une représentation décimale sous forme de chaîne, sans espaces en début/fin et
avec un format décimal valide.

### Cas d’utilisation

Valider des champs de formulaire, des charges utiles d’API ou des valeurs de configuration qui doivent être fournies
sous forme de chaîne décimale (éventuellement signée) sans aucun espace autour, avant de les analyser ou de les stocker.

> **Remarque pour les utilisateurs TypeScript:**
>
> Utilisez `isDecimal` pour valider une saisie utilisateur avant de la convertir (p. ex. avec `Number(value)`), en
> particulier lorsque les espaces doivent être rejetés.

### Avantages

- Valide strictement que l’entrée est une chaîne de caractères et qu’elle correspond à un motif de littéral décimal.
- Rejette les espaces en début et en fin (y compris les caractères de contrôle) afin d’éviter une analyse ambiguë.
- Effectue des pré-vérifications rapides (vérification du type et du premier/dernier caractère) avant d’exécuter
  l’expression régulière.
- Renvoie un résultat booléen simple (`true`/`false`) adapté aux gardes et à la validation d’entrée.

## Utilisation

### Syntaxe

Fonction:

- `isDecimal(value)`

Paramètres:

- `value`: La valeur à vérifier pour un format de chaîne décimale.

### Importation locale de fonction

```ts
import { isDecimal } from "@type-check/guards";

const inputs: unknown[] = ["123.45", "0.99", "-42.0", 123.45, " 123.45", "123.45 "];

for (const v of inputs) {
  if (isDecimal(v)) {
    // v est une chaîne ici (validée à l'exécution)
    console.log("decimal:", v);
  } else {
    console.log("not decimal:", v);
  }
}

```

### Importation globale d’objet

Pour importer les fonctions en tant que méthodes d’objet globales, utilisez:

```ts
import "@type-check/guards/register-global-object.mjs";
```

La méthode suivante sera alors disponible globalement:

- `Type.isDecimal(value)`

## Analyse des fonctions

Une analyse tabulaire de la sortie produite lors de l’insertion de différents paramètres dans les fonctions est
documentée ici: [isDecimal](../_analysis/isDecimal.md)

<br>

---

<small>Le fichier a été généré le 31 janvier 2026 à 15:52:12 (UTC) avec l’utilisation du *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** par *
*[Roland Milto](https://roland-milto.de/)**.</small>