# isString

## Description

`isString` détermine si une valeur donnée est une chaîne de caractères.

### Cas d’utilisation

Valider les entrées utilisateur, les champs de charge utile d’API ou les valeurs de configuration à l’exécution afin de
s’assurer qu’une valeur est une chaîne de caractères avant d’appliquer des opérations sur les chaînes (p. ex.,
suppression des espaces, découpage, conversion de casse).

> **Remarque pour les utilisateurs TypeScript:**
>
> Utilisez `isString` pour valider des valeurs `unknown` ou faiblement typées avant d’appeler des méthodes de chaîne ;
> elle renvoie `true` uniquement lorsque `typeof value === "string"`.

### Avantages

- Vérification simple et rapide à l’aide de `typeof`.
- Renvoie un résultat booléen prévisible : `true` pour les chaînes de caractères, sinon `false`.
- Fonctionne pour les chaînes vides comme non vides.
- Utile comme garde d’exécution légère avant d’effectuer des opérations spécifiques aux chaînes.

## Utilisation

### Syntaxe

Fonction:

- `isString(value)`

Paramètres:

- `value`: La valeur à tester pour vérifier si elle est de type chaîne de caractères.

### Importation locale de fonction

```ts
import { isString } from "@type-check/guards";

const input: unknown = "Hello World";

if (isString(input)) {
  // input est une chaîne de caractères ici
  console.log(input.toUpperCase());
} else {
  console.log("Not a string");
}

```

### Importation globale d’objet

Pour importer les fonctions en tant que méthodes d’objet globales, utilisez:

```ts
import "@type-check/guards/register-global-object.mjs";
```

La méthode suivante sera alors disponible globalement:

- `Type.isString(value)`

## Analyse des fonctions

Une analyse tabulaire de la sortie produite lors de l’insertion de différents paramètres dans les fonctions est
documentée ici: [isString](../_analysis/isString.md)

<br>

---

<small>Le fichier a été généré le 30 janvier 2026 à 13:13:56 (UTC) avec l’utilisation du *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** par *
*[Roland Milto](https://roland-milto.de/)**.</small>