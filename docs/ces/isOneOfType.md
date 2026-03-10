# isOneOfType

## Popis

`isOneOfType` určuje, zda daná `value` odpovídá alespoň jednomu z poskytnutých řetězců typů; vrátí `true`, pokud je
nalezena jakákoli shoda, jinak `false`.

### Případ použití

Validujte volně typovaná nebo externí data (např. parsované JSON, parametry dotazu) tím, že před pokračováním další
logikou povolíte více přijatelných typů za běhu (například `number` nebo `string`).

> **Poznámka pro uživatele TypeScriptu:**
>
> `isOneOfType` použijte, když chcete za běhu ověřit, že hodnota odpovídá některému z několika povolených typů; vrátí
`true`, pokud se shoduje alespoň jeden typ, jinak `false`.

### Výhody

- Kontroluje hodnotu vůči více povoleným typům v jediném volání a při první shodě vrátí `true`.
- Funguje se vstupy typu `unknown`, což je užitečné na hranicích běhu aplikace (např. externí data, uživatelský vstup).
- Jednoduchý booleovský výsledek (`true`/`false`), který se dobře skládá s podmínkovou logikou a předčasnými návraty.

## Použití

### Syntaxe

Funkce:

- `isOneOfType(value, types)`

Parametry:

- `value`: Hodnota, která má být zkontrolována vůči zadaným typům.
- `types`: Pole řetězců typů reprezentujících možné typy hodnoty.

### Lokální import funkce

```ts
import { isOneOfType } from "@type-check/guards";

const input: unknown = JSON.parse('{"count": 3}');

if (isOneOfType(input, ["object"])) {
  // input je za běhu objekt
}

console.log(isOneOfType(3, ["number", "string"])); // true
console.log(isOneOfType("hello", ["number", "boolean"])); // false

```

### Globální import objektu

Pro import funkcí jako globálních metod objektu použijte:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Následující metoda bude poté dostupná globálně:

- `Type.isOneOfType(value, types)`

## Analýza funkcí

Zde je zdokumentována tabulková analýza výstupu při dosazení různých parametrů do
funkcí: [isOneOfType](../_analysis/isOneOfType.md)

<br>

---

<small>Soubor byl vytvořen 31 January 2026 at 23:42:39 (UTC) použitím *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** od *
*[Roland Milto](https://roland-milto.de/)**.</small>