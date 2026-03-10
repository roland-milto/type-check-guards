# areStrings

## Popis

`areStrings` kontroluje, zda je pole neprázdné a všechny jeho prvky jsou řetězce; `true` vrací pouze v tomto případě.

### Případ použití

Ověřte externí nebo uživatelem poskytnutá data (např. parametry dotazu, JSON payloady, pole CSV), abyste před
zpracováním měli jistotu, že máte neprázdný seznam řetězců.

> **Poznámka pro uživatele TypeScriptu:**
>
> Použijte `areStrings` k ověření neznámých polí před aplikací logiky pouze pro řetězce; pro prázdná pole vrací `false`.

### Výhody

- Zajišťuje, že každý prvek je řetězec, a odmítá pole se smíšenými typy tím, že vrací `false`.
- Odmítá prázdná pole, takže `true` znamená pouze neprázdný seznam řetězců.
- Užitečné jako rychlá běhová kontrola před provedením operací pouze pro řetězce (např. `trim`, `toLowerCase`).

## Použití

### Syntaxe

Funkce:

- `areStrings(value)`

Parametry:

- `value`: Expected type `string[]`.

### Lokální import funkce

```ts
import { areStrings } from "@type-check/guards";

const input: unknown = ["hello", "world"];

if (Array.isArray(input) && areStrings(input)) {
  // input je za běhu neprázdné string[]
  const upper = input.map((s) => s.toUpperCase());
  console.log(upper);
} else {
  console.log("Not a non-empty array of strings");
}

```

### Globální import objektu

Pro import funkcí jako globálních metod objektu použijte:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Následující metoda bude poté dostupná globálně:

- `Type.areStrings(value)`

## Analýza funkcí

Zde je zdokumentována tabulková analýza výstupu při dosazení různých parametrů do
funkcí: [areStrings](../_analysis/areStrings.md)

<br>

---

<small>Soubor byl vytvořen 30 January 2026 at 13:17:36 (UTC) použitím *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** od *
*[Roland Milto](https://roland-milto.de/)**.</small>