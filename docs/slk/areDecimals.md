# areDecimals

## Popis

Kontroluje, či sú všetky prvky v poli desatinné čísla a či je pole naplnené, pričom vráti `true` alebo `false`.

### Prípad použitia

Validujte zoznamy poskytnuté používateľom (napr. stĺpce CSV alebo vstupy formulára), aby ste pred parsovaním alebo
výpočtami zabezpečili, že pole nie je prázdne a každá položka je desatinná hodnota.

> **Poznámka pre používateľov TypeScriptu:**
>
> Použite `areDecimals`, keď potrebujete rýchlu booleovskú kontrolu, že `unknown[]` nie je prázdne a každý prvok je
> desatinná reprezentácia.

### Výhody

- Zabezpečuje, že vstup je naplnené pole pred overovaním položiek, čím zabraňuje náhodnému prijatiu prázdnych zoznamov.
- Overuje každý prvok pomocou `isDecimal`, takže zmiešané alebo neplatné hodnoty okamžite spôsobia výsledok `false`.
- Poskytuje jednoduchý booleovský výsledok (`true`/`false`) vhodný pre stráže (guards) a validačné toky s predčasným
  návratom.

## Použitie

### Syntax

Funkcia:

- `areDecimals(array)`

Parametre:

- `array`: Pole, ktoré sa má skontrolovať.

### Lokálny import funkcie

```ts
import { areDecimals } from "@type-check/guards";

const a: unknown[] = ["1.0", "2.5", "3.14"];
const b: unknown[] = ["1.0", "abc", "3.14"];
const c: unknown[] = [];

console.log(areDecimals(a)); // pravda
console.log(areDecimals(b)); // nepravda
console.log(areDecimals(c)); // nepravda
```

### Globálny import objektu

Na import funkcií ako globálnych metód objektu použite:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Nasledujúca metóda bude potom dostupná globálne:

- `Type.areDecimals(array)`

## Analýza funkcií

Tu je zdokumentovaná tabuľková analýza výstupu, ktorý vzniká pri dosadení rôznych parametrov do
funkcií: [areDecimals](../_analysis/areDecimals.md)

<br>

---

<small>Súbor bol vygenerovaný 31 January 2026 at 15:59:01 (UTC) použitím *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** od *
*[Roland Milto](https://roland-milto.de/)**.</small>