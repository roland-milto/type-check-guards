# areNull

## Popis

Kontroluje, zda jsou všechny prvky v zadaném `array` rovny `null`.

### Případ použití

Ověřte, že sloupec datové sady, seznam polí API nebo zástupné pole obsahuje pouze hodnoty `null` před použitím logiky,
která předpokládá, že všechny položky jsou záměrně prázdné.

> **Poznámka pro uživatele TypeScriptu:**
>
> Použijte `areNull`, když potřebujete přísnou kontrolu, že vstup je neprázdné pole a každý prvek je přesně `null` (ne
`undefined`, ne nepravdivé hodnoty).

### Výhody

- Vrací `true` pouze tehdy, když je každý prvek `null`, což z něj dělá přísnou kontrolu typu „vše odpovídá“.
- Odmítá ne-pole a prázdná pole tím, že vrací `false`, čímž zabraňuje nechtěným pravdivým výsledkům při neplatném
  vstupu.
- Dobře funguje jako kontrola předpokladu před zpracováním dat, která musí být celá `null`.

## Použití

### Syntaxe

Funkce:

- `areNull(array)`

Parametry:

- `array`: Vstupní pole, u kterého se kontrolují prvky `null`.

### Lokální import funkce

```ts
import { areNull } from "@type-check/guards";

const a = [null, null];
const b = [null, 1, null];

const allNullA = areNull(a); // pravda
const allNullB = areNull(b); // nepravda

const notAnArray = areNull(123 as unknown as unknown[]); // nepravda
const empty = areNull([]); // nepravda

```

### Globální import objektu

Pro import funkcí jako globálních metod objektu použijte:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Následující metoda bude poté dostupná globálně:

- `Type.areNull(array)`

## Analýza funkcí

Zde je zdokumentována tabulková analýza výstupu při dosazení různých parametrů do
funkcí: [areNull](../_analysis/areNull.md)

<br>

---

<small>Soubor byl vytvořen 31 January 2026 at 15:42:43 (UTC) použitím *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** od *
*[Roland Milto](https://roland-milto.de/)**.</small>