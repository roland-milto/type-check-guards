# isBuffer

## Popis

Kontroluje, zda je hodnota Node.js `Buffer`, a vrací `true` nebo `false`.

### Případ použití

Validujte vstupy za běhu (např. payloady API, data souborů nebo buffery zpráv), abyste před jejich zpracováním ověřili,
že hodnota je `Buffer`, a spolehlivě získali `false` při běhu mimo Node.js, kde `Buffer` nemusí existovat.

> **Poznámka pro uživatele TypeScriptu:**
>
> Použijte `isBuffer` ke zpřesnění hodnot typu `unknown` na `Buffer` před voláním metod specifických pro Buffer.

### Výhody

- Bezpečně detekuje instance Node.js `Buffer` pomocí `Buffer.isBuffer`.
- Vrací `false` v prostředích, kde `Buffer` není k dispozici, čímž se vyhne chybám za běhu.
- Funguje se vstupem typu `unknown`, takže je vhodný pro validaci za běhu a zpřesnění typu.

## Použití

### Syntaxe

Funkce:

- `isBuffer(value)`

Parametry:

- `value`: Hodnota, která má být otestována.

### Lokální import funkce

```ts
import { isBuffer } from "@type-check/guards";

const a: unknown = Buffer.from("hello");
const b: unknown = "hello";

console.log(isBuffer(a)); // true
console.log(isBuffer(b)); // false

if (isBuffer(a)) {
  // a je zde Buffer
  console.log(a.toString("utf8"));
}
```

### Globální import objektu

Pro import funkcí jako globálních metod objektu použijte:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Následující metoda bude poté dostupná globálně:

- `Type.isBuffer(value)`

## Analýza funkcí

Zde je zdokumentována tabulková analýza výstupu při dosazení různých parametrů do
funkcí: [isBuffer](../_analysis/isBuffer.md)

<br>

---

<small>Soubor byl vytvořen 31 January 2026 at 16:31:03 (UTC) použitím *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** od *
*[Roland Milto](https://roland-milto.de/)**.</small>