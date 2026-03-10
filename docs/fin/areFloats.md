# areFloats

## Kuvaus

`areFloats` tarkistaa, onko annettu taulukko täytetty ja ovatko kaikki sen alkiot liukulukuja.

### Käyttötapaus

Käytä `areFloats`-funktiota, kun saat `unknown[]`-taulukon (esim. JSON:sta, kyselyparametreista tai ulkoisista
API-rajapinnoista) ja sinun täytyy varmistaa, että se on täytetty taulukko, jossa jokainen alkio on liukuluku, ennen
numeerisen logiikan suorittamista, kuten keskiarvon laskemista, interpolointia tai tilastollisia laskelmia.

> **Huomautus TypeScript-käyttäjille:**
>
> Käytä `areFloats`-funktiota suojaamaan `unknown[]` ennen kuin käsittelet sitä `number[]`-taulukkona, joka sisältää
> vain liukulukuja; se palauttaa `false` tyhjille taulukoille ja kaikille alkioille, jotka eivät ole liukulukuja.

### Edut

- Palauttaa `true` vain silloin, kun syöte on ei-tyhjä taulukko ja jokainen alkio on liukuluku.
- Epäonnistuu nopeasti: palauttaa `false` heti, kun löytyy alkio, joka ei ole liukuluku.
- Auttaa validoimaan tuntemattoman syötteen ennen liukulukukohtaisia laskutoimituksia.

## Käyttö

### Syntaksi

Funktio:

- `areFloats(array)`

Parametrit:

- `array`: Taulukko, josta tarkistetaan liukulukualkiot.

### Funktion paikallinen tuonti

```ts
import { areFloats } from "@type-check/guards";

const a: unknown[] = [3.14, 2.71, 1.0];
const b: unknown[] = [3.14, 2];
const c: unknown[] = [];

console.log(areFloats(a)); // tosi
console.log(areFloats(b)); // epätosi
console.log(areFloats(c)); // epätosi

function sumFloats(values: unknown): number | null {
  if (!Array.isArray(values) || !areFloats(values)) return null;
  return values.reduce((acc, n) => acc + n, 0);
}

console.log(sumFloats([0.5, 1.25])); // 1.75
console.log(sumFloats([1, 2])); // null

```

### Objektin globaali tuonti

Tuodaksesi funktiot globaaleina objektimetodeina, käytä:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Seuraava metodi on tällöin käytettävissä globaalisti:

- `Type.areFloats(array)`

## Funktioanalyysi

Tässä on dokumentoitu taulukkomuotoinen analyysi siitä tulosteesta, joka syntyy, kun funktioille annetaan erilaisia
parametreja: [areFloats](../_analysis/areFloats.md)

<br>

---

<small>Tiedosto luotiin 30 January 2026 at 15:57:13 (UTC) käyttäen *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)**-työkalua, tekijä
**[Roland Milto](https://roland-milto.de/)**.</small>