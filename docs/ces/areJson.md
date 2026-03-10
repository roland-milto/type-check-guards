# areJson

## Popis

Kontroluje, zda jsou všechny prvky pole řetězce JSON; vrací `true` pouze pokud je pole neprázdné a každá položka je
platný JSON, jinak vrací `false`.

### Případ použití

Validujte příchozí data (např. z parametrů dotazu, proměnných prostředí nebo externích API), kde očekáváte pole řetězců
kódovaných jako JSON a chcete odmítnout prázdná pole nebo jakékoli položky, které nejsou JSON.

> **Poznámka pro uživatele TypeScriptu:**
>
> `areJson` použijte, když potřebujete ověřit, že `unknown[]` obsahuje pouze řetězce JSON před jejich parsováním (např.
> pomocí `JSON.parse`).

### Výhody

- Vrací `true` pouze tehdy, když je každý prvek platný řetězec JSON; jinak vrací `false`.
- Rychle selže: přestane kontrolovat, jakmile je nalezen prvek, který není JSON.
- Záměrně odmítá prázdná pole a pro nevyplněný vstup vrací `false`.

## Použití

### Syntaxe

Funkce:

- `areJson(array)`

Parametry:

- `array`: Pole, které se má zkontrolovat na prvky typu řetězec JSON.

### Lokální import funkce

```ts
import { areJson } from "@type-check/guards";

const ok = areJson(["{\"a\":1}", "{\"b\":2}"]); // pravda
const mixed = areJson(["{\"a\":1}", 123 as unknown]); // nepravda
const empty = areJson([]); // nepravda

```

### Globální import objektu

Pro import funkcí jako globálních metod objektu použijte:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Následující metoda bude poté dostupná globálně:

- `Type.areJson(array)`

## Analýza funkcí

Zde je zdokumentována tabulková analýza výstupu při dosazení různých parametrů do
funkcí: [areJson](../_analysis/areJson.md)

<br>

---

<small>Soubor byl vytvořen 30 January 2026 at 16:15:16 (UTC) použitím *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** od *
*[Roland Milto](https://roland-milto.de/)**.</small>