# areIntegers

## Popis

`areIntegers` určuje, či sú všetky prvky v danom poli celé čísla; vráti `true`, ak áno, a `false` v opačnom prípade.

### Prípad použitia

Použite `areIntegers` na overenie údajov poskytnutých používateľom alebo externých údajov (napr. parametre dotazu, JSON
payloady, riadky CSV), keď vaša logika vyžaduje vyplnený zoznam celočíselných hodnôt, ako sú ID, počítadlá, posuny
stránkovania alebo indexy poľa.

> **Poznámka pre používateľov TypeScriptu:**
>
> Použite `areIntegers` ako runtime guard pre vstupy typu `unknown[]` predtým, než ich budete považovať za `number[]`
> obsahujúce iba celé čísla. Ak vráti `false`, vstup buď nie je vyplnené pole, alebo obsahuje aspoň jednu hodnotu, ktorá
> nie je celé číslo.

### Výhody

- Vracia `true` iba vtedy, keď je každý prvok celé číslo; inak vráti `false`.
- Pomáha overiť neznámy vstup pred vykonaním operácií, ktoré vyžadujú iba celé čísla (napr. indexovanie, počty, ID).
- Zlyhá rýchlo: prestane kontrolovať hneď, ako nájde prvok, ktorý nie je celé číslo.

## Použitie

### Syntax

Funkcia:

- `areIntegers(array)`

Parametre:

- `array`: Pole, ktoré sa má skontrolovať na prítomnosť celočíselných prvkov.

### Lokálny import funkcie

```ts
import { areIntegers } from "@type-check/guards";

const a: unknown[] = [1, 2, 3];
const b: unknown[] = [0, -10, 42];
const c: unknown[] = [1, 2, "3"];

console.log(areIntegers(a)); // pravda
console.log(areIntegers(b)); // pravda
console.log(areIntegers(c)); // nepravda

function sumIntegers(values: unknown[]): number {
  if (!areIntegers(values)) {
    throw new TypeError("Expected a filled array of integers");
  }
  return (values as number[]).reduce((acc, n) => acc + n, 0);
}

console.log(sumIntegers([10, 20, 30]));

```

### Globálny import objektu

Na import funkcií ako globálnych metód objektu použite:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Nasledujúca metóda bude potom dostupná globálne:

- `Type.areIntegers(array)`

## Analýza funkcií

Tu je zdokumentovaná tabuľková analýza výstupu, ktorý vzniká pri dosadení rôznych parametrov do
funkcií: [areIntegers](../_analysis/areIntegers.md)

<br>

---

<small>Súbor bol vygenerovaný 31 January 2026 at 01:00:19 (UTC) použitím *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** od *
*[Roland Milto](https://roland-milto.de/)**.</small>