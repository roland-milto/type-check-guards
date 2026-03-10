# isFinite

## Popis

Určuje, či je daná hodnota `value` konečné `number`.

### Prípad použitia

Použite `isFinite` na validáciu neznámeho vstupu (napr. z JSON, formulárov alebo API) pred vykonávaním číselných
výpočtov, aby ste sa uistili, že hodnota je reálne, konečné číslo.

> **Poznámka pre používateľov TypeScriptu:**
>
> `isFinite` vracia `true` iba pre konečné čísla; vracia `false` pre `NaN`, `Infinity` a akúkoľvek hodnotu, ktorá nie je
> číslom.

### Výhody

- Používa vstavanú funkciu `Number.isFinite` na spoľahlivú kontrolu konečnosti.
- Vracia `true` iba pre konečné čísla; vracia `false` pre `NaN`, `Infinity` a vstupy, ktoré nie sú číslom.
- Jednoduchý predikát bez vedľajších účinkov vhodný na validáciu a ochrannú logiku.

## Použitie

### Syntax

Funkcia:

- `isFinite(value)`

Parametre:

- `value`: Hodnota, pri ktorej sa má skontrolovať konečnosť.

### Lokálny import funkcie

```ts
import { isFinite } from "@type-check/guards";

const inputs: unknown[] = [123, -123.45, "123", Infinity, NaN, null, undefined];

const finiteNumbers = inputs.filter(isFinite);
// finiteNumbers je: [123, -123.45]

const value: unknown = 42;
if (isFinite(value)) {
  // value je tu konečné číslo
  const doubled = value * 2;
  console.log(doubled);
}
```

### Globálny import objektu

Na import funkcií ako globálnych metód objektu použite:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Nasledujúca metóda bude potom dostupná globálne:

- `Type.isFinite(value)`

## Analýza funkcií

Tu je zdokumentovaná tabuľková analýza výstupu, ktorý vzniká pri dosadení rôznych parametrov do
funkcií: [isFinite](../_analysis/isFinite.md)

<br>

---

<small>Súbor bol vygenerovaný 30 January 2026 at 16:31:34 (UTC) použitím *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** od *
*[Roland Milto](https://roland-milto.de/)**.</small>