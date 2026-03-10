# areObjects

## Descriere

`areObjects` a controla se n'array pien fornì a conten sulamente oget.

### Caz de utilizare

Dòvra `areObjects` quand t'arcevet n'array sconossù (p. es., da parsing JSON o da API esterne) e t'has bisògn de
assicuré che l'è minga vœud e che ogni elemento l'è n'oget prima de iteré e acedé a le proprietà di oget.

> **Notă pentru utilizatorii TypeScript:**
>
> Dòvra `areObjects` par validé `unknown[]` prima de traté i elementi come oget; a ritorna `false` par i array vœud.

### Avantaje

- Ritorna `true` sulamente cando l'input l'è n'array pien e ogni elemento l'è n'oget.
- A s ferma prima e a ritorna `false` apena che a trova n'element che no l'è n'oget.
- A jùta a validé input sconossù prima de fé operassion specifiche par i oget.

## Utilizare

### Sintaxă

Funcție:

- `areObjects(array)`

Parametri:

- `array`: L'array da controlé par elementi oget.

### Import local al funcției

```ts
import { areObjects } from "@type-check/guards";

const value: unknown = [{}, { a: 1 }, new Date()];

if (Array.isArray(value) && areObjects(value)) {
  // value este un array umplut de obiecte
  console.log("All items are objects:", value.length);
} else {
  console.log("Not a filled array of objects");
}

```

### Import global al obiectului

Pentru a importa funcțiile ca metode globale ale obiectului, folosește:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Următoarea metodă va fi apoi disponibilă global:

- `Type.areObjects(array)`

## Analiza funcțiilor

Aici este documentată o analiză tabelară a rezultatelor obținute la introducerea unor parametri diferiți în
funcții: [areObjects](../_analysis/areObjects.md)

<br>

---

<small>Fișierul a fost generat la 31 January 2026 at 00:10:13 (UTC) cu utilizarea *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** de către *
*[Roland Milto](https://roland-milto.de/)**.</small>