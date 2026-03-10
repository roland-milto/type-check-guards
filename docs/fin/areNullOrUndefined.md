# areNullOrUndefined

## Kuvaus

Tarkistaa, ovatko kaikki annetun taulukon alkiot `null` tai `undefined`.

### Käyttötapaus

Varmista, että valinnaisten kenttien lista ei sisällä yhtään todellista arvoa (vain `null`/`undefined`) ennen kuin
päätät ohittaa käsittelyn tai näyttää “arvoja ei annettu” -tilan.

> **Huomautus TypeScript-käyttäjille:**
>
> Käytä `areNullOrUndefined`-funktiota, kun sinun täytyy varmistaa, että taulukko sisältää vain puuttuvia arvoja (
`null`/`undefined`). Huomaa, että se palauttaa `false` tyhjälle taulukolle.

### Edut

- Palauttaa `true` vain silloin, kun jokainen alkio on `null` tai `undefined`.
- Palauttaa `false` tyhjille taulukoille, mikä auttaa erottamaan “ei dataa” -tilanteen “kaikki arvot puuttuvat”
  -tilanteesta.
- Toimii `unknown[]`-tyypin kanssa, joten sitä on turvallista käyttää ennen tyyppien tarkentamista.

## Käyttö

### Syntaksi

Funktio:

- `areNullOrUndefined(array)`

Parametrit:

- `array`: Tarkistettava taulukko.

### Funktion paikallinen tuonti

```ts
import { areNullOrUndefined } from "@type-check/guards";

const allMissing = areNullOrUndefined([null, undefined, null]);
// allMissing === true

const containsValue = areNullOrUndefined([null, "value", undefined]);
// containsValue === false

const empty = areNullOrUndefined([]);
// empty === false
```

### Objektin globaali tuonti

Tuodaksesi funktiot globaaleina objektimetodeina, käytä:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Seuraava metodi on tällöin käytettävissä globaalisti:

- `Type.areNullOrUndefined(array)`

## Funktioanalyysi

Tässä on dokumentoitu taulukkomuotoinen analyysi siitä tulosteesta, joka syntyy, kun funktioille annetaan erilaisia
parametreja: [areNullOrUndefined](../_analysis/areNullOrUndefined.md)

<br>

---

<small>Tiedosto luotiin 31 January 2026 at 00:29:38 (UTC) käyttäen *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)**-työkalua, tekijä
**[Roland Milto](https://roland-milto.de/)**.</small>