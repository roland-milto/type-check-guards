# isBigInt

## Popis

`isBigInt` kontroluje, zda je daná hodnota typu `bigint`; vrací `true` pro primitivní BigInt a jinak `false`.

### Případ použití

Validujte a zužujte hodnoty pocházející z netypovaných zdrojů (např. parsování JSON, uživatelský vstup, externí API)
před prováděním výpočtů specifických pro BigInt nebo před jejich uložením do polí určených pouze pro BigInt.

> **Poznámka pro uživatele TypeScriptu:**
>
> Použijte `isBigInt` k zúžení `unknown` na `bigint` před prováděním aritmetiky BigInt (např. `+`, `*`), která vyžaduje
> operandy typu BigInt.

### Výhody

- Poskytuje jednoduchou a spolehlivou kontrolu za běhu pro primitivní typ `bigint`.
- Pomáhá zúžit hodnoty typu `unknown` před prováděním operací určených pouze pro BigInt.
- Zabraňuje falešně pozitivním výsledkům: běžná čísla, řetězce a další typy vracejí `false`.

## Použití

### Syntaxe

Funkce:

- `isBigInt(value)`

Parametry:

- `value`: Hodnota, kterou je třeba zkontrolovat.

### Lokální import funkce

```ts
import { isBigInt } from "@type-check/guards";

const input: unknown = 10n;

if (isBigInt(input)) {
  const doubled = input * 2n;
  console.log(doubled);
} else {
  console.log("Not a bigint");
}

console.log(isBigInt(10n)); // pravda
console.log(isBigInt(10));  // nepravda
console.log(isBigInt("10")); // nepravda

```

### Globální import objektu

Pro import funkcí jako globálních metod objektu použijte:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Následující metoda bude poté dostupná globálně:

- `Type.isBigInt(value)`

## Analýza funkcí

Zde je zdokumentována tabulková analýza výstupu při dosazení různých parametrů do
funkcí: [isBigInt](../_analysis/isBigInt.md)

<br>

---

<small>Soubor byl vytvořen 31 January 2026 at 23:31:22 (UTC) použitím *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** od *
*[Roland Milto](https://roland-milto.de/)**.</small>