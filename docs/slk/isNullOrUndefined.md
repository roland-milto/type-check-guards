# isNullOrUndefined

## Popis

Kontroluje, či je daná hodnota `null` alebo `undefined`.

### Prípad použitia

Použite `isNullOrUndefined`, keď potrebujete považovať `null` aj `undefined` za „žiadnu hodnotu“, napríklad pri
validácii voliteľných vstupov, normalizácii payloadov API alebo pri strážení vetiev kódu pred dereferencovaním
potenciálne chýbajúcej hodnoty.

> **Poznámka pre používateľov TypeScriptu:**
>
> Použite `isNullOrUndefined` ako guard proti chýbajúcim hodnotám pred prístupom k vlastnostiam alebo volaním metód;
> vracia `true` iba pre `null` a `undefined`.

### Výhody

- Poskytuje jasný, opakovane použiteľný guard na detekciu `null` a `undefined` na jednom mieste.
- Vracia jednoduchú booleovskú hodnotu (`true`/`false`), ktorú je ľahké skladať v podmienkach a validáciách.
- Pomáha predchádzať bežným chybám za behu tým, že kontroluje chýbajúce hodnoty pred prístupom k vlastnostiam alebo
  volaním metód.

## Použitie

### Syntax

Funkcia:

- `isNullOrUndefined(value)`

Parametre:

- `value`: Hodnota, ktorá sa má skontrolovať na `null` alebo `undefined`.

### Lokálny import funkcie

```ts
import { isNullOrUndefined } from "@type-check/guards";

const a: unknown = null;
const b: unknown = undefined;
const c: unknown = 0;

if (isNullOrUndefined(a)) {
  // spracovať chýbajúcu hodnotu
}

console.log(isNullOrUndefined(b)); // true
console.log(isNullOrUndefined(c)); // false

```

### Globálny import objektu

Na import funkcií ako globálnych metód objektu použite:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Nasledujúca metóda bude potom dostupná globálne:

- `Type.isNullOrUndefined(value)`

## Analýza funkcií

Tu je zdokumentovaná tabuľková analýza výstupu, ktorý vzniká pri dosadení rôznych parametrov do
funkcií: [isNullOrUndefined](../_analysis/isNullOrUndefined.md)

<br>

---

<small>Súbor bol vygenerovaný 31 January 2026 at 00:35:09 (UTC) použitím *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** od *
*[Roland Milto](https://roland-milto.de/)**.</small>