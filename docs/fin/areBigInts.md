# areBigInts

## Kuvaus

`areBigInts` määrittää, onko arvo ei-tyhjä taulukko, joka sisältää vain `bigint`-arvoja.

### Käyttötapaus

Validoi tuntematon syöte (esim. jäsennetty JSON-tyyppinen data, API-pyynnön payloadit tai `unknown`-tyyppiset
funktioparametrit) varmistaaksesi, että se on ei-tyhjä `bigint`-arvojen taulukko ennen käsittelyä; palauttaa `true`
vain, kun kaikki alkiot ovat `bigint`, muuten `false`.

> **Huomautus TypeScript-käyttäjille:**
>
> Käytä `areBigInts`-funktiota ajonaikaisena vartijana ennen kuin suoritat vain-`bigint`-operaatioita (esim.
> aritmetiikkaa, vertailuja) tuntemattomalle syötteelle.

### Edut

- Varmistaa, että jokainen alkio on `bigint`, ja palauttaa `true` vain, kun koko taulukko täsmää.
- Hylkää ei-taulukot ja tyhjät taulukot suunnitellusti (kautta `isFilledArray`), mikä estää virheellisten syötteiden
  vahingossa tapahtuvan hyväksymisen.
- Nopea epäonnistuminen: palauttaa `false` heti, kun löytyy alkio, joka ei ole `bigint`.

## Käyttö

### Syntaksi

Funktio:

- `areBigInts(array)`

Parametrit:

- `array`: Tarkistettava arvo.

### Funktion paikallinen tuonti

```ts
import { areBigInts } from "@type-check/guards";

const a: unknown = [10n, 20n];
const b: unknown = [10n, 20];
const c: unknown = [];

console.log(areBigInts(a)); // tosi
console.log(areBigInts(b)); // epätosi
console.log(areBigInts(c)); // epätosi
```

### Objektin globaali tuonti

Tuodaksesi funktiot globaaleina objektimetodeina, käytä:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Seuraava metodi on tällöin käytettävissä globaalisti:

- `Type.areBigInts(array)`

## Funktioanalyysi

Tässä on dokumentoitu taulukkomuotoinen analyysi siitä tulosteesta, joka syntyy, kun funktioille annetaan erilaisia
parametreja: [areBigInts](../_analysis/areBigInts.md)

<br>

---

<small>Tiedosto luotiin 31 January 2026 at 23:25:48 (UTC) käyttäen *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)**-työkalua, tekijä
**[Roland Milto](https://roland-milto.de/)**.</small>