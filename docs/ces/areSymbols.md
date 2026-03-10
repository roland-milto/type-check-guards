# areSymbols

## Popis

Kontroluje, zda je vstup vyplněné pole, jehož prvky jsou všechny symboly, a vrací `true` nebo `false`.

### Případ použití

Ověřte, že pole konfigurace (např. seznam unikátních klíčů reprezentovaných jako symboly) je neprázdné pole obsahující
pouze symboly, než jej použijete v API, která vyžadují `symbol[]`.

> **Poznámka pro uživatele TypeScriptu:**
>
> Použijte `areSymbols` k ověření neznámého vstupu předtím, než s ním budete zacházet jako s `symbol[]`; vrací `false`
> pro ne-pole a prázdná pole.

### Výhody

- Vrací `true` pouze tehdy, když je vstup neprázdné pole a každý prvek je symbol.
- Zabraňuje falešně pozitivním výsledkům tím, že odmítá ne-pole a prázdná pole prostřednictvím interní kontroly
  vyplněného pole.
- Užitečné jako runtime type guard pro ověření seznamů obsahujících pouze symboly před dalším zpracováním.

## Použití

### Syntaxe

Funkce:

- `areSymbols(array)`

Parametry:

- `array`: Pole, u kterého se má zkontrolovat, zda obsahuje prvky typu symbol.

### Lokální import funkce

```ts
import { areSymbols } from "@type-check/guards";

const a = [Symbol("a"), Symbol("b")];
const b = [Symbol("a"), "b"] as unknown[];

if (areSymbols(a)) {
  // a je za běhu pole obsahující pouze symboly
  const first = a[0];
  console.log(typeof first); // "symbol"
}

console.log(areSymbols(b)); // false

```

### Globální import objektu

Pro import funkcí jako globálních metod objektu použijte:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Následující metoda bude poté dostupná globálně:

- `Type.areSymbols(array)`

## Analýza funkcí

Zde je zdokumentována tabulková analýza výstupu při dosazení různých parametrů do
funkcí: [areSymbols](../_analysis/areSymbols.md)

<br>

---

<small>Soubor byl vytvořen 30 January 2026 at 14:20:59 (UTC) použitím *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** od *
*[Roland Milto](https://roland-milto.de/)**.</small>