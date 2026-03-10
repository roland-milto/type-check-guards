# isDecimal

## Popis

`isDecimal` kontroluje, zda je hodnota desetinnou řetězcovou reprezentací bez úvodních/koncových bílých znaků a s
platným desetinným formátem.

### Případ použití

Validujte pole formulářů, payloady API nebo konfigurační hodnoty, které musí být zadány jako desetinný řetězec (
volitelně se znaménkem) bez jakýchkoli okolních bílých znaků, před parsováním nebo uložením.

> **Poznámka pro uživatele TypeScriptu:**
>
> Použijte `isDecimal` k validaci uživatelského vstupu před jeho převodem (např. pomocí `Number(value)`), zejména když
> je nutné odmítnout bílé znaky.

### Výhody

- Striktně ověřuje, že vstup je řetězec a odpovídá vzoru desetinného literálu.
- Odmítá úvodní a koncové bílé znaky (včetně řídicích znaků), aby se předešlo nejednoznačnému parsování.
- Rychlé předběžné kontroly (kontrola typu a prvního/posledního znaku) před spuštěním regulárního výrazu.
- Vrací jednoduchý booleovský výsledek (`true`/`false`) vhodný pro guardy a validaci vstupu.

## Použití

### Syntaxe

Funkce:

- `isDecimal(value)`

Parametry:

- `value`: Hodnota, u které se má ověřit formát desetinného řetězce.

### Lokální import funkce

```ts
import { isDecimal } from "@type-check/guards";

const inputs: unknown[] = ["123.45", "0.99", "-42.0", 123.45, " 123.45", "123.45 "];

for (const v of inputs) {
  if (isDecimal(v)) {
    // v je zde řetězec (ověřeno za běhu)
    console.log("decimal:", v);
  } else {
    console.log("not decimal:", v);
  }
}

```

### Globální import objektu

Pro import funkcí jako globálních metod objektu použijte:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Následující metoda bude poté dostupná globálně:

- `Type.isDecimal(value)`

## Analýza funkcí

Zde je zdokumentována tabulková analýza výstupu při dosazení různých parametrů do
funkcí: [isDecimal](../_analysis/isDecimal.md)

<br>

---

<small>Soubor byl vytvořen 31 January 2026 at 15:51:36 (UTC) použitím *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** od *
*[Roland Milto](https://roland-milto.de/)**.</small>