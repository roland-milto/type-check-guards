# isPlainObject

## Popis

Skontroluje, či je daná hodnota `value` obyčajný objekt, a vráti `true`, ak áno, inak `false`.

### Prípad použitia

Overiť, že vstup typu `unknown` (napr. parsované JSON, externé dáta alebo argumenty funkcie) je obyčajný objekt pred
čítaním kľúčov alebo mapovaním do typovaného konfiguračného objektu.

> **Poznámka pre používateľov TypeScriptu:**
>
> `isPlainObject` je užitočný na zúženie `unknown` pred tým, než sa s ním bude pracovať ako s objektom typu record;
> vráti `true` iba pre hodnoty, ktorých interný tag je `[object Object]`.

### Výhody

- Poskytuje jednoduchú a spoľahlivú kontrolu, či je hodnota obyčajný objekt (t. j. `Object` / `{}`), pričom vracia
  `true` alebo `false`.
- Pomáha rozlíšiť obyčajné objekty od polí, funkcií, `null` a iných typov, ktoré nie sú obyčajným objektom.
- Užitočné ako type guard v TypeScripte na zúženie hodnôt typu `unknown` pred prístupom k vlastnostiam objektu.

## Použitie

### Syntax

Funkcia:

- `isPlainObject(value)`

Parametre:

- `value`: Hodnota, ktorú treba otestovať, či je obyčajným objektom.

### Lokálny import funkcie

```ts
import { isPlainObject } from "@type-check/guards";

const input: unknown = JSON.parse('{"a":1}');

if (isPlainObject(input)) {
  // input je tu obyčajný objekt
  console.log(Object.keys(input));
} else {
  console.log("Not a plain object");
}

console.log(isPlainObject({})); // pravda
console.log(isPlainObject([])); // nepravda
console.log(isPlainObject(null)); // nepravda
```

### Globálny import objektu

Na import funkcií ako globálnych metód objektu použite:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Nasledujúca metóda bude potom dostupná globálne:

- `Type.isPlainObject(value)`

## Analýza funkcií

Tu je zdokumentovaná tabuľková analýza výstupu, ktorý vzniká pri dosadení rôznych parametrov do
funkcií: [isPlainObject](../_analysis/isPlainObject.md)

<br>

---

<small>Súbor bol vygenerovaný 6 February 2026 at 12:19:40 (UTC) použitím *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** od *
*[Roland Milto](https://roland-milto.de/)**.</small>