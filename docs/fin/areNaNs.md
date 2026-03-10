# areNaNs

## Kuvaus

`areNaNs` tarkistaa, ovatko kaikki taulukon alkiot `NaN`, ja palauttaa `true` vain, jos jokainen alkio on `NaN`.

### Käyttötapaus

Validoi saapuva data, jossa `NaN` toimii sentinel-arvona ja sinun on varmistettava, että koko taulukko koostuu
yksinomaan `NaN`-arvoista (esim. täysin puuttuvan numeerisen sarjan havaitseminen).

> **Huomautus TypeScript-käyttäjille:**
>
> Käytä `areNaNs`-funktiota, kun sinun täytyy varmistaa, että taulukko sisältää vain numeerisen `NaN`-arvon (ilman
> merkkijono–numero-pakotusta).

### Edut

- Palauttaa `true` vain silloin, kun jokainen alkio on `NaN` (tiukka kaikkien alkioiden tarkistus).
- Ei pakota merkkijonoja numeroiksi; arvot kuten "NaN" pysyvät ei-`NaN`-arvoina ja tekevät tulokseksi `false`.
- Palauttaa `false` täyttämättömille taulukoille, mikä estää vahingossa saatavan `true`-tuloksen tyhjällä syötteellä.

## Käyttö

### Syntaksi

Funktio:

- `areNaNs(array)`

Parametrit:

- `array`: Taulukko, josta tarkistetaan `NaN`-arvot.

### Funktion paikallinen tuonti

```ts
import { areNaNs } from "@type-check/guards";

const a = areNaNs([NaN, NaN]); // tosi
const b = areNaNs([NaN, 1, NaN]); // epätosi
const c = areNaNs([NaN, "NaN", NaN]); // epätosi
const d = areNaNs([NaN, null, NaN]); // epätosi
const e = areNaNs([] as unknown[]); // epätosi
```

### Objektin globaali tuonti

Tuodaksesi funktiot globaaleina objektimetodeina, käytä:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Seuraava metodi on tällöin käytettävissä globaalisti:

- `Type.areNaNs(array)`

## Funktioanalyysi

Tässä on dokumentoitu taulukkomuotoinen analyysi siitä tulosteesta, joka syntyy, kun funktioille annetaan erilaisia
parametreja: [areNaNs](../_analysis/areNaNs.md)

<br>

---

<small>Tiedosto luotiin 30 January 2026 at 15:51:21 (UTC) käyttäen *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)**-työkalua, tekijä
**[Roland Milto](https://roland-milto.de/)**.</small>