# areUndefined

## Kuvaus

`areUndefined` tarkistaa, ovatko kaikki annetun taulukon alkiot `undefined`.

### Käyttötapaus

Varmista, että valinnaisten tulosten lista ei sisällä yhtään varsinaista arvoa (vain `undefined`), esim. hakujen
mapituksen jälkeen, jossa puuttuvat merkinnät esitetään `undefined`-arvona, ja haluat varmistaa, että kaikki haut
epäonnistuivat.

> **Huomautus TypeScript-käyttäjille:**
>
> Käytä `areUndefined`-funktiota, kun sinun täytyy varmistaa, että `unknown[]` sisältää vain `undefined`-arvoja; se
> palauttaa `false` tyhjille taulukoille sekä ei-taulukko-/virheellisille syötteille sisäisen `isFilledArray`-tarkistuksen
> vuoksi.

### Edut

- Palauttaa `false` ei-taulukoille ja tyhjille taulukoille vaatimalla täytetyn taulukon `isFilledArray`-tarkistuksen
  kautta.
- Varmistaa, että jokainen alkio on `undefined`, ei vain osa niistä, mikä tekee tarkoituksesta eksplisiittisen.
- Hyödyllinen vartijatyylisenä predikaattina tuntemattomien syötekokoelmien validoinnissa.

## Käyttö

### Syntaksi

Funktio:

- `areUndefined(array)`

Parametrit:

- `array`: Taulukko, josta tarkistetaan `undefined`-alkiot.

### Funktion paikallinen tuonti

```ts
import { areUndefined } from "@type-check/guards";

const a: unknown[] = [undefined, undefined];
const b: unknown[] = [undefined, null];
const c: unknown[] = [undefined, 0, undefined];

const r1 = areUndefined(a); // true
const r2 = areUndefined(b); // false
const r3 = areUndefined(c); // false

// Huom: palauttaa false tyhjille taulukoille
const r4 = areUndefined([]); // false
```

### Objektin globaali tuonti

Tuodaksesi funktiot globaaleina objektimetodeina, käytä:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Seuraava metodi on tällöin käytettävissä globaalisti:

- `Type.areUndefined(array)`

## Funktioanalyysi

Tässä on dokumentoitu taulukkomuotoinen analyysi siitä tulosteesta, joka syntyy, kun funktioille annetaan erilaisia
parametreja: [areUndefined](../_analysis/areUndefined.md)

<br>

---

<small>Tiedosto luotiin 30 January 2026 at 13:55:47 (UTC) käyttäen *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)**-työkalua, tekijä
**[Roland Milto](https://roland-milto.de/)**.</small>