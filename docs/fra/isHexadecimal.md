# isHexadecimal

## Description

`isHexadecimal` vérifie si une valeur donnée est un littéral de chaîne hexadécimale avec un préfixe `0x`/`0X`
obligatoire.

### Cas d’utilisation

Utilisez `isHexadecimal` pour valider des valeurs de configuration, des champs de charge utile d’API ou des arguments de
CLI qui doivent être fournis sous forme de littéraux de chaîne hexadécimale (p. ex. des identifiants, des masques ou des
adresses) et ne doivent pas contenir d’espaces autour.

> **Remarque pour les utilisateurs TypeScript:**
>
> Utilisez `isHexadecimal` lorsque vous devez valider une saisie utilisateur ou des données sérialisées en tant que
> chaîne de littéral hexadécimal stricte (y compris le préfixe `0x`/`0X`) avant de l’analyser ou de la convertir.

### Avantages

- Valide qu’une valeur est une chaîne et correspond à un format strict de littéral hexadécimal (nécessite le préfixe
  `0x`/`0X`).
- Rejette les chaînes avec des espaces en début ou en fin, ce qui aide à éviter l’acceptation accidentelle d’une entrée
  avec remplissage.
- Prend en charge un signe optionnel et n’est pas sensible à la casse pour le préfixe et les chiffres, en renvoyant
  `true`/`false` de manière prévisible.

## Utilisation

### Syntaxe

Fonction:

- `isHexadecimal(value)`

Paramètres:

- `value`: La valeur à vérifier.

### Importation locale de fonction

```ts
import { isHexadecimal } from "@type-check/guards";

isHexadecimal("0x1A2B"); // vrai
isHexadecimal("-0Xff"); // vrai
isHexadecimal("1A2B"); // faux (préfixe manquant)
isHexadecimal(" 0x1A2B"); // faux (espace en tête)
isHexadecimal(0x1a2b); // faux (pas une chaîne de caractères)
```

### Importation globale d’objet

Pour importer les fonctions en tant que méthodes d’objet globales, utilisez:

```ts
import "@type-check/guards/register-global-object.mjs";
```

La méthode suivante sera alors disponible globalement:

- `Type.isHexadecimal(value)`

## Analyse des fonctions

Une analyse tabulaire de la sortie produite lors de l’insertion de différents paramètres dans les fonctions est
documentée ici: [isHexadecimal](../_analysis/isHexadecimal.md)

<br>

---

<small>Le fichier a été généré le 31 janvier 2026 à 22:58:35 (UTC) avec l’utilisation du *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** par *
*[Roland Milto](https://roland-milto.de/)**.</small>