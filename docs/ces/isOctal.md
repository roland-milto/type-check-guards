# isOctal

## Popis

Určuje, zda je hodnota platný řetězec osmičkového literálu (např. `0o755`).

### Případ použití

Ověřte uživatelský vstup nebo konfigurační hodnoty, které musí být vyjádřeny jako řetězec osmičkového literálu (
například režimy oprávnění souborů jako `0o644`), před jejich parsováním nebo převodem.

> **Poznámka pro uživatele TypeScriptu:**
>
> `isOctal` je typová ochrana (`value is string`). Po výsledku `true` TypeScript zúží kontrolovanou proměnnou na
`string`.

### Výhody

- Poskytuje striktní typovou ochranu: vrací `true` pouze tehdy, když je vstup řetězec odpovídající formátu osmičkového
  literálu.
- Odmítá prázdné řetězce a řetězce s úvodními/koncovými bílými znaky (řídicí znaky ASCII/mezera), čímž snižuje riziko
  nechtěných shod.
- Podporuje volitelné znaménko a nerozlišuje velikost písmen u prefixu `0o`/`0O`.
- U neřetězcových vstupů je tolerantní: vrací `false` místo vyhození výjimky.

## Použití

### Syntaxe

Funkce:

- `isOctal(value)`

Parametry:

- `value`: Hodnota, která má být zkontrolována.

### Lokální import funkce

```ts
import { isOctal } from "@type-check/guards";

const a: unknown = "0o123";
const b: unknown = "+0O755";
const c: unknown = "0o128";
const d: unknown = 0o123;

console.log(isOctal(a)); // pravda
console.log(isOctal(b)); // pravda
console.log(isOctal(c)); // nepravda
console.log(isOctal(d)); // nepravda

if (isOctal(a)) {
  // a je zde řetězec
  const normalized = a.toLowerCase();
  console.log(normalized);
}
```

### Globální import objektu

Pro import funkcí jako globálních metod objektu použijte:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Následující metoda bude poté dostupná globálně:

- `Type.isOctal(value)`

## Analýza funkcí

Zde je zdokumentována tabulková analýza výstupu při dosazení různých parametrů do
funkcí: [isOctal](../_analysis/isOctal.md)

<br>

---

<small>Soubor byl vytvořen 30 January 2026 at 14:44:24 (UTC) použitím *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** od *
*[Roland Milto](https://roland-milto.de/)**.</small>