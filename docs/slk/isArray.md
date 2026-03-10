# isArray

## Popis

`isArray` kontroluje, či je daná hodnota pole, a vráti `true`, ak ním je, inak `false`.

### Prípad použitia

Validujte neznáme dáta (napr. parsované JSON alebo odpovede API), aby ste sa uistili, že hodnota je pole pred
iterovaním, indexovaním alebo prístupom k `.length`.

> **Poznámka pre používateľov TypeScriptu:**
>
> Použite `isArray`, keď potrebujete kontrolu polí za behu; vracia boolean a je bezpečné ho volať s hodnotami typu
`unknown`.

### Výhody

- Používa vstavané `Array.isArray` na spoľahlivú detekciu polí naprieč prostrediami (napr. iframe).
- Vracia jednoduchý booleovský výsledok (`true`/`false`) vhodný pre stráže (guards) a vetviacu logiku.
- Funguje s akýmkoľvek typom vstupu, pretože parameter je `unknown`.

## Použitie

### Syntax

Funkcia:

- `isArray(value)`

Parametre:

- `value`: Hodnota, ktorá sa má skontrolovať.

### Lokálny import funkcie

```ts
import { isArray } from "@type-check/guards";

const input: unknown = [1, 2, 3];

if (isArray(input)) {
  // input je pole za behu programu
  console.log(input.length);
} else {
  console.log("Not an array");
}

```

### Globálny import objektu

Na import funkcií ako globálnych metód objektu použite:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Nasledujúca metóda bude potom dostupná globálne:

- `Type.isArray(value)`

## Analýza funkcií

Tu je zdokumentovaná tabuľková analýza výstupu, ktorý vzniká pri dosadení rôznych parametrov do
funkcií: [isArray](../_analysis/isArray.md)

<br>

---

<small>Súbor bol vygenerovaný 6 February 2026 at 11:31:58 (UTC) použitím *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** od *
*[Roland Milto](https://roland-milto.de/)**.</small>