# isObject

## Popis

Určuje, zda je daná hodnota `value` objekt (`object`) (s vyloučením `null`).

### Případ použití

Použijte `isObject` k validaci neznámých vstupů (např. parsované JSON, odpovědi API, payloady událostí) před přístupem k
vlastnostem, aby bylo zajištěno, že hodnota je objekt a nikoli `null`.

> **Poznámka pro uživatele TypeScriptu:**
>
> `isObject` je runtime guard, který vrací boolean; nezúžuje typ na konkrétní tvar objektu. Když potřebujete silnější
> typování, kombinujte jej s dalšími kontrolami (např. existencí vlastností).

### Výhody

- Vrací `true` pouze pro nenulové hodnoty, jejichž `typeof` je `"object"`.
- Zabraňuje běžné chybě v JavaScriptu, kdy by se `null` jinak považovalo za objekt.
- Funguje pro prosté objekty i instance vestavěných objektů (např. `Date`, `RegExp`).
- Jednoduchá a rychlá kontrola za běhu vhodná pro defenzivní programování a validaci vstupů.

## Použití

### Syntaxe

Funkce:

- `isObject(value)`

Parametry:

- `value`: Hodnota, u které se má ověřit, zda je `object`.

### Lokální import funkce

```ts
import { isObject } from "@type-check/guards";

const input: unknown = { a: 1 };

if (isObject(input)) {
  // input je za běhu neprázdný objekt (není null)
  console.log("Object detected");
} else {
  console.log("Not an object");
}

```

### Globální import objektu

Pro import funkcí jako globálních metod objektu použijte:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Následující metoda bude poté dostupná globálně:

- `Type.isObject(value)`

## Analýza funkcí

Zde je zdokumentována tabulková analýza výstupu při dosazení různých parametrů do
funkcí: [isObject](../_analysis/isObject.md)

<br>

---

<small>Soubor byl vytvořen 31 January 2026 at 00:17:54 (UTC) použitím *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** od *
*[Roland Milto](https://roland-milto.de/)**.</small>