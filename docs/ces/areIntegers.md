# areIntegers

## Popis

`areIntegers` určuje, zda jsou všechny prvky v daném poli celá čísla; vrací `true`, pokud ano, a `false` v opačném
případě.

### Případ použití

`areIntegers` použijte k ověření dat poskytnutých uživatelem nebo externích dat (např. parametry dotazu, JSON payloady,
řádky CSV), když vaše logika vyžaduje vyplněný seznam celočíselných hodnot, jako jsou ID, čítače, offsety stránkování
nebo indexy pole.

> **Poznámka pro uživatele TypeScriptu:**
>
> `areIntegers` použijte jako runtime guard pro vstupy typu `unknown[]` předtím, než s nimi budete zacházet jako s
`number[]` obsahujícím pouze celá čísla. Pokud vrátí `false`, vstup buď není vyplněné pole, nebo obsahuje alespoň jednu
> hodnotu, která není celé číslo.

### Výhody

- Vrací `true` pouze tehdy, když je každý prvek celé číslo; jinak vrací `false`.
- Pomáhá ověřit neznámý vstup před provedením operací, které vyžadují pouze celá čísla (např. indexování, počty, ID).
- Rychle selže: přestane kontrolovat, jakmile je nalezen prvek, který není celé číslo.

## Použití

### Syntaxe

Funkce:

- `areIntegers(array)`

Parametry:

- `array`: Pole, u kterého se má zkontrolovat, zda obsahuje celočíselné prvky.

### Lokální import funkce

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

### Globální import objektu

Pro import funkcí jako globálních metod objektu použijte:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Následující metoda bude poté dostupná globálně:

- `Type.areIntegers(array)`

## Analýza funkcí

Zde je zdokumentována tabulková analýza výstupu při dosazení různých parametrů do
funkcí: [areIntegers](../_analysis/areIntegers.md)

<br>

---

<small>Soubor byl vytvořen 31 January 2026 at 00:57:45 (UTC) použitím *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** od *
*[Roland Milto](https://roland-milto.de/)**.</small>