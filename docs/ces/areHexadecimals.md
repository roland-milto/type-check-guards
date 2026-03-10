# areHexadecimals

## Popis

Kontroluje, zda jsou všechny prvky v poli hexadecimální řetězce, a vrací `true` pouze pro neprázdná pole, kde je každá
položka platná.

### Případ použití

Použijte `areHexadecimals` k ověření uživatelského vstupu nebo externích dat (např. ID, kontrolních součtů, barevných
kódů bez úvodního '#') před provedením hexadecimálního parsování nebo dalšího zpracování.

> **Poznámka pro uživatele TypeScriptu:**
>
> Použijte `areHexadecimals` k ověření neznámého vstupu před parsováním nebo převodem hodnot (například před
`parseInt(value, 16)` nebo převody na BigInt).

### Výhody

- Ověřuje, že každý prvek je hexadecimální řetězec, a vrací `true` pouze tehdy, když všechny položky odpovídají.
- Záměrně odmítá prázdná pole a pro chybějící vstupní data vrací `false`.
- Poskytuje jednoduchý booleovský výsledek (`true`/`false`) vhodný pro guardy a validaci s předčasným návratem.

## Použití

### Syntaxe

Funkce:

- `areHexadecimals(array)`

Parametry:

- `array`: Pole, které se má zkontrolovat na prvky typu hexadecimální řetězec.

### Lokální import funkce

```ts
import { areHexadecimals } from "@type-check/guards";

const a = areHexadecimals(["1A", "3F", "B2"]);
const b = areHexadecimals(["1A", "3G", "B2"]);
const c = areHexadecimals([10 as unknown as string, "3F", "B2"] as unknown[]);
const d = areHexadecimals([]);

console.log(a, b, c, d);
```

### Globální import objektu

Pro import funkcí jako globálních metod objektu použijte:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Následující metoda bude poté dostupná globálně:

- `Type.areHexadecimals(array)`

## Analýza funkcí

Zde je zdokumentována tabulková analýza výstupu při dosazení různých parametrů do
funkcí: [areHexadecimals](../_analysis/areHexadecimals.md)

<br>

---

<small>Soubor byl vytvořen 31 January 2026 at 23:05:38 (UTC) použitím *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** od *
*[Roland Milto](https://roland-milto.de/)**.</small>