# areNullOrUndefined

## Popis

Kontroluje, zda jsou všechny prvky v daném poli `null` nebo `undefined`.

### Případ použití

Ověřte, že seznam volitelných polí neobsahuje žádné skutečné hodnoty (pouze `null`/`undefined`) předtím, než se
rozhodnete přeskočit zpracování nebo zobrazit stav „nebyly poskytnuty žádné hodnoty“.

> **Poznámka pro uživatele TypeScriptu:**
>
> Použijte `areNullOrUndefined`, když potřebujete ověřit, že pole obsahuje pouze chybějící hodnoty (`null`/`undefined`).
> Všimněte si, že pro prázdné pole vrací `false`.

### Výhody

- Vrací `true` pouze tehdy, když je každý prvek `null` nebo `undefined`.
- Vrací `false` pro prázdná pole, což pomáhá rozlišit „žádná data“ od „všechny chybějící hodnoty“.
- Funguje s `unknown[]`, takže je bezpečné ji použít před zúžením typů.

## Použití

### Syntaxe

Funkce:

- `areNullOrUndefined(array)`

Parametry:

- `array`: Pole, které se má zkontrolovat.

### Lokální import funkce

```ts
import { areNullOrUndefined } from "@type-check/guards";

const allMissing = areNullOrUndefined([null, undefined, null]);
// allMissing === true

const containsValue = areNullOrUndefined([null, "value", undefined]);
// containsValue === false

const empty = areNullOrUndefined([]);
// empty === false
```

### Globální import objektu

Pro import funkcí jako globálních metod objektu použijte:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Následující metoda bude poté dostupná globálně:

- `Type.areNullOrUndefined(array)`

## Analýza funkcí

Zde je zdokumentována tabulková analýza výstupu při dosazení různých parametrů do
funkcí: [areNullOrUndefined](../_analysis/areNullOrUndefined.md)

<br>

---

<small>Soubor byl vytvořen 31 January 2026 at 00:29:16 (UTC) použitím *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** od *
*[Roland Milto](https://roland-milto.de/)**.</small>