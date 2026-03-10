# areArrays

## Kuvaus

`areArrays` määrittää, onko arvo täytetty kaksiulotteinen taulukko, jonka kaikki alkiot ovat taulukoita.

### Käyttötapaus

Käytä `areArrays`-funktiota taulukkomuotoisten tai matriisimaisen syötteiden (esim. CSV-rivit, ruudukkodata tai
ryhmitellyt listat) validointiin ennen rivi-/sarakeoperaatioiden suorittamista; se palauttaa `false`, jos syöte ei ole
taulukko, on tyhjä tai sisältää minkä tahansa ei-taulukkoalkion.

> **Huomautus TypeScript-käyttäjille:**
>
> Käytä `areArrays`-funktiota, kun sinun täytyy varmistaa, että arvo on ei-tyhjä 2D-taulukko ja että jokainen rivi on
> taulukko ennen sisäkkäisten taulukoiden läpikäyntiä tai indeksointia.

### Edut

- Varmistaa, että syöte on ei-tyhjä kaksiulotteinen taulukko, jossa jokainen alkio on taulukko.
- Palauttaa yksinkertaisen totuusarvon (`true`/`false`), joka sopii vartijoihin ja varhaisiin poistumisiin.
- Auttaa ehkäisemään ajonaikaisia virheitä, kun myöhempi koodi olettaa sisäkkäisten taulukkotoimintojen käytön (esim.
  rivien mapitus).

## Käyttö

### Syntaksi

Funktio:

- `areArrays(array)`

Parametrit:

- `array`: Tarkistettava syöte.

### Funktion paikallinen tuonti

```ts
import { areArrays } from "@type-check/guards";

const value: unknown = [[1, 2], [3, 4]];

if (areArrays(value as unknown[][])) {
  // value on 2D-taulukko, jonka alkioina on taulukoita
  const lengths = value.map(row => row.length);
  console.log(lengths);
} else {
  console.log("Not a 2D array of arrays");
}

```

### Objektin globaali tuonti

Tuodaksesi funktiot globaaleina objektimetodeina, käytä:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Seuraava metodi on tällöin käytettävissä globaalisti:

- `Type.areArrays(array)`

## Funktioanalyysi

Tässä on dokumentoitu taulukkomuotoinen analyysi siitä tulosteesta, joka syntyy, kun funktioille annetaan erilaisia
parametreja: [areArrays](../_analysis/areArrays.md)

<br>

---

<small>Tiedosto luotiin 6 February 2026 at 13:39:31 (UTC) käyttäen *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)**-työkalua, tekijä
**[Roland Milto](https://roland-milto.de/)**.</small>