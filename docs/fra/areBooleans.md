# areBooleans

## Description

`areBooleans` vérifie si un tableau non vide donné ne contient que des valeurs booléennes, en renvoyant `true` si c’est
le cas et `false` sinon.

### Cas d’utilisation

Valider des données fournies par l’utilisateur ou externes (p. ex., charges utiles JSON, paramètres de requête, tableaux
de configuration) afin de s’assurer qu’une liste non vide ne contient que des booléens avant d’appliquer une logique
booléenne ou de la transmettre à des API qui attendent `boolean[]`.

> **Remarque pour les utilisateurs TypeScript:**
>
> Utilisez `areBooleans` pour valider `unknown[]` avant de le traiter comme `boolean[]` ; la fonction renvoie `false`
> pour les tableaux vides, donc gérez explicitement ce cas si une liste vide doit être autorisée.

### Avantages

- Renvoie `true` uniquement lorsque chaque élément est un booléen et que l’entrée est un tableau non vide.
- Évite les faux positifs en rejetant les tableaux vides (renvoie `false`).
- Fonctionne bien comme garde d’exécution avant des opérations réservées aux booléens (p. ex., `every`, `some`,
  réductions logiques).

## Utilisation

### Syntaxe

Fonction:

- `areBooleans(array)`

Paramètres:

- `array`: Le tableau à vérifier pour des éléments booléens.

### Importation locale de fonction

```ts
import { areBooleans } from "@type-check/guards";

const values1: unknown[] = [true, false, true];
if (areBooleans(values1)) {
  const allTrue = values1.every(v => v);
  console.log(allTrue);
}

const values2: unknown[] = [];
console.log(areBooleans(values2));

const values3: unknown[] = [true, 1, false];
console.log(areBooleans(values3));
```

### Importation globale d’objet

Pour importer les fonctions en tant que méthodes d’objet globales, utilisez:

```ts
import "@type-check/guards/register-global-object.mjs";
```

La méthode suivante sera alors disponible globalement:

- `Type.areBooleans(array)`

## Analyse des fonctions

Une analyse tabulaire de la sortie produite lors de l’insertion de différents paramètres dans les fonctions est
documentée ici: [areBooleans](../_analysis/areBooleans.md)

<br>

---

<small>Le fichier a été généré le 30 janvier 2026 à 14:40:11 (UTC) avec l’utilisation du *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** par *
*[Roland Milto](https://roland-milto.de/)**.</small>