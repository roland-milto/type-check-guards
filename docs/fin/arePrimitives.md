# arePrimitives

## Kuvaus

`arePrimitives` arvioi, ovatko kaikki annetun, ei-tyhjän taulukon alkiot primitiivityyppejä.

### Käyttötapaus

Varmista, että saapuva data (esim. kyselyparametrit, CSV-rivin arvot tai ID-/tagilista) sisältää vain primitiiviarvoja
ennen serialisointia, hajauttamista, lokitusta tai sen välittämistä API:lle, joka ei saa vastaanottaa objekteja.

> **Huomautus TypeScript-käyttäjille:**
>
> Käytä `arePrimitives`-funktiota, kun sinun täytyy varmistaa, että `unknown[]` sisältää vain primitiiviarvoja (string,
> number, bigint, boolean, symbol, undefined tai null) ennen jatkokäsittelyä.

### Edut

- Palauttaa `true` vain silloin, kun jokainen alkio on primitiiviarvo, mikä tekee siitä tiukan suojan “ei
  objekteja/funktioita” -taulukoille.
- Epäonnistuu nopeasti: palauttaa `false` heti, kun ei-primitiivinen alkio löytyy.
- Palauttaa `false` myös ei-taulukoille ja tyhjille taulukoille (täytetyn taulukon tarkistuksen kautta), mikä estää
  virheellisen syötteen vahingossa hyväksymisen.

## Käyttö

### Syntaksi

Funktio:

- `arePrimitives(array)`

Parametrit:

- `array`: Taulukko, josta tarkistetaan, ovatko alkiot primitiivityyppiä.

### Funktion paikallinen tuonti

```ts
import { arePrimitives } from "@type-check/guards";

const a: unknown[] = [1, "string", true];
const b: unknown[] = [null, undefined, Symbol("x")];
const c: unknown[] = [1, {}, false];

const r1 = arePrimitives(a); // tosi
const r2 = arePrimitives(b); // tosi
const r3 = arePrimitives(c); // epätosi
```

### Objektin globaali tuonti

Tuodaksesi funktiot globaaleina objektimetodeina, käytä:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Seuraava metodi on tällöin käytettävissä globaalisti:

- `Type.arePrimitives(array)`

## Funktioanalyysi

Tässä on dokumentoitu taulukkomuotoinen analyysi siitä tulosteesta, joka syntyy, kun funktioille annetaan erilaisia
parametreja: [arePrimitives](../_analysis/arePrimitives.md)

<br>

---

<small>Tiedosto luotiin 31 January 2026 at 00:04:29 (UTC) käyttäen *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)**-työkalua, tekijä
**[Roland Milto](https://roland-milto.de/)**.</small>