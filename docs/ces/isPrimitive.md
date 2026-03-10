# isPrimitive

## Popis

`isPrimitive` určuje, zda je daná hodnota primitivum (`null`, `undefined`, `boolean`, `number`, `string`, `bigint`,
`symbol`).

### Případ použití

Validujte vstupy za běhu (např. pole payloadu API, konfigurační hodnoty nebo data poskytnutá uživatelem), abyste
zajistili, že hodnota je primitivum před serializací, logováním nebo použitím operací určených pouze pro primitiva.

> **Poznámka pro uživatele TypeScriptu:**
>
> Použijte `isPrimitive` jako guard pro vstupy typu `unknown` předtím, než s nimi budete zacházet jako s objekty nebo
> funkcemi; vrací `true` pro primitiva a `false` pro objekty a funkce.

### Výhody

- Rychlá kontrola bez alokací, zda je hodnota primitivum v JavaScriptu.
- Správně považuje `null` za primitivum (i když `typeof null` je `"object"`).
- Pomáhá zúžit hodnoty typu `unknown` před prováděním operací určených pouze pro objekty.

## Použití

### Syntaxe

Funkce:

- `isPrimitive(value)`

Parametry:

- `value`: Hodnota, u které se má ověřit, zda je primitivního typu.

### Lokální import funkce

```ts
import { isPrimitive } from "@type-check/guards";

function format(value: unknown): string {
  if (isPrimitive(value)) {
    return String(value);
  }
  return "[non-primitive]";
}

console.log(isPrimitive(null));
console.log(isPrimitive(42));
console.log(isPrimitive("hello"));
console.log(isPrimitive({}));
console.log(isPrimitive(() => {}));
```

### Globální import objektu

Pro import funkcí jako globálních metod objektu použijte:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Následující metoda bude poté dostupná globálně:

- `Type.isPrimitive(value)`

## Analýza funkcí

Zde je zdokumentována tabulková analýza výstupu při dosazení různých parametrů do
funkcí: [isPrimitive](../_analysis/isPrimitive.md)

<br>

---

<small>Soubor byl vytvořen 30 January 2026 at 23:55:42 (UTC) použitím *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** od *
*[Roland Milto](https://roland-milto.de/)**.</small>