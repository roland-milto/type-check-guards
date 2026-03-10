# areErrors

## Popis

Kontroluje, či pole nie je prázdne a obsahuje iba objekty `Error`, pričom vracia `true` alebo `false`.

### Prípad použitia

Overiť, že za behu poskytnuté `unknown[]` (napr. agregované zlyhania, výsledky validácie alebo deserializované údaje) je
neprázdny zoznam objektov `Error` pred iterovaním, logovaním alebo opätovným vyhodením.

> **Poznámka pre používateľov TypeScriptu:**
>
> `areErrors` vráti `true` iba pre naplnené pole, kde je každá položka `Error`; vráti `false` pre prázdne pole alebo ak
> niektorý prvok nie je `Error`.

### Výhody

- Zabezpečuje, že každý prvok je inštancia `Error`, čo umožňuje bezpečné spracovanie chýb a logovanie.
- Odmieta prázdne polia, čím zabraňuje tomu, aby sa náhodné stavy „žiadne chyby“ považovali za platné zoznamy chýb.
- Funguje dobre ako runtime guard pri práci so vstupmi typu `unknown[]` (napr. z API alebo z blokov `catch`).

## Použitie

### Syntax

Funkcia:

- `areErrors(array)`

Parametre:

- `array`: Pole, ktoré sa má skontrolovať na objekty `Error`.

### Lokálny import funkcie

```ts
import { areErrors } from "@type-check/guards";

const value: unknown = [new Error("error1"), new TypeError("error2")];

if (Array.isArray(value) && areErrors(value)) {
  // value je neprázdne pole objektov Error
  for (const err of value) {
    console.error(err.name, err.message);
  }
} else {
  console.log("Not a non-empty Error[]");
}

```

### Globálny import objektu

Na import funkcií ako globálnych metód objektu použite:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Nasledujúca metóda bude potom dostupná globálne:

- `Type.areErrors(array)`

## Analýza funkcií

Tu je zdokumentovaná tabuľková analýza výstupu, ktorý vzniká pri dosadení rôznych parametrov do
funkcií: [areErrors](../_analysis/areErrors.md)

<br>

---

<small>Súbor bol vygenerovaný 6 February 2026 at 12:35:28 (UTC) použitím *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** od *
*[Roland Milto](https://roland-milto.de/)**.</small>