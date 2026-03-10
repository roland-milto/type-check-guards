# areNaNs

## Popis

`areNaNs` kontroluje, či sú všetky prvky v poli `NaN`, a vráti `true` iba vtedy, ak je každý prvok `NaN`.

### Prípad použitia

Overenie prichádzajúcich dát, kde sa `NaN` používa ako sentinelová hodnota a musíte zabezpečiť, že celé pole pozostáva
výhradne z `NaN` (napr. detekcia číselnej série, v ktorej všetky hodnoty chýbajú).

> **Poznámka pre používateľov TypeScriptu:**
>
> Použite `areNaNs`, keď potrebujete overiť, že pole obsahuje iba číselnú hodnotu `NaN` (bez konverzie reťazca na
> číslo).

### Výhody

- Vráti `true` iba vtedy, keď je každý prvok `NaN` (prísna kontrola všetkých prvkov).
- Nekonvertuje reťazce na čísla; hodnoty ako "NaN" zostanú nie-`NaN` a spôsobia, že výsledok bude `false`.
- Pre nevyplnené polia vráti `false`, čím zabráni náhodnému `true` pri prázdnom vstupe.

## Použitie

### Syntax

Funkcia:

- `areNaNs(array)`

Parametre:

- `array`: Pole, ktoré sa má skontrolovať na hodnoty `NaN`.

### Lokálny import funkcie

```ts
import { areNaNs } from "@type-check/guards";

const a = areNaNs([NaN, NaN]); // pravda
const b = areNaNs([NaN, 1, NaN]); // nepravda
const c = areNaNs([NaN, "NaN", NaN]); // nepravda
const d = areNaNs([NaN, null, NaN]); // nepravda
const e = areNaNs([] as unknown[]); // nepravda

```

### Globálny import objektu

Na import funkcií ako globálnych metód objektu použite:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Nasledujúca metóda bude potom dostupná globálne:

- `Type.areNaNs(array)`

## Analýza funkcií

Tu je zdokumentovaná tabuľková analýza výstupu, ktorý vzniká pri dosadení rôznych parametrov do
funkcií: [areNaNs](../_analysis/areNaNs.md)

<br>

---

<small>Súbor bol vygenerovaný 30 January 2026 at 15:53:20 (UTC) použitím *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** od *
*[Roland Milto](https://roland-milto.de/)**.</small>