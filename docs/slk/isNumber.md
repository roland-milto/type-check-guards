# isNumber

## Popis

`isNumber` kontroluje, či je hodnota konečné číslo, ktoré nie je `NaN`.

### Prípad použitia

Validujte číselný vstup z nedôveryhodných zdrojov (formuláre, parametre dotazu, JSON payloady) pred výpočtami, ukladaním
alebo kontrolami rozsahu, aby prešli iba konečné čísla (`true`) a všetko ostatné vrátilo `false`.

> **Poznámka pre používateľov TypeScriptu:**
>
> Použite `isNumber` na validáciu hodnôt typu `unknown` pred vykonávaním aritmetiky; odmieta `NaN`, `Infinity` a
`-Infinity`.

### Výhody

- Vracia `true` iba pre skutočné JavaScriptové čísla (kontrola typu plus odmietnutie `NaN` a nekonečna).
- Predchádza bežným validačným chybám, keď `NaN`, `Infinity` alebo `-Infinity` omylom prejdú ako čísla.
- Funguje dobre ako runtime guard pre neznámy vstup (napr. JSON, používateľský vstup, externé API).
- Jednoduché, rýchle a bez vedľajších účinkov.

## Použitie

### Syntax

Funkcia:

- `isNumber(value)`

Parametre:

- `value`: Hodnota na kontrolu.

### Lokálny import funkcie

```ts
import { isNumber } from "@type-check/guards";

const input: unknown = 42;

if (isNumber(input)) {
  // vstup je platné konečné číslo
  const doubled = input * 2;
  console.log(doubled);
} else {
  console.log("Not a valid number");
}

console.log(isNumber(NaN));
console.log(isNumber(Infinity));
console.log(isNumber("42"));
```

### Globálny import objektu

Na import funkcií ako globálnych metód objektu použite:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Nasledujúca metóda bude potom dostupná globálne:

- `Type.isNumber(value)`

## Analýza funkcií

Tu je zdokumentovaná tabuľková analýza výstupu, ktorý vzniká pri dosadení rôznych parametrov do
funkcií: [isNumber](../_analysis/isNumber.md)

<br>

---

<small>Súbor bol vygenerovaný 30 January 2026 at 13:10:54 (UTC) použitím *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** od *
*[Roland Milto](https://roland-milto.de/)**.</small>