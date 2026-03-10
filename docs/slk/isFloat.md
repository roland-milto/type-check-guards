# isFloat

## Popis

`isFloat` určuje, či je daná `value` konečné číslo s pohyblivou desatinnou čiarkou (t. j. `number`, ktorý nie je celé
číslo).

### Prípad použitia

Validujte číselný vstup poskytnutý používateľom tam, kde sú potrebné zlomkové hodnoty (napr. ceny, merania, sadzby) a
odmietnite celé čísla, `NaN` a nekonečná.

> **Poznámka pre používateľov TypeScriptu:**
>
> Použite `isFloat`, keď potrebujete akceptovať iba konečné, necelé číselné vstupy; odmieta celé čísla a nekonečné
> čísla.

### Výhody

- Vracia `true` iba pre konečné, necelé čísla (vylučuje celé čísla, `NaN`, `Infinity` a `-Infinity`).
- Funguje s akýmkoľvek typom vstupu (`unknown`) a bezpečne zužuje typ kontrolou `typeof value === "number"`.
- Používa vstavané numerické stráže (`Number.isInteger`, `Number.isFinite`) pre predvídateľné správanie.

## Použitie

### Syntax

Funkcia:

- `isFloat(value)`

Parametre:

- `value`: Hodnota, pri ktorej sa má overiť, či je číslo s pohyblivou desatinnou čiarkou.

### Lokálny import funkcie

```ts
import { isFloat } from "@type-check/guards";

const inputs: unknown[] = [3.14, -0.1, 1e-7, 42, "3.14", NaN, Infinity];

for (const value of inputs) {
  if (isFloat(value)) {
    // hodnota je za behu číslo; je konečná a nie je celé číslo
    const rounded = value.toFixed(2);
    console.log("float:", value, "rounded:", rounded);
  } else {
    console.log("not a float:", value);
  }
}
```

### Globálny import objektu

Na import funkcií ako globálnych metód objektu použite:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Nasledujúca metóda bude potom dostupná globálne:

- `Type.isFloat(value)`

## Analýza funkcií

Tu je zdokumentovaná tabuľková analýza výstupu, ktorý vzniká pri dosadení rôznych parametrov do
funkcií: [isFloat](../_analysis/isFloat.md)

<br>

---

<small>Súbor bol vygenerovaný 30 January 2026 at 16:09:37 (UTC) použitím *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** od *
*[Roland Milto](https://roland-milto.de/)**.</small>