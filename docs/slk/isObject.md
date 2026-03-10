# isObject

## Popis

Určuje, či je daná `value` `object` (s vylúčením `null`).

### Prípad použitia

Použite `isObject` na validáciu neznámych vstupov (napr. parsované JSON, odpovede API, payloady udalostí) pred prístupom
k vlastnostiam, aby ste sa uistili, že hodnota je objekt a nie `null`.

> **Poznámka pre používateľov TypeScriptu:**
>
> `isObject` je runtime guard, ktorý vracia boolean; nezúžuje typ na konkrétny tvar objektu. Skombinujte ho s ďalšími
> kontrolami (napr. existenciou vlastností), keď potrebujete silnejšie typovanie.

### Výhody

- Vracia `true` iba pre nenulové hodnoty, ktorých `typeof` je `"object"`.
- Predchádza bežnej nástrahe v JavaScripte, keď by sa `null` inak považovalo za objekt.
- Funguje pre obyčajné objekty aj vstavané inštancie objektov (napr. `Date`, `RegExp`).
- Jednoduchá, rýchla kontrola za behu vhodná pre defenzívne programovanie a validáciu vstupov.

## Použitie

### Syntax

Funkcia:

- `isObject(value)`

Parametre:

- `value`: Hodnota, pri ktorej sa má overiť, či je `object`.

### Lokálny import funkcie

```ts
import { isObject } from "@type-check/guards";

const input: unknown = { a: 1 };

if (isObject(input)) {
  // input je za behu programu nenulový objekt
  console.log("Object detected");
} else {
  console.log("Not an object");
}

```

### Globálny import objektu

Na import funkcií ako globálnych metód objektu použite:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Nasledujúca metóda bude potom dostupná globálne:

- `Type.isObject(value)`

## Analýza funkcií

Tu je zdokumentovaná tabuľková analýza výstupu, ktorý vzniká pri dosadení rôznych parametrov do
funkcií: [isObject](../_analysis/isObject.md)

<br>

---

<small>Súbor bol vygenerovaný 31 January 2026 at 00:20:13 (UTC) použitím *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** od *
*[Roland Milto](https://roland-milto.de/)**.</small>