# isValidDate

## Popis

`isValidDate` kontroluje, či je daná hodnota platný objekt `Date`, a vráti `true` iba pre skutočné, ne-neplatné dátumy.

### Prípad použitia

Validujte používateľský vstup alebo údaje z API, ktoré môžu obsahovať dátumy, aby ste zabezpečili, že hodnota je
skutočná inštancia `Date` a nie neplatný dátum, pred vykonávaním výpočtov dátumov, formátovania alebo porovnávania.

> **Poznámka pre používateľov TypeScriptu:**
>
> Použite `isValidDate` pred volaním metód `Date` (napr. `toISOString`, `getTime`) na hodnotách typu `unknown`, aby ste
> sa uistili, že ide o platné objekty `Date`.

### Výhody

- Zabezpečuje, že hodnota je inštancia `Date` a nie iba reťazec alebo číslo podobné dátumu.
- Odmieta neplatné dátumy (napr. `new Date("invalid")`) kontrolou časových hodnôt `NaN`.
- Jednoduchá booleovská ochrana, ktorá sa ľahko používa v podmienkach a validačných pipeline-och.
- Pomáha predchádzať chybám za behu pri volaní metód dátumu tým, že najprv overí vstup.

## Použitie

### Syntax

Funkcia:

- `isValidDate(value)`

Parametre:

- `value`: Hodnota, ktorá sa má skontrolovať.

### Lokálny import funkcie

```ts
import { isValidDate } from "@type-check/guards";

const input: unknown = new Date();

if (isValidDate(input)) {
  // vstup je platná inštancia Date
  const iso = input.toISOString();
  console.log(iso);
} else {
  console.log("Not a valid Date");
}

console.log(isValidDate(new Date("invalid"))); // nepravda
console.log(isValidDate("2025-12-22")); // nepravda

```

### Globálny import objektu

Na import funkcií ako globálnych metód objektu použite:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Nasledujúca metóda bude potom dostupná globálne:

- `Type.isValidDate(value)`

## Analýza funkcií

Tu je zdokumentovaná tabuľková analýza výstupu, ktorý vzniká pri dosadení rôznych parametrov do
funkcií: [isValidDate](../_analysis/isValidDate.md)

<br>

---

<small>Súbor bol vygenerovaný 30 January 2026 at 16:52:46 (UTC) použitím *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** od *
*[Roland Milto](https://roland-milto.de/)**.</small>