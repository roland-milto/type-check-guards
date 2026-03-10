# getTypeOf

## Popis

`getTypeOf` vrací podrobný, pro člověka čitelný štítek typu pro danou hodnotu, včetně zpřesněných číselných typů a
konkrétních druhů objektů.

### Případ použití

Použijte `getTypeOf` ke sjednocení detekce typů při validaci vstupů a diagnostice—například k odmítnutí `nan`,
akceptování pouze `integer` ID, odlišení číselných řetězců jako `decimal` od obyčejného `string`, nebo k logování
přesných druhů objektů jako `date` a `regexp`.

> **Poznámka pro uživatele TypeScriptu:**
>
> Návratový typ je `DataTypeAsString | string`. Berte jej jako popisný štítek; při větvení porovnávejte se známými
> literály jako `integer`, `float`, `nan`, `array`, `null` a `undefined`.

### Výhody

- Vrací podrobnější řetězec typu než JavaScriptové `typeof`, včetně číselných podtypů jako `integer`, `float` a `nan`.
- Výslovně rozlišuje `null` a `undefined` jako `null` a `undefined`.
- Detekuje běžné formáty číselných řetězců a hlásí je jako `binary`, `octal`, `decimal` nebo `hexadecimal` místo
  obyčejného `string`.
- Identifikuje pole jako `array` a používá `Object.prototype.toString` k poskytnutí konkrétních názvů typů objektů (
  např. `date`, `regexp`, `map`, `set`).
- Užitečné pro validaci, logování a ladění, kde jsou potřeba konzistentní, pro člověka čitelné štítky typů.

## Použití

### Syntaxe

Funkce:

- `getTypeOf(value)`

Parametry:

- `value`: Hodnota, pro kterou se má určit datový typ.

### Lokální import funkce

```ts
import { getTypeOf } from "@type-check/guards";

const samples: unknown[] = [
  42,
  3.14,
  NaN,
  "3.14",
  "0xff",
  "0b1010",
  "0o77",
  "hello",
  null,
  undefined,
  [1, 2, 3],
  new Date(),
  /abc/i,
  new Map(),
  { a: 1 }
];

const results = samples.map((v) => ({ value: v, type: getTypeOf(v) }));
console.log(results);

// Ukázkové kontroly
if (getTypeOf(42) === "integer") {
  console.log("Got an integer");
}

if (getTypeOf("3.14") === "decimal") {
  console.log("Got a decimal string");
}

```

### Globální import objektu

Pro import funkcí jako globálních metod objektu použijte:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Následující metoda bude poté dostupná globálně:

- `Type.getTypeOf(value)`

## Analýza funkcí

Zde je zdokumentována tabulková analýza výstupu při dosazení různých parametrů do
funkcí: [getTypeOf](../_analysis/getTypeOf.md)

<br>

---

<small>Soubor byl vytvořen 6 February 2026 at 13:05:37 (UTC) použitím *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** od *
*[Roland Milto](https://roland-milto.de/)**.</small>