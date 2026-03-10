# isInteger

## Popis

Určuje, či je daná hodnota `value` bezpečné celé číslo.

### Prípad použitia

Overte nedôveryhodný vstup (napr. parametre dotazu, JSON payloady, premenné prostredia) predtým, než ho použijete ako
celé číslo pre indexy polí, stránkovanie, počítadlá alebo databázové ID.

> **Poznámka pre používateľov TypeScriptu:**
>
> Použite `isInteger` na overenie neznámeho vstupu predtým, než s ním budete pracovať ako s číselným celým číslom; vráti
`true` iba pre hodnoty, pri ktorých `typeof value === "number"` a `Number.isSafeInteger(value)`.

### Výhody

- Kontroluje typ aj číselnú bezpečnosť: vráti `true` iba vtedy, keď je vstup číslo a bezpečné celé číslo.
- Predchádza bežným nástrahám pri číselnej konverzii: reťazce ako "5" správne vrátia `false`.
- Odmieta necelé čísla a nebezpečné celé čísla, vďaka čomu je vhodná pre ID, počítadlá a indexovanie polí.

## Použitie

### Syntax

Funkcia:

- `isInteger(value)`

Parametre:

- `value`: Hodnota, pri ktorej sa má overiť, či je celé číslo.

### Lokálny import funkcie

```ts
import { isInteger } from "@type-check/guards";

const a = isInteger(5);      // pravda
const b = isInteger(-100);   // pravda
const c = isInteger("5");    // nepravda
const d = isInteger(5.5);    // nepravda
const e = isInteger(null);   // nepravda

```

### Globálny import objektu

Na import funkcií ako globálnych metód objektu použite:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Nasledujúca metóda bude potom dostupná globálne:

- `Type.isInteger(value)`

## Analýza funkcií

Tu je zdokumentovaná tabuľková analýza výstupu, ktorý vzniká pri dosadení rôznych parametrov do
funkcií: [isInteger](../_analysis/isInteger.md)

<br>

---

<small>Súbor bol vygenerovaný 31 January 2026 at 00:51:18 (UTC) použitím *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** od *
*[Roland Milto](https://roland-milto.de/)**.</small>