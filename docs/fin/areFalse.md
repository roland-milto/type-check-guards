# areFalse

## Kuvaus

`areFalse` tarkistaa, ovatko kaikki annetun taulukon alkiot täsmälleen boolean-arvo `false`.

### Käyttötapaus

Vahvista, että ominaisuuslippujen, tarkistusten tai guard-tulosten lista on kokonaan `false` ennen jatkamista (esim.
varmista, ettei estäviä ehtoja ole).

> **Huomautus TypeScript-käyttäjille:**
>
> Käytä `areFalse`-funktiota, kun tarvitset tiukan validoinnin siitä, että taulukko ei ole tyhjä ja sisältää vain
> boolean-arvon `false`.

### Edut

- Varmistaa, että jokainen alkio on täsmälleen `false` (ei truthy/falsey-tyyppimuunnosta).
- Palauttaa `false` ei-taulukoille tai tyhjille taulukoille vaatimalla täytetyn taulukon `isFilledArray`-tarkistuksen
  kautta.
- Lopettaa aikaisin ensimmäiseen ei-`false`-alkioon tehokkuuden vuoksi.

## Käyttö

### Syntaksi

Funktio:

- `areFalse(array)`

Parametrit:

- `array`: Tarkistettava taulukko, joka sisältää minkä tahansa tyyppisiä alkioita.

### Funktion paikallinen tuonti

```ts
import { areFalse } from "@type-check/guards";

const a = areFalse([false, false, false]); // tosi
const b = areFalse([false, true, false]);  // epätosi
const c = areFalse([false, "false", false]); // epätosi
const d = areFalse([]); // epätosi
```

### Objektin globaali tuonti

Tuodaksesi funktiot globaaleina objektimetodeina, käytä:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Seuraava metodi on tällöin käytettävissä globaalisti:

- `Type.areFalse(array)`

## Funktioanalyysi

Tässä on dokumentoitu taulukkomuotoinen analyysi siitä tulosteesta, joka syntyy, kun funktioille annetaan erilaisia
parametreja: [areFalse](../_analysis/areFalse.md)

<br>

---

<small>Tiedosto luotiin 31 January 2026 at 16:16:55 (UTC) käyttäen *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)**-työkalua, tekijä
**[Roland Milto](https://roland-milto.de/)**.</small>