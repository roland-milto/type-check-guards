# isFloat

## Popis

`isFloat` určuje, zda je daná `value` konečné číslo s plovoucí desetinnou čárkou (tj. `number`, které není celé číslo).

### Případ použití

Validace číselného vstupu od uživatele, kde jsou vyžadovány zlomkové hodnoty (např. ceny, měření, sazby), a odmítnutí
celých čísel, `NaN` a nekonečen.

> **Poznámka pro uživatele TypeScriptu:**
>
> `isFloat` použijte, když potřebujete přijímat pouze konečné necelé číselné vstupy; odmítá celá čísla a nekonečné
> hodnoty.

### Výhody

- Vrací `true` pouze pro konečná necelá čísla (vylučuje celá čísla, `NaN`, `Infinity` a `-Infinity`).
- Funguje s jakýmkoli vstupním typem (`unknown`) a bezpečně zužuje typ kontrolou `typeof value === "number"`.
- Používá vestavěné číselné kontroly (`Number.isInteger`, `Number.isFinite`) pro předvídatelné chování.

## Použití

### Syntaxe

Funkce:

- `isFloat(value)`

Parametry:

- `value`: Hodnota, u které se má ověřit, zda je číslem s plovoucí desetinnou čárkou.

### Lokální import funkce

```ts
import { isFloat } from "@type-check/guards";

const inputs: unknown[] = [3.14, -0.1, 1e-7, 42, "3.14", NaN, Infinity];

for (const value of inputs) {
  if (isFloat(value)) {
    // hodnota je za běhu číslo; je konečná a není celé číslo
    const rounded = value.toFixed(2);
    console.log("float:", value, "rounded:", rounded);
  } else {
    console.log("not a float:", value);
  }
}

```

### Globální import objektu

Pro import funkcí jako globálních metod objektu použijte:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Následující metoda bude poté dostupná globálně:

- `Type.isFloat(value)`

## Analýza funkcí

Zde je zdokumentována tabulková analýza výstupu při dosazení různých parametrů do
funkcí: [isFloat](../_analysis/isFloat.md)

<br>

---

<small>Soubor byl vytvořen 30 January 2026 at 16:07:03 (UTC) použitím *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** od *
*[Roland Milto](https://roland-milto.de/)**.</small>