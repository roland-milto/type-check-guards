# areOneOfType

## Popis

`areOneOfType` kontroluje, či sú všetky prvky v neprázdnom poli jedného zo zadaných runtime typov.

### Prípad použitia

Validujte prichádzajúce dáta (napr. parsované JSON), kde pole musí byť neprázdne a jeho položky sú obmedzené na známu
množinu primitívnych typov; vráťte `false`, keď je pole prázdne alebo obsahuje akýkoľvek nepovolený typ.

> **Poznámka pre používateľov TypeScriptu:**
>
> Táto funkcia vracia boolean a v čase kompilácie nezúžuje typy prvkov poľa; používajte ju ako krok runtime validácie
> pred ďalším spracovaním.

### Výhody

- Zabezpečuje, že každý prvok v poli zodpovedá aspoň jednému povolenému runtime typu, pričom vráti `true` iba vtedy, keď
  prejde celé pole.
- Včas odmieta neplatné vstupy: vráti `false`, keď je `array` alebo `types` prázdne alebo nie je vyplneným poľom.
- Užitočné na validáciu kolekcií so zmiešanými typmi (napr. čísla a reťazce) jedným volaním `areOneOfType`.

## Použitie

### Syntax

Funkcia:

- `areOneOfType(array, types)`

Parametre:

- `array`: Pole prvkov, ktoré sa majú overiť voči poskytnutým typom.
- `types`: Pole reťazcov reprezentujúcich dátové typy, voči ktorým sa má kontrolovať.

### Lokálny import funkcie

```ts
import { areOneOfType } from "@type-check/guards";

const values1: unknown[] = [1, "a", true];
const ok1 = areOneOfType(values1, ["number", "string", "boolean"]);

const values2: unknown[] = [1, "a", {}];
const ok2 = areOneOfType(values2, ["number", "string"]);

const values3: unknown[] = [];
const ok3 = areOneOfType(values3, ["number"]);

console.log({ ok1, ok2, ok3 });

```

### Globálny import objektu

Na import funkcií ako globálnych metód objektu použite:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Nasledujúca metóda bude potom dostupná globálne:

- `Type.areOneOfType(array, types)`

## Analýza funkcií

Tu je zdokumentovaná tabuľková analýza výstupu, ktorý vzniká pri dosadení rôznych parametrov do
funkcií: [areOneOfType](../_analysis/areOneOfType.md)

<br>

---

<small>Súbor bol vygenerovaný 31 January 2026 at 23:38:32 (UTC) použitím *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** od *
*[Roland Milto](https://roland-milto.de/)**.</small>