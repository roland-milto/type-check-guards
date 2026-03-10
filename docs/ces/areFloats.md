# areFloats

## Popis

`areFloats` kontroluje, zda je dané pole naplněné a všechny jeho prvky jsou float.

### Případ použití

Použijte `areFloats`, když obdržíte `unknown[]` (např. z JSON, parametrů dotazu nebo externích API) a potřebujete
zajistit, že jde o naplněné pole, kde je každá položka float, před spuštěním numerické logiky, jako je průměrování,
interpolace nebo statistické výpočty.

> **Poznámka pro uživatele TypeScriptu:**
>
> Použijte `areFloats` jako guard pro `unknown[]` předtím, než s ním budete zacházet jako s `number[]` obsahujícím pouze
> float; pro prázdná pole a pro jakýkoli prvek, který není float, vrací `false`.

### Výhody

- Vrací `true` pouze tehdy, když je vstup neprázdné pole a každý prvek je číslo s plovoucí desetinnou čárkou (float).
- Rychle selže: vrátí `false` hned, jakmile je nalezen prvek, který není float.
- Pomáhá validovat neznámý vstup před provedením výpočtů specifických pro float.

## Použití

### Syntaxe

Funkce:

- `areFloats(array)`

Parametry:

- `array`: Pole, u kterého se kontroluje, zda obsahuje prvky typu float.

### Lokální import funkce

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

### Globální import objektu

Pro import funkcí jako globálních metod objektu použijte:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Následující metoda bude poté dostupná globálně:

- `Type.areFloats(array)`

## Analýza funkcí

Zde je zdokumentována tabulková analýza výstupu při dosazení různých parametrů do
funkcí: [areFloats](../_analysis/areFloats.md)

<br>

---

<small>Soubor byl vytvořen 30 January 2026 at 15:56:38 (UTC) použitím *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** od *
*[Roland Milto](https://roland-milto.de/)**.</small>