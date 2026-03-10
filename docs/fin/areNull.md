# areNull

## Kuvaus

Tarkistaa, ovatko kaikki annetun `array`-taulukon alkiot `null`.

### Käyttötapaus

Varmista, että tietoaineiston sarake, API-kenttälista tai paikkamerkkitaulukko sisältää vain `null`-arvoja ennen
logiikan soveltamista, joka olettaa kaikkien merkintöjen olevan tarkoituksella tyhjiä.

> **Huomautus TypeScript-käyttäjille:**
>
> Käytä `areNull`-funktiota, kun tarvitset tiukan tarkistuksen siitä, että syöte on ei-tyhjä taulukko ja jokainen alkio
> on täsmälleen `null` (ei `undefined`, ei epätosia arvoja).

### Edut

- Palauttaa `true` vain silloin, kun jokainen alkio on `null`, mikä tekee siitä tiukan "kaikki täsmää" -suojauksen.
- Hylkää ei-taulukot ja tyhjät taulukot palauttamalla `false`, mikä estää vahingossa syntyvät totuusarvoiset tulokset
  virheellisellä syötteellä.
- Toimii hyvin esitarkistuksena ennen sellaisten tietojen käsittelyä, joiden on oltava kokonaan `null`.

## Käyttö

### Syntaksi

Funktio:

- `areNull(array)`

Parametrit:

- `array`: Syötetaulukko, josta tarkistetaan `null`-alkiot.

### Funktion paikallinen tuonti

```ts
import { areNull } from "@type-check/guards";

const a = [null, null];
const b = [null, 1, null];

const allNullA = areNull(a); // tosi
const allNullB = areNull(b); // epätosi

const notAnArray = areNull(123 as unknown as unknown[]); // epätosi
const empty = areNull([]); // epätosi

```

### Objektin globaali tuonti

Tuodaksesi funktiot globaaleina objektimetodeina, käytä:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Seuraava metodi on tällöin käytettävissä globaalisti:

- `Type.areNull(array)`

## Funktioanalyysi

Tässä on dokumentoitu taulukkomuotoinen analyysi siitä tulosteesta, joka syntyy, kun funktioille annetaan erilaisia
parametreja: [areNull](../_analysis/areNull.md)

<br>

---

<small>Tiedosto luotiin 31 January 2026 at 15:43:09 (UTC) käyttäen *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)**-työkalua, tekijä
**[Roland Milto](https://roland-milto.de/)**.</small>