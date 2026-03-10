# areObjects

## Kuvaus

`areObjects` tarkistaa, sisältääkö annettu täytetty taulukko vain objekteja.

### Käyttötapaus

Käytä `areObjects`-funktiota, kun saat tuntemattoman taulukon (esim. JSON-jäsennyksestä tai ulkoisista
API-rajapinnoista) ja sinun täytyy varmistaa, että se ei ole tyhjä ja että jokainen alkio on objekti ennen iterointia ja
objektin ominaisuuksien käyttämistä.

> **Huomautus TypeScript-käyttäjille:**
>
> Käytä `areObjects`-funktiota `unknown[]`-arvon validoimiseen ennen kuin käsittelet alkioita objekteina; se palauttaa
`false` tyhjille taulukoille.

### Edut

- Palauttaa `true` vain silloin, kun syöte on täytetty taulukko ja jokainen alkio on objekti.
- Lopettaa aikaisin ja palauttaa `false` heti, kun löytyy ei-objekti-alkio.
- Auttaa validoimaan tuntemattoman syötteen ennen objekti-kohtaisten operaatioiden suorittamista.

## Käyttö

### Syntaksi

Funktio:

- `areObjects(array)`

Parametrit:

- `array`: Taulukko, josta tarkistetaan, että alkiot ovat objekteja.

### Funktion paikallinen tuonti

```ts
import { areObjects } from "@type-check/guards";

const value: unknown = [{}, { a: 1 }, new Date()];

if (Array.isArray(value) && areObjects(value)) {
  // value on täytetty olioiden taulukko
  console.log("All items are objects:", value.length);
} else {
  console.log("Not a filled array of objects");
}

```

### Objektin globaali tuonti

Tuodaksesi funktiot globaaleina objektimetodeina, käytä:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Seuraava metodi on tällöin käytettävissä globaalisti:

- `Type.areObjects(array)`

## Funktioanalyysi

Tässä on dokumentoitu taulukkomuotoinen analyysi siitä tulosteesta, joka syntyy, kun funktioille annetaan erilaisia
parametreja: [areObjects](../_analysis/areObjects.md)

<br>

---

<small>Tiedosto luotiin 31 January 2026 at 00:08:39 (UTC) käyttäen *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)**-työkalua, tekijä
**[Roland Milto](https://roland-milto.de/)**.</small>