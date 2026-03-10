# isNaN

## Popis

Určuje, zda je poskytnutá `value` `NaN` typu `number`, aniž by převáděla řetězce.

### Případ použití

Validujte nedůvěryhodný nebo volně typovaný vstup (např. payloady API, hodnoty formulářů, parsované JSON) pro detekci
speciální hodnoty `NaN` a její explicitní zpracování, přičemž nečíselné vstupy považujte za ne-`NaN`.

> **Poznámka pro uživatele TypeScriptu:**
>
> Použijte `isNaN`, když potřebujete detekovat speciální číselnou hodnotu `NaN` a zároveň zajistit, že vstup je skutečně
`number` (bez převodu řetězce na číslo).

### Výhody

- Kontroluje, zda je hodnota `NaN`, aniž by převáděla nečíselné hodnoty (např. řetězce) na čísla.
- Vrací `true` pouze pro hodnoty, které jsou zároveň typu `number` a `NaN`.
- Je bezpečná pro vstupy typu `unknown` a vyhýbá se falešně pozitivním výsledkům z implicitních konverzí.

## Použití

### Syntaxe

Funkce:

- `isNaN(value)`

Parametry:

- `value`: Hodnota, u které se má ověřit, zda je `NaN` typu `number`.

### Lokální import funkce

```ts
import { isNaN } from "@type-check/guards";

const a: unknown = NaN;
const b: unknown = "NaN";
const c: unknown = 123;

console.log(isNaN(a)); // pravda
console.log(isNaN(b)); // nepravda
console.log(isNaN(c)); // nepravda

if (isNaN(a)) {
  // a je číslo a konkrétně NaN
}
```

### Globální import objektu

Pro import funkcí jako globálních metod objektu použijte:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Následující metoda bude poté dostupná globálně:

- `Type.isNaN(value)`

## Analýza funkcí

Zde je zdokumentována tabulková analýza výstupu při dosazení různých parametrů do funkcí: [isNaN](../_analysis/isNaN.md)

<br>

---

<small>Soubor byl vytvořen 30 January 2026 at 15:45:26 (UTC) použitím *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** od *
*[Roland Milto](https://roland-milto.de/)**.</small>