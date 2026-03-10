# arePrimitives

## Popis

`arePrimitives` vyhodnocuje, či sú všetky prvky v poskytnutom, neprázdnom poli primitívne typy.

### Prípad použitia

Overte, že prichádzajúce údaje (napr. parametre dotazu, hodnoty riadku CSV alebo zoznam ID/tagov) obsahujú iba
primitívne hodnoty pred serializáciou, hašovaním, logovaním alebo odovzdaním do API, ktoré nesmie dostať objekty.

> **Poznámka pre používateľov TypeScriptu:**
>
> Použite `arePrimitives`, keď potrebujete pred ďalším spracovaním zabezpečiť, že `unknown[]` obsahuje iba primitívne
> hodnoty (string, number, bigint, boolean, symbol, undefined alebo null).

### Výhody

- Vracia `true` iba vtedy, keď je každý prvok primitívna hodnota, čo z neho robí prísnu kontrolu pre polia „bez
  objektov/funkcií“.
- Zlyhá rýchlo: vráti `false` hneď, ako sa nájde neprimitívny prvok.
- Tiež vráti `false` pre nepolia a prázdne polia (cez kontrolu vyplneného poľa), čím zabraňuje náhodnému prijatiu
  neplatného vstupu.

## Použitie

### Syntax

Funkcia:

- `arePrimitives(array)`

Parametre:

- `array`: Pole, ktoré sa má skontrolovať na prvky primitívneho typu.

### Lokálny import funkcie

```ts
import { arePrimitives } from "@type-check/guards";

const a: unknown[] = [1, "string", true];
const b: unknown[] = [null, undefined, Symbol("x")];
const c: unknown[] = [1, {}, false];

const r1 = arePrimitives(a); // pravda
const r2 = arePrimitives(b); // pravda
const r3 = arePrimitives(c); // nepravda
```

### Globálny import objektu

Na import funkcií ako globálnych metód objektu použite:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Nasledujúca metóda bude potom dostupná globálne:

- `Type.arePrimitives(array)`

## Analýza funkcií

Tu je zdokumentovaná tabuľková analýza výstupu, ktorý vzniká pri dosadení rôznych parametrov do
funkcií: [arePrimitives](../_analysis/arePrimitives.md)

<br>

---

<small>Súbor bol vygenerovaný 31 January 2026 at 00:06:23 (UTC) použitím *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** od *
*[Roland Milto](https://roland-milto.de/)**.</small>