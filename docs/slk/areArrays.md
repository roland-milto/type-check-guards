# areArrays

## Popis

`areArrays` určuje, či je hodnota vyplnené dvojrozmerné pole, ktorého položky sú všetky polia.

### Prípad použitia

Použite `areArrays` na overenie tabuľkových alebo maticových vstupov (napr. riadky CSV, údaje mriežky alebo zoskupené
zoznamy) pred vykonávaním operácií s riadkami/stĺpcami; vráti `false`, ak vstup nie je pole, je prázdny alebo obsahuje
akýkoľvek prvok, ktorý nie je poľom.

> **Poznámka pre používateľov TypeScriptu:**
>
> Použite `areArrays`, keď potrebujete zabezpečiť, že hodnota je neprázdne 2D pole a že každý riadok je pole, ešte pred
> iterovaním alebo indexovaním do vnorených polí.

### Výhody

- Overuje, že vstup je neprázdne dvojrozmerné pole, v ktorom je každý prvok poľom.
- Vracia jednoduchý booleovský výsledok (`true`/`false`) vhodný pre strážne podmienky a predčasné ukončenia.
- Pomáha predchádzať chybám za behu, keď neskorší kód predpokladá operácie s vnorenými poľami (napr. mapovanie riadkov).

## Použitie

### Syntax

Funkcia:

- `areArrays(array)`

Parametre:

- `array`: Vstup, ktorý sa má skontrolovať.

### Lokálny import funkcie

```ts
import { areArrays } from "@type-check/guards";

const value: unknown = [[1, 2], [3, 4]];

if (areArrays(value as unknown[][])) {
  // value je 2D pole s poľami ako prvkami
  const lengths = value.map(row => row.length);
  console.log(lengths);
} else {
  console.log("Not a 2D array of arrays");
}

```

### Globálny import objektu

Na import funkcií ako globálnych metód objektu použite:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Nasledujúca metóda bude potom dostupná globálne:

- `Type.areArrays(array)`

## Analýza funkcií

Tu je zdokumentovaná tabuľková analýza výstupu, ktorý vzniká pri dosadení rôznych parametrov do
funkcií: [areArrays](../_analysis/areArrays.md)

<br>

---

<small>Súbor bol vygenerovaný 6 February 2026 at 13:41:22 (UTC) použitím *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** od *
*[Roland Milto](https://roland-milto.de/)**.</small>