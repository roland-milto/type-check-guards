# isHexadecimal

## Popis

`isHexadecimal` kontroluje, či je daná hodnota hexadecimálny reťazcový literál s povinnou predponou `0x`/`0X`.

### Prípad použitia

Použite `isHexadecimal` na overenie konfiguračných hodnôt, polí v API payload-e alebo argumentov CLI, ktoré musia byť
zadané ako hexadecimálne reťazcové literály (napr. ID, masky alebo adresy) a nesmú obsahovať okolité medzery.

> **Poznámka pre používateľov TypeScriptu:**
>
> Použite `isHexadecimal`, keď potrebujete overiť používateľský vstup alebo serializované dáta ako prísny hexadecimálny
> reťazcový literál (vrátane predpony `0x`/`0X`) pred parsovaním alebo konverziou.

### Výhody

- Overuje, že hodnota je reťazec a zodpovedá prísnemu formátu hexadecimálneho literálu (vyžaduje predponu `0x`/`0X`).
- Odmieta reťazce s úvodnými alebo koncovými medzerami, čím pomáha predísť nechcenému prijatiu doplneného vstupu.
- Podporuje voliteľné znamienko a nerozlišuje veľkosť písmen v predpone aj čísliciach, pričom predvídateľne vracia
  `true`/`false`.

## Použitie

### Syntax

Funkcia:

- `isHexadecimal(value)`

Parametre:

- `value`: Hodnota, ktorá sa má skontrolovať.

### Lokálny import funkcie

```ts
import { isHexadecimal } from "@type-check/guards";

isHexadecimal("0x1A2B"); // pravda
isHexadecimal("-0Xff"); // pravda
isHexadecimal("1A2B"); // nepravda (chýba predpona)
isHexadecimal(" 0x1A2B"); // nepravda (úvodná medzera)
isHexadecimal(0x1a2b); // nepravda (nie je reťazec)
```

### Globálny import objektu

Na import funkcií ako globálnych metód objektu použite:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Nasledujúca metóda bude potom dostupná globálne:

- `Type.isHexadecimal(value)`

## Analýza funkcií

Tu je zdokumentovaná tabuľková analýza výstupu, ktorý vzniká pri dosadení rôznych parametrov do
funkcií: [isHexadecimal](../_analysis/isHexadecimal.md)

<br>

---

<small>Súbor bol vygenerovaný 31 January 2026 at 23:00:45 (UTC) použitím *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** od *
*[Roland Milto](https://roland-milto.de/)**.</small>