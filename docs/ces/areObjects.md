# areObjects

## Popis

`areObjects` kontroluje, zda poskytnuté vyplněné pole obsahuje pouze objekty.

### Případ použití

Použijte `areObjects`, když obdržíte neznámé pole (např. z parsování JSON nebo z externích API) a potřebujete zajistit,
že není prázdné a že každý prvek je objekt, než začnete iterovat a přistupovat k vlastnostem objektu.

> **Poznámka pro uživatele TypeScriptu:**
>
> Použijte `areObjects` k ověření `unknown[]` před tím, než budete s položkami zacházet jako s objekty; pro prázdná pole
> vrací `false`.

### Výhody

- Vrací `true` pouze tehdy, když je vstup vyplněné pole a každý prvek je objekt.
- Ukončí kontrolu předčasně a vrátí `false`, jakmile je nalezen prvek, který není objekt.
- Pomáhá ověřit neznámý vstup před provedením operací specifických pro objekty.

## Použití

### Syntaxe

Funkce:

- `areObjects(array)`

Parametry:

- `array`: Pole, u kterého se má ověřit, zda obsahuje prvky typu objekt.

### Lokální import funkce

```ts
import { areObjects } from "@type-check/guards";

const value: unknown = [{}, { a: 1 }, new Date()];

if (Array.isArray(value) && areObjects(value)) {
  // value je naplněné pole objektů
  console.log("All items are objects:", value.length);
} else {
  console.log("Not a filled array of objects");
}

```

### Globální import objektu

Pro import funkcí jako globálních metod objektu použijte:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Následující metoda bude poté dostupná globálně:

- `Type.areObjects(array)`

## Analýza funkcí

Zde je zdokumentována tabulková analýza výstupu při dosazení různých parametrů do
funkcí: [areObjects](../_analysis/areObjects.md)

<br>

---

<small>Soubor byl vytvořen 31 January 2026 at 00:08:16 (UTC) použitím *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** od *
*[Roland Milto](https://roland-milto.de/)**.</small>