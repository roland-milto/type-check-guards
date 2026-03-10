# areIndexesFound

## Kuvaus

`areIndexesFound` tarkistaa, onko arvo ei-tyhjä taulukko, jonka kaikki alkiot ovat kelvollisia indeksejä, ja palauttaa
`true`, jos näin on, ja muuten `false`.

### Käyttötapaus

Validoi käyttäjän antama tai ulkoinen data (esim. jäsennetty JSON), jonka odotetaan olevan indeksiluettelo, ennen kuin
käytät sitä taulukoiden käyttämiseen tai viipalointiin.

> **Huomautus TypeScript-käyttäjille:**
>
> Käytä `areIndexesFound`-funktiota tuntemattoman syötteen validoimiseen ennen kuin käsittelet sen alkioita
> taulukkoindekseinä; se palauttaa `false` tyhjille taulukoille ja taulukoille, jotka sisältävät ei-indeksiarvoja.

### Edut

- Palauttaa `true` vain silloin, kun syöte on täytetty taulukko ja jokainen alkio on kelvollinen indeksi.
- Epäonnistuu nopeasti: palauttaa `false` heti, kun vastaan tulee alkio, joka ei ole indeksi.
- Hyödyllinen suojatarkistuksena ennen arvojen käyttämistä taulukon sijainteina tai siirtyminä.

## Käyttö

### Syntaksi

Funktio:

- `areIndexesFound(array)`

Parametrit:

- `array`: Taulukko, jonka indeksikelpoisuus tarkistetaan.

### Funktion paikallinen tuonti

```ts
import { areIndexesFound } from "@type-check/guards";

const a: unknown[] = [0, 1, 2];
const b: unknown[] = [0, "a", 2];
const c: unknown[] = [];

console.log(areIndexesFound(a)); // true
console.log(areIndexesFound(b)); // false
console.log(areIndexesFound(c)); // false

if (areIndexesFound(a)) {
  // Tässä `a` vahvistetaan täytetyksi indeksitaulukoksi.
  const firstIndex = a[0];
  console.log(firstIndex);
}
```

### Objektin globaali tuonti

Tuodaksesi funktiot globaaleina objektimetodeina, käytä:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Seuraava metodi on tällöin käytettävissä globaalisti:

- `Type.areIndexesFound(array)`

## Funktioanalyysi

Tässä on dokumentoitu taulukkomuotoinen analyysi siitä tulosteesta, joka syntyy, kun funktioille annetaan erilaisia
parametreja: [areIndexesFound](../_analysis/areIndexesFound.md)

<br>

---

<small>Tiedosto luotiin 31 January 2026 at 00:41:43 (UTC) käyttäen *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)**-työkalua, tekijä
**[Roland Milto](https://roland-milto.de/)**.</small>