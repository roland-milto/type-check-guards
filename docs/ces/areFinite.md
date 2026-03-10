# areFinite

## Popis

`areFinite` kontroluje, zda je hodnota neprázdné pole, jehož prvky jsou všechny konečná čísla; pokud ano, vrátí `true`,
jinak `false`.

### Případ použití

Validujte pole číselných vstupů (např. datové řady grafu, seznamy souřadnic, vzorky měření) před prováděním výpočtů tak,
aby výsledek byl `true` pouze tehdy, když jsou všechny hodnoty konečná čísla.

> **Poznámka pro uživatele TypeScriptu:**
>
> `areFinite` použijte, když potřebujete zajistit, že pole je neprázdné a obsahuje pouze konečná čísla; pro prázdná pole
> a pro pole obsahující `NaN` nebo nekonečna vrací `false`.

### Výhody

- Vrací `true` pouze tehdy, když je vstup neprázdné pole a každý prvek je konečné číslo.
- Odmítá `Infinity`, `-Infinity` a `NaN` díky kontrolám `isFinite` pro každý prvek.
- Poskytuje jednoduchý booleovský výsledek (`true`/`false`) vhodný pro guardy a validační toky.

## Použití

### Syntaxe

Funkce:

- `areFinite(array)`

Parametry:

- `array`: Pole, u kterého se má ověřit, že všechny jeho prvky jsou konečné.

### Lokální import funkce

```ts
import { areFinite } from "@type-check/guards";

const a: unknown[] = [1, 2, 3];
const b: unknown[] = [1, Infinity, 3];
const c: unknown[] = [true, false, null];

console.log(areFinite(a)); // pravda
console.log(areFinite(b)); // nepravda
console.log(areFinite(c)); // nepravda

function sumIfFinite(values: unknown[]): number | null {
  if (!areFinite(values)) return null;
  return values.reduce((acc, n) => acc + n, 0);
}

console.log(sumIfFinite([10, 20, 30])); // 60
console.log(sumIfFinite([10, NaN, 30])); // null
```

### Globální import objektu

Pro import funkcí jako globálních metod objektu použijte:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Následující metoda bude poté dostupná globálně:

- `Type.areFinite(array)`

## Analýza funkcí

Zde je zdokumentována tabulková analýza výstupu při dosazení různých parametrů do
funkcí: [areFinite](../_analysis/areFinite.md)

<br>

---

<small>Soubor byl vytvořen 30 January 2026 at 16:33:57 (UTC) použitím *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** od *
*[Roland Milto](https://roland-milto.de/)**.</small>