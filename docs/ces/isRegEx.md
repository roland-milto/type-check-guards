# isRegEx

## Popis

Určuje, zda je poskytnutá hodnota instancí `RegExp`.

### Případ použití

Ověřte hodnoty poskytnuté uživatelem nebo dynamické hodnoty (např. konfigurace, payloady API, vstupy pluginů) předtím,
než s nimi budete zacházet jako s regulárním výrazem.

> **Poznámka pro uživatele TypeScriptu:**
>
> Použijte `isRegEx` ke zúžení hodnot typu `unknown` (nebo unie) před použitím vlastností či metod specifických pro
> RegExp; vrací `true` pouze pro hodnoty, které jsou instancemi `RegExp`.

### Výhody

- Poskytuje jednoduchý běhový typový strážce pro kontrolu, zda je hodnota `RegExp`.
- Pomáhá předcházet chybám, když kód očekává regulární výraz (např. před voláním `test`, `exec` nebo čtením `source`).
- Funguje jak s literály regulárních výrazů, tak s instancemi vytvořenými přes `new RegExp(...)`.
- Vrací jednoznačný booleovský výsledek (`true`/`false`) bez vyhazování výjimky pro vstupy, které nejsou regulárním
  výrazem.

## Použití

### Syntaxe

Funkce:

- `isRegEx(value)`

Parametry:

- `value`: Hodnota, která má být zkontrolována.

### Lokální import funkce

```ts
import { isRegEx } from "@type-check/guards";

const input: unknown = /abc/i;

if (isRegEx(input)) {
  // input je zde RegExp
  console.log(input.test("ABC"));
} else {
  console.log("Not a RegExp");
}

```

### Globální import objektu

Pro import funkcí jako globálních metod objektu použijte:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Následující metoda bude poté dostupná globálně:

- `Type.isRegEx(value)`

## Analýza funkcí

Zde je zdokumentována tabulková analýza výstupu při dosazení různých parametrů do
funkcí: [isRegEx](../_analysis/isRegEx.md)

<br>

---

<small>Soubor byl vytvořen 30 January 2026 at 23:28:49 (UTC) použitím *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** od *
*[Roland Milto](https://roland-milto.de/)**.</small>