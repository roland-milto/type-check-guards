# isOfType

## Popis

Určuje, zda daná `value` odpovídá zadanému řetězci typu; pro primitivní typy používá `typeof` a pro složité typy záložní
mechanismus.

### Případ použití

Validujte a zužujte vstupy typu `unknown` (např. odpovědi API, uživatelský vstup, parsované JSON) tím, že před
provedením operací specifických pro typ ověříte, zda má hodnota očekávaný řetězec typu.

> **Poznámka pro uživatele TypeScriptu:**
>
> Použijte `isOfType` k větvení podle typů za běhu při práci s hodnotami `unknown`; vrací `true`/`false` a s `null` a
`undefined` zachází explicitně.

### Výhody

- Kontroluje primitivní typy pomocí přímého `typeof` pro rychlost a přehlednost.
- Správně zpracovává `null` a `undefined`, které samotné `typeof` nedokáže zamýšleným způsobem rozlišit.
- Podporuje složité nebo vlastní řetězce typů pomocí záložního porovnání přes `getTypeOf`.
- Vrací jednoduchý booleovský výsledek (`true`/`false`) vhodný pro guardy a větvení.

## Použití

### Syntaxe

Funkce:

- `isOfType(value, type)`

Parametry:

- `value`: Hodnota, kterou se má otestovat vůči `type`.
- `type`: Řetězcová reprezentace typu, vůči kterému se má kontrolovat.

### Lokální import funkce

```ts
import { isOfType } from "@type-check/guards";

const input: unknown = Math.random() > 0.5 ? 123 : "hello";

if (isOfType(input, "number")) {
  // input je zde číslo
  const doubled = input * 2;
  console.log(doubled);
} else if (isOfType(input, "string")) {
  // input je zde řetězec
  console.log(input.toUpperCase());
}

console.log(isOfType(null, "null"));
console.log(isOfType(undefined, "undefined"));
```

### Globální import objektu

Pro import funkcí jako globálních metod objektu použijte:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Následující metoda bude poté dostupná globálně:

- `Type.isOfType(value, type)`

## Analýza funkcí

Zde je zdokumentována tabulková analýza výstupu při dosazení různých parametrů do
funkcí: [isOfType](../_analysis/isOfType.md)

<br>

---

<small>Soubor byl vytvořen 30 January 2026 at 16:58:55 (UTC) použitím *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** od *
*[Roland Milto](https://roland-milto.de/)**.</small>