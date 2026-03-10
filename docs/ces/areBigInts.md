# areBigInts

## Popis

`areBigInts` určuje, zda je hodnota neprázdné pole obsahující pouze hodnoty `bigint`.

### Případ použití

Ověřte neznámý vstup (např. parsovaná data podobná JSON, payloady API nebo parametry funkcí typované jako `unknown`),
abyste před zpracováním zajistili, že jde o neprázdné pole hodnot `bigint`; vrací `true` pouze tehdy, když jsou všechny
prvky `bigint`, jinak `false`.

> **Poznámka pro uživatele TypeScriptu:**
>
> Použijte `areBigInts` jako runtime guard před prováděním operací pouze pro `bigint` (např. aritmetika, porovnávání)
> nad neznámým vstupem.

### Výhody

- Zajišťuje, že každý prvek je `bigint`, a vrací `true` pouze tehdy, když odpovídá celé pole.
- Záměrně odmítá hodnoty, které nejsou polem, a prázdná pole (přes `isFilledArray`), čímž brání nechtěnému přijetí
  neplatných vstupů.
- Rychlé selhání: vrátí `false` hned, jakmile je nalezen prvek, který není `bigint`.

## Použití

### Syntaxe

Funkce:

- `areBigInts(array)`

Parametry:

- `array`: Hodnota ke kontrole.

### Lokální import funkce

```ts
import { areBigInts } from "@type-check/guards";

const a: unknown = [10n, 20n];
const b: unknown = [10n, 20];
const c: unknown = [];

console.log(areBigInts(a)); // pravda
console.log(areBigInts(b)); // nepravda
console.log(areBigInts(c)); // nepravda
```

### Globální import objektu

Pro import funkcí jako globálních metod objektu použijte:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Následující metoda bude poté dostupná globálně:

- `Type.areBigInts(array)`

## Analýza funkcí

Zde je zdokumentována tabulková analýza výstupu při dosazení různých parametrů do
funkcí: [areBigInts](../_analysis/areBigInts.md)

<br>

---

<small>Soubor byl vytvořen 31 January 2026 at 23:25:24 (UTC) použitím *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** od *
*[Roland Milto](https://roland-milto.de/)**.</small>