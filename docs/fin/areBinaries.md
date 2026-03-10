# areBinaries

## Kuvaus

Tarkistaa, onko annettu arvo ei-tyhjä kelvollisten binaarimerkkijonojen taulukko, ja palauttaa `true` vain, jos kaikki
alkiot läpäisevät validoinnin.

### Käyttötapaus

Käytä `areBinaries`-funktiota, kun saat tuntemattoman listan (esim. JSON:sta, lomakkeista tai API-rajapinnoista) ja
sinun täytyy varmistaa, että se on ei-tyhjä binaarimerkkijonojen taulukko ennen sen jäsentämistä tai käsittelyä.

> **Huomautus TypeScript-käyttäjille:**
>
> Käytä `areBinaries`-funktiota tuntemattoman syötteen validointiin ennen binaarimerkkijonojen muuntamista
> numeroiksi/BigInt-arvoiksi; se varmistaa, että taulukko ei ole tyhjä ja että jokainen alkio on kelvollinen
> binaarimerkkijono.

### Edut

- Varmistaa, että arvo on ei-tyhjä taulukko, jossa jokainen alkio on kelvollinen binaarimerkkijono.
- Palauttaa yksinkertaisen totuusarvon (`true`/`false`), joka sopii suojauksiin, varhaisiin palautuksiin ja syötteen
  validointiin.
- Ehkäisee myöhempiä jäsennysvirheitä hylkäämällä taulukot, jotka sisältävät yhtään ei-binaarista arvoa.

## Käyttö

### Syntaksi

Funktio:

- `areBinaries(array)`

Parametrit:

- `array`: Tarkistettava arvo.

### Funktion paikallinen tuonti

```ts
import { areBinaries } from "@type-check/guards";

const a = ["0b1010", "1101"];
const b = ["1010", "1020"];

console.log(areBinaries(a)); // tosi
console.log(areBinaries(b)); // epätosi
console.log(areBinaries([])); // epätosi
```

### Objektin globaali tuonti

Tuodaksesi funktiot globaaleina objektimetodeina, käytä:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Seuraava metodi on tällöin käytettävissä globaalisti:

- `Type.areBinaries(array)`

## Funktioanalyysi

Tässä on dokumentoitu taulukkomuotoinen analyysi siitä tulosteesta, joka syntyy, kun funktioille annetaan erilaisia
parametreja: [areBinaries](../_analysis/areBinaries.md)

<br>

---

<small>Tiedosto luotiin 31 January 2026 at 23:14:30 (UTC) käyttäen *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)**-työkalua, tekijä
**[Roland Milto](https://roland-milto.de/)**.</small>