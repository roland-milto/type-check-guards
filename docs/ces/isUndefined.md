# isUndefined

## Popis

Kontroluje, zda je daná hodnota `undefined`.

### Případ použití

Použijte `isUndefined` k ošetření volitelných vstupů, detekci chybějících vlastností nebo k rozlišení mezi
„neposkytnuto“ (`undefined`) a „explicitně prázdné“ (`null`).

> **Poznámka pro uživatele TypeScriptu:**
>
> Použijte `isUndefined`, když potřebujete konkrétně detekovat `undefined` (nikoli `null`). Je to bezpečné, protože se
> opírá o `typeof value === "undefined"`.

### Výhody

- Poskytuje jasnou, explicitní kontrolu na `undefined` pomocí `typeof`, čímž se vyhýbá okrajovým případům s
  nedeclarovanými proměnnými.
- Vrací jednoduchý booleovský výsledek (`true`/`false`) vhodný pro guardy, větvení a validační logiku.
- Pomáhá rozlišit `undefined` od jiných „prázdných“ hodnot, jako jsou `null`, `0`, `""` nebo `NaN`.

## Použití

### Syntaxe

Funkce:

- `isUndefined(value)`

Parametry:

- `value`: Hodnota, která má být zkontrolována.

### Lokální import funkce

```ts
import { isUndefined } from "@type-check/guards";

let x: unknown;

if (isUndefined(x)) {
  // x je zde undefined
} else {
  // x zde není undefined
}

const a = isUndefined(undefined); // true
const b = isUndefined(null);      // false

```

### Globální import objektu

Pro import funkcí jako globálních metod objektu použijte:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Následující metoda bude poté dostupná globálně:

- `Type.isUndefined(value)`

## Analýza funkcí

Zde je zdokumentována tabulková analýza výstupu při dosazení různých parametrů do
funkcí: [isUndefined](../_analysis/isUndefined.md)

<br>

---

<small>Soubor byl vytvořen 30 January 2026 at 14:02:09 (UTC) použitím *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** od *
*[Roland Milto](https://roland-milto.de/)**.</small>