# isNaN

## Popis

Určuje, či je poskytnutá hodnota `value` `NaN` typu `number` bez konverzie reťazcov.

### Prípad použitia

Validujte nedôveryhodný alebo voľne typovaný vstup (napr. payloady z API, hodnoty z formulárov, parsovaný JSON), aby ste
detegovali špeciálnu hodnotu `NaN` a explicitne ju spracovali, pričom nečíselné vstupy budete považovať za nie `NaN`.

> **Poznámka pre používateľov TypeScriptu:**
>
> Použite `isNaN`, keď potrebujete detegovať špeciálnu číselnú hodnotu `NaN` a zároveň zabezpečiť, že vstup je skutočne
`number` (bez konverzie reťazca na číslo).

### Výhody

- Kontroluje, či je hodnota `NaN` bez toho, aby prevádzala nečíselné hodnoty (napr. reťazce) na čísla.
- Vracia `true` iba pre hodnoty, ktoré sú zároveň typu `number` aj `NaN`.
- Je bezpečná pre vstupy typu `unknown` a vyhýba sa falošným pozitívam z implicitných konverzií.

## Použitie

### Syntax

Funkcia:

- `isNaN(value)`

Parametre:

- `value`: Hodnota, pri ktorej sa má skontrolovať, či je `NaN` typu `number`.

### Lokálny import funkcie

```ts
import { isNaN } from "@type-check/guards";

const a: unknown = NaN;
const b: unknown = "NaN";
const c: unknown = 123;

console.log(isNaN(a)); // pravda
console.log(isNaN(b)); // nepravda
console.log(isNaN(c)); // nepravda

if (isNaN(a)) {
  // a je číslo a konkrétne NaN
}
```

### Globálny import objektu

Na import funkcií ako globálnych metód objektu použite:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Nasledujúca metóda bude potom dostupná globálne:

- `Type.isNaN(value)`

## Analýza funkcií

Tu je zdokumentovaná tabuľková analýza výstupu, ktorý vzniká pri dosadení rôznych parametrov do
funkcií: [isNaN](../_analysis/isNaN.md)

<br>

---

<small>Súbor bol vygenerovaný 30 January 2026 at 15:47:56 (UTC) použitím *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** od *
*[Roland Milto](https://roland-milto.de/)**.</small>