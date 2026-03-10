# isFinite

## Popis

Určuje, zda je daná hodnota `value` konečné `number`.

### Případ použití

Použijte `isFinite` k validaci neznámého vstupu (např. z JSON, formulářů nebo API) před prováděním numerických výpočtů,
aby bylo zajištěno, že hodnota je reálné, konečné číslo.

> **Poznámka pro uživatele TypeScriptu:**
>
> `isFinite` vrací `true` pouze pro konečná čísla; vrací `false` pro `NaN`, `Infinity` a jakoukoli hodnotu, která není
> číslem.

### Výhody

- Používá vestavěnou funkci `Number.isFinite` pro spolehlivou kontrolu konečnosti.
- Vrací `true` pouze pro konečná čísla; vrací `false` pro `NaN`, `Infinity` a vstupy, které nejsou číslem.
- Jednoduchý predikát bez vedlejších účinků vhodný pro validaci a ochrannou logiku.

## Použití

### Syntaxe

Funkce:

- `isFinite(value)`

Parametry:

- `value`: Hodnota, u které se má zkontrolovat konečnost.

### Lokální import funkce

```ts
import { isFinite } from "@type-check/guards";

const inputs: unknown[] = [123, -123.45, "123", Infinity, NaN, null, undefined];

const finiteNumbers = inputs.filter(isFinite);
// finiteNumbers je: [123, -123.45]

const value: unknown = 42;
if (isFinite(value)) {
  // value je zde konečné číslo
  const doubled = value * 2;
  console.log(doubled);
}
```

### Globální import objektu

Pro import funkcí jako globálních metod objektu použijte:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Následující metoda bude poté dostupná globálně:

- `Type.isFinite(value)`

## Analýza funkcí

Zde je zdokumentována tabulková analýza výstupu při dosazení různých parametrů do
funkcí: [isFinite](../_analysis/isFinite.md)

<br>

---

<small>Soubor byl vytvořen 30 January 2026 at 16:29:14 (UTC) použitím *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** od *
*[Roland Milto](https://roland-milto.de/)**.</small>