# areFloats

## Popis

`areFloats` kontroluje, či je dané pole naplnené a či sú všetky jeho prvky float.

### Prípad použitia

Použite `areFloats`, keď dostanete `unknown[]` (napr. z JSON, parametrov dotazu alebo externých API) a potrebujete
zabezpečiť, že ide o naplnené pole, v ktorom je každá položka float, pred spustením numerickej logiky, ako je
priemerovanie, interpolácia alebo štatistické výpočty.

> **Poznámka pre používateľov TypeScriptu:**
>
> Použite `areFloats` ako guard pre `unknown[]` predtým, než s ním budete pracovať ako s `number[]` obsahujúcim iba
> float; pre prázdne polia a pre akýkoľvek prvok, ktorý nie je float, vráti `false`.

### Výhody

- Vráti `true` iba vtedy, keď je vstup neprázdne pole a každý prvok je číslo s desatinnou časťou (float).
- Zlyhá rýchlo: vráti `false` hneď, ako sa nájde prvok, ktorý nie je float.
- Pomáha validovať neznámy vstup pred vykonaním výpočtov špecifických pre float.

## Použitie

### Syntax

Funkcia:

- `areFloats(array)`

Parametre:

- `array`: Pole, ktoré sa má skontrolovať na prvky typu float.

### Lokálny import funkcie

```ts
import { areFloats } from "@type-check/guards";

const a: unknown[] = [3.14, 2.71, 1.0];
const b: unknown[] = [3.14, 2];
const c: unknown[] = [];

console.log(areFloats(a)); // pravda
console.log(areFloats(b)); // nepravda
console.log(areFloats(c)); // nepravda

function sumFloats(values: unknown): number | null {
  if (!Array.isArray(values) || !areFloats(values)) return null;
  return values.reduce((acc, n) => acc + n, 0);
}

console.log(sumFloats([0.5, 1.25])); // 1.75
console.log(sumFloats([1, 2])); // null
```

### Globálny import objektu

Na import funkcií ako globálnych metód objektu použite:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Nasledujúca metóda bude potom dostupná globálne:

- `Type.areFloats(array)`

## Analýza funkcií

Tu je zdokumentovaná tabuľková analýza výstupu, ktorý vzniká pri dosadení rôznych parametrov do
funkcií: [areFloats](../_analysis/areFloats.md)

<br>

---

<small>Súbor bol vygenerovaný 30 January 2026 at 15:59:29 (UTC) použitím *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** od *
*[Roland Milto](https://roland-milto.de/)**.</small>