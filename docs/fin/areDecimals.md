# areDecimals

## Kuvaus

Tarkistaa, ovatko kaikki taulukon alkiot desimaalilukuja ja onko taulukko täytetty, palauttaen `true` tai `false`.

### Käyttötapaus

Validoi käyttäjän antamat listat (esim. CSV-sarakkeet tai lomakekentät) varmistaaksesi, ettei taulukko ole tyhjä ja että
jokainen merkintä on desimaaliarvo ennen jäsentämistä tai laskentaa.

> **Huomautus TypeScript-käyttäjille:**
>
> Käytä `areDecimals`-funktiota, kun tarvitset nopean totuusarvotarkistuksen siitä, että `unknown[]` ei ole tyhjä ja
> että jokainen alkio on desimaaliesitys.

### Edut

- Varmistaa, että syöte on täytetty taulukko ennen alkioiden validointia, mikä estää tyhjien listojen vahingossa
  tapahtuvan hyväksymisen.
- Validoi jokaisen alkion `isDecimal`-tarkistuksella, joten seka- tai virheelliset arvot johtavat välittömästi `false`
  -tulokseen.
- Tarjoaa yksinkertaisen totuusarvotuloksen (`true`/`false`), joka sopii suojauksiin ja varhaisen palautuksen
  validointivirtoihin.

## Käyttö

### Syntaksi

Funktio:

- `areDecimals(array)`

Parametrit:

- `array`: Tarkistettava taulukko.

### Funktion paikallinen tuonti

```ts
import { areDecimals } from "@type-check/guards";

const a: unknown[] = ["1.0", "2.5", "3.14"];
const b: unknown[] = ["1.0", "abc", "3.14"];
const c: unknown[] = [];

console.log(areDecimals(a)); // tosi
console.log(areDecimals(b)); // epätosi
console.log(areDecimals(c)); // epätosi
```

### Objektin globaali tuonti

Tuodaksesi funktiot globaaleina objektimetodeina, käytä:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Seuraava metodi on tällöin käytettävissä globaalisti:

- `Type.areDecimals(array)`

## Funktioanalyysi

Tässä on dokumentoitu taulukkomuotoinen analyysi siitä tulosteesta, joka syntyy, kun funktioille annetaan erilaisia
parametreja: [areDecimals](../_analysis/areDecimals.md)

<br>

---

<small>Tiedosto luotiin 31 January 2026 at 15:57:05 (UTC) käyttäen *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)**-työkalua, tekijä
**[Roland Milto](https://roland-milto.de/)**.</small>