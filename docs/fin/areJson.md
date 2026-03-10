# areJson

## Kuvaus

Tarkistaa, ovatko taulukon kaikki alkiot JSON-merkkijonoja, ja palauttaa `true` vain, jos taulukko on täytetty ja
jokainen alkio on kelvollista JSONia; muussa tapauksessa palauttaa `false`.

### Käyttötapaus

Validoi saapuva data (esim. kyselyparametreista, ympäristömuuttujista tai ulkoisista API:ista), kun odotat
JSON-koodattujen merkkijonojen taulukkoa ja haluat hylätä tyhjät taulukot tai mitkä tahansa ei-JSON-merkinnät.

> **Huomautus TypeScript-käyttäjille:**
>
> Käytä `areJson`-funktiota, kun sinun täytyy validoida, että `unknown[]` sisältää vain JSON-merkkijonoja ennen niiden
> jäsentämistä (esim. `JSON.parse`-funktiolla).

### Edut

- Palauttaa `true` vain silloin, kun jokainen alkio on kelvollinen JSON-merkkijono; muussa tapauksessa palauttaa
  `false`.
- Epäonnistuu nopeasti: lopettaa tarkistamisen heti, kun ei-JSON-alkio löytyy.
- Hylkää tyhjät taulukot suunnitellusti ja palauttaa `false` täyttämättömälle syötteelle.

## Käyttö

### Syntaksi

Funktio:

- `areJson(array)`

Parametrit:

- `array`: Taulukko, josta tarkistetaan JSON-merkkijonoalkiot.

### Funktion paikallinen tuonti

```ts
import { areJson } from "@type-check/guards";

const ok = areJson(["{\"a\":1}", "{\"b\":2}"]); // tosi
const mixed = areJson(["{\"a\":1}", 123 as unknown]); // epätosi
const empty = areJson([]); // epätosi

```

### Objektin globaali tuonti

Tuodaksesi funktiot globaaleina objektimetodeina, käytä:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Seuraava metodi on tällöin käytettävissä globaalisti:

- `Type.areJson(array)`

## Funktioanalyysi

Tässä on dokumentoitu taulukkomuotoinen analyysi siitä tulosteesta, joka syntyy, kun funktioille annetaan erilaisia
parametreja: [areJson](../_analysis/areJson.md)

<br>

---

<small>Tiedosto luotiin 30 January 2026 at 16:15:45 (UTC) käyttäen *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)**-työkalua, tekijä
**[Roland Milto](https://roland-milto.de/)**.</small>