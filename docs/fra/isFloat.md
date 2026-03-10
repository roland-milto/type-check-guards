# isFloat

## Description

`isFloat` détermine si une `value` donnée est un nombre à virgule flottante fini (un `number` qui n’est pas un entier).

### Cas d’utilisation

Valider une entrée numérique fournie par l’utilisateur lorsque des valeurs fractionnaires sont requises (p. ex., prix,
mesures, taux) et rejeter les entiers, `NaN` et les infinis.

> **Remarque pour les utilisateurs TypeScript:**
>
> Utilisez `isFloat` lorsque vous devez accepter uniquement des entrées numériques finies et non entières ; elle rejette
> les entiers et les nombres non finis.

### Avantages

- Renvoie `true` uniquement pour les nombres finis non entiers (exclut les entiers, `NaN`, `Infinity` et `-Infinity`).
- Fonctionne avec tout type d’entrée (`unknown`) et affine le type en toute sécurité en vérifiant
  `typeof value === "number"`.
- Utilise les garde-fous numériques intégrés (`Number.isInteger`, `Number.isFinite`) pour un comportement prévisible.

## Utilisation

### Syntaxe

Fonction:

- `isFloat(value)`

Paramètres:

- `value`: La valeur à vérifier pour déterminer si c’est un nombre à virgule flottante.

### Importation locale de fonction

```ts
import { isFloat } from "@type-check/guards";

const inputs: unknown[] = [3.14, -0.1, 1e-7, 42, "3.14", NaN, Infinity];

for (const value of inputs) {
  if (isFloat(value)) {
    // la valeur est un nombre à l’exécution ; elle est finie et n’est pas un entier
    const rounded = value.toFixed(2);
    console.log("float:", value, "rounded:", rounded);
  } else {
    console.log("not a float:", value);
  }
}

```

### Importation globale d’objet

Pour importer les fonctions en tant que méthodes d’objet globales, utilisez:

```ts
import "@type-check/guards/register-global-object.mjs";
```

La méthode suivante sera alors disponible globalement:

- `Type.isFloat(value)`

## Analyse des fonctions

Une analyse tabulaire de la sortie produite lors de l’insertion de différents paramètres dans les fonctions est
documentée ici: [isFloat](../_analysis/isFloat.md)

<br>

---

<small>Le fichier a été généré le 30 janvier 2026 à 16:07:36 (UTC) avec l’utilisation du *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** par *
*[Roland Milto](https://roland-milto.de/)**.</small>