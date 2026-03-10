# isUndefined

## Popis

Skontroluje, či je daná hodnota `undefined`.

### Prípad použitia

Použite `isUndefined` na ošetrenie voliteľných vstupov, detekciu chýbajúcich vlastností alebo na rozlíšenie medzi
„neposkytnuté“ (`undefined`) a „explicitne prázdne“ (`null`).

> **Poznámka pre používateľov TypeScriptu:**
>
> Použite `isUndefined`, keď potrebujete konkrétne detegovať `undefined` (nie `null`). Je to bezpečné, pretože sa
> spolieha na `typeof value === "undefined"`.

### Výhody

- Poskytuje jasnú, explicitnú kontrolu na `undefined` pomocou `typeof`, čím sa vyhýba okrajovým prípadom s
  nedeclarovanými premennými.
- Vracia jednoduchý booleovský výsledok (`true`/`false`) vhodný pre guardy, vetvenie a validačnú logiku.
- Pomáha rozlíšiť `undefined` od iných „prázdnych“ hodnôt ako `null`, `0`, `""` alebo `NaN`.

## Použitie

### Syntax

Funkcia:

- `isUndefined(value)`

Parametre:

- `value`: Hodnota, ktorá sa má skontrolovať.

### Lokálny import funkcie

```ts
import { isUndefined } from "@type-check/guards";

let x: unknown;

if (isUndefined(x)) {
  // x je tu undefined
} else {
  // x tu nie je undefined
}

const a = isUndefined(undefined); // pravda
const b = isUndefined(null);      // nepravda

```

### Globálny import objektu

Na import funkcií ako globálnych metód objektu použite:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Nasledujúca metóda bude potom dostupná globálne:

- `Type.isUndefined(value)`

## Analýza funkcií

Tu je zdokumentovaná tabuľková analýza výstupu, ktorý vzniká pri dosadení rôznych parametrov do
funkcií: [isUndefined](../_analysis/isUndefined.md)

<br>

---

<small>Súbor bol vygenerovaný 30 January 2026 at 14:04:18 (UTC) použitím *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** od *
*[Roland Milto](https://roland-milto.de/)**.</small>