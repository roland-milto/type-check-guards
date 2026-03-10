# areValidDates

## Popis

Určuje, či je pole neprázdne a pozostáva výlučne z platných objektov `Date`.

### Prípad použitia

Použite `areValidDates` na validáciu polí poskytnutých používateľom alebo API pred vykonaním operácií založených na
dátumoch (triedenie, kontroly rozsahu, formátovanie), aby ste zabezpečili, že všetky položky sú skutočné, platné objekty
`Date` a že zoznam nie je prázdny.

> **Poznámka pre používateľov TypeScriptu:**
>
> `areValidDates` vracia `false` pre prázdne pole; predtým, než sa naň budete spoliehať ako na validačný krok, uistite
> sa, že pole má byť neprázdne.

### Výhody

- Vráti `true` iba vtedy, keď je každý prvok platnou inštanciou `Date` (žiadne neplatné dátumy ako
  `new Date('invalid')`).
- Odmieta prázdny vstup vrátením `false`, čím zabezpečí, že prijmete iba zmysluplné, neprázdne zoznamy dátumov.
- Poskytuje jednoduchú booleovskú kontrolu v štýle guard, ktorú je ľahké kombinovať s inými validáciami.

## Použitie

### Syntax

Funkcia:

- `areValidDates(array)`

Parametre:

- `array`: Pole na kontrolu, ktoré môže obsahovať objekty `Date`.

### Lokálny import funkcie

```ts
import { areValidDates } from "@type-check/guards";

const a = [new Date(), new Date("2025-12-17")];
const b = [new Date(), "not a date"] as unknown[];
const c: unknown[] = [];
const d = [new Date("invalid date")] as unknown[];

console.log(areValidDates(a)); // pravda
console.log(areValidDates(b)); // nepravda
console.log(areValidDates(c)); // nepravda
console.log(areValidDates(d)); // nepravda

```

### Globálny import objektu

Na import funkcií ako globálnych metód objektu použite:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Nasledujúca metóda bude potom dostupná globálne:

- `Type.areValidDates(array)`

## Analýza funkcií

Tu je zdokumentovaná tabuľková analýza výstupu, ktorý vzniká pri dosadení rôznych parametrov do
funkcií: [areValidDates](../_analysis/areValidDates.md)

<br>

---

<small>Súbor bol vygenerovaný 30 January 2026 at 14:33:46 (UTC) použitím *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** od *
*[Roland Milto](https://roland-milto.de/)**.</small>