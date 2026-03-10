# areSymbols

## Popis

Skontroluje, či je vstup vyplnené pole, ktorého prvky sú všetky symboly, a vráti `true` alebo `false`.

### Prípad použitia

Overte, že konfiguračné pole (napr. zoznam jedinečných kľúčov reprezentovaných symbolmi) je neprázdne pole obsahujúce
iba symboly predtým, než ho použijete v API, ktoré vyžadujú `symbol[]`.

> **Poznámka pre používateľov TypeScriptu:**
>
> Použite `areSymbols` na overenie neznámeho vstupu predtým, než s ním budete narábať ako s `symbol[]`; pre nepolia a
> prázdne polia vracia `false`.

### Výhody

- Vráti `true` iba vtedy, keď je vstup neprázdne pole a každý prvok je symbol.
- Zabraňuje falošne pozitívnym výsledkom tým, že odmieta nepolia a prázdne polia prostredníctvom internej kontroly
  vyplneného poľa.
- Užitočné ako runtime typový strážca na overenie zoznamov obsahujúcich iba symboly pred ďalším spracovaním.

## Použitie

### Syntax

Funkcia:

- `areSymbols(array)`

Parametre:

- `array`: Pole, ktoré sa má skontrolovať, či obsahuje prvky typu symbol.

### Lokálny import funkcie

```ts
import { areSymbols } from "@type-check/guards";

const a = [Symbol("a"), Symbol("b")];
const b = [Symbol("a"), "b"] as unknown[];

if (areSymbols(a)) {
  // a je za behu pole obsahujúce iba symboly
  const first = a[0];
  console.log(typeof first); // "symbol"
}

console.log(areSymbols(b)); // false
```

### Globálny import objektu

Na import funkcií ako globálnych metód objektu použite:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Nasledujúca metóda bude potom dostupná globálne:

- `Type.areSymbols(array)`

## Analýza funkcií

Tu je zdokumentovaná tabuľková analýza výstupu, ktorý vzniká pri dosadení rôznych parametrov do
funkcií: [areSymbols](../_analysis/areSymbols.md)

<br>

---

<small>Súbor bol vygenerovaný 30 January 2026 at 14:23:43 (UTC) použitím *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** od *
*[Roland Milto](https://roland-milto.de/)**.</small>