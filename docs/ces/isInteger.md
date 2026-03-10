# isInteger

## Popis

Určuje, zda je daná `value` bezpečné celé číslo.

### Případ použití

Ověřte nedůvěryhodný vstup (např. parametry dotazu, JSON payloady, proměnné prostředí) předtím, než jej použijete jako
celé číslo pro indexy polí, stránkování, čítače nebo databázová ID.

> **Poznámka pro uživatele TypeScriptu:**
>
> Použijte `isInteger` k ověření neznámého vstupu předtím, než s ním budete zacházet jako s číselným celým číslem; vrací
`true` pouze pro hodnoty, kde `typeof value === "number"` a `Number.isSafeInteger(value)`.

### Výhody

- Kontroluje jak typ, tak číselnou bezpečnost: vrací `true` pouze tehdy, když je vstup číslo a bezpečné celé číslo.
- Předchází běžným úskalím při číselné konverzi: řetězce jako "5" správně vracejí `false`.
- Odmítá necelá čísla a nebezpečná celá čísla, takže je vhodná pro ID, čítače a indexování polí.

## Použití

### Syntaxe

Funkce:

- `isInteger(value)`

Parametry:

- `value`: Hodnota, u které se má ověřit, zda je celé číslo.

### Lokální import funkce

```ts
import { isInteger } from "@type-check/guards";

const a = isInteger(5);      // pravda
const b = isInteger(-100);   // pravda
const c = isInteger("5");    // nepravda
const d = isInteger(5.5);    // nepravda
const e = isInteger(null);   // nepravda

```

### Globální import objektu

Pro import funkcí jako globálních metod objektu použijte:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Následující metoda bude poté dostupná globálně:

- `Type.isInteger(value)`

## Analýza funkcí

Zde je zdokumentována tabulková analýza výstupu při dosazení různých parametrů do
funkcí: [isInteger](../_analysis/isInteger.md)

<br>

---

<small>Soubor byl vytvořen 31 January 2026 at 00:49:23 (UTC) použitím *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** od *
*[Roland Milto](https://roland-milto.de/)**.</small>