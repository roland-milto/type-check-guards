# areIntegers

## Kuvaus

`areIntegers` määrittää, ovatko kaikki annetun taulukon alkiot kokonaislukuja, ja palauttaa `true`, jos ovat, ja `false`
muussa tapauksessa.

### Käyttötapaus

Käytä `areIntegers`-funktiota käyttäjän antaman tai ulkoisen datan (esim. kyselyparametrit, JSON-payloadit, CSV-rivit)
validoimiseen, kun logiikkasi edellyttää täytettyä kokonaislukuarvojen listaa, kuten ID:t, laskurit, sivutuksen offsetit
tai taulukkoindeksit.

> **Huomautus TypeScript-käyttäjille:**
>
> Käytä `areIntegers`-funktiota ajonaikaisena vartijana `unknown[]`-syötteille ennen kuin käsittelet niitä `number[]`
> -taulukkona, joka sisältää vain kokonaislukuja. Jos se palauttaa `false`, syöte ei joko ole täytetty taulukko tai se
> sisältää vähintään yhden ei-kokonaislukuarvon.

### Edut

- Palauttaa `true` vain silloin, kun jokainen alkio on kokonaisluku; muussa tapauksessa palauttaa `false`.
- Auttaa validoimaan tuntemattoman syötteen ennen pelkästään kokonaislukuihin perustuvia operaatioita (esim.
  indeksointi, lukumäärät, ID:t).
- Epäonnistuu nopeasti: lopettaa tarkistamisen heti, kun löytyy ei-kokonaislukuinen alkio.

## Käyttö

### Syntaksi

Funktio:

- `areIntegers(array)`

Parametrit:

- `array`: Taulukko, josta tarkistetaan kokonaislukualkiot.

### Funktion paikallinen tuonti

```ts
import { areIntegers } from "@type-check/guards";

const a: unknown[] = [1, 2, 3];
const b: unknown[] = [0, -10, 42];
const c: unknown[] = [1, 2, "3"];

console.log(areIntegers(a)); // tosi
console.log(areIntegers(b)); // tosi
console.log(areIntegers(c)); // epätosi

function sumIntegers(values: unknown[]): number {
  if (!areIntegers(values)) {
    throw new TypeError("Expected a filled array of integers");
  }
  return (values as number[]).reduce((acc, n) => acc + n, 0);
}

console.log(sumIntegers([10, 20, 30]));

```

### Objektin globaali tuonti

Tuodaksesi funktiot globaaleina objektimetodeina, käytä:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Seuraava metodi on tällöin käytettävissä globaalisti:

- `Type.areIntegers(array)`

## Funktioanalyysi

Tässä on dokumentoitu taulukkomuotoinen analyysi siitä tulosteesta, joka syntyy, kun funktioille annetaan erilaisia
parametreja: [areIntegers](../_analysis/areIntegers.md)

<br>

---

<small>Tiedosto luotiin 31 January 2026 at 00:58:16 (UTC) käyttäen *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)**-työkalua, tekijä
**[Roland Milto](https://roland-milto.de/)**.</small>