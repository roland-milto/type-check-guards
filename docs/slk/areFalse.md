# areFalse

## Popis

`areFalse` kontroluje, či sú všetky prvky v poskytnutom poli striktne booleovská hodnota `false`.

### Prípad použitia

Overte, že zoznam feature flagov, kontrol alebo výsledkov guardov je celý `false` pred pokračovaním (napr. potvrďte, že
nie sú prítomné žiadne blokujúce podmienky).

> **Poznámka pre používateľov TypeScriptu:**
>
> Použite `areFalse`, keď potrebujete striktne overiť, že pole nie je prázdne a obsahuje iba booleovskú hodnotu `false`.

### Výhody

- Zabezpečuje, že každý prvok je striktne `false` (bez konverzie truthy/falsey).
- Vracia `false` pre ne-polia alebo prázdne polia tým, že vyžaduje naplnené pole cez `isFilledArray`.
- Pre efektivitu skončí predčasne pri prvom prvku, ktorý nie je `false`.

## Použitie

### Syntax

Funkcia:

- `areFalse(array)`

Parametre:

- `array`: Pole na kontrolu, obsahujúce prvky ľubovoľného typu.

### Lokálny import funkcie

```ts
import { areFalse } from "@type-check/guards";

const a = areFalse([false, false, false]); // pravda
const b = areFalse([false, true, false]);  // nepravda
const c = areFalse([false, "false", false]); // nepravda
const d = areFalse([]); // nepravda

```

### Globálny import objektu

Na import funkcií ako globálnych metód objektu použite:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Nasledujúca metóda bude potom dostupná globálne:

- `Type.areFalse(array)`

## Analýza funkcií

Tu je zdokumentovaná tabuľková analýza výstupu, ktorý vzniká pri dosadení rôznych parametrov do
funkcií: [areFalse](../_analysis/areFalse.md)

<br>

---

<small>Súbor bol vygenerovaný 31 January 2026 at 16:18:31 (UTC) použitím *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** od *
*[Roland Milto](https://roland-milto.de/)**.</small>