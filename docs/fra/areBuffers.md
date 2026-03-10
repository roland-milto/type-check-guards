# areBuffers

## Description

`areBuffers` vérifie si la valeur fournie est un tableau non vide et rempli dont chaque élément est un `Buffer`, en
renvoyant `true` si c’est le cas et `false` sinon.

### Cas d’utilisation

Valider des tableaux de fragments entrants (p. ex. issus de flux, de téléversements de fichiers ou de paquets réseau)
afin de s’assurer que toutes les parties sont des instances de `Buffer` avant de les concaténer, de les décoder ou de
les transmettre à des fonctions cryptographiques ou de traitement binaire.

> **Remarque pour les utilisateurs TypeScript:**
>
> Utilisez `areBuffers` pour valider `unknown[]` avant d’appeler des API spécifiques à Buffer comme `Buffer.concat`, en
> garantissant que la fonction ne renvoie `true` que lorsque chaque élément est un `Buffer`.

### Avantages

- Garantit que chaque élément de l’entrée est une instance de `Buffer` Node.js, en renvoyant `true` uniquement lorsque
  l’ensemble du tableau correspond.
- Rejette rapidement les entrées invalides en exigeant un tableau non vide et rempli ; renvoie `false` pour les tableaux
  vides ou les valeurs qui ne sont pas des tableaux.
- Utile comme garde avant d’effectuer des opérations réservées aux buffers (p. ex. concaténation, hachage, protocoles
  binaires).

## Utilisation

### Syntaxe

Fonction:

- `areBuffers(array)`

Paramètres:

- `array`: Le tableau à vérifier pour des instances de buffer.

### Importation locale de fonction

```ts
import { areBuffers } from "@type-check/guards";

const chunks: unknown[] = [Buffer.from("test"), Buffer.from("123")];

if (areBuffers(chunks)) {
  const combined = Buffer.concat(chunks);
  console.log(combined.toString("utf8"));
} else {
  throw new TypeError("Expected a non-empty array of Buffer instances");
}

```

### Importation globale d’objet

Pour importer les fonctions en tant que méthodes d’objet globales, utilisez:

```ts
import "@type-check/guards/register-global-object.mjs";
```

La méthode suivante sera alors disponible globalement:

- `Type.areBuffers(array)`

## Analyse des fonctions

Une analyse tabulaire de la sortie produite lors de l’insertion de différents paramètres dans les fonctions est
documentée ici: [areBuffers](../_analysis/areBuffers.md)

<br>

---

<small>Le fichier a été généré le 31 janvier 2026 à 16:25:05 (UTC) avec l’utilisation du *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** par *
*[Roland Milto](https://roland-milto.de/)**.</small>