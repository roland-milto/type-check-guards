# isIndexFound

## Popis

`isIndexFound` určuje, či je daná hodnota nezáporné celé číslo, čo znamená, že index bol nájdený.

### Prípad použitia

Overiť, že výsledok vyhľadávania predstavuje použiteľný index (celé číslo `>= 0`) pred indexovaním do poľa alebo
reťazca, čím sa zabráni náhodnému použitiu `-1` alebo nečíselných hodnôt.

> **Poznámka pre používateľov TypeScriptu:**
>
> Použite `isIndexFound` po operáciách ako `indexOf`, `findIndex` alebo vlastných vyhľadávaniach, kde `-1` (alebo iné
> neplatné hodnoty) môže znamenať „nenájdené“. Keď vráti `true`, hodnota je číslo a je bezpečné ju použiť ako index
> poľa/reťazca.

### Výhody

- Poskytuje jednoduchý typový strážnik na zistenie, či bol nájdený index, kontrolou nezáporného celého čísla.
- Vracia `true` iba pre platné hodnoty podobné indexu (celé čísla `>= 0`), pričom odmieta záporné hodnoty, necelé čísla
  a nečíselné hodnoty.
- Pomáha predchádzať chybám typu off-by-one a omylom so sentinelovými hodnotami pri práci s API, ktoré vracajú `-1` pre
  „nenájdené“.

## Použitie

### Syntax

Funkcia:

- `isIndexFound(value)`

Parametre:

- `value`: Hodnota, pri ktorej sa má overiť, či je nezáporným celým číslom.

### Lokálny import funkcie

```ts
import { isIndexFound } from "@type-check/guards";

const idx: unknown = "3";

if (isIndexFound(idx)) {
  // idx je tu číslo a je >= 0
  const next = idx + 1;
  console.log(next);
} else {
  console.log("No valid index found");
}

// Typické použitie s indexOf
const pos = "hello".indexOf("e");
if (isIndexFound(pos)) {
  console.log("Found at", pos);
}
```

### Globálny import objektu

Na import funkcií ako globálnych metód objektu použite:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Nasledujúca metóda bude potom dostupná globálne:

- `Type.isIndexFound(value)`

## Analýza funkcií

Tu je zdokumentovaná tabuľková analýza výstupu, ktorý vzniká pri dosadení rôznych parametrov do
funkcií: [isIndexFound](../_analysis/isIndexFound.md)

<br>

---

<small>Súbor bol vygenerovaný 31 January 2026 at 00:47:48 (UTC) použitím *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** od *
*[Roland Milto](https://roland-milto.de/)**.</small>