# arePromises

## Popis

`arePromises` určuje, či sú všetky prvky v poli inštanciami `Promise`.

### Prípad použitia

Overte, že dynamicky zostavený alebo externe poskytnutý zoznam obsahuje iba promisy pred ich agregáciou (napr. pomocou
`Promise.all`).

> **Poznámka pre používateľov TypeScriptu:**
>
> Použite `arePromises` na overenie `unknown[]` pred volaním `Promise.all` alebo iných operácií určených len pre
> promisy; pre prázdne polia vracia `false`.

### Výhody

- Zabezpečuje, že každý prvok je `Promise` ešte predtým, než pokračujete logikou špecifickou pre promisy.
- Pre nevyplnené polia vracia `false`, čím predchádza nejednoznačným výsledkom pri prázdnych vstupoch.
- Užitočné ako runtime strážca pri práci s `unknown[]` z externých zdrojov.

## Použitie

### Syntax

Funkcia:

- `arePromises(array)`

Parametre:

- `array`: Pole, ktoré sa má skontrolovať na inštancie Promise.

### Lokálny import funkcie

```ts
import { arePromises } from "@type-check/guards";

const values: unknown[] = [Promise.resolve(1), new Promise<void>(() => {})];

if (arePromises(values)) {
  // values je za behu pole inštancií Promise
  Promise.all(values).then((results) => {
    console.log(results);
  });
} else {
  console.log("Not all items are promises");
}

```

### Globálny import objektu

Na import funkcií ako globálnych metód objektu použite:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Nasledujúca metóda bude potom dostupná globálne:

- `Type.arePromises(array)`

## Analýza funkcií

Tu je zdokumentovaná tabuľková analýza výstupu, ktorý vzniká pri dosadení rôznych parametrov do
funkcií: [arePromises](../_analysis/arePromises.md)

<br>

---

<small>Súbor bol vygenerovaný 30 January 2026 at 23:49:49 (UTC) použitím *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** od *
*[Roland Milto](https://roland-milto.de/)**.</small>