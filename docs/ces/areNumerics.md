# areNumerics

## Popis

`areNumerics` kontroluje, zda je hodnota neprázdné pole, ve kterém jsou všechny prvky číselné.

### Případ použití

Použijte `areNumerics` k validaci externích nebo netypovaných dat (např. JSON payloady, parametry dotazu, vstup z
formuláře) před výpočtem součtů, průměrů nebo jiných číselných operací; zajistí, že vstup je neprázdné číselné pole,
jinak vrátí `false`.

> **Poznámka pro uživatele TypeScriptu:**
>
> Použijte `areNumerics` jako guard pro vstup typu `unknown` předtím, než s ním budete zacházet jako s číselným polem;
> pro ne-pole a prázdná pole vrací `false`.

### Výhody

- Vrací `true` pouze tehdy, když je vstup neprázdné pole a každý prvek je číselný.
- Rychle selže: přestane kontrolovat, jakmile je nalezen nečíselný prvek, a vrátí `false`.
- Pomáhá bezpečně validovat neznámý vstup před prováděním číselných operací.

## Použití

### Syntaxe

Funkce:

- `areNumerics(array)`

Parametry:

- `array`: Pole, u kterého se kontroluje, zda obsahuje číselné prvky.

### Lokální import funkce

```ts
import { areNumerics } from "@type-check/guards";

const a: unknown = [1, 2, 3];
const b: unknown = [-3.14, 0, 42];
const c: unknown = [1, "two", 3];
const d: unknown = "string";
const e: unknown = [];

console.log(areNumerics(a)); // pravda
console.log(areNumerics(b)); // pravda
console.log(areNumerics(c)); // nepravda
console.log(areNumerics(d)); // nepravda
console.log(areNumerics(e)); // nepravda

function sumUnknown(values: unknown): number | null {
  if (!areNumerics(values)) return null;
  return values.reduce((acc, n) => acc + n, 0);
}

console.log(sumUnknown([10, 20, 30])); // 60
console.log(sumUnknown([10, "20", 30])); // null
```

### Globální import objektu

Pro import funkcí jako globálních metod objektu použijte:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Následující metoda bude poté dostupná globálně:

- `Type.areNumerics(array)`

## Analýza funkcí

Zde je zdokumentována tabulková analýza výstupu při dosazení různých parametrů do
funkcí: [areNumerics](../_analysis/areNumerics.md)

<br>

---

<small>Soubor byl vytvořen 6 February 2026 at 16:04:22 (UTC) použitím *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** od *
*[Roland Milto](https://roland-milto.de/)**.</small>