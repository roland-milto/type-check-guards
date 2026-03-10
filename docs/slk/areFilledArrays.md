# areFilledArrays

## Popis

`areFilledArrays` kontroluje, či dvojrozmerné pole nie je prázdne a či všetky jeho vnútorné polia nie sú prázdne.

### Prípad použitia

Použite `areFilledArrays` na overenie tabuľkového alebo maticového vstupu (napr. riadky CSV, údaje mriežky, zoskupené
výsledky), aby ste mohli bezpečne predpokladať, že existuje aspoň jedno vnútorné pole a žiadne z vnútorných polí nie je
prázdne.

> **Poznámka pre používateľov TypeScriptu:**
>
> Použite `areFilledArrays`, keď potrebujete zabezpečiť, že 2D pole má aspoň jeden riadok a každý riadok má aspoň jeden
> prvok pred iterovaním alebo indexovaním.

### Výhody

- Overuje, že vonkajšie pole nie je prázdne a že každé vnútorné pole tiež nie je prázdne; `true` vráti iba vtedy, keď sú
  splnené obe podmienky.
- Funguje s ľubovoľnými typmi prvkov vo vnútorných poliach (napr. čísla, reťazce, objekty, vnorené polia), pretože
  kontroluje iba to, či sú polia „naplnené“, nie obsah prvkov.
- Poskytuje jednoduchý booleovský výsledok (`true`/`false`) vhodný ako strážna podmienka pred spracovaním dvojrozmerných
  dát.

## Použitie

### Syntax

Funkcia:

- `areFilledArrays(array)`

Parametre:

- `array`: Dvojrozmerné pole, ktoré sa má skontrolovať.

### Lokálny import funkcie

```ts
import { areFilledArrays } from "@type-check/guards";

const a: unknown[][] = [[1]];
const b: unknown[][] = [["a", "b"], [1, 2, 3]];
const c: unknown[][] = [[{}, []], ["string"]];
const d: unknown[][] = [[]];
const e: unknown[][] = [[], [1, 2, 3]];
const f: unknown[][] = [];

console.log(areFilledArrays(a)); // pravda
console.log(areFilledArrays(b)); // pravda
console.log(areFilledArrays(c)); // pravda
console.log(areFilledArrays(d)); // nepravda
console.log(areFilledArrays(e)); // nepravda
console.log(areFilledArrays(f)); // nepravda

```

### Globálny import objektu

Na import funkcií ako globálnych metód objektu použite:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Nasledujúca metóda bude potom dostupná globálne:

- `Type.areFilledArrays(array)`

## Analýza funkcií

Tu je zdokumentovaná tabuľková analýza výstupu, ktorý vzniká pri dosadení rôznych parametrov do
funkcií: [areFilledArrays](../_analysis/areFilledArrays.md)

<br>

---

<small>Súbor bol vygenerovaný 6 February 2026 at 11:58:51 (UTC) použitím *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** od *
*[Roland Milto](https://roland-milto.de/)**.</small>