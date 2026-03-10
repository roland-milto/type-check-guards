# areJson

## Popis

Skontroluje, či sú všetky prvky poľa reťazce JSON, pričom vráti `true` iba vtedy, ak je pole vyplnené a každá položka je
platný JSON; inak vráti `false`.

### Prípad použitia

Overenie prichádzajúcich dát (napr. z parametrov dotazu, premenných prostredia alebo externých API), kde očakávate pole
reťazcov zakódovaných ako JSON a chcete odmietnuť prázdne polia alebo akékoľvek položky, ktoré nie sú JSON.

> **Poznámka pre používateľov TypeScriptu:**
>
> Použite `areJson`, keď potrebujete overiť, že `unknown[]` obsahuje iba reťazce JSON pred ich parsovaním (napr. pomocou
`JSON.parse`).

### Výhody

- Vráti `true` iba vtedy, keď je každý prvok platný reťazec JSON; inak vráti `false`.
- Zlyhá rýchlo: prestane kontrolovať hneď, ako nájde prvok, ktorý nie je JSON.
- Zámerne odmieta prázdne polia a pre nevyplnený vstup vracia `false`.

## Použitie

### Syntax

Funkcia:

- `areJson(array)`

Parametre:

- `array`: Pole, ktoré sa má skontrolovať na prvky typu reťazec JSON.

### Lokálny import funkcie

```ts
import { areJson } from "@type-check/guards";

const ok = areJson(["{\"a\":1}", "{\"b\":2}"]); // pravda
const mixed = areJson(["{\"a\":1}", 123 as unknown]); // nepravda
const empty = areJson([]); // nepravda

```

### Globálny import objektu

Na import funkcií ako globálnych metód objektu použite:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Nasledujúca metóda bude potom dostupná globálne:

- `Type.areJson(array)`

## Analýza funkcií

Tu je zdokumentovaná tabuľková analýza výstupu, ktorý vzniká pri dosadení rôznych parametrov do
funkcií: [areJson](../_analysis/areJson.md)

<br>

---

<small>Súbor bol vygenerovaný 30 January 2026 at 16:17:26 (UTC) použitím *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** od *
*[Roland Milto](https://roland-milto.de/)**.</small>