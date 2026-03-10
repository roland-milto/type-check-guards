# areOfType

## Popis

Kontroluje, zda jsou všechny prvky v daném `array` zadaného `type`.

### Případ použití

Použijte `areOfType` k ověření neznámého vstupu (např. parsované JSON, API payloady, uživatelský vstup) před prováděním
operací specifických pro typ nad každým prvkem pole.

> **Poznámka pro uživatele TypeScriptu:**
>
> Protože `areOfType` je type guard, TypeScript zúží pole uvnitř bloku `if (areOfType(...)) {}` na
`Array<DataTypeOf<T>>`.

### Výhody

- Poskytuje TypeScript type guard: když vrátí `true`, vstup se zúží na `Array<DataTypeOf<T>>`.
- Ověřuje každý prvek vůči požadovanému runtime typu, čímž zabraňuje tomu, aby prošla pole se smíšenými typy.
- Selže rychle: vrátí `false` hned, jakmile je nalezen neodpovídající prvek.
- Záměrně odmítá ne-pole a prázdná pole (závisí na `isFilledArray`).

## Použití

### Syntaxe

Funkce:

- `areOfType(array, type)`

Parametry:

- `array`: Pole, které se má zkontrolovat.
- `type`: Typ, vůči kterému se má zkontrolovat každý prvek v poli.

### Lokální import funkce

```ts
import { areOfType } from "@type-check/guards";

const values: unknown[] = [1, 2, 3];

if (areOfType(values, "number")) {
  // values je nyní number[]
  const sum = values.reduce((a, b) => a + b, 0);
  console.log(sum);
}

const mixed: unknown[] = [1, "2", 3];
const allNumbers = areOfType(mixed, "number"); // false

```

### Globální import objektu

Pro import funkcí jako globálních metod objektu použijte:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Následující metoda bude poté dostupná globálně:

- `Type.areOfType(array, type)`

## Analýza funkcí

Zde je zdokumentována tabulková analýza výstupu při dosazení různých parametrů do
funkcí: [areOfType](../_analysis/areOfType.md)

<br>

---

<small>Soubor byl vytvořen 30 January 2026 at 17:08:54 (UTC) použitím *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** od *
*[Roland Milto](https://roland-milto.de/)**.</small>