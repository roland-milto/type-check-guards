# isNullOrUndefined

## Popis

Kontroluje, zda je daná hodnota `null` nebo `undefined`.

### Případ použití

Použijte `isNullOrUndefined`, když potřebujete považovat jak `null`, tak `undefined` za „žádnou hodnotu“, například při
validaci volitelných vstupů, normalizaci payloadů API nebo ochraně cest kódu před dereferencováním potenciálně chybějící
hodnoty.

> **Poznámka pro uživatele TypeScriptu:**
>
> Použijte `isNullOrUndefined` jako guard proti chybějícím hodnotám před přístupem k vlastnostem nebo voláním metod;
> vrací `true` pouze pro `null` a `undefined`.

### Výhody

- Poskytuje jasný, znovupoužitelný guard pro detekci `null` a `undefined` na jednom místě.
- Vrací jednoduchou booleovskou hodnotu (`true`/`false`), kterou lze snadno skládat v podmínkách a validacích.
- Pomáhá předcházet běžným chybám za běhu tím, že kontroluje chybějící hodnoty před přístupem k vlastnostem nebo voláním
  metod.

## Použití

### Syntaxe

Funkce:

- `isNullOrUndefined(value)`

Parametry:

- `value`: Hodnota, která má být zkontrolována na `null` nebo `undefined`.

### Lokální import funkce

```ts
import { isNullOrUndefined } from "@type-check/guards";

const a: unknown = null;
const b: unknown = undefined;
const c: unknown = 0;

if (isNullOrUndefined(a)) {
  // zpracovat chybějící hodnotu
}

console.log(isNullOrUndefined(b)); // pravda
console.log(isNullOrUndefined(c)); // nepravda

```

### Globální import objektu

Pro import funkcí jako globálních metod objektu použijte:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Následující metoda bude poté dostupná globálně:

- `Type.isNullOrUndefined(value)`

## Analýza funkcí

Zde je zdokumentována tabulková analýza výstupu při dosazení různých parametrů do
funkcí: [isNullOrUndefined](../_analysis/isNullOrUndefined.md)

<br>

---

<small>Soubor byl vytvořen 31 January 2026 at 00:33:12 (UTC) použitím *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** od *
*[Roland Milto](https://roland-milto.de/)**.</small>