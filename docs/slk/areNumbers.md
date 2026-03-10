# areNumbers

## Popis

`areNumbers` kontroluje, či je hodnota neprázdne pole, v ktorom sú všetky prvky čísla.

### Prípad použitia

Overte údaje poskytnuté používateľom alebo API, aby ste sa uistili, že ide o neprázdne pole čísel pred výpočtom súčtov,
priemerov alebo iných číselných agregácií.

> **Poznámka pre používateľov TypeScriptu:**
>
> Použite `areNumbers` na overenie neznámych polí pred vykonaním číselných výpočtov; vráti `false` pre prázdne polia a
> pre polia obsahujúce akúkoľvek nečíselnú hodnotu.

### Výhody

- Vráti `true` iba vtedy, keď je vstup neprázdne pole a každý prvok je číslo.
- Zabraňuje falošne pozitívnym výsledkom tým, že odmieta prázdne polia a vstupy, ktoré nie sú poľom.
- Užitočné ako ochrana pred číselnými operáciami (napr. sčítanie, priemerovanie) na predídenie chybám za behu.

## Použitie

### Syntax

Funkcia:

- `areNumbers(array)`

Parametre:

- `array`: Pole, ktoré sa má skontrolovať na číselné prvky.

### Lokálny import funkcie

```ts
import { areNumbers } from "@type-check/guards";

const input: unknown = [1, 2, 3];

if (Array.isArray(input) && areNumbers(input)) {
  const total = input.reduce((sum, n) => sum + n, 0);
  console.log(total);
} else {
  console.log("Not a non-empty number array");
}

```

### Globálny import objektu

Na import funkcií ako globálnych metód objektu použite:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Nasledujúca metóda bude potom dostupná globálne:

- `Type.areNumbers(array)`

## Analýza funkcií

Tu je zdokumentovaná tabuľková analýza výstupu, ktorý vzniká pri dosadení rôznych parametrov do
funkcií: [areNumbers](../_analysis/areNumbers.md)

<br>

---

<small>Súbor bol vygenerovaný 30 January 2026 at 13:05:53 (UTC) použitím *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** od *
*[Roland Milto](https://roland-milto.de/)**.</small>