# areFilledArrays

## Kuvaus

`areFilledArrays` tarkistaa, onko kaksiulotteinen taulukko ei-tyhjä ja ovatko kaikki sen alitaulukot ei-tyhjiä.

### Käyttötapaus

Käytä `areFilledArrays`-funktiota taulukkomaisen tai matriisimaisen syötteen (esim. CSV-rivit, ruudukkodata, ryhmitellyt
tulokset) validointiin, jotta voit turvallisesti olettaa, että alitaulukoita on vähintään yksi eikä yksikään alitaulukko
ole tyhjä.

> **Huomautus TypeScript-käyttäjille:**
>
> Käytä `areFilledArrays`-funktiota, kun sinun täytyy varmistaa, että 2D-taulukossa on vähintään yksi rivi ja että
> jokaisella rivillä on vähintään yksi alkio ennen iteroimista tai indeksointia.

### Edut

- Varmistaa, että ulompi taulukko ei ole tyhjä ja että jokainen sisempi taulukko on myös ei-tyhjä, palauttaen `true`
  vain, kun molemmat ehdot täyttyvät.
- Toimii minkä tahansa tyyppisten alkioiden kanssa alitaulukoissa (esim. numerot, merkkijonot, oliot, sisäkkäiset
  taulukot), koska se tarkistaa vain taulukon “täytetty”-tilan, ei alkioiden sisältöä.
- Tarjoaa yksinkertaisen totuusarvotuloksen (`true`/`false`), joka sopii suojaksi ennen kaksiulotteisen datan
  käsittelyä.

## Käyttö

### Syntaksi

Funktio:

- `areFilledArrays(array)`

Parametrit:

- `array`: Tarkistettava kaksiulotteinen taulukko.

### Funktion paikallinen tuonti

```ts
import { areFilledArrays } from "@type-check/guards";

const a: unknown[][] = [[1]];
const b: unknown[][] = [["a", "b"], [1, 2, 3]];
const c: unknown[][] = [[{}, []], ["string"]];
const d: unknown[][] = [[]];
const e: unknown[][] = [[], [1, 2, 3]];
const f: unknown[][] = [];

console.log(areFilledArrays(a)); // tosi
console.log(areFilledArrays(b)); // tosi
console.log(areFilledArrays(c)); // tosi
console.log(areFilledArrays(d)); // epätosi
console.log(areFilledArrays(e)); // epätosi
console.log(areFilledArrays(f)); // epätosi

```

### Objektin globaali tuonti

Tuodaksesi funktiot globaaleina objektimetodeina, käytä:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Seuraava metodi on tällöin käytettävissä globaalisti:

- `Type.areFilledArrays(array)`

## Funktioanalyysi

Tässä on dokumentoitu taulukkomuotoinen analyysi siitä tulosteesta, joka syntyy, kun funktioille annetaan erilaisia
parametreja: [areFilledArrays](../_analysis/areFilledArrays.md)

<br>

---

<small>Tiedosto luotiin 6 February 2026 at 11:56:32 (UTC) käyttäen *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)**-työkalua, tekijä
**[Roland Milto](https://roland-milto.de/)**.</small>