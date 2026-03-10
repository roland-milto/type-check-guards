# isBinary

## Popis

`isBinary` určuje, zda je hodnota binární řetězec (volitelně s předponou `0b`/`0B`) a vrací `true` nebo `false`.

### Případ použití

Validujte řetězce poskytnuté uživatelem (např. pole formuláře, argumenty CLI, hodnoty konfigurace), abyste zajistili, že
představují pouze binární číslice, volitelně s předponou `0b`/`0B`, před dalším zpracováním.

> **Poznámka pro uživatele TypeScriptu:**
>
> Použijte `isBinary` jako typový strážce před parsováním nebo převodem řetězce na `BigInt`/`Number`, abyste se vyhnuli
> neplatnému vstupu.

### Výhody

- Přijímá binární řetězce s předponou `0b`/`0B` i bez ní.
- Odmítá prázdné řetězce a řetězce s úvodní/koncovou bílou mezerou (ASCII ≤ 32).
- Vrací `true`/`false` bez vyhození výjimky, takže je bezpečná pro neznámé vstupy.

## Použití

### Syntaxe

Funkce:

- `isBinary(value)`

Parametry:

- `value`: Hodnota, která má být zkontrolována.

### Lokální import funkce

```ts
import { isBinary } from "@type-check/guards";

const a = isBinary("0b1010"); // pravda
const b = isBinary("1010");   // pravda
const c = isBinary("0b1020"); // nepravda
const d = isBinary(0b1010);     // nepravda

```

### Globální import objektu

Pro import funkcí jako globálních metod objektu použijte:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Následující metoda bude poté dostupná globálně:

- `Type.isBinary(value)`

## Analýza funkcí

Zde je zdokumentována tabulková analýza výstupu při dosazení různých parametrů do
funkcí: [isBinary](../_analysis/isBinary.md)

<br>

---

<small>Soubor byl vytvořen 31 January 2026 at 23:09:23 (UTC) použitím *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** od *
*[Roland Milto](https://roland-milto.de/)**.</small>