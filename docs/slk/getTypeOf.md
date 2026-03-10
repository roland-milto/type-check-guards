# getTypeOf

## Popis

`getTypeOf` vracia podrobný, pre ľudí čitateľný štítok typu pre danú hodnotu, vrátane spresnených číselných typov a
konkrétnych druhov objektov.

### Prípad použitia

Použite `getTypeOf` na zjednotenie detekcie typov pri validácii vstupov a diagnostike—napríklad na odmietnutie `nan`,
akceptovanie iba `integer` ID, odlišné spracovanie číselných reťazcov ako `decimal` oproti obyčajnému `string`, alebo na
logovanie presných druhov objektov ako `date` a `regexp`.

> **Poznámka pre používateľov TypeScriptu:**
>
> Návratový typ je `DataTypeAsString | string`. Berte ho ako opisný štítok; pri vetvení porovnávajte so známymi
> literálmi ako `integer`, `float`, `nan`, `array`, `null` a `undefined`.

### Výhody

- Vracia podrobnejší reťazec typu než JavaScriptové `typeof`, vrátane číselných podtypov ako `integer`, `float` a `nan`.
- Explicitne rozlišuje `null` a `undefined` ako `null` a `undefined`.
- Deteguje bežné formáty číselných reťazcov a hlási ich ako `binary`, `octal`, `decimal` alebo `hexadecimal` namiesto
  obyčajného `string`.
- Tiež identifikuje polia ako `array` a používa `Object.prototype.toString` na poskytnutie špecifických názvov typov
  objektov (napr. `date`, `regexp`, `map`, `set`).
- Je veľmi užitočná na validáciu, logovanie a ladenie, kde sú potrebné konzistentné, pre ľudí čitateľné štítky typov.

## Použitie

### Syntax

Funkcia:

- `getTypeOf(value)`

Parametre:

- `value`: Hodnota, pre ktorú sa má určiť dátový typ.

### Lokálny import funkcie

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

// Príklad kontrol
if (getTypeOf(42) === "integer") {
  console.log("Got an integer");
}

if (getTypeOf("3.14") === "decimal") {
  console.log("Got a decimal string");
}

```

### Globálny import objektu

Na import funkcií ako globálnych metód objektu použite:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Nasledujúca metóda bude potom dostupná globálne:

- `Type.getTypeOf(value)`

## Analýza funkcií

Tu je zdokumentovaná tabuľková analýza výstupu, ktorý vzniká pri dosadení rôznych parametrov do
funkcií: [getTypeOf](../_analysis/getTypeOf.md)

<br>

---

<small>Súbor bol vygenerovaný 6 February 2026 at 13:14:34 (UTC) použitím *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** od *
*[Roland Milto](https://roland-milto.de/)**.</small>