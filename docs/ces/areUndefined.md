# areUndefined

## Popis

`areUndefined` kontroluje, zda je každý prvek v poskytnutém poli `undefined`.

### Případ použití

Ověřte, že seznam volitelných výsledků neobsahuje žádné skutečné hodnoty (pouze `undefined`), např. po mapování
vyhledávání, kde jsou chybějící položky reprezentovány jako `undefined`, a chcete potvrdit, že všechna vyhledávání
selhala.

> **Poznámka pro uživatele TypeScriptu:**
>
> `areUndefined` použijte, když potřebujete ověřit, že `unknown[]` obsahuje pouze hodnoty `undefined`; vrací `false` pro
> prázdná pole a pro vstupy, které nejsou polem / jsou neplatné, kvůli interní kontrole `isFilledArray`.

### Výhody

- Vrací `false` pro ne-pole a prázdná pole tím, že vyžaduje naplněné pole pomocí `isFilledArray`.
- Zajišťuje, že každý prvek je `undefined`, nejen některé, čímž je záměr explicitní.
- Užitečné jako predikát ve stylu guard při validaci neznámých vstupních kolekcí.

## Použití

### Syntaxe

Funkce:

- `areUndefined(array)`

Parametry:

- `array`: Pole, u kterého se kontrolují prvky `undefined`.

### Lokální import funkce

```ts
import { areUndefined } from "@type-check/guards";

const a: unknown[] = [undefined, undefined];
const b: unknown[] = [undefined, null];
const c: unknown[] = [undefined, 0, undefined];

const r1 = areUndefined(a); // true
const r2 = areUndefined(b); // false
const r3 = areUndefined(c); // false

// Poznámka: pro prázdná pole vrací false
const r4 = areUndefined([]); // false
```

### Globální import objektu

Pro import funkcí jako globálních metod objektu použijte:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Následující metoda bude poté dostupná globálně:

- `Type.areUndefined(array)`

## Analýza funkcí

Zde je zdokumentována tabulková analýza výstupu při dosazení různých parametrů do
funkcí: [areUndefined](../_analysis/areUndefined.md)

<br>

---

<small>Soubor byl vytvořen 30 January 2026 at 13:55:05 (UTC) použitím *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** od *
*[Roland Milto](https://roland-milto.de/)**.</small>