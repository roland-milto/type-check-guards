# areFilledArrays

## Popis

`areFilledArrays` kontroluje, zda dvourozměrné pole není prázdné a zda všechna jeho podpole nejsou prázdná.

### Případ použití

`areFilledArrays` použijte k ověření tabulkového nebo maticového vstupu (např. řádky CSV, data mřížky, seskupené
výsledky), abyste mohli bezpečně předpokládat, že existuje alespoň jedno podpole a žádné z podpolí není prázdné.

> **Poznámka pro uživatele TypeScriptu:**
>
> `areFilledArrays` použijte, když potřebujete zajistit, že 2D pole má alespoň jeden řádek a každý řádek má alespoň
> jeden prvek před iterací nebo indexováním.

### Výhody

- Ověřuje, že vnější pole není prázdné a že každé vnitřní pole také není prázdné; vrací `true` pouze tehdy, když jsou
  splněny obě podmínky.
- Funguje s libovolnými typy prvků uvnitř podpolí (např. čísla, řetězce, objekty, vnořená pole), protože kontroluje
  pouze stav „naplněnosti“ pole, nikoli obsah prvků.
- Poskytuje jednoduchý booleovský výsledek (`true`/`false`) vhodný jako ochranná podmínka před zpracováním
  dvourozměrných dat.

## Použití

### Syntaxe

Funkce:

- `areFilledArrays(array)`

Parametry:

- `array`: Dvourozměrné pole, které se má zkontrolovat.

### Lokální import funkce

```ts
import { areFilledArrays } from "@type-check/guards";

const a: unknown[][] = [[1]];
const b: unknown[][] = [["a", "b"], [1, 2, 3]];
const c: unknown[][] = [[{}, []], ["string"]];
const d: unknown[][] = [[]];
const e: unknown[][] = [[], [1, 2, 3]];
const f: unknown[][] = [];

console.log(areFilledArrays(a)); // pravda
console.log(areFilledArrays(b)); // pravda
console.log(areFilledArrays(c)); // pravda
console.log(areFilledArrays(d)); // nepravda
console.log(areFilledArrays(e)); // nepravda
console.log(areFilledArrays(f)); // nepravda

```

### Globální import objektu

Pro import funkcí jako globálních metod objektu použijte:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Následující metoda bude poté dostupná globálně:

- `Type.areFilledArrays(array)`

## Analýza funkcí

Zde je zdokumentována tabulková analýza výstupu při dosazení různých parametrů do
funkcí: [areFilledArrays](../_analysis/areFilledArrays.md)

<br>

---

<small>Soubor byl vytvořen 6 February 2026 at 11:55:53 (UTC) použitím *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** od *
*[Roland Milto](https://roland-milto.de/)**.</small>