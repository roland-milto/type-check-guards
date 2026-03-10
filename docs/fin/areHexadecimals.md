# areHexadecimals

## Kuvaus

Tarkistaa, ovatko kaikki taulukon alkiot heksadesimaalimerkkijonoja, ja palauttaa `true` vain ei-tyhjille taulukoille,
joissa jokainen alkio on kelvollinen.

### Käyttötapaus

Käytä `areHexadecimals`-funktiota käyttäjän syötteen tai ulkoisen datan (esim. tunnisteet, tarkistussummat, värikoodit
ilman alussa olevaa '#'-merkkiä) validointiin ennen heksadesimaalijäsentämistä tai jatkokäsittelyä.

> **Huomautus TypeScript-käyttäjille:**
>
> Käytä `areHexadecimals`-funktiota tuntemattoman syötteen validointiin ennen jäsentämistä tai arvojen muuntamista (
> esimerkiksi ennen `parseInt(value, 16)`-kutsua tai BigInt-muunnoksia).

### Edut

- Varmistaa, että jokainen alkio on heksadesimaalimerkkijono, ja palauttaa `true` vain, kun kaikki alkiot täsmäävät.
- Hylkää tyhjät taulukot suunnitellusti ja palauttaa `false`, kun syötedata puuttuu.
- Tarjoaa yksinkertaisen totuusarvotuloksen (`true`/`false`), joka sopii suojausehtoihin ja varhaiseen palautukseen
  perustuvaan validointiin.

## Käyttö

### Syntaksi

Funktio:

- `areHexadecimals(array)`

Parametrit:

- `array`: Taulukko, josta tarkistetaan heksadesimaalimerkkijonoalkiot.

### Funktion paikallinen tuonti

```ts
import { areHexadecimals } from "@type-check/guards";

const a = areHexadecimals(["1A", "3F", "B2"]);
const b = areHexadecimals(["1A", "3G", "B2"]);
const c = areHexadecimals([10 as unknown as string, "3F", "B2"] as unknown[]);
const d = areHexadecimals([]);

console.log(a, b, c, d);
```

### Objektin globaali tuonti

Tuodaksesi funktiot globaaleina objektimetodeina, käytä:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Seuraava metodi on tällöin käytettävissä globaalisti:

- `Type.areHexadecimals(array)`

## Funktioanalyysi

Tässä on dokumentoitu taulukkomuotoinen analyysi siitä tulosteesta, joka syntyy, kun funktioille annetaan erilaisia
parametreja: [areHexadecimals](../_analysis/areHexadecimals.md)

<br>

---

<small>Tiedosto luotiin 31 January 2026 at 23:06:04 (UTC) käyttäen *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)**-työkalua, tekijä
**[Roland Milto](https://roland-milto.de/)**.</small>