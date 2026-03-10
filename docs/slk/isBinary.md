# isBinary

## Popis

`isBinary` určuje, či je hodnota binárny reťazec (voliteľne s predponou `0b`/`0B`) a vráti `true` alebo `false`.

### Prípad použitia

Validujte reťazce poskytnuté používateľom (napr. polia formulára, argumenty CLI, hodnoty konfigurácie), aby ste sa
uistili, že predstavujú iba binárne číslice, voliteľne s predponou `0b`/`0B`, pred ďalším spracovaním.

> **Poznámka pre používateľov TypeScriptu:**
>
> Použite `isBinary` ako typový strážca pred parsovaním alebo konverziou reťazca na `BigInt`/`Number`, aby ste sa vyhli
> neplatnému vstupu.

### Výhody

- Prijíma binárne reťazce s predponou `0b`/`0B` aj bez nej.
- Odmieta prázdne reťazce a reťazce s úvodnými/koncovými bielymi znakmi (ASCII ≤ 32).
- Vracia `true`/`false` bez vyhodenia výnimky, vďaka čomu je bezpečný pre neznáme vstupy.

## Použitie

### Syntax

Funkcia:

- `isBinary(value)`

Parametre:

- `value`: Hodnota, ktorá sa má skontrolovať.

### Lokálny import funkcie

```ts
import { isBinary } from "@type-check/guards";

const a = isBinary("0b1010"); // pravda
const b = isBinary("1010");   // pravda
const c = isBinary("0b1020"); // nepravda
const d = isBinary(0b1010);     // nepravda

```

### Globálny import objektu

Na import funkcií ako globálnych metód objektu použite:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Nasledujúca metóda bude potom dostupná globálne:

- `Type.isBinary(value)`

## Analýza funkcií

Tu je zdokumentovaná tabuľková analýza výstupu, ktorý vzniká pri dosadení rôznych parametrov do
funkcií: [isBinary](../_analysis/isBinary.md)

<br>

---

<small>Súbor bol vygenerovaný 31 January 2026 at 23:11:16 (UTC) použitím *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** od *
*[Roland Milto](https://roland-milto.de/)**.</small>