# areDecimals

## Popis

Kontroluje, zda jsou všechny prvky v poli desetinná čísla a zda je pole naplněné; vrací `true` nebo `false`.

### Případ použití

Validujte uživatelem poskytnuté seznamy (např. sloupce CSV nebo vstupy formuláře), abyste zajistili, že pole není
prázdné a každá položka je desetinná hodnota před parsováním nebo výpočty.

> **Poznámka pro uživatele TypeScriptu:**
>
> Použijte `areDecimals`, když potřebujete rychlou booleovskou kontrolu, že `unknown[]` není prázdné a každý prvek je
> desetinná reprezentace.

### Výhody

- Zajišťuje, že vstup je naplněné pole před validací položek, čímž brání nechtěnému přijetí prázdných seznamů.
- Validuje každý prvek pomocí `isDecimal`, takže smíšené nebo neplatné hodnoty okamžitě způsobí výsledek `false`.
- Poskytuje jednoduchý booleovský výsledek (`true`/`false`) vhodný pro guardy a validační toky s předčasným návratem.

## Použití

### Syntaxe

Funkce:

- `areDecimals(array)`

Parametry:

- `array`: Pole, které se má zkontrolovat.

### Lokální import funkce

```ts
import { areDecimals } from "@type-check/guards";

const a: unknown[] = ["1.0", "2.5", "3.14"];
const b: unknown[] = ["1.0", "abc", "3.14"];
const c: unknown[] = [];

console.log(areDecimals(a)); // pravda
console.log(areDecimals(b)); // nepravda
console.log(areDecimals(c)); // nepravda
```

### Globální import objektu

Pro import funkcí jako globálních metod objektu použijte:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Následující metoda bude poté dostupná globálně:

- `Type.areDecimals(array)`

## Analýza funkcí

Zde je zdokumentována tabulková analýza výstupu při dosazení různých parametrů do
funkcí: [areDecimals](../_analysis/areDecimals.md)

<br>

---

<small>Soubor byl vytvořen 31 January 2026 at 15:56:36 (UTC) použitím *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** od *
*[Roland Milto](https://roland-milto.de/)**.</small>