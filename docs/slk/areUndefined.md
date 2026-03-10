# areUndefined

## Popis

`areUndefined` kontroluje, či je každý prvok v poskytnutom poli `undefined`.

### Prípad použitia

Overte, že zoznam voliteľných výsledkov neobsahuje žiadne skutočné hodnoty (iba `undefined`), napr. po mapovaní
vyhľadávaní, kde chýbajúce položky sú reprezentované ako `undefined`, a chcete potvrdiť, že všetky vyhľadávania zlyhali.

> **Poznámka pre používateľov TypeScriptu:**
>
> Použite `areUndefined`, keď potrebujete potvrdiť, že `unknown[]` obsahuje iba hodnoty `undefined`; vracia `false` pre
> prázdne polia a nepolia/neplatné vstupy kvôli internej kontrole `isFilledArray`.

### Výhody

- Vracia `false` pre nepolia a prázdne polia tým, že vyžaduje vyplnené pole cez `isFilledArray`.
- Zabezpečuje, že každý prvok je `undefined`, nie iba niektoré, čím je zámer explicitný.
- Užitočné ako predikát v štýle guard pri validácii neznámych vstupných kolekcií.

## Použitie

### Syntax

Funkcia:

- `areUndefined(array)`

Parametre:

- `array`: Pole, ktoré sa má skontrolovať na prvky `undefined`.

### Lokálny import funkcie

```ts
import { areUndefined } from "@type-check/guards";

const a: unknown[] = [undefined, undefined];
const b: unknown[] = [undefined, null];
const c: unknown[] = [undefined, 0, undefined];

const r1 = areUndefined(a); // true
const r2 = areUndefined(b); // false
const r3 = areUndefined(c); // false

// Poznámka: pre prázdne polia vracia false
const r4 = areUndefined([]); // false
```

### Globálny import objektu

Na import funkcií ako globálnych metód objektu použite:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Nasledujúca metóda bude potom dostupná globálne:

- `Type.areUndefined(array)`

## Analýza funkcií

Tu je zdokumentovaná tabuľková analýza výstupu, ktorý vzniká pri dosadení rôznych parametrov do
funkcií: [areUndefined](../_analysis/areUndefined.md)

<br>

---

<small>Súbor bol vygenerovaný 30 January 2026 at 13:57:46 (UTC) použitím *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** od *
*[Roland Milto](https://roland-milto.de/)**.</small>