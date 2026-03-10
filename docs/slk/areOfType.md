# areOfType

## Popis

Skontroluje, či sú všetky prvky v zadanom `array` typu `type`.

### Prípad použitia

Použite `areOfType` na overenie neznámeho vstupu (napr. parsovaný JSON, payloady z API, používateľský vstup) pred
vykonávaním operácií špecifických pre typ na každom prvku poľa.

> **Poznámka pre používateľov TypeScriptu:**
>
> Keďže `areOfType` je type guard, TypeScript zúži pole v bloku `if (areOfType(...)) {}` na `Array<DataTypeOf<T>>`.

### Výhody

- Poskytuje TypeScript type guard: keď vráti `true`, vstup sa zúži na `Array<DataTypeOf<T>>`.
- Overuje každý prvok voči požadovanému runtime typu, čím zabraňuje tomu, aby prešli polia so zmiešanými typmi.
- Zlyhá rýchlo: vráti `false` hneď, ako sa nájde nezhodujúci prvok.
- Zámerne odmieta nepolia a prázdne polia (závisí od `isFilledArray`).

## Použitie

### Syntax

Funkcia:

- `areOfType(array, type)`

Parametre:

- `array`: Pole, ktoré sa má skontrolovať.
- `type`: Typ, voči ktorému sa má skontrolovať každý prvok v poli.

### Lokálny import funkcie

```ts
import { areOfType } from "@type-check/guards";

const values: unknown[] = [1, 2, 3];

if (areOfType(values, "number")) {
  // values je teraz number[]
  const sum = values.reduce((a, b) => a + b, 0);
  console.log(sum);
}

const mixed: unknown[] = [1, "2", 3];
const allNumbers = areOfType(mixed, "number"); // nepravda

```

### Globálny import objektu

Na import funkcií ako globálnych metód objektu použite:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Nasledujúca metóda bude potom dostupná globálne:

- `Type.areOfType(array, type)`

## Analýza funkcií

Tu je zdokumentovaná tabuľková analýza výstupu, ktorý vzniká pri dosadení rôznych parametrov do
funkcií: [areOfType](../_analysis/areOfType.md)

<br>

---

<small>Súbor bol vygenerovaný 30 January 2026 at 17:11:16 (UTC) použitím *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** od *
*[Roland Milto](https://roland-milto.de/)**.</small>