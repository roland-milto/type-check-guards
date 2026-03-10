# isDate

## Popis

`isDate` určuje, či je poskytnutá hodnota `Date`, pričom vracia `true` pre inštancie `Date` a `false` v opačnom prípade.

### Prípad použitia

Validujte a zúžte neznáme hodnoty (napr. dáta požiadavky, konfiguračné hodnoty alebo parsovaný JSON) pred vykonaním
operácií s `Date`, ako je formátovanie, porovnávanie alebo volanie `toISOString()`.

> **Poznámka pre používateľov TypeScriptu:**
>
> Použite `isDate` na zúženie typu `unknown` na `Date` za behu; vracia `true` iba pre skutočné inštancie `Date` (nie pre
> reťazce dátumu).

### Výhody

- Poskytuje jednoduchú runtime kontrolu na overenie, či je hodnota `Date`.
- Pomáha predchádzať typovým chybám tým, že zabezpečí, aby validáciou prešli iba inštancie `Date`.
- Je užitočný na validáciu neznámych vstupov (napr. payloadov z API) pred použitím metód špecifických pre dátum.

## Použitie

### Syntax

Funkcia:

- `isDate(value)`

Parametre:

- `value`: Hodnota, ktorá sa má skontrolovať z hľadiska typu `Date`.

### Lokálny import funkcie

```ts
import { isDate } from "@type-check/guards";

const input: unknown = new Date();

if (isDate(input)) {
  // input je tu Date
  const iso = input.toISOString();
  console.log(iso);
} else {
  console.log("Not a Date");
}

```

### Globálny import objektu

Na import funkcií ako globálnych metód objektu použite:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Nasledujúca metóda bude potom dostupná globálne:

- `Type.isDate(value)`

## Analýza funkcií

Tu je zdokumentovaná tabuľková analýza výstupu, ktorý vzniká pri dosadení rôznych parametrov do
funkcií: [isDate](../_analysis/isDate.md)

<br>

---

<small>Súbor bol vygenerovaný 31 January 2026 at 15:47:40 (UTC) použitím *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** od *
*[Roland Milto](https://roland-milto.de/)**.</small>