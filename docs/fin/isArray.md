# isArray

## Kuvaus

`isArray` tarkistaa, onko annettu arvo taulukko, ja palauttaa `true`, jos on, muuten `false`.

### Käyttötapaus

Validoi tuntematon data (esim. jäsennetty JSON tai API-vastaukset) varmistaaksesi, että arvo on taulukko ennen
iterointia, indeksointia tai `.length`-ominaisuuden käyttöä.

> **Huomautus TypeScript-käyttäjille:**
>
> Käytä `isArray`-funktiota, kun tarvitset ajonaikaisen tarkistuksen taulukoille; se palauttaa totuusarvon ja sitä on
> turvallista kutsua `unknown`-arvoilla.

### Edut

- Käyttää sisäänrakennettua `Array.isArray`-metodia luotettavaan taulukon tunnistukseen eri realmien välillä (esim.
  iframet).
- Palauttaa yksinkertaisen totuusarvon (`true`/`false`), joka sopii suojausehtoihin ja haarautuvaan logiikkaan.
- Toimii minkä tahansa syötetyypin kanssa, koska parametri on `unknown`.

## Käyttö

### Syntaksi

Funktio:

- `isArray(value)`

Parametrit:

- `value`: Tarkistettava arvo.

### Funktion paikallinen tuonti

```ts
import { isArray } from "@type-check/guards";

const input: unknown = [1, 2, 3];

if (isArray(input)) {
  // input on taulukko ajonaikaisesti
  console.log(input.length);
} else {
  console.log("Not an array");
}

```

### Objektin globaali tuonti

Tuodaksesi funktiot globaaleina objektimetodeina, käytä:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Seuraava metodi on tällöin käytettävissä globaalisti:

- `Type.isArray(value)`

## Funktioanalyysi

Tässä on dokumentoitu taulukkomuotoinen analyysi siitä tulosteesta, joka syntyy, kun funktioille annetaan erilaisia
parametreja: [isArray](../_analysis/isArray.md)

<br>

---

<small>Tiedosto luotiin 6 February 2026 at 11:30:20 (UTC) käyttäen *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)**-työkalua, tekijä
**[Roland Milto](https://roland-milto.de/)**.</small>