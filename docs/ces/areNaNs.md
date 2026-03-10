# areNaNs

## Popis

`areNaNs` kontroluje, zda jsou všechny prvky v poli `NaN`, a vrací `true` pouze tehdy, když je každý prvek `NaN`.

### Případ použití

Ověření příchozích dat, kde se `NaN` používá jako sentinelová hodnota a je nutné zajistit, že celé pole se skládá
výhradně z `NaN` (např. detekce číselné řady, ve které chybí všechny hodnoty).

> **Poznámka pro uživatele TypeScriptu:**
>
> Použijte `areNaNs`, když potřebujete ověřit, že pole obsahuje pouze číselnou hodnotu `NaN` (bez převodu řetězců na
> čísla).

### Výhody

- Vrací `true` pouze tehdy, když je každý prvek `NaN` (striktní kontrola všech prvků).
- Nepřevádí řetězce na čísla; hodnoty jako "NaN" zůstávají ne-`NaN` a způsobí výsledek `false`.
- Vrací `false` pro nevyplněná pole, čímž zabraňuje nechtěnému `true` při prázdném vstupu.

## Použití

### Syntaxe

Funkce:

- `areNaNs(array)`

Parametry:

- `array`: Pole, u kterého se kontrolují hodnoty `NaN`.

### Lokální import funkce

```ts
import { areNaNs } from "@type-check/guards";

const a = areNaNs([NaN, NaN]); // pravda
const b = areNaNs([NaN, 1, NaN]); // nepravda
const c = areNaNs([NaN, "NaN", NaN]); // nepravda
const d = areNaNs([NaN, null, NaN]); // nepravda
const e = areNaNs([] as unknown[]); // nepravda
```

### Globální import objektu

Pro import funkcí jako globálních metod objektu použijte:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Následující metoda bude poté dostupná globálně:

- `Type.areNaNs(array)`

## Analýza funkcí

Zde je zdokumentována tabulková analýza výstupu při dosazení různých parametrů do
funkcí: [areNaNs](../_analysis/areNaNs.md)

<br>

---

<small>Soubor byl vytvořen 30 January 2026 at 15:50:45 (UTC) použitím *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** od *
*[Roland Milto](https://roland-milto.de/)**.</small>