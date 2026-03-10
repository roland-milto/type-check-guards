# isIndexFound

## Kuvaus

`isIndexFound` määrittää, onko annettu arvo ei-negatiivinen kokonaisluku, mikä tarkoittaa, että indeksi on löytynyt.

### Käyttötapaus

Varmista, että hakutulos edustaa käyttökelpoista indeksiä (kokonaisluku `>= 0`) ennen taulukon tai merkkijonon
indeksointia, estäen `-1`:n tai ei-numeeristen arvojen vahingossa tapahtuvan käytön.

> **Huomautus TypeScript-käyttäjille:**
>
> Käytä `isIndexFound`-funktiota operaatioiden kuten `indexOf`, `findIndex` tai mukautettujen hakujen jälkeen, joissa
`-1` (tai muut virheelliset arvot) voi tarkoittaa ”ei löytynyt”. Kun se palauttaa `true`, arvo on numero ja sitä on
> turvallista käyttää taulukko-/merkkijonoindeksinä.

### Edut

- Tarjoaa yksinkertaisen tyyppivartijan sen havaitsemiseksi, löytyikö indeksi, tarkistamalla ei-negatiivisen
  kokonaisluvun.
- Palauttaa `true` vain kelvollisille indeksin kaltaisille arvoille (kokonaisluvut `>= 0`), hyläten negatiiviset,
  ei-kokonaisluvut ja ei-numeeriset arvot.
- Auttaa välttämään off-by-one- ja sentinel-arvoihin liittyviä virheitä, kun työskennellään API:en kanssa, jotka
  palauttavat `-1` merkityksessä ”ei löytynyt”.

## Käyttö

### Syntaksi

Funktio:

- `isIndexFound(value)`

Parametrit:

- `value`: Tarkistettava arvo sen varalta, että se on ei-negatiivinen kokonaisluku.

### Funktion paikallinen tuonti

```ts
import { isIndexFound } from "@type-check/guards";

const idx: unknown = "3";

if (isIndexFound(idx)) {
  // idx on tässä numero ja on >= 0
  const next = idx + 1;
  console.log(next);
} else {
  console.log("No valid index found");
}

// Tyypillinen käyttö indexOfin kanssa
const pos = "hello".indexOf("e");
if (isIndexFound(pos)) {
  console.log("Found at", pos);
}
```

### Objektin globaali tuonti

Tuodaksesi funktiot globaaleina objektimetodeina, käytä:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Seuraava metodi on tällöin käytettävissä globaalisti:

- `Type.isIndexFound(value)`

## Funktioanalyysi

Tässä on dokumentoitu taulukkomuotoinen analyysi siitä tulosteesta, joka syntyy, kun funktioille annetaan erilaisia
parametreja: [isIndexFound](../_analysis/isIndexFound.md)

<br>

---

<small>Tiedosto luotiin 31 January 2026 at 00:45:46 (UTC) käyttäen *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)**-työkalua, tekijä
**[Roland Milto](https://roland-milto.de/)**.</small>