# isBoolean

## Description

Détermine si une valeur donnée est un `boolean`.

### Cas d’utilisation

Valider des données externes ou non typées (p. ex., variables d’environnement, charges utiles JSON, paramètres de
requête) afin de s’assurer qu’une valeur est un `boolean` avant de l’utiliser dans une logique conditionnelle.

> **Remarque pour les utilisateurs TypeScript:**
>
> Utilisez `isBoolean` pour restreindre `unknown` à `boolean` avant d’appliquer des opérations booléennes.

### Avantages

- Vérification d’exécution simple et rapide à l’aide de `typeof`.
- Aide à valider une entrée inconnue avant d’appliquer une logique spécifique aux booléens.
- Renvoie un résultat `boolean` prévisible (`true`/`false`).

## Utilisation

### Syntaxe

Fonction:

- `isBoolean(value)`

Paramètres:

- `value`: La valeur à vérifier.

### Importation locale de fonction

```ts
import { isBoolean } from "@type-check/guards";

const input: unknown = Math.random() > 0.5 ? true : "true";

if (isBoolean(input)) {
  // input est un booléen ici
  const toggled = !input;
  console.log(toggled);
} else {
  console.log("Not a boolean:", input);
}

```

### Importation globale d’objet

Pour importer les fonctions en tant que méthodes d’objet globales, utilisez:

```ts
import "@type-check/guards/register-global-object.mjs";
```

La méthode suivante sera alors disponible globalement:

- `Type.isBoolean(value)`

## Analyse des fonctions

Une analyse tabulaire de la sortie produite lors de l’insertion de différents paramètres dans les fonctions est
documentée ici: [isBoolean](../_analysis/isBoolean.md)

<br>

---

<small>Le fichier a été généré le 30 janvier 2026 à 14:36:18 (UTC) avec l’utilisation du *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** par *
*[Roland Milto](https://roland-milto.de/)**.</small>