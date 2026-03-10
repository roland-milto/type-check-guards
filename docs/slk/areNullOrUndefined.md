# areNullOrUndefined

## Popis

Skontroluje, či sú všetky prvky v danom poli `null` alebo `undefined`.

### Prípad použitia

Overte, že zoznam voliteľných polí neobsahuje žiadne skutočné hodnoty (iba `null`/`undefined`) predtým, než sa
rozhodnete preskočiť spracovanie alebo zobraziť stav „neboli poskytnuté žiadne hodnoty“.

> **Poznámka pre používateľov TypeScriptu:**
>
> Použite `areNullOrUndefined`, keď potrebujete overiť, že pole obsahuje iba chýbajúce hodnoty (`null`/`undefined`).
> Upozorňujeme, že pre prázdne pole vracia `false`.

### Výhody

- Vráti `true` iba vtedy, keď je každý prvok `null` alebo `undefined`.
- Pre prázdne polia vráti `false`, čo pomáha rozlíšiť „žiadne údaje“ od „všetky chýbajúce hodnoty“.
- Funguje s `unknown[]`, takže je bezpečné ho použiť pred zúžením typov.

## Použitie

### Syntax

Funkcia:

- `areNullOrUndefined(array)`

Parametre:

- `array`: Pole, ktoré sa má skontrolovať.

### Lokálny import funkcie

```ts
import { areNullOrUndefined } from "@type-check/guards";

const allMissing = areNullOrUndefined([null, undefined, null]);
// allMissing === true

const containsValue = areNullOrUndefined([null, "value", undefined]);
// containsValue === false

const empty = areNullOrUndefined([]);
// empty === false
```

### Globálny import objektu

Na import funkcií ako globálnych metód objektu použite:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Nasledujúca metóda bude potom dostupná globálne:

- `Type.areNullOrUndefined(array)`

## Analýza funkcií

Tu je zdokumentovaná tabuľková analýza výstupu, ktorý vzniká pri dosadení rôznych parametrov do
funkcií: [areNullOrUndefined](../_analysis/areNullOrUndefined.md)

<br>

---

<small>Súbor bol vygenerovaný 31 January 2026 at 00:31:16 (UTC) použitím *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** od *
*[Roland Milto](https://roland-milto.de/)**.</small>