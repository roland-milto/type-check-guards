# isIndexFound

## Popis

`isIndexFound` určuje, zda je daná hodnota nezáporné celé číslo, což značí, že byl nalezen index.

### Případ použití

Ověřte, že výsledek vyhledávání představuje použitelný index (celé číslo `>= 0`) před indexováním do pole nebo řetězce,
čímž zabráníte nechtěnému použití `-1` nebo nečíselných hodnot.

> **Poznámka pro uživatele TypeScriptu:**
>
> Použijte `isIndexFound` po operacích jako `indexOf`, `findIndex` nebo vlastních vyhledáváních, kde `-1` (nebo jiné
> neplatné hodnoty) může znamenat „nenalezeno“. Když vrátí `true`, hodnota je číslo a je bezpečné ji použít jako index
> pole/řetězce.

### Výhody

- Poskytuje jednoduchý typový strážce pro zjištění, zda byl index nalezen, kontrolou nezáporného celého čísla.
- Vrací `true` pouze pro platné hodnoty podobné indexu (celá čísla `>= 0`), odmítá záporné hodnoty, necelá čísla a
  nečíselné hodnoty.
- Pomáhá vyhnout se chybám typu off-by-one a chybám se sentinelovou hodnotou při práci s API, která vracejí `-1` pro
  „nenalezeno“.

## Použití

### Syntaxe

Funkce:

- `isIndexFound(value)`

Parametry:

- `value`: Hodnota, u které se kontroluje, zda je nezáporným celým číslem.

### Lokální import funkce

```ts
import { isIndexFound } from "@type-check/guards";

const idx: unknown = "3";

if (isIndexFound(idx)) {
  // idx je zde číslo a je >= 0
  const next = idx + 1;
  console.log(next);
} else {
  console.log("No valid index found");
}

// Typické použití s indexOf
const pos = "hello".indexOf("e");
if (isIndexFound(pos)) {
  console.log("Found at", pos);
}
```

### Globální import objektu

Pro import funkcí jako globálních metod objektu použijte:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Následující metoda bude poté dostupná globálně:

- `Type.isIndexFound(value)`

## Analýza funkcí

Zde je zdokumentována tabulková analýza výstupu při dosazení různých parametrů do
funkcí: [isIndexFound](../_analysis/isIndexFound.md)

<br>

---

<small>Soubor byl vytvořen 31 January 2026 at 00:45:14 (UTC) použitím *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** od *
*[Roland Milto](https://roland-milto.de/)**.</small>