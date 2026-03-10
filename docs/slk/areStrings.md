# areStrings

## Popis

`areStrings` kontroluje, či je pole neprázdne a či sú všetky jeho prvky reťazce; `true` vráti iba v takom prípade.

### Prípad použitia

Overte externé alebo používateľom poskytnuté údaje (napr. parametre dotazu, JSON payloady, polia CSV), aby ste sa
uistili, že máte neprázdny zoznam reťazcov pred spracovaním.

> **Poznámka pre používateľov TypeScriptu:**
>
> Použite `areStrings` na overenie neznámych polí pred aplikovaním logiky určenej len pre reťazce; pre prázdne polia
> vracia `false`.

### Výhody

- Zabezpečuje, že každý prvok je reťazec, a odmieta polia so zmiešanými typmi tým, že vráti `false`.
- Odmieta prázdne polia, takže `true` znamená iba neprázdny zoznam reťazcov.
- Užitočné ako rýchla runtime kontrola pred vykonaním operácií určených len pre reťazce (napr. `trim`, `toLowerCase`).

## Použitie

### Syntax

Funkcia:

- `areStrings(value)`

Parametre:

- `value`: Expected type `string[]`.

### Lokálny import funkcie

```ts
import { areStrings } from "@type-check/guards";

const input: unknown = ["hello", "world"];

if (Array.isArray(input) && areStrings(input)) {
  // input je za behu programu neprázdne string[]
  const upper = input.map((s) => s.toUpperCase());
  console.log(upper);
} else {
  console.log("Not a non-empty array of strings");
}

```

### Globálny import objektu

Na import funkcií ako globálnych metód objektu použite:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Nasledujúca metóda bude potom dostupná globálne:

- `Type.areStrings(value)`

## Analýza funkcií

Tu je zdokumentovaná tabuľková analýza výstupu, ktorý vzniká pri dosadení rôznych parametrov do
funkcií: [areStrings](../_analysis/areStrings.md)

<br>

---

<small>Súbor bol vygenerovaný 30 January 2026 at 13:20:19 (UTC) použitím *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** od *
*[Roland Milto](https://roland-milto.de/)**.</small>