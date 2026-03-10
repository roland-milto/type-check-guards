# isRegEx

## Popis

Určuje, či je poskytnutá hodnota inštanciou `RegExp`.

### Prípad použitia

Overte hodnoty poskytnuté používateľom alebo dynamické hodnoty (napr. konfiguráciu, payload z API, vstupy pluginov)
predtým, než ich budete považovať za regulárny výraz.

> **Poznámka pre používateľov TypeScriptu:**
>
> Použite `isRegEx` na zúženie hodnôt typu `unknown` (alebo union) pred použitím vlastností alebo metód špecifických pre
> RegExp; vráti `true` iba pre hodnoty, ktoré sú inštanciami `RegExp`.

### Výhody

- Poskytuje jednoduchý runtime typový strážnik na overenie, či je hodnota `RegExp`.
- Pomáha predchádzať chybám, keď kód očakáva regulárny výraz (napr. pred volaním `test`, `exec` alebo čítaním `source`).
- Funguje s literálmi regex aj s inštanciami vytvorenými cez `new RegExp(...)`.
- Vracia jasný booleovský výsledok (`true`/`false`) bez vyhadzovania výnimiek pre vstupy, ktoré nie sú regex.

## Použitie

### Syntax

Funkcia:

- `isRegEx(value)`

Parametre:

- `value`: Hodnota, ktorá sa má skontrolovať.

### Lokálny import funkcie

```ts
import { isRegEx } from "@type-check/guards";

const input: unknown = /abc/i;

if (isRegEx(input)) {
  // input je tu RegExp
  console.log(input.test("ABC"));
} else {
  console.log("Not a RegExp");
}

```

### Globálny import objektu

Na import funkcií ako globálnych metód objektu použite:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Nasledujúca metóda bude potom dostupná globálne:

- `Type.isRegEx(value)`

## Analýza funkcií

Tu je zdokumentovaná tabuľková analýza výstupu, ktorý vzniká pri dosadení rôznych parametrov do
funkcií: [isRegEx](../_analysis/isRegEx.md)

<br>

---

<small>Súbor bol vygenerovaný 30 January 2026 at 23:30:54 (UTC) použitím *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** od *
*[Roland Milto](https://roland-milto.de/)**.</small>