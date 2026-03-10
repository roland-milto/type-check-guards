# isFilledArray

## Kuvaus

Tarkistaa, onko `value` taulukko, jossa on vähintään yksi alkio, ja palauttaa `true` tai `false`.

### Käyttötapaus

Käytä `isFilledArray`-funktiota saapuvan datan (esim. API-payloadit, lomakearvot, konfiguraatio) validoimiseen ennen
iterointia, ensimmäisen alkion käyttämistä tai logiikan soveltamista, joka edellyttää vähintään yhtä kohdetta.

> **Huomautus TypeScript-käyttäjille:**
>
> `isFilledArray` on ajonaikainen guard, joka palauttaa totuusarvon; se ei tarkenna alkioiden tyyppejä muuten kuin
> vahvistamalla, että taulukko ei ole tyhjä.

### Edut

- Yksinkertainen ja nopea tarkistus ei-tyhjälle taulukolle käyttämällä `Array.isArray`-tarkistusta ja pituustarkistusta.
- Auttaa välttämään ajonaikaisia virheitä, kun koodi olettaa taulukossa olevan vähintään yksi alkio.
- Selkeä totuusarvotulos: palauttaa `true` ei-tyhjille taulukoille ja `false` muulloin.

## Käyttö

### Syntaksi

Funktio:

- `isFilledArray(value)`

Parametrit:

- `value`: Arvo, joka tarkistetaan sen varalta, onko se ei-tyhjä taulukko.

### Funktion paikallinen tuonti

```ts
import { isFilledArray } from "@type-check/guards";

const input: unknown = [1, 2, 3];

if (Array.isArray(input) && isFilledArray(input)) {
  // input on ajonaikaisesti ei-tyhjä taulukko
  console.log(input[0]);
} else {
  console.log("Not a non-empty array");
}

```

### Objektin globaali tuonti

Tuodaksesi funktiot globaaleina objektimetodeina, käytä:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Seuraava metodi on tällöin käytettävissä globaalisti:

- `Type.isFilledArray(value)`

## Funktioanalyysi

Tässä on dokumentoitu taulukkomuotoinen analyysi siitä tulosteesta, joka syntyy, kun funktioille annetaan erilaisia
parametreja: [isFilledArray](../_analysis/isFilledArray.md)

<br>

---

<small>Tiedosto luotiin 6 February 2026 at 11:47:03 (UTC) käyttäen *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)**-työkalua, tekijä
**[Roland Milto](https://roland-milto.de/)**.</small>