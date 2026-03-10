# isNumeric

## Popis

`isNumeric` určuje, či sa daná hodnota `value` považuje za číselnú, a to porovnaním jej zisteného typu s
`NUMERIC_TYPES`.

### Prípad použitia

Použite `isNumeric` na validáciu vstupov (napr. payloady API, hodnoty formulárov, konfiguráciu) pred vykonávaním
číselných operácií a na konzistentné prijímanie číselne podobných typov (ako `BigInt`) podľa `NUMERIC_TYPES`.

> **Poznámka pre používateľov TypeScriptu:**
>
> `isNumeric` je predikát vracajúci booleovskú hodnotu; berte ho ako runtime kontrolu, či hodnota patrí do knižnicou
> definovanej množiny číselných typov.

### Výhody

- Používa `getTypeOf` spolu s `NUMERIC_TYPES` na centralizáciu logiky detekcie číselných typov a na udržanie
  konzistentných kontrol naprieč kódovou základňou.
- Vracia jednoduchú booleovskú hodnotu (`true`/`false`) pre jednoduché vetvenie a použitie v štýle guard.
- Podporuje viacero číselných reprezentácií (napr. `number`, `BigInt`) podľa definície v `NUMERIC_TYPES`.

## Použitie

### Syntax

Funkcia:

- `isNumeric(value)`

Parametre:

- `value`: Hodnota, pri ktorej sa má overiť, či je číselného typu.

### Lokálny import funkcie

```ts
import { isNumeric } from "@type-check/guards";

const inputs: unknown[] = [42, 3.14, BigInt(1000), "123", null, undefined];

for (const v of inputs) {
  if (isNumeric(v)) {
    // v sa podľa typových pravidiel knižnice považuje za číselnú hodnotu
    console.log("numeric:", v);
  } else {
    console.log("not numeric:", v);
  }
}

```

### Globálny import objektu

Na import funkcií ako globálnych metód objektu použite:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Nasledujúca metóda bude potom dostupná globálne:

- `Type.isNumeric(value)`

## Analýza funkcií

Tu je zdokumentovaná tabuľková analýza výstupu, ktorý vzniká pri dosadení rôznych parametrov do
funkcií: [isNumeric](../_analysis/isNumeric.md)

<br>

---

<small>Súbor bol vygenerovaný 6 February 2026 at 15:54:26 (UTC) použitím *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** od *
*[Roland Milto](https://roland-milto.de/)**.</small>