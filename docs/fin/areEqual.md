# areEqual

## Kuvaus

`areEqual` tarkistaa, ovatko taulukon kaikki alkiot yhtä suuria kuin annettu odotettu arvo, ja palauttaa `true` vain
ei-tyhjille taulukoille, joissa jokainen alkio täsmää.

### Käyttötapaus

Varmista, että lista sisältää vain yhden sallitun arvon (esim. kaikki tilaliput ovat `true`, kaikki roolit ovat
`"admin"` tai kaikki numeeriset arvot ovat yhtä suuria kuin vaadittu vakio) ja käsittele tyhjä syöte virheellisenä (
`false`).

> **Huomautus TypeScript-käyttäjille:**
>
> Käytä `areEqual`-funktiota, kun tarvitset tiukan kaikkien alkioiden tarkistuksen; se palauttaa `false` tyhjille
> taulukoille sekä kaikille ei-taulukko- tai ei-täytetyille syötteille.

### Edut

- Palauttaa `true` vain, kun jokainen alkio vastaa odotettua arvoa; muuten palauttaa `false`.
- Epäonnistuu nopeasti: lopettaa tarkistamisen heti, kun löytyy alkio, joka ei täsmää.
- Suojaa virheelliseltä syötteeltä palauttamalla `false`, kun syöte ei ole täytetty taulukko.

## Käyttö

### Syntaksi

Funktio:

- `areEqual(value, expected)`

Parametrit:

- `value`: Tarkistettava taulukko.
- `expected`: Alkio, johon jokaista taulukon alkiota verrataan.

### Funktion paikallinen tuonti

```ts
import { areEqual } from "@type-check/guards";

const allOnes = areEqual([1, 1, 1], 1);
const allTests = areEqual(["test", "test"], "test");
const notAllTwos = areEqual([2, 3, 2], 2);
const emptyIsFalse = areEqual([], 5);

console.log(allOnes, allTests, notAllTwos, emptyIsFalse);
```

### Objektin globaali tuonti

Tuodaksesi funktiot globaaleina objektimetodeina, käytä:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Seuraava metodi on tällöin käytettävissä globaalisti:

- `Type.areEqual(value, expected)`

## Funktioanalyysi

Tässä on dokumentoitu taulukkomuotoinen analyysi siitä tulosteesta, joka syntyy, kun funktioille annetaan erilaisia
parametreja: [areEqual](../_analysis/areEqual.md)

<br>

---

<small>Tiedosto luotiin 31 January 2026 at 23:50:23 (UTC) käyttäen *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)**-työkalua, tekijä
**[Roland Milto](https://roland-milto.de/)**.</small>