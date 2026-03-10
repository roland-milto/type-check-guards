# areBigInts

## Popis

`areBigInts` určuje, či je hodnota neprázdne pole obsahujúce iba hodnoty `bigint`.

### Prípad použitia

Overte neznámy vstup (napr. parsované údaje podobné JSON, payloady API alebo parametre funkcií typované ako `unknown`),
aby ste sa pred spracovaním uistili, že ide o neprázdne pole hodnôt `bigint`; vráti `true` iba vtedy, keď sú všetky
prvky `bigint`, inak `false`.

> **Poznámka pre používateľov TypeScriptu:**
>
> `areBigInts` použite ako runtime guard pred vykonávaním operácií iba pre `bigint` (napr. aritmetika, porovnania) na
> neznámom vstupe.

### Výhody

- Zabezpečuje, že každý prvok je `bigint`, pričom vráti `true` iba vtedy, keď sa zhoduje celé pole.
- Zámerne odmieta hodnoty, ktoré nie sú poľami, a prázdne polia (cez `isFilledArray`), čím zabraňuje náhodnému prijatiu
  neplatných vstupov.
- Rýchle zlyhanie: vráti `false` hneď, ako sa nájde prvok, ktorý nie je `bigint`.

## Použitie

### Syntax

Funkcia:

- `areBigInts(array)`

Parametre:

- `array`: Hodnota, ktorá sa má skontrolovať.

### Lokálny import funkcie

```ts
import { areBigInts } from "@type-check/guards";

const a: unknown = [10n, 20n];
const b: unknown = [10n, 20];
const c: unknown = [];

console.log(areBigInts(a)); // pravda
console.log(areBigInts(b)); // nepravda
console.log(areBigInts(c)); // nepravda
```

### Globálny import objektu

Na import funkcií ako globálnych metód objektu použite:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Nasledujúca metóda bude potom dostupná globálne:

- `Type.areBigInts(array)`

## Analýza funkcií

Tu je zdokumentovaná tabuľková analýza výstupu, ktorý vzniká pri dosadení rôznych parametrov do
funkcií: [areBigInts](../_analysis/areBigInts.md)

<br>

---

<small>Súbor bol vygenerovaný 31 January 2026 at 23:27:18 (UTC) použitím *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** od *
*[Roland Milto](https://roland-milto.de/)**.</small>