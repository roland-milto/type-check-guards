# areEqual

## Popis

`areEqual` kontroluje, či sú všetky prvky v poli rovné danej očakávanej hodnote, pričom vráti `true` iba pre neprázdne
polia, kde sa každá položka zhoduje.

### Prípad použitia

Overte, že zoznam obsahuje iba jednu povolenú hodnotu (napr. všetky príznaky stavu sú `true`, všetky roly sú `"admin"`
alebo všetky číselné položky sa rovnajú požadovanej konštante), pričom prázdny vstup sa považuje za neplatný (`false`).

> **Poznámka pre používateľov TypeScriptu:**
>
> Použite `areEqual`, keď potrebujete prísnu kontrolu všetkých položiek; vracia `false` pre prázdne polia a pre
> akýkoľvek vstup, ktorý nie je poľom alebo nie je naplnený.

### Výhody

- Vráti `true` iba vtedy, keď každý prvok zodpovedá očakávanej hodnote; inak vráti `false`.
- Zlyhá rýchlo: prestane kontrolovať hneď, ako nájde prvok, ktorý sa nezhoduje.
- Chráni pred neplatným vstupom tým, že vráti `false`, keď vstup nie je naplnené pole.

## Použitie

### Syntax

Funkcia:

- `areEqual(value, expected)`

Parametre:

- `value`: Pole, ktoré sa má skontrolovať.
- `expected`: Prvok, s ktorým sa má porovnať každá položka poľa.

### Lokálny import funkcie

```ts
import { areEqual } from "@type-check/guards";

const allOnes = areEqual([1, 1, 1], 1);
const allTests = areEqual(["test", "test"], "test");
const notAllTwos = areEqual([2, 3, 2], 2);
const emptyIsFalse = areEqual([], 5);

console.log(allOnes, allTests, notAllTwos, emptyIsFalse);
```

### Globálny import objektu

Na import funkcií ako globálnych metód objektu použite:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Nasledujúca metóda bude potom dostupná globálne:

- `Type.areEqual(value, expected)`

## Analýza funkcií

Tu je zdokumentovaná tabuľková analýza výstupu, ktorý vzniká pri dosadení rôznych parametrov do
funkcií: [areEqual](../_analysis/areEqual.md)

<br>

---

<small>Súbor bol vygenerovaný 31 January 2026 at 23:52:07 (UTC) použitím *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** od *
*[Roland Milto](https://roland-milto.de/)**.</small>