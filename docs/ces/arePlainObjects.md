# arePlainObjects

## Popis

Kontroluje, zda jsou všechny prvky pole prosté objekty, a vrací `true` pouze tehdy, pokud každý prvek splňuje podmínky.

### Případ použití

Ověřte externí nebo netypovaná data (např. parsované JSON, payloady API, odeslání formulářů), abyste se ujistili, že
jste obdrželi neprázdné pole, kde je každá položka prostý objekt, před iterací a čtením vlastností.

> **Poznámka pro uživatele TypeScriptu:**
>
> Použijte `arePlainObjects` k ověření neznámého vstupu předtím, než s ním budete v TypeScriptu zacházet jako s
`Record<string, unknown>[]` (nebo s přísnějším tvarem objektu).

### Výhody

- Zajišťuje, že každý prvek ve vstupním poli je prostý objekt, a vrací `true` pouze tehdy, když všechny položky
  odpovídají.
- Odmítá neplatné vstupy včas (nepole nebo prázdná pole) vrácením `false`.
- Považuje jak objekty vytvořené literálem objektu, tak objekty `Object.create(null)` za platné prosté objekty.

## Použití

### Syntaxe

Funkce:

- `arePlainObjects(array)`

Parametry:

- `array`: Pole, u kterého se má ověřit, že obsahuje prvky typu prostý objekt.

### Lokální import funkce

```ts
import { arePlainObjects } from "@type-check/guards";

const a = arePlainObjects([{ a: 1 }, { b: 2 }]); // pravda
const b = arePlainObjects([{}, Object.create(null)]); // pravda
const c = arePlainObjects([{ a: 1 }, 2 as unknown]); // nepravda
const d = arePlainObjects([] as unknown[]); // nepravda
```

### Globální import objektu

Pro import funkcí jako globálních metod objektu použijte:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Následující metoda bude poté dostupná globálně:

- `Type.arePlainObjects(array)`

## Analýza funkcí

Zde je zdokumentována tabulková analýza výstupu při dosazení různých parametrů do
funkcí: [arePlainObjects](../_analysis/arePlainObjects.md)

<br>

---

<small>Soubor byl vytvořen 30 January 2026 at 16:24:37 (UTC) použitím *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** od *
*[Roland Milto](https://roland-milto.de/)**.</small>