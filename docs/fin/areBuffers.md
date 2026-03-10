# areBuffers

## Kuvaus

`areBuffers` tarkistaa, onko annettu arvo ei-tyhjä, täytetty taulukko, jossa jokainen alkio on `Buffer`, ja palauttaa
tällöin `true` ja muussa tapauksessa `false`.

### Käyttötapaus

Validoi saapuvat palataulukot (esim. streameista, tiedostolatauksista tai verkkopaketeista) varmistaaksesi, että kaikki
osat ovat `Buffer`-instansseja ennen niiden yhdistämistä, dekoodaamista tai välittämistä kryptografisille tai
binaarinkäsittelyfunktioille.

> **Huomautus TypeScript-käyttäjille:**
>
> Käytä `areBuffers`-funktiota `unknown[]`-arvon validoimiseen ennen Buffer-kohtaisten API:en, kuten `Buffer.concat`,
> kutsumista; näin varmistat, että funktio palauttaa `true` vain, kun jokainen alkio on `Buffer`.

### Edut

- Varmistaa, että jokainen syötteen alkio on Node.js:n `Buffer`-instanssi, ja palauttaa `true` vain, kun koko taulukko
  täsmää.
- Hylkää virheelliset syötteet varhain edellyttämällä ei-tyhjää, täytettyä taulukkoa; palauttaa `false` tyhjille
  taulukoille tai ei-taulukoille.
- Hyödyllinen suojana ennen vain puskureille tarkoitettuja operaatioita (esim. yhdistäminen, hajautus,
  binaariprotokollat).

## Käyttö

### Syntaksi

Funktio:

- `areBuffers(array)`

Parametrit:

- `array`: Taulukko, josta tarkistetaan puskuri-instanssit.

### Funktion paikallinen tuonti

```ts
import { areBuffers } from "@type-check/guards";

const chunks: unknown[] = [Buffer.from("test"), Buffer.from("123")];

if (areBuffers(chunks)) {
  const combined = Buffer.concat(chunks);
  console.log(combined.toString("utf8"));
} else {
  throw new TypeError("Expected a non-empty array of Buffer instances");
}

```

### Objektin globaali tuonti

Tuodaksesi funktiot globaaleina objektimetodeina, käytä:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Seuraava metodi on tällöin käytettävissä globaalisti:

- `Type.areBuffers(array)`

## Funktioanalyysi

Tässä on dokumentoitu taulukkomuotoinen analyysi siitä tulosteesta, joka syntyy, kun funktioille annetaan erilaisia
parametreja: [areBuffers](../_analysis/areBuffers.md)

<br>

---

<small>Tiedosto luotiin 31 January 2026 at 16:25:07 (UTC) käyttäen *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)**-työkalua, tekijä
**[Roland Milto](https://roland-milto.de/)**.</small>