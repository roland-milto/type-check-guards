# areIndexesFound

## Popis

`areIndexesFound` kontroluje, zda je hodnota neprázdné pole, jehož prvky jsou všechny platné indexy; vrací `true`, pokud
ano, jinak `false`.

### Případ použití

Ověřte data poskytnutá uživatelem nebo externí data (např. parsované JSON), u nichž se očekává, že budou seznamem
indexů, předtím než je použijete pro přístup k polím nebo pro jejich výřez.

> **Poznámka pro uživatele TypeScriptu:**
>
> Použijte `areIndexesFound` k ověření neznámého vstupu předtím, než budete jeho prvky považovat za indexy pole; pro
> prázdná pole a pro pole obsahující hodnoty, které nejsou indexy, vrací `false`.

### Výhody

- Vrací `true` pouze tehdy, když je vstup vyplněné pole a každý prvek je platný index.
- Rychle selže: vrátí `false` hned, jakmile narazí na prvek, který není index.
- Užitečné jako ochrana před použitím hodnot jako pozic nebo offsetů v poli.

## Použití

### Syntaxe

Funkce:

- `areIndexesFound(array)`

Parametry:

- `array`: Pole, u kterého se má ověřit, zda splňuje požadavky na indexy.

### Lokální import funkce

```ts
import { areIndexesFound } from "@type-check/guards";

const a: unknown[] = [0, 1, 2];
const b: unknown[] = [0, "a", 2];
const c: unknown[] = [];

console.log(areIndexesFound(a)); // true
console.log(areIndexesFound(b)); // false
console.log(areIndexesFound(c)); // false

if (areIndexesFound(a)) {
  // Zde je potvrzeno, že `a` je vyplněné pole indexů.
  const firstIndex = a[0];
  console.log(firstIndex);
}
```

### Globální import objektu

Pro import funkcí jako globálních metod objektu použijte:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Následující metoda bude poté dostupná globálně:

- `Type.areIndexesFound(array)`

## Analýza funkcí

Zde je zdokumentována tabulková analýza výstupu při dosazení různých parametrů do
funkcí: [areIndexesFound](../_analysis/areIndexesFound.md)

<br>

---

<small>Soubor byl vytvořen 31 January 2026 at 00:41:16 (UTC) použitím *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** od *
*[Roland Milto](https://roland-milto.de/)**.</small>